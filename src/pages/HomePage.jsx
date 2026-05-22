import React, { useState } from 'react';
import '../styles/HomePage.css';

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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL6Sv-a6mxvpwTPnomDMwyhITqbOxKprmWpf7UKXc1M8dU_b56xb3_6Ovs-b_nsVpkqm6FlyppNfc8avlMQyTa1H-gLvFqSCnDfEfCb6OlgLF9zUzZSGV2ayCVq93u31HUUhvjmt14hv8K0gJcFePT25BVgs6aycC2nr6wwrO_wD0aWkgK-VI3UbvLLhC0qyJjkWYnqQq5Uvzc5xT0-PgddBK2xs0UCHA0Qc24fI0GK7SrLndZdeill_hCkYIAdFa2ATw5JDAFVHdt"
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
            {/* Album Card 1 */}
            <div className="album-card">
              <div className="album-img-wrapper">
                <img
                  className="album-img"
                  alt="Lone castle ruins on a misty cliff"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGx64lqKmuuOD9Jys8SFKAfeZEuRW-umVbSdHzMi_WVH1uqljcE3i1OTklUl_TvY54jwgMeshLOc_BtMXq3Y5Pg8KGOParJyXilMQXsmtwuETC__3oaa0_r9iDkq3HKvpBA-tggyTLzBj8BwFmOcHy94uUnXKBycwGeRoB7Z1JBMvRRI_mOm-Beed4kaY1ALFiQWlQBgips5CYql3JZATv858Hw8miQ6WHnQsXlpQnFn3zG7-VDLK8BhRYZba37ajIJlbjANnIefC4"
                />
              </div>
              <p className="album-card-tag">Archivio 01</p>
              <h4 className="album-card-title font-headline-md">Scozia: Terre Alte</h4>
            </div>

            {/* Album Card 2 */}
            <div className="album-card">
              <div className="album-img-wrapper">
                <img
                  className="album-img"
                  alt="Venice street photography blue hour"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRCtgGJdNqMZvRqKrZirstdE2sOG0x3WolOP42SmHu1lZftpTVJvOrhX9GdaawGB69S-TXv5wr7_6dBznvze3ufwAcgaW7kZvk-J088V1lI3UX1CrScpSAKySvu8nAwjLeIgcNuPZf3jAfZ-YZQ9kPCCm_XQpKnQ54z4abpUVBXyBi06ASq-LBbNVPAhJF4LFrCU_Pl7yzIpV8cox9sIYCUklkO-YyiFXOdLSMVTWTLlMMkLF2n6kTDyGGfwRGoAKvio3oD-fbISUl"
                />
              </div>
              <p className="album-card-tag">Archivio 02</p>
              <h4 className="album-card-title font-headline-md">Italia: Scorci Urbani</h4>
            </div>

            {/* Album Card 3 */}
            <div className="album-card">
              <div className="album-img-wrapper">
                <img
                  className="album-img"
                  alt="Minimalist mountain landscape snowy horizon"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA22TOWcHPOoNzqfTH7t-6fI0Uhp4mMMbHysNKuEADgMZte_W1Dpthq6UcOkOFIJ0f0EJ6Eizv18CqtnzLjqyAH4gMFKpD0Nwtdh9G1ni4wgLkr_CbbbJ5OGag5zFUK4--yNAexsohCE_5rqrThT3h_VNDWWkRFdY75CvXgEYGJpaXkWifqvd7DccHpOPqQd2HkhSSj_q0DSklilaRenL0iWCg3V4CdhF2EA-oVXI8wrWLT2bRDYtllv75Q8X3y9PiMdrVDtiQsSAl"
                />
              </div>
              <p className="album-card-tag">Archivio 03</p>
              <h4 className="album-card-title font-headline-md">Orizzonti Infiniti</h4>
            </div>
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
