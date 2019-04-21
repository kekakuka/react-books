import React from 'react';
import {getBooks,deleteBook} from "../api/books";
import {List, message,Button} from 'antd';
import axios from "axios";
import {Link} from 'react-router-dom';

const booksList = [
    {id: 1, name: 'xiaohuangshu', description: 'yibenxiaohuangshi', price: 12.2},
    {id: 2, name: 'xiaohongshu', description: 'yibenxiaohongshi', price: 22.2},
    {id: 3, name: 'xiaoheishu', description: 'yibenxiaoheishi', price: 32.2},
    {id: 4, name: 'xiaobaishu', description: 'yibenxiaobaishi', price: 42.2},
];

message.config({
    top: 200,
    duration: 1
});

export default class books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            loading:false
        };
    }

    handleDelete=(id)=>{
        //缺少axios删除图书方法
    };

    componentDidMount(){
        //缺少axios获取全部图书方法
        this.setState({books:booksList});
    }

    render() {
        let {books,loading}=this.state;
        return <div> <List
            loading={loading}
            style={{width:'52%',marginLeft:"2%",marginRight:"2%",marginTop:"5px",fontSize:"20px"}}
            locale={{emptyText: "No Books"}}
            itemLayout="horizontal"
            dataSource={books}
            renderItem={i => ( <div style={{border:"1px solid #eee"}}><Link to={{pathname:`/detail/${i.id}`}} key={i.id}> <div >
                Name:{ i.name  } <br/>    Description: { i.description  } <br/> Price: ${ i.price  } <br/>
            </div></Link><Button onClick={()=>{this.handleDelete(i.id)}}type='danger'>Delete</Button><br/>  </div>)}
        /></div>
    }
}
