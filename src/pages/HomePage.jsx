import React, { useState } from 'react';
import '../styles/HomePage.css';
import albums from "../DATA/albums.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Grazie! Email registrata: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="home-page-container">
      {/* TopNavBar */}
      <nav className="nav-bar">
        <div className="logo-group">
          <img
            alt="Martina Paganin Logo"
            className="logo-icon-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwyQ3vPBTPoe349Cn-PZ6OqSTVGxpmwYlQyCsVlpAy6xoQ9_UCHopOjcLsniJfmgJzu4IomH-1DnLFsNb--MlADXJs-ifC0ktGzwWOjnQvWtpOSVXpSMcgRFD9FJxZ5zpcbsgM3kRsU8-tLH7IyG_DJEPsmme2J5NKFIogt7MPD0VsC_NAAbl9YtqyHPa-WUke0j3rYwZYjh5czbZmyVzviDeXxnNC_gu5B1JzMdrP9GHURGfggErmcC88drGgLZAe5KTufQhxg4AE"
          />
          <span className="logo-brand-name">Martina Paganin</span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-menu">
          <a className="desktop-menu-link" href="#Album">Album</a>
          <a className="desktop-menu-link" href="#contacts">Contacts</a>
        </div>

        {/* Mobile Action */}
        <button className="mobile-menu-btn" aria-label="Menu">
          <span className="material-symbols-outlined" data-icon="menu">menu</span>
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero-header">
        <div className="hero-bg-wrapper">
          <img
            className="hero-bg-img"
            alt="A cinematic, wide-angle landscape photograph of the Scottish Highlands under a heavy, moody sky filled with dark, swirling clouds."
            src="https://res.cloudinary.com/dqyfoxlko/image/upload/v1772201439/DSCF1011-2_-_Copia_rgbs32.jpg"
          />
          <div className="hero-overlay-gradient"></div>
        </div>
        <div className="hero-content">
          <p className="hero-subtitle">Landscape &amp; Street Photography</p>
          <h1 className="hero-title font-display-lg">Catturare l'anima dei luoghi.</h1>
        </div>
      </header>

      <main>
        {/* Bio Section */}
        <section className="bio-section">
          <div className="grid-cols-12">
            <div className="bio-content">
              <span className="bio-tag">L'Autrice</span>
              <h2 className="bio-quote">
                "Benvenuti nel mio spazio visivo. Sono Martina Paganin, una fotografa amatoriale mossa dalla passione per la quiete dei paesaggi e l'anima della street photography. Attraverso il mio obiettivo, cerco di catturare l'essenza della Scozia e l'eleganza senza tempo dell'Italia."
              </h2>
            </div>
          </div>
        </section>

        {/* Album Section (Album) */}
        <section id="Album" className="portfolio-section">
          <div className="portfolio-header">
            <div className="portfolio-title-group">
              <span className="portfolio-tag">Portfolio</span>
              <h3 className="portfolio-title">Album</h3>
            </div>

            <div className="portfolio-controls">
              <div className="arrows-group">
                <button className="arrow-btn" aria-label="Previous image">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="arrow-btn" aria-label="Next image">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>

              <div className="desktop-see-all-wrapper">
                <button className="see-all-btn">
                  Vedi Tutto
                </button>
              </div>
            </div>
          </div>



          <div className="portfolio-grid">
            {albums.map(album => (
              <Link to={`/album/${album.id}`} className="album-card-link">
                <div className="album-card">
                  <div className="album-img-wrapper">
                    <img
                      className="album-img"
                      alt={album.title}
                      src={album.coverUrl}
                    />
                  </div>
                  <h4 className="album-card-title font-headline-md">{album.title}</h4>
                </div>
              </Link>
            ))}
          </div>


        </section>

        {/* Newsletter/Contact CTA */}
        <section id="contacts" className="newsletter-section">
          <h2 className="newsletter-title font-headline-lg">Vuoi collaborare o ricevere stampe?</h2>
          <form className="newsletter-form-container" onSubmit={handleSubmit}>
            <input
              className="newsletter-input-field"
              placeholder="IL TUO INDIRIZZO EMAIL"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="newsletter-submit-btn" type="submit">Invia</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-logo-block">
          <span className="footer-logo-text">Martina Paganin</span>
        </div>

        <div className="footer-links-block">
          <a className="footer-link-item" href="#">Archives</a>
          <a className="footer-link-item" href="#">Process</a>
          <a className="footer-link-item" href="#">Legal</a>
          <a className="footer-link-item" href="#">Social</a>
        </div>

        <div className="footer-copyright-block">
          <p className="footer-copyright-text">
            © 2024 Martina Paganin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
