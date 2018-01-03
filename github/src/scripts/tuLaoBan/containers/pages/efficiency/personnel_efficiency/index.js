import React from 'react';
import { List ,Table} from 'antd';
import './personnel_efficiency.less'
import echarts from 'echarts'

export default class Personnel_efficiency extends React.Component {
    render() {
        return (
            <div className="personnel_efficiency">
                <div id="main"></div>
            </div>
        )
    }
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '前十名(车)'
        },
        tooltip: {},
        legend: {
            data:['效率(车)']
        },
        xAxis: {
            data: ["廖勇","李二娃","邓光富","吴强","小汪","刘行","李兴国","伍建华","艾建","许志兵"]
        },
        yAxis: {},
        series: [{
            name: '效率(车)',
            type: 'bar',
            data: [483, 426, 421, 419, 370, 332,307,298,240,162],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#615a5a'
                        },
                        formatter:function(params){
                            if(params.value==0){
                                return '';
                            }else
                            {
                                return params.value;
                            }
                        }
                    }
                }
            },
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    }
}