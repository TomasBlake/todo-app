import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';
import {Table, Tooltip} from 'reactstrap';
import './Users.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Users extends Component {
    state = {
        tooltipOpen: false,
        choosedTooltip: 0
    } 

    toggleTooltip = (id) => {
        this.setState(prevState => ({
            tooltipOpen: !prevState.tooltipOpen,
            choosedTooltip: id
        }));
    }

    onClickHandler = (id) => {
        this.props.history.push('/user/' + id);
    }
    
    componentDidMount () {
        this.props.onFetchUsers();
    }
    
    render () {
        console.log('[USERS]',this.props.users);
        return (
            <div>
<Table>
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
              this.props.users.length ?
              this.props.users.map(user => {
                  return (
                    <tr className='tr-custom' onClick={() => this.onClickHandler(user.id)} key={user.id}  id={'tooltip' + user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        {/*<Tooltip 
                        placement='bottom' 
                        isOpen={this.state.tooltipOpen && (this.state.choosedTooltip === user.id)} 
                        toggle={() => this.toggleTooltip(user.id)}
                        target={'tooltip' + user.id}>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        </Tooltip>*/}
                    </tr>           
                  );
              }) : null
          }
          
        </tbody>
      </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    onFetchUsers: () => dispatch(actionCreators.fetchUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));