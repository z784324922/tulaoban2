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
    onShowSizeChange2=(value)=>{
        // const {dispatch} = this.props;
        // dispatch(change_pagesize(value));
        console.log("筛选");
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
            title: '路线名称',
            dataIndex: 'lineName',
            key: 'lineName',
        }, {
            title: '采集员姓名',
            dataIndex: 'collectorName',
            key: 'collectorName',
        },{
            title: '所属项目',
            dataIndex: 'project',
            key: 'project',
        },{
            title: '路线长度',
            dataIndex: 'lineLength',
            key: 'lineLength',
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
                </span>
            ),
        }];

        const data = [{
            key: '1',
            lineName:"123",
            collectorName: '李润',
            project:'合安高速五标段',
            lineLength: '0',
            type:'挖机老板',
            project:'仙桃数据谷二期',
            device:'Z12',  
            open:'是',
            Creationtime: '2017-10-22 12:56:28',
        }, {
            key: '2',
            lineName:"重大01",
            collectorName: '李润',
            project:'合安高速五标段',
            lineLength: '686',
            type:'渣车老板',
            project:'hydom',
            device:'04',
            open:'是',
            Creationtime: '2017-09-25 11:06:39',
        }, {
            key: '3',
            lineName:"选点测试456",
            collectorName: '李润',
            project:'合安高速五标段',
            lineLength: '292',
            type:'挖机老板',
            project:'仙桃数据谷二期',
            device:'04',
            
            open:'是',
            Creationtime: '2017-08-28 22:28:35',
        }, {
            key: '4',
            lineName:"选点测试123",
            collectorName: '李润',
            project:'合安高速五标段',
            lineLength: '352',
            type:'项目老板',
            project:'仙桃数据谷二期',
            device:'04',
            open:'是',
            Creationtime: '2017-08-28 22:24:55',
        }];
        const selectBefore = (
            <Select defaultValue="设备类型" style={{ width: 120 }}>
              <Option value="wj">挖机</Option>
              <Option value="zc">渣车</Option>
              <Option value="jy">加油</Option>
              <Option value="other">其他</Option>
            </Select>
          );
        return (
            <div className="deviceManage">
                <div className="btn-list">
                    <div className="btn-list-left">
                        <Button type="danger">删除</Button>
                        <Select defaultValue={""+pageSize} style={{ width: 125 }} onChange={this.onShowSizeChange}>
                            <Option value="10">每页条数(10)</Option>
                            <Option value="20">每页条数(20)</Option>
                            <Option value="50">每页条数(50)</Option>
                            <Option value="100">每页条数(100)</Option>
                        </Select>
                        <Select defaultValue="所属项目" style={{ width: 140,marginLeft:5 }} onChange={this.onShowSizeChange2}>
                            <Option value="1">合安告诉五标段</Option>
                            <Option value="2">仙桃数据谷二期</Option>
                            <Option value="3">hydom</Option>
                        </Select>
                    </div>
                    <div className="searchBox">
                        <Search
                            placeholder="设备编号"
                            onSearch={value => console.log(value)}
                            enterButton
                            style={{float:'right',width: 200}}
                        />
                        <InputGroup compact style={{float:'right',width:100}}>
                            <Select defaultValue="搜索类型">
                                <Option value="all">全部</Option>
                                <Option value="wj">挖机</Option>
                                <Option value="zc">渣车</Option>
                                <Option value="jy">加油</Option>
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