import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Profile.css';
import ToDoList from '../../components/ToDoList/ToDoList';
import * as actionCreators from '../../actions';
import {withRouter} from 'react-router-dom';


class Profile extends Component {
    componentDidMount () {
        console.log('[Test]', this.props.match.params.id)
        this.props.onFetchPostByUserId(Number(this.props.match.params.id));
    }
    render () {
        return (
            <div className='profile-page'>
            <div className='profile-card'>
                {this.props.userPosts.length ?
                <ToDoList toDoItems={this.props.userPosts} />
                : null
                }
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userPosts: state.userPosts,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    onFetchPostByUserId: (userId) => dispatch(actionCreators.fetchPostsByUserId(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));