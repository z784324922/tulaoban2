import React from 'react';
import './systemParameter.less'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
class Refuel extends React.Component {
    render() {
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                span: 24,
                offset: 0,
                },
                sm: {
                span: 16,
                offset: 10,
                },
            },
        };
        const { getFieldDecorator } = this.props.form
        return (
            <div className="systemParameter">
                <h2>基本信息</h2>
                <Form onSubmit={this.handleSubmit}>
                    <p className="parameterTitle">挖机管控参数</p>
                    <FormItem
                        {...formItemLayout}
                        label="装车最小时间(单位:秒)"
                    >
                    <Input placeholder="请输入" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="最长空闲设置(单位:秒)"
                    >
                    <Input placeholder="请输入" />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="计时模式首车提前量(单位:秒)"
                    >
                    {getFieldDecorator('systemTimeFront', {
                        rules: [{
                        required: true, message: '请输入计时模式首车提前量',
                        }, {
                        validator: this.checkConfirm,
                        }],
                    })(
                        <Input  />
                    )}
                    </FormItem>
                    
                    <p className="parameterTitle">渣车管控参数:</p>
                    <FormItem
                        {...formItemLayout}
                        label="计时模式首车提前量(单位:秒)"
                    >
                    {getFieldDecorator('systemTimeFront', {
                        rules: [{
                        required: true, message: '渣车倾倒最小时间间隔(单位：秒)',
                        }, {
                        validator: this.checkConfirm,
                        }],
                    })(
                        <Input  />
                    )}
                    </FormItem>

                    <p className="parameterTitle">GPS管控参数:</p>
                    <FormItem
                        {...formItemLayout}
                        label="设置GPS提交时长(单位:秒)"
                    >
                    {getFieldDecorator('systemTimeFront', {
                        rules: [{
                        required: true, message: '请输入计时模式首车提前量',
                        }, {
                        validator: this.checkConfirm,
                        }],
                    })(
                        <Input  />
                    )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="设备匹配间隔时长(单位:秒)"
                    >
                    {getFieldDecorator('systemTimeFront', {
                        rules: [{
                        required: true, message: '请输入计时模式首车提前量',
                        }, {
                        validator: this.checkConfirm,
                        }],
                    })(
                        <Input  />
                    )}
                    </FormItem>

                    <p className="parameterTitle">路线管控参数:</p>
                    <FormItem
                        {...formItemLayout}
                        label="挖掘点节点范围(单位:米)"
                    >
                    {getFieldDecorator('systemTimeFront', {
                        rules: [{
                        required: true, message: '请输入计时模式首车提前量',
                        }, {
                        validator: this.checkConfirm,
                        }],
                    })(
                        <Input  />
                    )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="中间节点点范围(单位:米)"
                    >
                    {getFieldDecorator('systemTimeFront', {
                        rules: [{
                        required: true, message: '请输入计时模式首车提前量',
                        }, {
                        validator: this.checkConfirm,
                        }],
                    })(
                        <Input  />
                    )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="渣车节点范围(单位:米)"
                    >
                    {getFieldDecorator('systemTimeFront', {
                        rules: [{
                        required: true, message: '请输入计时模式首车提前量',
                        }, {
                        validator: this.checkConfirm,
                        }],
                    })(
                        <Input  size="large"/>
                    )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">提交</Button>
                        <Button className="return">返回</Button>
                    </FormItem>
                    
                </Form>
            </div>
        )
    }
}
let Login = Form.create()(Refuel);
export default Login;