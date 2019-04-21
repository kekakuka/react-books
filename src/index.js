import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import './static/css/index.css';
import {Provider} from 'react-redux';
import store from './store/index';
import Books from './routers/Books'
import Create from './routers/Create'
import Detail from './routers/Detail'
import MyHead from './components/MyHead'

ReactDOM.render(<Provider store={store}>
        <div>
            <HashRouter>
                <div>
                    <MyHead/>
                    <Switch>
                        <Route path="/books" component={Books}/>
                        <Route path="/create" component={Create}/>
                        <Route path="/detail" component={Detail}/>
                        <Redirect to='/books'/>
                    </Switch>

                </div>

            </HashRouter>
        </div>
    </Provider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
