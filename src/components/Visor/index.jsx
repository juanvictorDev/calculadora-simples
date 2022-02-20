import React,{useContext} from 'react';
import {Context} from '../../context/calculatorContext'
import './style.scss';

export function Visor() {
  
  const {calc} = useContext(Context)

  return (
    <div className="visor">
      <h2>{calc}</h2>
    </div>
  );
}