export const allMenu = [
  {
    name: '首页',
    url: 'index',
    icon: 'home',
  }, {
    name: '平台管理',
    url: 'terrace',
    icon: 'bars',
    children: [
      { name: '系统参数管理', url: 'systemParameter' },
      { name: '角色权限', url: 'role' },
      { name: '区域管理', url: 'area' },
      { name: '品牌管理', url: 'deviceBrand' },
      { name: '型号管理', url: 'model' },
    ]
  }, {
    name: '基础管理',
    url: 'basis',
    icon: 'bars',
    children: [
      { name: '老板管理', url: 'boss_manage' },
      { name: '人员管理', url: 'personal_manage' },
      { name: '设备管理', url: 'device_manage' },
      { name: '路线管理', url: 'line_manage' },
      { name: '项目管理', url: 'project_manage' },
      { name: '加油管理', url: 'refuel_manage' },
    ],
  }, {
    name: '过程管理',
    url: 'process',
    icon: 'bars',
    children: [
      { name: '挖机装载审核', url: 'backhoework' },
      { name: '渣车装载审核', url: 'slagcarwork' },
      { name: '挖机争议处理', url: 'backhoeworkpm' },
      { name: '渣车争议处理', url: 'slagcarworkpm' },
      { name: '挖机费用结算', url: 'backhoe_cost_settlement' },
      { name: '渣车费用结算', url: 'slagcar_cost_settlement' },
    ],
  }, {
    name: '项目仪表盘',
    url: 'efficiency',
    icon: 'bars',
    children: [
      { name: '项目整体进度', url: 'project_progress' },
      { name: '人员效率排行', url: 'personnel_efficiency'},
      { name: '设备效率排行', url: 'device_efficiency' },
      { name: '中央控制台', url: 'central' },
    ],
  }]
  // , {
  //   name: '开发模块',
  //   url: 'dev',
  //   icon: 'bars',
  //   children: [
  //     { name: '更多模块开发中', url: 'todo' },
  //   ],
  // }, {
  //   name: '项目地址',
  //   url: 'follow',
  //   icon: 'bars',
  // }]