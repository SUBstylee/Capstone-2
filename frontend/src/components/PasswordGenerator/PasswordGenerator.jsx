import {useState} from 'react';
import './PasswordGenerator.scss';

const PasswordGenerator = () => {
    const [result,setResult]=useState('');
    const [length,setLength]=useState(10);
    const [upper,setUpper]=useState(true);
    const [lower,setLower]=useState(true);
    const [number,setNumber]=useState(true);
    const [symbol,setSymbol]=useState(true);

    const getRandLower=()=>{
        return String.fromCharCode(Math.floor(Math.random()*26)+97);
    };
    const getRandUpper=()=>{
        return String.fromCharCode(Math.floor(Math.random()*26)+65);
    };
    const getRandNumber=()=>{
        return String.fromCharCode(Math.floor(Math.random()*10)+48);
    };
    const getRandSymbol=()=>{
        const symbols='!@#$%^&*()+<>/,.';
        return symbols[Math.floor(Math.random()*symbols.length)];
    };
    const randomFunc={
        lower:getRandLower,
        upper:getRandUpper,
        number:getRandNumber,
        symbol:getRandSymbol
    }
    const generatePassword=(upper,lower,number,symbol,length)=>{
        let generatedPassword='';
        const typesCount=lower+upper+number+symbol;
        const typesArr=[{upper},{lower},{number},{symbol}].filter((item)=>Object.values(item)[0]);
        if(typesCount===0)return '';
        for (let i = 0; i < length; i++) {
            const funcName = Object.keys(typesArr[Math.floor(Math.random() * typesCount)])[0];
            generatedPassword += randomFunc[funcName]();
          }
          return generatedPassword;
    };
    const handleClick=()=>{
        setResult(generatePassword(upper,lower,number,symbol,length))
    };
    const clipboardClick=()=>{
        if(!result)return;
        const copied=navigator.clipboard.writeText(result);
        alert('Password copied to clipboard!');
        return copied;   
    };

    return (
        <div className='PasswordGenerator'>
            <h2>Password Generator</h2>
            <div className="resultContainer">
                <span id="result">{result}</span>
                <button className='btn' id='clipboard' onClick={clipboardClick}><i className="far fa-clipboard"></i></button>
            </div>
            <div className="settings">
                <div className="setting">
                    <label htmlFor='length'>Password Length (6-20)</label>
                    <input type='number' id='length' min='6' max='20' value={length} onChange={(e)=>setLength(e.target.value)}/>
                </div>
                <div className="setting">
                    <label htmlFor='uppercase'>Include uppercase letters</label>
                    <input type="checkbox" id='uppercase' checked={upper} onChange={(e)=>setUpper(!upper)}/>
                </div>
                <div className="setting">
                    <label htmlFor='lowercase'>Include lowercase letters</label>
                    <input type="checkbox" id='lowercase' checked={lower} onChange={(e)=>setLower(!lower)}/>
                </div>
                <div className="setting">
                    <label htmlFor='numbers'>Include numbers</label>
                    <input type="checkbox" id='numbers' checked={number} onChange={(e)=>setNumber(!number)}/>
                </div>
                <div className="setting">
                    <label htmlFor='symbols'>Include symbols</label>
                    <input type="checkbox" id='symbols' checked={symbol} onChange={(e)=>setSymbol(!symbol)}/>
                </div>
            </div>
            <button className='btn btn-large' id='generate' onClick={handleClick}>Generate Password</button>
        </div>
    )
}

export default PasswordGenerator