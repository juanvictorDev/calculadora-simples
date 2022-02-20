import React,{useContext} from 'react';
import {Context} from '../../context/calculatorContext'
import './style.scss';

export function Botoes() {
  
  const {handleCalc, handleAllClear, handleDelete, handleResult, handleOperators, changeSign} = useContext(Context);

  return(
    <>
      <div className="superiores">
        <button className="superiores-items" value={"+"} onClick={handleOperators}>+</button>
        <button className="superiores-items" value={"-"} onClick={handleOperators}>-</button>
        <button className="superiores-items" value={"*"} onClick={handleOperators}>&times;</button>
        <button className="superiores-items" value={"/"} onClick={handleOperators}>&divide;</button>
        <button className="superiores-items ajust" onClick={handleDelete}>DEL</button>
        <button className="superiores-items ajust" onClick={handleAllClear}>AC</button>
        <button className="superiores-items" onClick={changeSign}>+/-</button>
      </div>
      
      <div className="inferiores">
        <button className="inferiores-items" value={"1"} onClick={handleCalc}>1</button>
        <button className="inferiores-items" value={"2"} onClick={handleCalc}>2</button>
        <button className="inferiores-items" value={"3"} onClick={handleCalc}>3</button>
          
        <button className="inferiores-items" value={"4"} onClick={handleCalc}>4</button>
        <button className="inferiores-items" value={"5"} onClick={handleCalc}>5</button>
        <button className="inferiores-items" value={"6"} onClick={handleCalc}>6</button>
      
        <button className="inferiores-items" value={"7"} onClick={handleCalc}>7</button>
        <button className="inferiores-items" value={"8"} onClick={handleCalc}>8</button>
        <button className="inferiores-items" value={"9"} onClick={handleCalc}>9</button>

        <button className="inferiores-items" value={"."} onClick={handleOperators}>.</button>
        <button className="inferiores-items" value={"0"} onClick={handleCalc}>0</button>
        <button className="inferiores-items" onClick={handleResult}>=</button>
      </div>
    </>
  );
}