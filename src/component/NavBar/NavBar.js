import React, { Component } from "react";
import './NavBar.css';
class NavigationBar extends Component {
    render(){
        return(
            <>
            { this.props.isSignedIn 
            ?   <nav >
                    <p className="f3 link dim black pa3 pointer" onClick={() =>this.props.onrouteChange('signout')} >Sign Out</p>
                </nav>
            :(
                   <nav >
                        <p className="f3 link dim black pa3 pointer" onClick={() =>this.props.onrouteChange('signin')} >Sign In</p>
                        <p className="f3 link dim black pa3 pointer" onClick={() =>this.props.onrouteChange('register')} >Register</p>
                    </nav>
                
            )
            } 
            </> 
            
        )   
    }
}
export default NavigationBar;