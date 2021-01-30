import React from 'react';
import  './index.scss'

export default class Home extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <a>去登陆页面</a>
            </div>
        )
    }
}