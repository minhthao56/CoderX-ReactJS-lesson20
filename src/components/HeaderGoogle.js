import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "../styles/HeaderGoolge.css"

export class HeaderGoogle extends Component {
    render() {
        return (
            <div className = "googleHeader">
                <div className="link-gmail-image"> <a href="#">Gmail</a> <a href="#">Images</a></div>
                <div className = "icon-grid"><FontAwesomeIcon icon={faTh} /></div>
                <div className="icon-avatar"><FontAwesomeIcon icon={faUserCircle} /></div>
            </div>
        )
    }
}

export default HeaderGoogle
