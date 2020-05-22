import React, { Component } from 'react';
import "../styles/FooterGoogle.css"

export class FooterGoogle extends Component {
    render() {
        return (
            <div className ="container-footer">
                <div>
                    <a href="#">Advertising</a>
                    <a href="#">Business</a>
                    <a href="#">About</a>
                    <a href="#">How Search Work</a>
                </div>
                <div>
                    <a href="#">Privacy</a>
                    <a href="#">Term</a>
                    <a href="#">Setting</a>
                </div>
            </div>
        )
    }
}

export default FooterGoogle
