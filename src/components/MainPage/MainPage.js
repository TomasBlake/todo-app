import React from 'react';
import './MainPage.css';
import {Jumbotron, Button} from 'reactstrap';

const mainPage = (props) => {
    return (
        <div className='mainpage'>
            <Jumbotron className='jumbo'>
                <h1 className="display-3">Classic To-Do!</h1>
                <p className="lead">This is a classic to-do list app. You can create your account and add, delete and organize your tasks here.</p>
                <hr className="my-2" />
                <p>Please log in or sign up for your account.</p>
                <p className="lead jumbo-buttons-container">
                <Button color="primary">Log In</Button>
                <Button color="primary">Sign Up</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default mainPage;