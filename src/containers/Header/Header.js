import React, {Component} from 'react';
import './Header.css';
import Logo from '../../assets/todo_logo.svg';
import {Button} from 'reactstrap';

class Header extends Component {
    render () {
        return (
            <header className='header'>
            <div className='logo-container'>
             <div className='logo-img-container'>
                 <img className='logo-img' src={Logo} alt='logo' />
             </div>
             <div className='logo-logotype-container'>
                <h1 className='logotype'>Classic TO-DO</h1>
             </div>
             <nav className='header-navigation'>
                
                    <Button size='lg' color='primary'>Sign Up</Button>
                    <Button size='lg' color='primary'>Log In</Button>
                
             </nav>
             </div>
            </header>
        );
    }
}

export default Header;