import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import { useCallback,useMemo } from "react";
const ParticlesComponent = () =>{
    const options = useMemo(()=>{
        return{
            interactivity : {
                events: {
                    onClick : {
                        enable:true ,
                        mode: "push",
                    },
                    onHover : {
                        enable:true,
                        mode: "repulse",
                    }
                }
            },
            particles : {
                links: {
                    enable:true,
                },
                move: {
                    enable:true,
                },
            }, 
        };
    },[]);
    const particlesInit = useCallback((engine) =>{
        loadSlim(engine);
    },[])
    return <Particles init={particlesInit} options = {options}/>
}
export default ParticlesComponent;