import React,{Component} from 'react';
import {Select,Button,Pagination,Table,Icon,Divider} from 'antd';
import {connect} from "react-redux"
import {change_pagesize} from "../../../../actions"
import "./refuel_manage.less"

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
      title: '设备编号',
      dataIndex: 'equipmentNumber',
      key: 'equipmentNumber',
    }, {
      title: '剩余油量',
      dataIndex: 'oilAmount',
      key: 'oilAmount',
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
        </span>
      ),
    }];

    const data = [{
      key: '1',
      projectName:'仙桃数据谷二期',
      equipmentNumber:"JYJ01",
      oilAmount:"20789.6",
      Creationtime: '2017-10-22 12:56:28',
    }, {
      key: '2',
      projectName: '合安高速五标段',
      equipmentNumber:"JYJ01",
      oilAmount:"905508.6",
      Creationtime: '2017-09-25 11:06:39',
    }];
      return (
        <div className="tableCommon refuel_manage">
            <div className="btn-list">
              <Select defaultValue={""+pageSize} style={{ width: 125 }} onChange={this.onShowSizeChange}>
                <Option value="10">每页条数(10)</Option>
                <Option value="20">每页条数(20)</Option>
                <Option value="50">每页条数(50)</Option>
                <Option value="100">每页条数(100)</Option>
              </Select>
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