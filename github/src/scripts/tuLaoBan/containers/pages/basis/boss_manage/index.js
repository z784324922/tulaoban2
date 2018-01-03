import React,{Component} from 'react';
import {Select,Button,Pagination,Table,Icon,Divider,Input} from 'antd';
import {connect} from "react-redux"
import {change_pagesize} from "../../../../actions"
const Search = Input.Search;
const InputGroup = Input.Group;
@connect(
    (state)=>({total:state.total,pageSize:state.pageSize})
  )

export default class Role extends Component {
    onShowSizeChange=(value)=>{
        const {dispatch} = this.props;
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
                disabled: record.name === 'Disabled User', 
            }),
        };
        const columns = [{
            title: '账号',
            dataIndex: 'identity',
            key: 'identity',
        }, {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '其他联系方式',
            dataIndex: 'otherContact',
            key: 'otherContact',
        },{
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },{
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        },{
            title: '是否启用',
            dataIndex: 'open',
            key: 'open',
        },{
            title: '创建时间',
            dataIndex: 'Creationtime',
            key: 'Creationtime',
        },{
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="edit" title="编辑"/>
                    </a>
                    <Divider type="vertical" />
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="sync" title="重置密码" />
                    </a>
                    <Divider type="vertical" />
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="minus-circle-o" title="禁用"/>
                    </a>
                    <Divider type="vertical" />
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="check-circle-o" title="授权"/>
                    </a>
                    
                </span>
            ),
        }];

        const data = [{
            key: '1',
            identity:"13709430916",
            name: '张选明',
            sex: '男',
            type:'挖机老板',
            open:'启用',
            Creationtime: '2017-10-22 12:56:28',
        }, {
            key: '2',
            identity:"18983838998",
            name: '廖勇',
            sex: '男',
            type:'渣车老板',
            open:'启用',
            Creationtime: '2017-09-25 11:06:39',
        }, {
            key: '3',
            identity:"13452141888",
            name: '刑老板',
            sex: '男',
            type:'挖机老板',
            open:'启用',
            Creationtime: '2017-08-28 22:28:35',
        }, {
            key: '4',
            identity:"13368313888",
            name: '邓永军',
            sex: '男',
            type:'项目老板',
            open:'启用',
            Creationtime: '2017-08-28 22:24:55',
        },{
            key: '5',
            identity:"13098796882",
            name: '李润',
            sex: '男',
            type:'渣车老板',
            open:'启用',
            Creationtime: '2017-08-28 22:24:55',
        }];
        return (
            <div className="tableCommonSearch">
                <div className="btn-list">
                    <div className="btn-list-left">
                        <Button type="danger">删除</Button>
                        <Select defaultValue={""+pageSize} style={{ width: 125 }} onChange={this.onShowSizeChange}>
                            <Option value="10">每页条数(10)</Option>
                            <Option value="20">每页条数(20)</Option>
                            <Option value="50">每页条数(50)</Option>
                            <Option value="100">每页条数(100)</Option>
                        </Select>
                        <Button type="primary">添加</Button>
                    </div>
                    <div className="searchBox">
                        <Search
                            placeholder="设备编号"
                            onSearch={value => console.log(value)}
                            enterButton
                            style={{float:'right',width: 200}}
                        />
                        <InputGroup compact style={{float:'right',width:100}}>
                            <Select defaultValue="人员类型">
                                <Option value="all">全部</Option>
                                <Option value="wj">挖机老板</Option>
                                <Option value="zc">渣车老板</Option>
                                <Option value="xm">项目老板</Option>
                            </Select>
                        </InputGroup>             
                    </div>
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