import React from 'react';
import { List ,Table} from 'antd';
import './personnel_efficiency.less'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
export default class Personnel_efficiency extends React.Component {
    render() {
        return (
            <div className="personnel_efficiency">
                <h3 style={{ marginBottom: 16 }}>Default Size</h3>
            </div>
        )
    }
}