import React, {useState} from 'react';
import './App.css'

function App(){
    const [backgroundColor, setBackgroundColor] = useState('#fffff');

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    const handleChange = (color) => {
        setBackgroundColor(color);
    }

    const handleChangeColor = (color) => {
        setBackgroundColor(color);
    }


    return (
        <div className='App' style={{backgroundColor}}>
            <h1>Color Picker</h1>
            <div className='color-palette'>
                {colors.map((color, index) => (
                    <div key={index}
                         className='color-box'
                         style={{backgroundColor: color}}
                         onClick={() => handleChange(color)}>
                    </div>
                ))}
            </div>

            <div className='custom-color-picker'>
                <input type='color'
                       value={backgroundColor}
                       onChange={(e) =>
                           handleChange(e.target.value)}
                />
            </div>

        </div>
    )
}

export default App;