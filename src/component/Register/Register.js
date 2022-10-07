import React, { Component } from "react"
class Register extends Component{
    constructor(){
        super();
        this.state = {
            RegisterEmail:'',
            RegisterPassword:'',
            RegisterName:'',
        }
    }
    onNameChange =(event)=>{
        this.setState({RegisterName:event.target.value})
    }
    onEmailChange =(event)=>{
        this.setState({RegisterEmail:event.target.value})
    }
    onPasswordChange =(event)=>{
        this.setState({RegisterPassword:event.target.value})
    }
    onSubmitRegister =() =>{
        fetch('https://sleepy-everglades-04413.herokuapp.com/register',{
            method:'post',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                email:this.state.RegisterEmail,
                password:this.state.RegisterPassword,
                name:this.state.RegisterName
            })
        })
        .then(response=>response.json())
        .then(data=>{
            if (data.id){
                this.props.loadUser(data);
                this.props.onrouteChange('home');
            }
            
        })
       
    }
    render(){
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-3">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0 center">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 center" htmlFor="name">Name</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            id="name"
                            onChange={this.onNameChange} required/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 center" htmlFor="email-address">Email</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange} required/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 center" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password "
                            onChange={this.onPasswordChange} required/>
                        </div>
                        </fieldset>
                        <div className="center">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register"
                        onClick={this.onSubmitRegister}/>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
};
export default Register;