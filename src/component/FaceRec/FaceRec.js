import React, { Component } from "react"
import "./FaceRec.css";
class FaceRec extends Component{
    render(){
        return(
            <div className="center ma">
                <div className="absolute mt2">
                        <img  
                        id="inputimage" 
                        alt="Picture" 
                        src={this.props.imgSrc} 
                       width ='500px'
                       height='auto'
                        />
                        
                        <div className="bounding-box" style={{
                            top:this.props.box.topRow, right:this.props.box.rightCol,
                            bottom:this.props.box.bottomRow,left:this.props.box.leftCol}}>
                        </div>
                    
                    
                </div>
                
            </div>
        )
    }
};
export default FaceRec;