import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return (
            <div className='header-main'>
                <div className='header-left'>
                    <h3 className='header-h4'>Jobs Saver</h3>
                </div>
                <div className='header-middle'>

                </div>
                <div className='header-right'>
                    <h5 className='header-h4'>Login</h5>
                </div>
            </div>
        );
    }
}

export default Header;