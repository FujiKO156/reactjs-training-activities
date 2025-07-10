import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LightSwitch from './Component/lightSwitch'
import ColorPicker from './Component/ColorPicker'
import MousePosition from './Component/MousePosition'
import RandomColor from './Component/RandomColor'
import Form from './Component/Form'
import { context, sharedData } from './Component/Context/context'
import ChildComponent from './Component/Context/ChildComponent'

function App() {

  const [isLightOn, setIsLightOn] = useState(false)

  const handleToggle = () => {
      setIsLightOn(prevIsOn => !prevIsOn)
    }

  const styling = (
    {
      border:'2px solid #CCC',
      margin:'30px',
      padding:'10px'
    }
  )
  
  return (
    <>
    <div style={styling}>
      <h1>Activity</h1>
       <div style={styling}>  
          <h2>Part 1</h2>
          <LightSwitch light={isLightOn}/>
          <button onClick={handleToggle}>
            Turn {
              isLightOn ? 'ON' : 'OFF'
            }
          </button>
      </div> 
      
      <div style={styling}>
        <h2>Part 2</h2>
        <ColorPicker/>
      </div>

      <div style={styling}>
        <h2>Part 3</h2>
        <MousePosition/>
      </div>

      <div style={styling}>
        <h2>Part 4</h2>
        <RandomColor />
      </div>

       <div style={styling}>
        <h2>Part 5</h2>
        <context.Provider value={sharedData}>
            <ChildComponent/>
        </context.Provider>
        
      </div>

       <div style={styling}>
        <h2>Part 6</h2>
        <Form/>
      </div>
    </div>
      
      
    </>
  )
}

export default App
