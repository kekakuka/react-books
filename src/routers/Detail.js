import React from 'react';
import {getBook,updateBook} from "../api/books";
import {message} from "antd";
import book from "../store/action/book";


message.config({
    top: 200,
    duration: 1
});

export default class detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                name: '',
                description: '',
                price: '',
            },
            price: "",
            book_id: this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/') + 1)
        };
    }

    handleSubmit = () => {
        //缺少axios改动图书价格的方法
    };

    componentDidMount() {
        //缺少axios获取单本图书方法
    }

    handlePrice(ev) {
        this.setState({price: ev.target.value});
    };

    render() {
        let {book, price} = this.state
        return <div style={{marginLeft: '10%'}} className='container'>
            <div>Name: {book.name}</div>
            <br/>
            <div>Description: {book.description}</div>
            <br/>
            <div>Price: {book.price} <br/> <input type='text' value={price} onChange={this.handlePrice.bind(this)}/>
                 <button onClick={this.handleSubmit}> Update Price</button>
            </div>
            <br/>
        </div>
    }
}
