import React, { Component } from 'react';
import './styles.css';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="/">
                    <header id="main-header">
                        <img src="/images/logo.png" alt="Logo Conceptron" />
                    </header>
                </a>
            </div>
        );
    }
}