import React, { useState } from 'react';
import '../styles/HomePage.css';
import albums from "../DATA/albums.json";
import textContent from "../DATA/textcontent.json";
import heroImages from "../DATA/heroimages.json";
import HeroCarousel from "../components/HeroCarousel";


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

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="home-page-container">
      {/* TopNavBar */}
      <nav className="nav-bar">
        <div className="logo-group">
          {/*<img
            alt="Martina Paganin Logo"
            className="logo-icon-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwyQ3vPBTPoe349Cn-PZ6OqSTVGxpmwYlQyCsVlpAy6xoQ9_UCHopOjcLsniJfmgJzu4IomH-1DnLFsNb--MlADXJs-ifC0ktGzwWOjnQvWtpOSVXpSMcgRFD9FJxZ5zpcbsgM3kRsU8-tLH7IyG_DJEPsmme2J5NKFIogt7MPD0VsC_NAAbl9YtqyHPa-WUke0j3rYwZYjh5czbZmyVzviDeXxnNC_gu5B1JzMdrP9GHURGfggErmcC88drGgLZAe5KTufQhxg4AE"
          />*/}
          <span className="logo-brand-name">Martina Paganin</span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-menu">
          <a className="desktop-menu-link" href="#Album">Album</a>
          <a className="desktop-menu-link" href="#contacts">Contacts</a>
        </div>

        {/* Mobile Action */}
        <div className="mobile-menu-container">
          <button
            className="mobile-menu-btn"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>

          {mobileOpen && (
            <div className="mobile-dropdown">

              <a
                href="#Album"
                className="mobile-dropdown-link"
                onClick={() => setMobileOpen(false)}
              >
                Album
              </a>

              <a
                href="#contacts"
                className="mobile-dropdown-link"
                onClick={() => setMobileOpen(false)}
              >
                Contacts
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-header">

        <HeroCarousel slides={heroImages} />

        <div className="hero-content">
          <p className="hero-subtitle">Uno sguardo sulla luce, sui paesaggi e sull’atmosfera dei luoghi</p>
          <h1 className="hero-title font-display-lg">Catturare l'anima dei luoghi.</h1>
        </div>
      </header>

      <main>
        {/* Bio Section */}
        <section className="bio-section">
          <div className="grid-cols-12">
            <div className="bio-content">
              <span className="bio-tag">About me</span>
              <h2 className="bio-quote">
                Ciao! Sono Martina. Fotografo i luoghi che
                visito da quando ero piccola, quando le macchine usa e getta erano ancora comuni.
                <br />
                Mi piace raccontare i posti in cui sono stata, ricordare come mi sono sentita mentre ero in viaggio e condividere attraverso
                il mio obiettivo la luce del momento, le nuvole nel cielo e i dettagli dei luoghi che attraverso.
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
              {/*<div className="arrows-group">
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
              </div>*/}
            </div>
          </div>



          <div className="portfolio-grid">
            {albums.map(album => {

              const meta = textContent.find(t => t.id === album.id);

              return (

                <Link to={`/album/${album.id}`} className="album-card-link">
                  <div className="album-card">
                    <div className="album-img-wrapper">
                      <img
                        className="album-img"
                        alt={album.title}
                        src={album.coverUrl}
                      />
                    </div>
                    <h4 className="album-card-title font-headline-md">
                      {meta?.fancytitle}</h4>
                  </div>
                </Link>
              );
            })}
          </div>


        </section>

        {/* Newsletter/Contact CTA */}
        <section id="contacts" className="newsletter-section">
          <h2 className="newsletter-title font-headline-lg">Vuoi collaborare o contattarmi?</h2>
          <form className="newsletter-form-container" onSubmit={handleSubmit}>
            <input
              className="newsletter-input-field"
              placeholder="IL TUO INDIRIZZO EMAIL"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/*<button className="newsletter-submit-btn" type="submit">Invia</button>*/}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-logo-block">
          <span className="footer-logo-text">Martina Paganin</span>
        </div>

        {/*<div className="footer-links-block">
          <a className="footer-link-item" href="#">Archives</a>
          <a className="footer-link-item" href="#">Process</a>
          <a className="footer-link-item" href="#">Legal</a>
          <a className="footer-link-item" href="#">Social</a>
        </div>*/}

        <div className="footer-copyright-block">
          <p className="footer-copyright-text">
            © 2026 Martina Paganin. All rights reserved.
          </p>
        </div>
      </footer>
    </div >
  );
}
