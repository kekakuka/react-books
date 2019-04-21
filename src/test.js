import {addBook, deleteBook, getBook, getBooks, updateBook} from "./api/books";
import {message} from "antd";
import axios from "axios";

let id=1;


axios.post('https://www.leili.fun:3333/v1/books',this.state).then(res=>{
    if (res.data.code === 1) {
        this.setState({
            name: "",
            description: "",
            price: "",
        });
        message.success(res.data.message);
    }
    else {
        message.error(res.data.message);
    }
}).catch(err => {
    message.error("Failed");
});
axios.get('https://www.leili.fun:3333/v1/books').then(res=>{
    if (res.data.code === 1) {
        this.setState({books:res.data.books});
        message.success(res.data.message);
    }
    else {
        message.error(res.data.message);
    }
}).catch(err => {
    message.error("Failed");
});
axios.delete('https://www.leili.fun:3333/v1/books/'+id).then(
    res=>{
        if (res.data.code===1){
            message.success(res.data.message);
        }
        else {
            message.error(res.data.message);
        }
    }).catch(err => {
    message.error("Failed");
});



















































addBook(this.state).then(res => {
    if (res.data.code === 1) {
        this.setState({
            name: "",
            description: "",
            price: "",
        });
        message.success(res.data.message);
    }
    else {
        message.error(res.data.message);
    }
}).catch(err => {
    message.error("Failed");
});

getBooks().then(res=>{
        if (res.data.code === 1) {
            this.setState({books:res.data.books});
            message.success(res.data.message);
        }
        else {
            message.error(res.data.message);
        }
    }).catch(err => {
    message.error("Failed");
});

getBook(this.state.book_id).then(res => {
    if (res.data.code === 1) {
        console.log(res.data);
        this.setState({book: res.data.book});
        message.success(res.data.message);
    }
    else {
        message.error(res.data.message);
    }
}).catch(err => {
    message.error("Failed");
});

deleteBook(id).then(res=>{
        if (res.data.code===1){
            message.success(res.data.message);
            this.setState({books:this.state.books.filter(item=>item.id!==id)})
        }
        else {
            message.error(res.data.message);
        }
    }).catch(err => {
    message.error("Failed");
});

updateBook(this.state).then(res=>{
    if (res.data.code === 1) {
        message.success(res.data.message);
        this.setState({book:{...this.state.book,price:this.state.price}})
    }
    else {
        message.error(res.data.message);
    }
}).catch(err => {
    message.error("Failed");
});
