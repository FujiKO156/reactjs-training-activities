import { useState } from "react"
const ColorPicker = () => {

    const [colors, setColor] = useState([
         {
            id: 'red',
            value: 'red'
        },
         {
            id: 'blue',
            value: 'blue'
        },
         {
            id: 'green',
            value: 'green'
        },
         {
            id: 'yellow',
            value: 'yellow'
        }
    ]);

    const sel = (
        {
            padding: '10px',
            width: '100%',
            fontSize: '20px',
            borderRadius: '5px'
        }
    )

    const [selectedColor, setSelectedColor] = useState('red')
    
    const handleChange = (e) => {
        const col = e.target.value;
        setSelectedColor(col);
    }

    return (
        <>
        <div>
            <select style={sel} value={selectedColor} onChange={handleChange}>
                {
                    colors.map((color) => (
                        <option key={color.id} value={color.id}>{color.value}</option>
                    ))
                }
            </select>
            <p>Color: {selectedColor}</p>
        </div>

         <div style={{backgroundColor: selectedColor, height: '10vh', borderRadius: '10px'}}>&nbsp;</div>
        </>
    )

}

export default ColorPicker