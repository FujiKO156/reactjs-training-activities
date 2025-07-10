import { useEffect, useState } from "react"
const MousePosition = () => {
    const [mousePosition, setMousePosition] = useState([
        {
            x: 0,
            y: 0
        }
    ])

    const divStyle = (
        {
            border: '2px solid green',
            width: '50vh',
            height: '40vh',
            borderRadius: '10px'
        }
    )

    useEffect(()=>{
        const handleMouse = (e) => {
        const xValue = e.clientX;
        const yValue = e.clientY;
            setMousePosition({
                x : xValue,
                y : yValue

            })
        };
        let element = document.getElementById('locationBox');
        element.addEventListener('mousemove',handleMouse);
    },[])
    
    return (
        <>
            <div id="locationBox" style={divStyle}>&nbsp;</div>
            <div>
                <h3>Mouse Location</h3>
                {
                   mousePosition ? (
                    <div>
                        <p>Location X: {mousePosition.x}</p>
                        <p>Location Y: {mousePosition.y}</p>
                    </div>
                   ):(
                    <>
                        <p>No Location Detected</p>
                    </>
                   )
                }
            </div>
        </>
    )

}

export default MousePosition