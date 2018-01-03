import React,{Component} from 'react';
import {Select,Button,Pagination,Table,Icon,Divider,Input,DatePicker,Checkbox} from 'antd';
import {connect} from "react-redux"
import {change_pagesize} from "../../../../actions"
import "./backhoework_page.less"
const Search = Input.Search;
const InputGroup = Input.Group;
@connect(
    (state)=>({total:state.total,pageSize:state.pageSize})
  )

export default class Backhoework extends Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
      };
    onShowSizeChange=(value)=>{
        const {dispatch} = this.props;
        dispatch(change_pagesize(value));
    }
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }
    onDateChange=(date, dateString)=>{
        console.log(date, dateString);
    }
    
    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }
    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
          return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }
    onMyDateChange = (field, value) => {
        this.setState({
          [field]: value,
        });
    }
    onStartChange = (value) => {
        this.onMyDateChange('startValue', value);
    }
    onEndChange = (value) => {
        this.onMyDateChange('endValue', value);
    }
    handleStartOpenChange = (open) => {
        if (!open) {
          this.setState({ endOpen: true });
        }
    }
    checkImg=(e)=>{
        console.log('checked = ', e.target.value);
    }
    adopt=()=>{
        var aCheckbox = document.querySelectorAll(".ant-checkbox-checked");
        for(var i=0;i<aCheckbox.length;i++){
            console.log(aCheckbox[i].parentNode.parentNode);
        }
        console.log(aCheckbox);
    }
    mouseover=()=>{
        console.log(1)
    }

    render() {
        const {total,pageSize} = this.props;
        const Option = Select.Option;
        const { startValue, endValue, endOpen } = this.state;
        const data = [{
            key: '1',
            identity:"13709430916",
            backhoeNumber:"08",
            project:'合安高速五标段',
            name: '张选明',
            muckType:"沙土",
            operationType:"装车",
            sex: '男',
            type:'挖机老板',
            open:'启用',
            imgUrl:'http://tulaoban.oss-cn-shanghai.aliyuncs.com/earthworkapi/2018/1/3/18d9fcc3d9d3459a9cac700bbefec572?x-oss-process=image/resize,p_10',
            Creationtime: '2017-10-22 12:56:28',
        }, {
            key: '2',
            identity:"18983838998",
            backhoeNumber:"03",
            project:'合安高速五标段',
            name: '廖勇',
            muckType:"沙土",
            operationType:"装车",
            sex: '男',
            type:'渣车老板',
            open:'启用',
            imgUrl:'http://tulaoban.oss-cn-shanghai.aliyuncs.com/earthworkapi/2018/1/2/f6d80540e2894b7bb03135dbf875c179?x-oss-process=image/resize,p_10',
            Creationtime: '2017-09-25 11:06:39',
        }, {
            key: '3',
            identity:"13452141888",
            backhoeNumber:"03",
            project:'合安高速五标段',
            name: '刑老板',
            muckType:"沙土",
            operationType:"装车",
            sex: '男',
            type:'挖机老板',
            open:'启用',
            imgUrl:'http://tulaoban.oss-cn-shanghai.aliyuncs.com/earthworkapi/2018/1/2/87061098c83f4e0db8c5f616f5e6f0f1?x-oss-process=image/resize,p_10',
            Creationtime: '2017-08-28 22:28:35',
        }, {
            key: '4',
            identity:"13368313888",
            backhoeNumber:"03",
            project:'合安高速五标段',
            name: '邓永军',
            muckType:"沙土",
            operationType:"装车",
            sex: '男',
            type:'项目老板',
            open:'启用',
            imgUrl:'http://tulaoban.oss-cn-shanghai.aliyuncs.com/earthworkapi/2018/1/2/25a3df0d68414661b87d7ada1c7c8f34?x-oss-process=image/resize,p_10',
            Creationtime: '2017-08-28 22:24:55',
        },{
            key: '5',
            identity:"13098796882",
            backhoeNumber:"03",
            project:'合安高速五标段',
            name: '李润',
            muckType:"沙土",
            operationType:"装车",
            sex: '男',
            type:'渣车老板',
            open:'启用',
            imgUrl:'http://tulaoban.oss-cn-shanghai.aliyuncs.com/earthworkapi/2018/1/2/db6be66b00484cd5847b974429d94091?x-oss-process=image/resize,p_10',
            Creationtime: '2017-08-28 22:24:55',
        }];
        return (
            <div className="tableCommonSearch">
                <div className="btn-list">
                    <div className="btn-list-left">
                        <Select defaultValue={""+pageSize} style={{ width: 125 }} onChange={this.onShowSizeChange}>
                            <Option value="10">每页条数(10)</Option>
                            <Option value="20">每页条数(20)</Option>
                            <Option value="50">每页条数(50)</Option>
                            <Option value="100">每页条数(100)</Option>
                        </Select>
                        <Button type="primary" onClick={this.adopt}>批量审核通过</Button>
                        <Button type="danger" className="add-dispute">加入争议</Button>
                        <DatePicker
                            disabledDate={this.disabledStartDate}
                            showTime
                            format="YYYY-MM-DD"
                            value={startValue}
                            placeholder="开始时间"
                            onChange={this.onStartChange}
                            onOpenChange={this.handleStartOpenChange}
                        />
                        <DatePicker
                            disabledDate={this.disabledEndDate}
                            showTime
                            format="YYYY-MM-DD"
                            value={endValue}
                            placeholder="结束时间"
                            onChange={this.onEndChange}
                            // open={endOpen}
                            onOpenChange={this.handleEndOpenChange}
                        />
                    </div>
                    <div className="searchBox">
                        <Search
                            placeholder="关键字搜索"
                            onSearch={value => console.log(value)}
                            enterButton
                            style={{float:'right',width: 200}}
                        />
                        <InputGroup compact style={{float:'right',width:100}}>
                            <Select defaultValue="czy">
                                <Option value="wjbh">挖机编号</Option>
                                <Option value="czy">操作员</Option>
                                <Option value="zcbh">渣车编号</Option>
                            </Select>
                        </InputGroup>             
                    </div>
                </div>
                <div className="table-responsive">
                    {/* <Table rowSelection={rowSelection} columns={columns} dataSource={data} 
                        pagination={{  //分页
                        defaultCurrent:1 ,
                        total: total,
                        pageSize:pageSize
                    }}
                    /> */}
                    <ul className="auditing-box">
                    {
                        data.map((item,id)=>{
                            return (
                                <li key={id} onMouseOver={this.mouseover}>
                                    <div className="pic-wrap" id={item.identity}>
                                        <Checkbox onChange={this.checkImg} value={id}></Checkbox>
                                        <a className="pic" href="javascript:void(0)">
                                            <img src={item.imgUrl}/>
                                        </a>
                                    </div>                                
                                    <p className="upload-time">
                                        {item.Creationtime}
                                    </p>
                                    <p className="msg1">
                                        <span>挖机编号:{item.backhoeNumber}</span>
                                        <span>操作人员:{item.name}</span>
                                    </p>
                                    <p className="msg1">
                                        <span>操作类型:{item.operationType}</span>
                                        <span>渣土类型:{item.muckType}</span>
                                    </p>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}