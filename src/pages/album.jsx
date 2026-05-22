import "../styles/album.css";

export default function Album() {
  return (
    <div className="album-page">
      <nav className="album-nav">
        <div className="album-nav-brand-wrap">
          <span className="album-brand">Martina Paganin</span>
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
            <div className="masonry-item-wide album-gallery-item">
              <img
                className="album-gallery-image album-image-wide"
                data-alt="A cinematic wide landscape of the Scottish Highlands under a moody, overcast sky. Deep teal and charcoal tones dominate the rugged mountain peaks and rolling green valleys. Soft, diffused light highlights the textures of ancient rocks and mist clinging to the cliffs, creating a mysterious and professional noir aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz4wtMy558MMpzNC08EyC40zGRahZ2kQJVPRClG5sLBSG80z9pvaHY-niCmnceTuiYisZ54cca5nbLzULDw2vkMBpFJ2lsGDgbZVtPqpTwgCXIWTX1DRhX90aye3zKwL2nk0pnSRlOSBEdtlMFrcj9UjNwjRnBkqS73hSpzdHqx9zkSfXWcVwsWhkKX27qNqXybemcTDB6Q4FtOl2uXvCYoTeigg67FC5cuFlOF02L58WK18BKeDsRwT9cy6BgJ_TsQpVLMZD49jtT"
                alt=""
              />
              <div className="album-overlay">
                <span className="material-symbols-outlined album-fullscreen-icon" data-icon="fullscreen">
                  fullscreen
                </span>
              </div>
            </div>

            <div className="masonry-item-mid album-gallery-item">
              <img
                className="album-gallery-image album-image-mid"
                data-alt="A high-contrast vertical shot of a lone jagged rock formation in Scotland, piercing through a thick layer of white fog. The lighting is low-key and dramatic, emphasizing the sharp edges and dark charcoal textures of the stone. The composition is minimalist and editorial, capturing a sense of quiet authority and ancestral mystery."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXJ9p_qkeosmHrN9KAb7-gEtFFIX3iyEPhZpBczGcSY2cv6n8mv45qDozB19t7Q7Bbunhb3wNtf_OJjwsYZeyktSjORUnQUYH1-LQYt0MLc2sAcAA_PSthvExDGIxA1Dnt8pP5Y5hBQ2PCUqFooWVVgO4Dah5LZJ-xUdOxTfQc6VlieUlIH5PCvkbz6KEWPozOtaNACXegaqCIsjUTuDpcbLx2JwFmoXBO3qW0ZdreE94Cat2NcCJsWeokv34O7_7pEKTZb_D1YraQ"
                alt=""
              />
              <div className="album-overlay">
                <span className="material-symbols-outlined album-fullscreen-icon-small" data-icon="fullscreen">
                  fullscreen
                </span>
              </div>
            </div>

            <div className="masonry-item-mid album-gallery-item">
              <img
                className="album-gallery-image album-image-mid"
                data-alt="An atmospheric landscape photo of a winding road cutting through the dark, peat-covered hills of the Isle of Skye. The scene is bathed in a cold, deep teal light with copper-toned highlights on the dry grass. The image follows a modern noir style with heavy whitespace around the central subject to evoke a gallery feel."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVftbgxci5hb98ASNjII92KKy1LxBaFxK5ibiSuPVB8t9_l0x1LGl18YhvN0dOdcgqSU3Dlx_s4OdtimeYGItOjcVbIOE7UX0jU2mchyLV_mPwK0IO_8ZwcnMleUMzg0r6C_LVwkYPCDhlmgn37xZRIuMsIGAserkAPtBOHauSiRndWjAsrzj88X-RVpMFC5bf1aAX0tHL9uMPqSTQ39haMmAzCGvPTZRYOgChZlXUvJYa36Oi61lRbKlbI52fWXPlItuRb0BdE5DH"
                alt=""
              />
              <div className="album-overlay">
                <span className="material-symbols-outlined album-fullscreen-icon-small" data-icon="fullscreen">
                  fullscreen
                </span>
              </div>
            </div>

            <div className="masonry-item-tall album-gallery-item">
              <img
                className="album-gallery-image album-image-tall"
                data-alt="A sharp, detailed photograph of a mountain crest silhouetted against a pale, brooding sky. The lighting is moody and editorial, highlighting the ridge's jagged geometric profile. The palette is strictly limited to grayscale and deep teals, maintaining the professional minimalist aesthetic of a high-end photography portfolio."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgv1Sg7cJBX0Sg3L_yBOrUe9BfWtOVfWoe65BZfFrw9BPpc40qNN50SDDLp8DkwGy_o5doW8-LQfdZEun_b5uxSlYi_Gqdosnm3lKH8cZTmu4s8XvRre132hJwL2tEsouX8gRok-yxIL0wMPXL8GLXpwhAf-UN0gSi1BK9n9qtIQLyjFX7FRW5SL3CAd4_WLMMiVghvw2veordFFPSisnSoMxXGZJObYV0-Qy7p4SCzh1s2xrRU_WsstW9S6igw2xI0yz-Md25K49r"
                alt=""
              />
            </div>
            <div className="masonry-item-tall album-gallery-item">
              <img
                className="album-gallery-image album-image-tall"
                data-alt="A moody aerial perspective of a dark Scottish loch surrounded by steep, shadow-filled mountains. The water is calm and reflects the heavy, dark clouds above. The visual style is high-contrast and noir, using subtle tonal layers of charcoal and deep emerald to create depth without using artificial shadows."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu53EHCpPk2xqyLEDv8AzvBcUmCve-VGPgcbwoEtAj2Jv6L7FsxcJKSqH7Mlz_enKWSE6_NKx4R0T5VU43lvOg1KPE5AwMYTqJL-0pEKtzqG3J44LAcGycR4O6KLCP5F6kt2WlWVcQjQgU6XB2JE2C43sgqaOKabmfha1WHf9umf8nMD1wwliIyu0ifZXxQojTWXmkMeTK3_ctPWEuE6g53w4FURpdCCG51ImMswqANmTNh-c-vM-BvBa1fTEHjoazKeo5u5x92Pdn"
                alt=""
              />
            </div>
            <div className="masonry-item-tall album-gallery-item">
              <img
                className="album-gallery-image album-image-tall"
                data-alt="A dramatic close-up of weathered stone and moss in the Highlands, showcasing the raw textures of the landscape. The lighting is cold and sharp, picking out every detail of the rock face. The color palette features deep teal shadows and muted earthy tones, echoing the brand's fusion of technology and the raw horizon."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuxVawKb96WOJdNvjo55VSxWfbxZ8X9W5uCvXYi_avbbokKGSMvET81TAY9jGYlmZrLmHnak7Qrj6ytLXs77u2T8qcBx1bUo6RrKgzwFug58TMPf54VKCF8L081opqQICXwxkPv23DHaFJiKli40V2k0ONHx4q9Gk5CzpTMNr_zAKTKcp55m3a0bmC7hcvMbyGToIsLZGXb8yyOvkcD0PW5t0_b9ZV1THWTQphxkqY5ncCg6iRrS6cqemnezUchVMKqpT-cSYZTqjv"
                alt=""
              />
            </div>
          </div>
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