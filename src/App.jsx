import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imgf from '/images/image1-76.png'
import Ogif from '/images/image4.gif'
import secret from '/images/secret.gif'
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
          <h1>técnica em redes de computadores</h1>
          <h2>instituto federal de educação, ciência e tecnologia do ceará</h2>
        </div>
        <div className="f-text2">
          <h1>graduanda em sistemas de informação</h1>
          <h2>universidade federal do ceará</h2>
        </div>
        
        
      </div>

      <div className="s-section">
        <div>
          <img src={secret}/>
        </div>
        <div className="secret">
          <img src={Ogif2}/>
          <button>click here</button  >
        </div>

        <div className="popup">
          <p>oq vc ta fazendo aqui?</p>
          <button>x</button>
        </div>  


      </div>

      
      
     
    </>
  )
}

export default App
