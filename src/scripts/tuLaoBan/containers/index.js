import React, {Component} from "react"
import {render} from "react-dom"
import {hashHistory,Router,Route, IndexRedirect,Redirect} from "react-router"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import App from "./app"
import Admin from "./admin"
import index from "./pages/index"
//登录
import Login from "./login"

//系统参数管理
import SystemParameter from "./pages/terrace/systemParameter"
//角色权限
import Role from "./pages/terrace/role"
//区域管理
import Area from "./pages/terrace/area"
//品牌管理
import DeviceBrand from "./pages/terrace/deviceBrand"
//型号管理
import Model from "./pages/terrace/model"


//挖机装载审核
import Backhoework_page from "./pages/process/backhoework_page"
//渣车装载审核
import Slagcarwork_page from "./pages/process/backhoework_page"
//挖机争议处理
import Backhoeworkpm_page from "./pages/process/backhoeworkpm_page"
//渣车争议处理
import Slagcarworkpm_page from "./pages/process/slagcarworkpm_page"
//挖机费用结算
import Backhoe_cost_settlement_page from "./pages/process/backhoe_cost_settlement_page"
//渣车费用结算
import Slagcar_cost_settlement_page from "./pages/process/slagcar_cost_settlement_page"

//老板管理
import Boss_manage from "./pages/basis/boss_manage"
//人员管理
import Personal_manage from "./pages/basis/personal_manage"
//设备管理
import Device_manage from "./pages/basis/device_manage"
//路线管理
import Line_manage from "./pages/basis/line_manage"
//项目管理
import Project_manage from "./pages/basis/Project_manage"
//加油管理
import Refuel_manage from "./pages/basis/Refuel_manage"

//项目整体进度
import Project_progress from "./pages/efficiency/project_progress"
//人员效率排行
import Personnel_efficiency from "./pages/efficiency/personnel_efficiency"
//设备效率排行
import Device_efficiency from "./pages/efficiency/device_efficiency"
//中央控制台
import Central from "./pages/efficiency/central"

export default class Layout extends Component{
    render(){
        const {dispatch} = this.props;
        return(
            <Router history={hashHistory}>
                {/* <Redirect from="/" to="/admin" /> */}
                <Route path="/login" component={Login}/>
                <Route path="/" component={Admin}>
                    <IndexRedirect to="/index" />
                    <Route path="index" component={index} />
                    <Route path="terrace/systemParameter" component={SystemParameter}/>
                    <Route path="terrace/role" component={Role}/>
                    <Route path="terrace/area" component={Area}/>
                    <Route path="terrace/deviceBrand" component={DeviceBrand}/>
                    <Route path="terrace/model" component={Model}/>

                    <Route path="process/backhoework" component={Backhoework_page}/>
                    <Route path="process/slagcarwork" component={Slagcarwork_page}/>
                    <Route path="process/backhoeworkpm" component={Backhoeworkpm_page}/>
                    <Route path="process/slagcarworkpm" component={Slagcarworkpm_page}/>
                    <Route path="process/backhoe_cost_settlement" component={Backhoe_cost_settlement_page}/>
                    <Route path="process/slagcar_cost_settlement" component={Slagcar_cost_settlement_page}/>

                    <Route path="basis/boss_manage" component={Boss_manage}/>
                    <Route path="basis/personal_manage" component={Personal_manage}/>
                    <Route path="basis/device_manage" component={Device_manage}/>
                    <Route path="basis/line_manage" component={Line_manage}/>
                    <Route path="basis/project_manage" component={Project_manage}/>
                    <Route path="basis/refuel_manage" component={Refuel_manage}/>

                    <Route path="efficiency/project_progress" component={Project_progress }/>
                    <Route path="efficiency/personnel_efficiency" component={Personnel_efficiency}/>
                    <Route path="efficiency/device_efficiency" component={Device_efficiency}/>
                    <Route path="efficiency/central" component={Central}/>
                    {/* <IndexRedirect to="/home" />
                    <Route path="home" component={Home}/>
                    <Route path="signup" component={Signup}/>
                    <Route path="message" component={Message}/>
                    <Route path="my" component={My}/> */}
                </Route>
                {/* <Route path="/" component={App}>
                    <IndexRedirect to="/home" />
                    <Route path="home" component={Home}/>
                    <Route path="signup" component={Signup}/>
                    <Route path="message" component={Message}/>
                    <Route path="my" component={My}/>
                </Route>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Rigister}/>
                <Route path="/jobsdetail" component={Jobsdetail}/>
                <Route path="/classify/:title/:rule" component={Classify}/> */}
            </Router>
        )   
    }      
}