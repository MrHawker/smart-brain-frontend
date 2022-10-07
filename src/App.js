import React from "react";
import 'tachyons';
import NavigationBar from "./component/NavBar/NavBar";
import Logo from "./component/Logo/Logo";
import ImgLink  from "./component/ImgLink/ImgLink"; 
import Rank from "./component/Rank/Rank";
import FaceRec from "./component/FaceRec/FaceRec";
import Particles from './component/Particles'
import ParticlesComponent from "./component/Particles";
import SignIn from "./component/SignIn/SignIn";
import Register from "./component/Register/Register";
const initialState  = {
    input : '',
    imageURL: '',
    box:{},
    route:'signin',
    isSignedIn:false,
    user:{
        id:'',
        name:'',
        email:'',
        entries:0,
        joinedon:''
    }
}
class App extends React.Component {
    constructor(){
        super();
        this.state = initialState
    }
    loadUser =(data)=>{
        this.setState({user:{
            id:data.id,
            name:data.name,
            email:data.email,
            entries:data.entries,
            joinedon: data.joinedon
        }})
    }
    calculateFacePosition = (data) =>{
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width= Number(image.width);
        const height = Number(image.height);
        return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }
    displayBox = (box) =>{
        this.setState({box:box})
    }
    OnInputChange = (event) => {
        this.setState({input: event.target.value});
    }
    OnEnter = () => {
    this.setState({imageURL:this.state.input});
    fetch('http://localhost:3000/imageurl',{
        method:'post',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({
            input:this.state.input
            })
        })
        .then(response => response.json())
        .then(result => {
            if(result){
                fetch('http://localhost:3000/image',{
                method:'put',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify({
                    id:this.state.user.id
                    })
                })
                .then(response=>response.json())
                .then(count=>{
                    this.setState(Object.assign(this.state.user,{entries:count}))
                })
                .catch(console.log)
            }
            this.displayBox(this.calculateFacePosition(result)
        )})
        .catch(error => console.log('error', error));
    }
    OnEnterKey = (event) =>{
        if(event.key === "Enter")
            this.setState({input: event.target.input});
        this.OnEnter();
    }
    onrouteChange = (route) =>{
        if(route === 'signout')
            this.setState(initialState);
        else if(route === 'home')
            this.setState({isSignedIn:true});
        this.setState({route:route});
    }
    render(){
        const { route, isSignedIn ,box, imageURL,user} = this.state;
        return(
            <>
                <ParticlesComponent/>
                <NavigationBar isSignedIn={isSignedIn} onrouteChange = {this.onrouteChange}/>
                 { route === 'home' ?
                    <div>
                    <Logo/>
                    <Rank name={user.name} entries={user.entries}/>
                    <ImgLink OnInputChange = {this.OnInputChange} OnEnter = {this.OnEnter} OnEnterKey ={this.OnEnterKey}/>
                    <FaceRec box ={box} imgSrc= {imageURL}/>  
                    </div>
                    :(
                        route === 'signin' 
                        ? <SignIn loadUser={this.loadUser} onrouteChange = {this.onrouteChange}/>
                        : <Register loadUser={this.loadUser} onrouteChange={this.onrouteChange}/>
                    )
                }
                
            </>
        )
    }
}
export default App;