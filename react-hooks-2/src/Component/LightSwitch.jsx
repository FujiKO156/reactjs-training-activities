import { useState,useEffect } from "react"
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const LightSwitch = ({light}) => {
    
    const styling = (
        {
             fontSize: '50px'
        }
    )

    useEffect(()=>{
        document.body.style.backgroundColor = light ? 'white' : 'black';
        document.body.style.color = light ? 'black' : 'white';
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';

        //unmount
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            document.body.style.transition = '';
        }
    },[light])
        
    return (
        <>
            
            {
                light ? (
                    <LightbulbIcon style={styling}/>
                ):(
                    <LightbulbOutlineIcon style={styling}/>
                )
            }
            <h2>Lights: {
                light ? 'ON' : 'OFF'  
            }</h2>
        </>
    )
}   

export default LightSwitch