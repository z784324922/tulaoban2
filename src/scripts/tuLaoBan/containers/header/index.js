import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router'
// import * as screenfull from 'screenfull'
import './header.less'

const SubMenu = Menu.SubMenu
const { Header } = Layout

export default class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: '18523278664'
        })
    }

    clear = (item) => {
        if (item.key === 'logOut') {
            this.props.clear()
        }
    }
    render() {
        return (
            <Header className="zzy_header" style={{ background: '#fff'}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logOut" onClick={this.clear}>
                    <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
                        <Menu.Item key="zhaohui"><Link to="/password_lost" >修改密码</Link></Menu.Item>
                        <Menu.Item key="logOut"><Link to="/login" >退出</Link></Menu.Item>
                    </SubMenu>
                    {/* <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
                        <Menu.Item key="logOut"><Link to="/login" >退出</Link></Menu.Item> 
                    </SubMenu> */}
                </Menu>
                {/* <Icon
                    className="screenFull"
                    type="arrows-alt"
                    onClick={this.screenFull}
                /> */}
            </Header>
        );
    }
}