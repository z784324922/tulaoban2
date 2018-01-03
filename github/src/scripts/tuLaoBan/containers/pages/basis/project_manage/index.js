import React,{Component} from 'react';
import {Select,Button,Pagination,Table,Icon,Divider} from 'antd';
import {connect} from "react-redux"
import {change_pagesize} from "../../../../actions"
import "./project_manage.less"

@connect(
  (state)=>({total:state.total,pageSize:state.pageSize})
)

export default class Role extends Component {
  constructor(props){
    super(props);
  }
  onShowSizeChange=(value)=>{
    const {dispatch} = this.props;
    // console.log(this);
    dispatch(change_pagesize(value));
  }
  onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  render() {
    const {total,pageSize} = this.props;
    const Option = Select.Option;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
      }),
    };
    const columns = [{
      title: '项目名称',
      dataIndex: 'projectName',
      key: 'projectName',
      // render: text => <a href="javascript:void(0)">{text}</a>,
    }, {
      title: '工作模式',
      dataIndex: 'mode',
      key: 'mode',
    }, {
      title: '区域',
      dataIndex: 'region',
      key: 'region',
    }, {
        title: '项目主方',
        dataIndex: 'mainSquare',
        key: 'mainSquare',
    },{
        title: '项目承包方',
        dataIndex: 'Contractor',
        key: 'Contractor',
    },{
        title: '项目描述',
        dataIndex: 'describe',
        key: 'describe',
    },{
        title: '项目总量',
        dataIndex: 'total',
        key: 'total',
    },{
        title: '是否完结',
        dataIndex: 'end',
        key: 'end',
    },{
        title: '创建时间',
        dataIndex: 'Creationtime',
        key: 'Creationtime',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
        <a href="javascript:void(0)" className="ant-dropdown-link">
            <Icon type="eye-o" title="查看"/>
        </a>  
            <Divider type="vertical" />
        <a href="javascript:void(0)" className="ant-dropdown-link">
            <Icon type="edit" title="编辑"/>
        </a>
          <Divider type="vertical" />
        <a href="javascript:void(0)" className="ant-dropdown-link">
            <Icon type="tool" title="参数"/>
        </a>
        <Divider type="vertical" />
        <a href="javascript:void(0)" className="ant-dropdown-link">
            <Icon type="check-circle-o" title="完结"/>
        </a>
        </span>
      ),
    }];

    const data = [{
      key: '1',
      projectName:'hydom',
      mode:'挖运一体模式',
      Builtin: '否',
      region:'观山湖区',
      mainSquare:'hydom',
      Contractor:'hydom',
      describe:'',
      total:1000,
      end:'否',
      Creationtime: '2017-10-22 12:56:28',
    }, {
      key: '2',
      projectName: '仙桃数据谷二期',
      mode:'挖运一体模式',
      Builtin: '否',
      region:'渝北区',
      mainSquare:'重庆市政府',
      Contractor:'中国一冶',
      describe:'',
      total:25,
      end:'否',
      Creationtime: '2017-09-25 11:06:39',
    }, {
      key: '3',
      projectName: '合安高速五标段',
      mode:'挖运一体模式',
      Builtin: '是',
      region:'潼南区',
      mainSquare:'重庆市政府',
      Contractor:'中铁十七局四公司',
      describe:'',
      total:100,
      end:'否',
      Creationtime: '2017-08-28 22:28:35',
    }];
      return (
        <div className="tableCommon project_manage">
            <div className="btn-list">
              <Button type="danger">删除</Button>
              <Select defaultValue={""+pageSize} style={{ width: 125 }} onChange={this.onShowSizeChange}>
                <Option value="10">每页条数(10)</Option>
                <Option value="20">每页条数(20)</Option>
                <Option value="50">每页条数(50)</Option>
                <Option value="100">每页条数(100)</Option>
              </Select>
              <Button type="primary">批量导入</Button>
              <Button type="primary" style={{marginLeft:0}}>添加</Button>
            </div>
            <div className="table-responsive">
              <Table rowSelection={rowSelection} columns={columns} dataSource={data} 
                pagination={{  //分页
                  defaultCurrent:1 ,
                  total: total,
                  pageSize:pageSize
              }}
              />
            </div>
        </div>
      )
    }
}