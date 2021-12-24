import React ,  { Component } from "react";

import axios from 'axios';
import DatePicker from 'react-date-picker';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Navigate} from 'react-router-dom';

class URegister extends Component {

 
	
    state = {
      name: '',   
      phone:'',
      email: '',
      password: '',
   
     
     
      redirectToReferrer: false
    }
   
   
    onFileLoad = (e, file) => console.log(e.target.result, file.name);
  
  handleChangeName = event => {
    this.setState(
      { name: event.target.value, });
  }
  handleChangePhone = event => {
    this.setState(
      { phone: event.target.value, });
    }
  handleChangeEmail = event => {
    this.setState(
      { email: event.target.value,  });
  }
  handleChangePassword = event => {
    this.setState(
      { password: event.target.value  });
  }
 
  handleSubmit = async event => {
    event.preventDefault();

  
    var user = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
     
      
    };
   
   axios.post('http://localhost:8080/api/users' ,user)
   .then(response =>{
    console.log(response)
   })
   .catch(error => {
    console.log(error)
   })

    this.setState({ redirectToReferrer: true })
  
    
  }

  onChange = date => this.setState({ date })

  componentDidMount(){
    this.setState({ redirectToReferrer: false })
   }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
    
      return (
        <Navigate to="/user" />
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">

        </div>
        <div className="content">
        
        <label className = "headLabel">User Register</label>
         
          <div className="form">
         
            <div className="form-group">
              <label >Name</label>
              <input type="text" name="name" placeholder="name" onChange={this.handleChangeName} />
            </div>
            <div className="form-group">
              <label >Phone</label>
              <input type="number" name="phone" placeholder="phone" onChange={this.handleChangePhone} />
            </div>
            <div className="form-group">
              <label >Email</label>
              <input type="email" name="email" placeholder="email" onChange={this.handleChangeEmail}/>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChangePassword} />
            </div>
           
           
           


 <button  type="submit" className="btn" > Register </button> 

          </div>  
        </div>
        <div className="footer">
         
        </div>
      </div>
      </form>
    );
  }
}

export default URegister;
