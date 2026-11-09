import { useState } from 'react'
import imgf from '/images/image1-76.png'
import Ogif from '/images/image4.gif'
// import secret from '/images/secret.gif'
import Ogif2 from '/images/09f_g235.png'

import './App.css'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Função para fazer o download da API FastAPI
  const handleDownload = async (courseId, fileName) => {
    try {
      const response = await fetch(`http://localhost:8000/certificados/${courseId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Erro ao buscar o arquivo na API');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.href = url;
      link.setAttribute('download', `${fileName}.pdf`); 
      
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Erro no download:", error);
      alert("Falha ao baixar o certificado. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <div className="start">
        <div className="greet">
          <h1>Letícia</h1>
          <h1>Sampaio</h1>
          <h2>Full Stack Developer</h2>
        </div>
  
        <div className="gif">
          <img src={Ogif} alt="GIF Animado" />
        </div>
      </div>

      <div className='orbs'>
        <div id="zero" className="orb"></div>
        <div id="one" className="orb"></div>
        <div id="two" className="orb"></div>
        <div id="three" className="orb"></div>
        <div id="four" className="orb"></div>
      </div>

      <div className='f-section'>
        <img src={imgf} alt="Imagem decorativa" />
        
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
        <div className="secret">
          <img src={Ogif2} alt="Espaço em branco" />
          <button onClick={() => setIsPopupOpen(true)}>cursos recentes</button>
        </div>
      </div>

      {/* Pop-up de Cursos */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>X</button>
            
            <h2>Cursos Recentes</h2>
            <ul>

              <li>
                <span className="course-name">Introduction to Python for Developers</span>
                <button 
                  className="download-btn" 
                  onClick={() => handleDownload('certificate', 'certificate')}
                >
                  Baixar
                </button>
              </li>

              {/* Aponta para certificate1.pdf */}
              <li>
                <span className="course-name">Intermediate Python for Developers</span>
                <button 
                  className="download-btn" 
                  onClick={() => handleDownload('certificate1', 'certificate')}
                >
                  Baixar
                </button>
              </li>

              {/* Exemplo para o 3º arquivo (certificate2.pdf) */}
              <li>
                <span className="course-name">Introduction to Shell</span>
                <button 
                  className="download-btn" 
                  onClick={() => handleDownload('certificate2', 'certificate2')}
                > 
                  Baixar
                </button>
              </li>
              
              <li>
                <span className="course-name">Introduction to FastAPI</span>
                <button 
                  className="download-btn" 
                  onClick={() => handleDownload('certificate3', 'certificate3')}
                >
                  Baixar
                </button>
              </li>

              <li>
                <span className="course-name">Data Manipulation with pandas</span>
                <button 
                  className="download-btn" 
                  onClick={() => handleDownload('certificate4', 'certificate4')}
                >
                  Baixar
                </button>
              </li> 
              
              <li>
                <span className="course-name">Introduction to Importing Data in Python</span>
                <button 
                  className="download-btn" 
                  onClick={() => handleDownload('certificate5', 'certificate5')}
                >
                  Baixar
                </button>
              </li>

              <li>
                <span className="course-name">Writing Functions in Python</span>
                <button 
                  className="download-btn" 
                  onClick={() => handleDownload('certificate6', 'certificate6')}
                >
                  Baixar
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default App