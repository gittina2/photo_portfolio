import "../styles/album.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import albums from "../DATA/albums.json";
import textContent from "../DATA/textcontent.json";

export default function Album() {
  // --- GETTING ALBUMS AND TEXTCONTENT FROM JSON FILES ---
  const { id } = useParams();
  const album = albums.find(a => a.id === id);
  const currentIndex = albums.findIndex(a => a.id === id);
  const nextAlbum = albums[(currentIndex + 1) % albums.length];
  const prevAlbum = albums[(currentIndex - 1 + albums.length) % albums.length];

  const textcontent = textContent.find(a => a.id === id);
  const textcontentCurrentIndex = textContent.findIndex(a => a.id === id);
  const textcontentNext = textContent[(textcontentCurrentIndex + 1) % textContent.length];
  const textcontentPrev = textContent[(textcontentCurrentIndex - 1 + textContent.length) % textContent.length];

  const images = album.images;

  // --- MASONRY GRID LAYOUT ---
  const layoutPattern = ["wide", "mid", "mid", "tall", "tall", "tall"];
  const [selectedIndex, setSelectedIndex] = useState(null);

  // --- DROPDOWN MENU OPEN/CLOSE STATE ---
  const [open, setOpen] = useState(false);

  // --- NAVIGATION FUNCTIONS previous image ---
  const goPrev = () => {
    setSelectedIndex(prev =>
      prev > 0 ? prev - 1 : images.length - 1
    );
  };

  // --- NAVIGATION FUNCTIONS next image ---
  const goNext = () => {
    setSelectedIndex(prev =>
      prev < images.length - 1 ? prev + 1 : 0
    );
  };

  // --- KEYBOARD NAVIGATION ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        goNext();
      }

      if (e.key === "ArrowLeft") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  // close dropdown when clicking outside of it
  const dropdownRef = useRef(null);

  // --- CLOSE DROPDOWN WHEN CLICKING OUTSIDE OF IT ---
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    useEffect(() => {
      const handleOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("pointerdown", handleOutside);

      return () => {
        document.removeEventListener("pointerdown", handleOutside);
      };
    }, []);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="album-page">
      <nav className="album-nav">
        <div className="album-nav-brand-wrap">
          <Link to="/" className="album-brand">Martina Paganin</Link>
        </div>
        <div className="album-nav-links">

          <div className="dropdown-container" ref={dropdownRef}>
            <button className="album-nav-button"
              onClick={() => setOpen(!open)}>
              Albums
            </button>


            {open && (
              <div className="albums-button-dropdown">
                {textContent.map(textContent => (
                  <Link
                    key={textContent.id}
                    to={`/album/${textContent.id}`}
                    className="dropdown-item"
                    onClick={() => setOpen(false)}
                  >
                    {textContent.fancytitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a className="contact-nav-link" href="#">
            Contacts
          </a>
        </div>

      </nav>

      <main className="album-main">
        <header className="album-header">
          <div className="album-header-row">
            <div className="album-header-copy">
              <span className="album-kicker">{textcontent.kicker}</span>
              <h1 className="album-title">{textcontent.fancytitle}</h1>
            </div>
            <div className="album-location">
              <span className="album-location-text">{textcontent.location}</span>
            </div>
          </div>
          <p className="album-description">
            {textcontent.description}
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

              <button
                className="lightbox-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
              >
                <span className="material-symbols-outlined">
                  close
                </span>
              </button>

              <button
                className="lightbox-arrow lightbox-arrow-left"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(prev =>
                    prev > 0 ? prev - 1 : images.length - 1
                  );
                }}
              >
                <span className="material-symbols-outlined">
                  arrow_back_ios
                </span>
              </button>

              <div className="lightbox-image">
                <img src={images[selectedIndex].url}
                  onClick={(e) => e.stopPropagation()} />

                <div className="lightbox-caption">
                  <p>{images[selectedIndex].caption}</p>
                </div>
              </div>

              {/* RIGHT */}
              <button
                className="lightbox-arrow lightbox-arrow-right"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(prev =>
                    prev < images.length - 1 ? prev + 1 : 0
                  );
                }}
              >
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          )}
        </section>

        <div className="album-navigation">
          <section className="album-prev-section">
            <Link
              className="album-prev-link"
              to={`/album/${prevAlbum.id}`}
            >
              <span className="album-prev-label">Previous Series</span>

              <h3 className="album-prev-title">
                {textcontentPrev.fancytitle}
              </h3>

              <span className="material-symbols-outlined album-prev-icon">
                west
              </span>
            </Link>
          </section>

          <section className="album-next-section">
            <Link
              className="album-next-link"
              to={`/album/${nextAlbum.id}`}
            >
              <span className="album-next-label">Next Series</span>

              <h3 className="album-next-title">
                {textcontentNext.fancytitle}
              </h3>

              <span className="material-symbols-outlined album-next-icon">
                east
              </span>
            </Link>
          </section>
        </div>
      </main>

      {/*Footer*/}
      <footer className="album-footer">
        <div className="album-footer-brand-block">
          <span className="album-brand">Martina Paganin</span>
        </div>
        <div className="album-footer-links-block">
          {/*<div className="album-footer-links">
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
          </div>*/}
          <div className="album-copyright">© 2026 Martina Paganin. All rights reserved.</div>
        </div>
      </footer>
    </div >
  );
}