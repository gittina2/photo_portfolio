import "../styles/album.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import albums from "../DATA/albums.json";

export default function Album() {

  const { id } = useParams();
  const album = albums.find(a => a.id === id);
  const images = album.images;

  const layoutPattern = ["wide", "mid", "mid", "tall", "tall", "tall"];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const currentImg = selectedIndex !== null ? images[selectedIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex(prev =>
          prev === null ? 0 : (prev + 1) % images.length
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex(prev =>
          prev === null ? 0 : (prev - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  return (
    <div className="album-page">
      <nav className="album-nav">
        <div className="album-nav-brand-wrap">
          <Link to="/" className="album-brand">Martina Paganin</Link>
        </div>
        <div className="album-nav-links">
          <a className="album-nav-link album-nav-link-active" href="#">
            Album
          </a>
          <a className="album-nav-link" href="#">
            Contacts
          </a>
        </div>
        <button className="album-menu-button" type="button">
          <span className="material-symbols-outlined" data-icon="menu">
            menu
          </span>
        </button>
      </nav>

      <main className="album-main">
        <header className="album-header">
          <div className="album-header-row">
            <div className="album-header-copy">
              <span className="album-kicker">Collection - Series 04</span>
              <h1 className="album-title">Scozia: Terre Alte</h1>
            </div>
            <div className="album-location">
              <span className="album-location-text">Isle of Skye, Scotland</span>
            </div>
          </div>
          <p className="album-description">
            An exploration of the geological trauma and silent resilience of the Scottish Highlands. High-contrast captures of the Quiraing and the Old Man of Storr, where the horizon dissolves into the mist.
          </p>
        </header>

        <section className="album-gallery-section">
          <div className="masonry-grid">

            {images.map((img, index) => {
              const layout = layoutPattern[index % layoutPattern.length];

              return (
                <div
                  key={img.public_id}
                  className={`masonry-item-${layout} album-gallery-item`}
                >
                  <div onClick={() => setSelectedIndex(index)}>
                    <img
                      className={`album-gallery-image album-image-${layout}`}
                      src={img.url}
                      alt={img.alt || ""}
                      loading="lazy"
                    />
                  </div>

                  <div className="album-overlay">
                    <span className="material-symbols-outlined album-fullscreen-icon">
                      fullscreen
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {selectedIndex !== null && (
            <div className="lightbox" onClick={() => setSelectedIndex(null)}>
              <img src={images[selectedIndex].url} />
              <button onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(prev =>
                  prev > 0 ? prev - 1 : images.length - 1
                );
              }}>
                ←
              </button>

              <button onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(prev =>
                  prev < images.length - 1 ? prev + 1 : 0
                );
              }}>
                →
              </button>


            </div>
          )}
        </section>

        <section className="album-next-section">
          <a className="album-next-link" href="#">
            <span className="album-next-label">Next Series</span>
            <h3 className="album-next-title">Urban Silence: Milano</h3>
            <span className="material-symbols-outlined album-next-icon" data-icon="trending_flat">
              trending_flat
            </span>
          </a>
        </section>
      </main>

      <footer className="album-footer">
        <div className="album-footer-brand-block">
          <span className="album-brand">Martina Paganin</span>
          <p className="album-footer-subtitle">Landscape &amp; Street Photography</p>
        </div>
        <div className="album-footer-links-block">
          <div className="album-footer-links">
            <a className="album-footer-link" href="#">
              Archives
            </a>
            <a className="album-footer-link" href="#">
              Process
            </a>
            <a className="album-footer-link" href="#">
              Legal
            </a>
            <a className="album-footer-link" href="#">
              Social
            </a>
          </div>
          <div className="album-copyright">© 2024 Martina Paganin. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}