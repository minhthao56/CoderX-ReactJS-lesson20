import React, { Component } from 'react'
import logoGoogle from "../images/googlelogo.png"
import micGoolge from "../images/google-mic.svg"
import "../styles/CerterGoogle.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export class CenterGoogle extends Component {
    constructor(){
        super();
        this.elementInput = React.createRef();
    }
    componentDidMount(){
        this.elementInput.current.focus()
    }

    render() {
        return (
            <div className ="containerGoogle">
                <img src = {logoGoogle} alt ="" className ="logoGoogle"/>
                <div className="inputSearch">
                    <div className="iconSearch">
                    <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <input type = "text" ref = {this.elementInput}/>
                    <img src = {micGoolge} alt=""/>
                </div>
                <div className="buttonGoolge">
                    <button>Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </div>
                <p className = "listLang">Google offered in:
                    <a href='#'>Tiếng Việt</a>
                    <a href='#'>Français</a> 
                    <a href='#'>中文（繁體）</a>
                </p>
            </div>
        )
    }
}

export default CenterGoogle
