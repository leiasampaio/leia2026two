import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imgf from '/images/flower-white.png'
import Ogif from '/images/image4.gif'
import Ogif2 from '/images/09f_g235.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      <div className="start">
        
        <div className="greet">
          <h1>Letícia</h1>
          <h1>Sampaio</h1>
          <h2>Full Stack Developer</h2>
        </div>
  
        <div className="gif">
          <img src={Ogif}/>
        </div>
      </div>
      <div className='orbs'>
        <div id="zero" class="orb"></div>
        <div id="one" className="orb"></div>
        <div id="two" className="orb"></div>
        <div id="three" className="orb"></div>
        <div id="four" className="orb"></div>
        
      </div>

      <div className='f-section'>
        
        <img src={imgf}/>
        
        <div className="f-text1">
          <h1>Técnica em Redes de Computadores</h1>
          <h2>Instituto Federal de Educação, Ciência e Tecnologia do Ceará</h2>
        </div>
        <div className="f-text2">
          <h1>Graduanda em Sistemas de Informação</h1>
          <h2>Universidade Federal do Ceará</h2>
        </div>
        
        
      </div>

      <div className="s-section">
        <div>
          <img src={Ogif2}/>
        </div>
      </div>
      
     
    </>
  )
}

export default App
