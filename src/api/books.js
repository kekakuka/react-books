import {_get,_post, _put,_delete} from './index';


//获取某本书具体信息
export const getBook = (book_id) => {
    let req = {
        url: `v1/books/${book_id}`
    };
    return _get(req);
};

//获取all书具体信息
export const getBooks = (data) => {
    let req = {
        url: `v1/books`
    };
    return _get(req);
};


//Add具体信息
export const addBook = (data) => {
    let req = {
        url: 'v1/books',
        data
    };
    return _post(req);
};

//更新信息
export const updateBook = (data) => {
    let req = {
        url:  `v1/books/${data.book_id}`,
        data
    };
    return _put(req);
};

//delete
export const deleteBook = (book_id) => {
    let req = {
        url: `v1/books/${book_id}`
    };
    return _delete(req);
};



export const buyBook = (data) => {
    let req = {
        url: `v1/books_buy/${data.book_id}`,
        data
    };
    return _post(req);
};

export const getBooksNumber = (data) => {
    let req = {
        url: `v1/books_number`,
        data
    };
    return _get(req);
};
