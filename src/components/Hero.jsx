import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="hero-title">
          <span className="hero-title-accent">HACK</span>FLIX
        </h2>
        <p className="hero-subtitle">Descubre tu próxima película favorita</p>       
      </div>
    </section>
  )
}

export default Hero