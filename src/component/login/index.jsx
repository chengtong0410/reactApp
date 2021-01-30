import React from 'react';

import  './index.scss'
export default class Login extends React.Component {
    jumpHome = ()=>{
       const { history } = this.props
       history.push({
        pathname: '/home',
        state: {
            id: 3,
            name:2,
            age:5
        }
    })
    }
    
    render() {

        return (
            <div>
                <a>去detail</a>
                <button onClick= {()=>{
                    this.jumpHome()
                }} >去登陆页面</button>
            </div>
        )
    }
}