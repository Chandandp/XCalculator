import React, { useState } from 'react';
import '../index.css'; // Adjust path if necessary
//import '../Calculator.css';

import { evaluate } from 'mathjs'; 

function Calculator() {
    const [value, setValue] = useState('');
    const [output, setOutput] = useState('');

    return (
        <div>
            <center>
            <h1>React Calculator</h1>
            <input type="text" value={value} style={{width:"240px",height:"30px"}} readOnly />
            <h1>{output}</h1>
            <div className="calc">
                <button onClick={() => setValue((prev) => prev + '7')}>7</button>
                <button onClick={() => setValue((prev) => prev + '8')}>8</button>
                <button onClick={() => setValue((prev) => prev + '9')}>9</button>
                <button onClick={() => setValue((prev) => prev + '+')}>+</button>
            </div>
            <div className="calc">
                <button onClick={() => setValue((prev) => prev + '4')}>4</button>
                <button onClick={() => setValue((prev) => prev + '5')}>5</button>
                <button onClick={() => setValue((prev) => prev + '6')}>6</button>
                <button onClick={() => setValue((prev) => prev + '-')}>-</button>
            </div>
            <div className="calc">
                <button onClick={() => setValue((prev) => prev + '1')}>1</button>
                <button onClick={() => setValue((prev) => prev + '2')}>2</button>
                <button onClick={() => setValue((prev) => prev + '3')}>3</button>
                <button onClick={() => setValue((prev) => prev + '*')}>*</button>
            </div>
            <div className="calc">
                <button onClick={() => { setValue(''); setOutput(''); }}>C</button>
                <button onClick={() => setValue((prev) => prev + '0')}>0</button>
                <button onClick={() => {
                    try {
                        setOutput(evaluate(value));
                    } catch {
                        setOutput('Error');
                    }
                }}>=</button>
                <button onClick={() => setValue((prev) => prev + '/')}>/</button>
            </div>
            </center>
        </div>
    );
}

export default Calculator;
