import React, { Component } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import AuthService from './AuthService';
import axios from 'axios';
import Message from '../common/messages/Messanger';
import {Navigate} from 'react-router-dom';
import { toastr } from 'react-redux-toastr'

var md5 = require('md5');


class UserLoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            phone:'',
            email: '',
            password: '',
          
           
            redirectToReferrer: false
        }
    }

    handleChangeEmail = event => {
        this.setState(
          { email: event.target.value,  });
      }
      handleChangePassword = event => {
        this.setState(
          { password: event.target.value });
      }
    
      handleSubmit = async event => {
        event.preventDefault();
    
        var user = {
            name: this.state.name,
            phone: this.state.phone,

            email: this.state.email,
            password: this.state.password,
           
          };
    
          axios.post('http://localhost:8080/api/ulogin' ,user)
          .then(response =>{
           console.log(response)
           if(response.data == true){
             this.setState({ redirectToReferrer: true })
           }
           else{
            toastr.error('Oops.. Wrong Username or Password.')

           }
          })
          .catch(error => {
            toastr.error(' Oops.. Wrong Email or Password.')
            console.log(error)
          })
           
         }
    render() {
        const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
    
      return (
        <Navigate to="/udashboard/" />
      )
    }

    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form onSubmit={this.handleSubmit}>
      <div className="base-container" ref={this.props.containerRef}>
        
        <div className="content">
        
        <label className="headLabel">User Login</label>
          <div className="form">
            <div className="form-group">
              <label >Email</label>
              <input type="email" name="email" placeholder="email"  onChange={this.handleChangeEmail}/>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChangePassword} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
          
        </div>
        <div className="footer">
          
        <p>
                    Don't have Account? <a href="/uregister">Register</a>
                </p>
          
        </div>
      </div>
      </form>
     
    </div>
    <Message/>
    </div>
        );
    }
}

export default UserLoginComponent;