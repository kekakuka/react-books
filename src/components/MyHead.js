import {Menu} from 'antd';
import {NavLink,withRouter} from 'react-router-dom';
import React from 'react';
import {Badge} from 'antd';
import {connect} from 'react-redux';
import action from  '../store/action/index'


 class myHead extends React.Component {
    constructor(props) {
        super(props);
    }
     componentDidMount(){
         this.props.get_number();
     };
     componentWillReceiveProps(nextProps,nextContext) {
         this.props.get_number();
     }

    render() {
        return <div className='container'>
            <Menu
                style={{fontSize:"25px"}}
                mode="horizontal"
            >
                <Menu.Item>
                    <NavLink to='/books'>
                      Books  <Badge count={this.props.books_number} offset={[-20,-20]}/>
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to='/create'>
                       Create
                    </NavLink>
                </Menu.Item>
            </Menu>
        </div>
    }
}
export default withRouter(connect(state=>state.book,action.book)(myHead))
