import React from 'react'
import './pageheader.less'
import {connect} from "react-redux"
import { Icon } from 'antd'
import { allMenu } from '../../../utils/menu'

@connect(
    (state)=>({...state})
)
export default class Pageheader extends React.Component {
    render() {
        const {pageheader} = this.props;
        // console.log(pageheader);
        // console.log(allMenu);
        return (
            <div className="pageheader">
                <ul className="breadcrumb">
                    <li>
                        <Icon type="home" className="glyphicon glyphicon-home"/>
                    </li>
                    {
                        pageheader.map((item,id)=>{
                            return(
                                <li key={id}>
                                    <a href="javascript:void(0);">{item}</a>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}