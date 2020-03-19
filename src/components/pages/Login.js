import React, { Component } from 'react';
import Nav from '../layouts/Nav';

class Login extends Component{
    state = {
        text : ''
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            window.alert('Input field cannot be empty')
        }else{
           window.open('/history','_self');
        }
    }
    onChange = (e) => {
        this.setState( { [e.target.name] : e.target.value});  
    }
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                <Nav title="Docompar" icon="fab fa-500px"/>
                <h4>Login into Docompar</h4>
                <form onSubmit={this.onSubmit} className='form'>
                        <input type="text"    name="text"      placeholder="Enter Your Email" value={this.state.text} onChange={this.onChange} />
                        <input type="password" name="password" placeholder="Enter Your Password" value={this.state.password} onChange={this.onChange} />
                        <br/>
                        <input type="submit" value='Login' className='btn btn-primary btn-block' />
                </form> 
            </div>
        )
}
}
   


export default Login