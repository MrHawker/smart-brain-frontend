import React, { Component } from "react";
import Tilt from 'react-tilt';
class Logo extends Component {
    render(){
        return(
            <div className="ma4 mt0 pa3">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner tc"><img alt="logo" src={require("./theologo.jpg")}/> </div>
                </Tilt>
            </div>
            
            
        )
    }
}
export default Logo;