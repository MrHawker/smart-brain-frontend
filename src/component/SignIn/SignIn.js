import React, { Component } from "react"
import "./SignIn.css";
class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            signInEmail:'',
            signInPassword:''
        }
    }
    onEmailChange =(event)=>{
        this.setState({signInEmail:event.target.value})
    }
    onPasswordChange =(event)=>{
        this.setState({signInPassword:event.target.value})
    }
    onSubmitSignIn =() =>{
        fetch('http://localhost:3000/signin',{
            method:'post',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword,
            })
        })
        .then(response=>response.json())
        .then(data=>{
            if (data.id){
                this.props.loadUser(data)
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
                        <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 center" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 center" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.onPasswordChange}/>
                        </div>
                        </fieldset>
                        <div className="center">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in"
                        onClick={this.onSubmitSignIn}/>
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => this.props.onrouteChange('register')} className="f6 link dim black db center pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
};
export default SignIn;