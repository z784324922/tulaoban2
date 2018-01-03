import React,{Component} from 'react';
import {Select,Button,Pagination,Table,Icon,Divider,Input} from 'antd';
import {connect} from "react-redux"
import {change_pagesize} from "../../../../actions"
const Search = Input.Search;
const InputGroup = Input.Group;
@connect(
    (state)=>({total:state.total,pageSize:state.pageSize})
  )

export default class ProjectProgress extends Component {
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

        const columns = [{
            title: '项目名称',
            dataIndex: 'projectName',
            key: 'projectName',
        }, {
            title: '项目主房',
            dataIndex: 'mainSquare',
            key: 'mainSquare',
        }, {
            title: '项目承包方',
            dataIndex: 'contractor',
            key: 'contractor',
        },{
            title: '项目描述',
            dataIndex: 'describe',
            key: 'describe',
        },{
            title: '创建时间',
            dataIndex: 'Creationtime',
            key: 'Creationtime',
        },{
            title: '项目总量(万方)',
            dataIndex: 'total',
            key: 'total',
        },{
            title: '本月完成量(万方)',
            dataIndex: 'monthCompletion',
            key: 'monthCompletion',
        },{
            title: '本日完成量(万方)',
            dataIndex: 'dayCompletion',
            key: 'dayCompletion',
        },{
            title: '总完成量(万方)',
            dataIndex: 'totalCompletion',
            key: 'totalCompletion',
        },{
            title: '进度',
            dataIndex: 'schedule',
            key: 'schedule',
        }];

        const data = [{
            key: '1',
            projectName:"合安高速五标段",
            mainSquare: '潼南区政府',
            contractor:'中国一冶',
            describe: '男',
            total:'100',
            monthCompletion:'0.00',
            dayCompletion:'0.00',
            totalCompletion:'0.00',
            Creationtime: '2017-10-22 12:56:28',
            schedule:'0.00',
        }, {
            key: '2',
            projectName:"项目主方",
            mainSquare: '重庆市政府',
            contractor:'中国一冶',
            describe: '男',
            total:'25',
            monthCompletion:'0.00',
            dayCompletion:'0.00',
            totalCompletion:'0.00',
            Creationtime: '2017-09-25 11:06:39',
            schedule:'0.00',
        }, {
            key: '3',
            projectName:"项目承包方",
            mainSquare: 'hydom',
            contractor:'中国一冶',
            describe: '男',
            total:'1000',
            monthCompletion:'0.00',
            dayCompletion:'0.00',
            totalCompletion:'0.00',
            Creationtime: '2017-08-28 22:28:35',
            schedule:'0.00',
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
                            onSearch={value => console.log(value)}
                            enterButton
                            style={{float:'right',width: 200}}
                        />
                        <InputGroup compact style={{float:'right',width:120}}>
                            <Select defaultValue="xmmc">
                                <Option value="xmmc">项目名称</Option>
                                <Option value="xmcbs">项目承包商</Option>
                            </Select>
                        </InputGroup>             
                    </div>
                </div>
                <div className="table-responsive">
                    <Table  columns={columns} dataSource={data} 
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