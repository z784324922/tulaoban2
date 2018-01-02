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
        },{
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        },{
            title: '所属项目',
            dataIndex: 'project',
            key: 'project',
        },{
            title: '所属设备',
            dataIndex: 'device',
            key: 'device',
        },{
            title: '所属老板',
            dataIndex: 'boss',
            key: 'boss',
        },{
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },{
            title: '是否启动',
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
                        <Icon type="sync" title="重置密码" />
                    </a>
                    <Divider type="vertical" />
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="eye-o" title="查看"/>
                    </a>
                    <Divider type="vertical" />
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="edit" title="编辑"/>
                    </a>
                    <Divider type="vertical" />
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="minus-circle-o" title="警用"/>
                    </a>    
                </span>
            ),
        }];

        const data = [{
            key: '1',
            identity:"13709430916",
            name: '周峰',
            sex: '男',
            type:'挖机老板',
            project:'仙桃数据谷二期',
            device:'Z12',
            boss:'廖勇',
            open:'是',
            Creationtime: '2017-10-22 12:56:28',
        }, {
            key: '2',
            identity:"18983838998",
            name: '胡云华',
            sex: '男',
            type:'渣车老板',
            project:'hydom',
            device:'04',
            boss:'张选明',
            open:'是',
            Creationtime: '2017-09-25 11:06:39',
        }, {
            key: '3',
            identity:"13452141888",
            name: '蒋维益',
            sex: '男',
            type:'挖机老板',
            project:'仙桃数据谷二期',
            device:'04',
            boss:'张选明',
            open:'是',
            Creationtime: '2017-08-28 22:28:35',
        }, {
            key: '4',
            identity:"13368313888",
            name: '刘行',
            sex: '男',
            type:'项目老板',
            project:'仙桃数据谷二期',
            device:'04',
            boss:'廖勇',
            open:'是',
            Creationtime: '2017-08-28 22:24:55',
        },{
            key: '5',
            identity:"13098796882",
            name: '汪海军',
            sex: '男',
            type:'渣车老板',
            project:'仙桃数据谷二期',
            device:'Z09',
            boss:'廖勇',
            open:'是',
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
                        <Button type="primary" style={{marginLeft:0}}>批量导入</Button>
                    </div>
                    <div className="searchBox">
                        <Search
                            placeholder="搜索账号"
                            onSearch={value => console.log(value)}
                            enterButton
                            style={{float:'right',width: 200}}
                        />
                        <InputGroup compact style={{float:'right',width:120}}>
                            <Select defaultValue="人员类型">
                                <Option value="all">全部</Option>
                                <Option value="wj">挖机</Option>
                                <Option value="zc">渣车</Option>
                                <Option value="jy">加油</Option>
                                <Option value="xlcj">线路采集员</Option>
                                <Option value="other">其他</Option>
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