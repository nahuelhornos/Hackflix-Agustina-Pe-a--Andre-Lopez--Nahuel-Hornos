import './App.css'
import './DetallePelicula.css'
import MatrixBackground from './components/MatrixBackground'
import Header from './components/Header'

function DetallePelicula() {
  const googleDocUrl = 'https://docs.google.com/document/d/1qNQuNrrJgMaef0jWHJa8H95n8Uk0PyfbVSevzlxRrak/preview'

  return (
    <div className="app">
      <MatrixBackground />
      <Header />
      <div className="document-container">
        <iframe
          src={googleDocUrl}
          title="Gracias por fumar - Documento"
          className="google-doc-iframe"
        ></iframe>
      </div>
    </div>
  )
}

export default DetallePelicula
