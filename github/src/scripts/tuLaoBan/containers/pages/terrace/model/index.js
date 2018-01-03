import React,{Component} from 'react';
import {Select,Button,Pagination,Table,Icon} from 'antd';
import {connect} from "react-redux"
import {change_pagesize} from "../../../../actions"

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
            title: '型号名称',
            dataIndex: 'modelName',
            key: 'modelName',
        }, {
            title: '品牌',
            dataIndex: 'brand',
            key: 'brand',
        }, {
            title: '创建时间',
            dataIndex: 'Creationtime',
            key: 'Creationtime',
        }, {
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
            modelName: '160',
            brand: '山推',
            Creationtime: '2017-10-22 12:56:28',
        }, {
            key: '2',
            modelName: '870',
            brand: '现代',
            Creationtime: '2017-09-25 11:06:39',
        }, {
            key: '3',
            modelName: '1100',
            brand: '小松',
            Creationtime: '2017-08-28 22:28:35',
        }, {
            key: '4',
            modelName: 'ZX260',
            brand: '日立',
            Creationtime: '2017-08-28 22:24:55',
        },{
            key: '5',
            modelName: 'ZX260',
            brand: '日立1',
            Creationtime: '2017-08-28 22:24:55',
        }];
        return (
            <div className="tableCommon">
                <div className="btn-list">
                <Button type="danger">删除</Button>
                    <Select defaultValue={""+pageSize} style={{ width: 125 }} onChange={this.onShowSizeChange}>
                        <Option value="10">每页条数(10)</Option>
                        <Option value="20">每页条数(20)</Option>
                        <Option value="50">每页条数(50)</Option>
                        <Option value="100">每页条数(100)</Option>
                    </Select>
                <Button type="primary">添加</Button>
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