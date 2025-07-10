import { useState,useEffect } from "react"

const RandomColor = () => {
    const [randomColor,setRandomColor] = useState('red')
    const [timer, setTimer] = useState('3')

    useEffect (()=> {
        const getRandomColor = () => {
            return '#' + Math.floor(Math.random() * 1234567).toString(16).padStart(6, '0');
        };

        const interval = setInterval(()=>{
            setTimer(prev => {
                if(prev === 1){
                    setRandomColor(getRandomColor())
                    return 3
                }else{
                    if(prev>0)
                        return prev - 1
                }
            })
        },1000)
        return () => clearInterval(interval); // cleanup
    },[])

    console.log(randomColor)

    return(
        <>
            <h3>RANDOM COLOR</h3>
            <div>Changing Color in {timer}</div>
            <div style={{backgroundColor: randomColor, border:'3px solid #CCC',margin:'20px', height: '10vh'}}>
                &nbsp;
            </div>
        </>
    )
}

export default RandomColor