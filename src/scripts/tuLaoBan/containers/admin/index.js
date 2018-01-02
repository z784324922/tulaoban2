import React from 'react';
import { Link } from 'react-router'
import { Menu, Icon, Switch, Layout } from 'antd'
import { allMenu } from '../../../utils/menu'
import Top from '../header'
import Footer from '../bottom'
import Pageheader from '../pageheader'
import './index.less'
import {connect} from "react-redux"
import {change_pageheader} from "../../actions"

const SubMenu = Menu.SubMenu;
const { Sider,Content } = Layout

@connect(
  (state)=>({...state})
)
export default class Container extends React.Component {
  state = {
    theme: 'dark',
    current: 'index',
    collapsed: false,
    mode: 'inline',  // 水平垂直展现
  }
  componentDidMount() {
    this.handleClick([], 'index')
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }
  clear = () => {
    this.setState({
      current: 'index',
    });
  }
  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
    const {dispatch} = this.props;
    dispatch(change_pageheader(window.location.hash));
    // console.log(window.location.hash);
  }
  render() {
    return (
      <Layout className="containAll">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="leftMenu"
        >
          {this.state.theme === 'light' ? <a href="#" target='_blank' rel='noopener noreferrer'><Icon type="codepen-circle" className="github" /></a> :
            <a href="#" target='_blank' rel='noopener noreferrer'><Icon type="codepen-circle" className="github white"/></a> }
          { this.state.theme === 'light' ? <span className="author">赵志勇</span> : <span className="author white">赵志勇</span> }
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['']}
            selectedKeys={[this.state.current]}
            className="menu"
            mode={this.state.mode}
          >
            {
              allMenu.map((subMenu) => {
                if (subMenu.children && subMenu.children.length) {
                  return (
                    <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                      {subMenu.children.map(menu => (
                        <Menu.Item key={menu.url}><Link to={`/${subMenu.url}/${menu.url}`}>{menu.name}</Link></Menu.Item>
                      ))}
                    </SubMenu>
                  )
                }
                return (
                  <Menu.Item key={subMenu.url}>
                    <Link to={`/${subMenu.url}`}>
                      <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
          <div className="switch">
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="dark"
              unCheckedChildren="Light"
            />
          </div>
        </Sider>
         <Layout>
          <Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear} />
          {/* <Contents /> */}
          <Pageheader />

          <Content className="content">
              {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}