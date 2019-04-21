import * as TYPES from '../action-type';

export default function book(
    state={
        books_number:0
    },
    action){
    state=JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.GET_NUMBER :
            let {code, number} = action.Data.data;
            if (code === 1) {
                state.books_number = number;
            }
            break;
        default:break;
    }
    return state;

}
