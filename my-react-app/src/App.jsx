import { useState } from 'react'
const base = import.meta.env.BASE_URL
const imgf = `${base}images/image1-76.png`
const Ogif = `${base}images/image4.gif`
const Ogif2 = `${base}images/09f_g235.png`

import './App.css'

const cursos = [
  { nome: 'Introduction to Python for Developers', arquivo: 'certificate.pdf' },
  { nome: 'Intermediate Python for Developers', arquivo: 'certificate1.pdf' },
  { nome: 'Introduction to Shell', arquivo: 'certificate2.pdf' },
  { nome: 'Introduction to FastAPI', arquivo: 'certificate3.pdf' },
  { nome: 'Data Manipulation with pandas', arquivo: 'certificate4.pdf' },
  { nome: 'Introduction to Importing Data in Python', arquivo: 'certificate5.pdf' },
  { nome: 'Writing Functions in Python', arquivo: 'certificate6.pdf' },
]

function App() {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [certificadoAberto, setCertificadoAberto] = useState(null)
 
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
 
      <div className="orbs">
        <div id="zero" className="orb"></div>
        <div id="one" className="orb"></div>
        <div id="two" className="orb"></div>
        <div id="three" className="orb"></div>
        <div id="four" className="orb"></div>
      </div>
 
      <div className="f-section">
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
 
      {/* Pop-up de cursos */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
              X
            </button>
 
            <h2>Cursos Recentes</h2>
            <ul>
              {cursos.map((curso) => (
                <li key={curso.arquivo}>
                  <span className="course-name">{curso.nome}</span>
                  <button
                    className="download-btn"
                    onClick={() => setCertificadoAberto(curso)}
                  >
                    Ver
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
 
      {/* Visualizador do certificado */}
      {certificadoAberto && (
        <div
          className="popup-overlay"
          onClick={() => setCertificadoAberto(null)}
        >
          <div
            className="popup-content"
            style={{ width: 'min(900px, 95vw)', height: '70vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setCertificadoAberto(null)}
            >
              X
            </button>
            <iframe
              src={`${base}certificados/${certificadoAberto.arquivo}`}
              title={certificadoAberto.nome}
              style={{ width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default App