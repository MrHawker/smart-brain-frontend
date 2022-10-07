import React, { Component } from "react";
class Rank extends Component{
    render(){
        return(
            <div>
                <div className="white f3 tc">
                    {`${this.props.name},your current entries is`}
                </div>
                <div className="white f1 tc">
                    {`#${this.props.entries}`}
                </div>
            </div>
        )
    }
}
export default Rank;