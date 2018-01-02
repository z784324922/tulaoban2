import React,{Component} from 'react';
import {Select,Button,Pagination,Table,Icon,Divider} from 'antd';
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
            title: '品牌商标',
            dataIndex: 'areaName',
            key: 'areaName',
            render: () => (
                <img src="http://www.tulaoban.net/earthwork_upload//upload/2018/01/01/thumbnail/ff97c2aa8f794e06be13f92816318fc3.jpg" width="50px;" height="50px;"/>
            ),
        }, {
            title: '品牌名称',
            dataIndex: 'brandName',
            key: 'brandName',
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
                    <Divider type="vertical" />
                    <a href="javascript:void(0)" className="ant-dropdown-link">
                        <Icon type="like" title="设置热门"/>
                    </a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            brandName: '现代',
            Creationtime: '2017-10-22 12:56:28',
        }, {
            key: '2',
            brandName: '卡特彼勒',
            Creationtime: '2017-09-25 11:06:39',
        }, {
            key: '3',
            brandName: '红岩金刚',
            Creationtime: '2017-08-28 22:28:35',
        }, {
            key: '4',
            brandName: 'JY01',
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