import React, { Component } from "react";
import './ImgLink'
import './ImgLink.css'
class ImgLink extends Component{
    render(){
        return(
            <div >
                <p className="f3 tc">
                    {'Detecting My GirlFriend Face'}
                </p>
                <div className="pa4 br3 shadow-5 form center" >
                    <input className = 'f4 pa2 w-70 center'type='text' onChange={this.props.OnInputChange} onKeyPress = {this.props.OnEnterKey}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple " onClick={this.props.OnEnter} >Detect</button>
                </div>
            </div>
        )
    }
}
export default ImgLink;