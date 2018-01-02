import React,{Component} from 'react';
import {Select,Button,Pagination,Table,Icon,Divider,Input} from 'antd';
import {connect} from "react-redux"
import {change_pagesize} from "../../../../actions"
import './device_manage.less'
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
            title: '设备编号',
            dataIndex: 'deviceNumber',
            key: 'deviceNumber',
        }, {
            title: '设备类型',
            dataIndex: 'deviceType',
            key: 'deviceType',
        },{
            title: '设备老板',
            dataIndex: 'boss',
            key: 'boss',
        },{
            title: '品牌型号',
            dataIndex: 'brandType',
            key: 'brandType',
        },{
            title: '所属项目',
            dataIndex: 'project',
            key: 'project',
        },{
            title: '年限',
            dataIndex: 'ageLimit',
            key: 'ageLimit',
        },{
            title: '里程',
            dataIndex: 'mileage',
            key: 'mileage',
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
                        <Icon type="eye-o" title="查看"/>
                    </a>
                    <Divider type="vertical" />
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="edit" title="编辑"/>
                    </a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            deviceNumber:"ZZ01",
            deviceType: '渣车',
            boss:'张六',
            brandType: '红岩金刚CQ3255TRG384',
            type:'挖机老板',
            project:'仙桃数据谷二期',
            device:'Z12',  
            open:'是',
            Creationtime: '2017-10-22 12:56:28',
        }, {
            key: '2',
            deviceNumber:"04",
            deviceType: '挖机',
            boss:'张选明',
            brandType: '日立ZX260',
            type:'渣车老板',
            project:'hydom',
            device:'04',
            open:'是',
            Creationtime: '2017-09-25 11:06:39',
        }, {
            key: '3',
            deviceNumber:"d03",
            deviceType: '渣车',
            boss:'廖勇',
            brandType: '小松1100',
            type:'挖机老板',
            project:'仙桃数据谷二期',
            device:'04',
            
            open:'是',
            Creationtime: '2017-08-28 22:28:35',
        }, {
            key: '4',
            deviceNumber:"d02",
            deviceType: '渣车',
            boss:'廖勇',
            brandType: '小松1100',
            type:'项目老板',
            project:'仙桃数据谷二期',
            device:'04',
            open:'是',
            Creationtime: '2017-08-28 22:24:55',
        },{
            key: '5',
            deviceNumber:"d01",
            deviceType: '渣车',
            boss:'李润',
            brandType: '小松1100',
            type:'渣车老板',
            project:'仙桃数据谷二期',
            device:'Z09',
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
                        <Button type="primary">添加</Button>
                        <Button type="primary" style={{marginLeft:0}}>批量导入</Button>
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