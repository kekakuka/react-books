import React from 'react';
import {addBook} from "../api/books";
import axios from 'axios';


import {
    Form,
    Input,
    Button,
    message
} from 'antd';


message.config({
    top: 200,
    duration: 1
});

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};

export default class create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            loading: false,
        };
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        let {name, price, description} = this.state;
        if (!name || !price || !description || isNaN(price)) {
            message.error("Enter right values");
            return;
        }
        //缺少axios添加图书方法
    };

    handleName(ev) {
        this.setState({name: ev.target.value});
    };

    handlePrice(ev) {
        this.setState({price: ev.target.value});
    };

    handleDescription(ev) {
        this.setState({description: ev.target.value});
    };

    componentDidMount() {
        console.log(this.props.history);
    }

    render() {
        let {name, price, description, loading} = this.state;
        return <div className='container'>
            <Form style={{marginTop: "15px", width: '50%'}} layout='horizontal'  {...formItemLayout}
                  onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                    label="Book Name:">
                    <Input type="text" value={name} onChange={this.handleName.bind(this)}
                           placeholder="请输入名"/>
                </Form.Item>
                <Form.Item
                    label="Description">
                    <Input type="text" value={description} onChange={this.handleDescription.bind(this)}
                           placeholder="请输入描述"/>
                </Form.Item>
                <Form.Item
                    label="Price">
                    <Input type="text" value={price} onChange={this.handlePrice.bind(this)} placeholder="请输入价格"/>
                </Form.Item>
                <Button style={{marginLeft: "78%"}} type="primary" htmlType="submit" size={"large"} loading={loading}
                        className="login-form-button">
                    Create
                </Button></Form>
        </div>
    }
}
