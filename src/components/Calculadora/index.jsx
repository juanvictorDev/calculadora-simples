import React from 'react';
import {Botoes} from '../Botoes'
import {Visor} from '../Visor'
import {ContextProvider} from '../../context/calculatorContext'
import './style.scss';

export function Calculadora() {
  return(
    
    <ContextProvider>
      <div className="sombra">
        <div className="container">
          <Visor />
          <Botoes />
        </div>
      </div>
    </ContextProvider>
  );
};