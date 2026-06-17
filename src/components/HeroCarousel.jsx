import { useEffect, useState } from "react";

export default function HeroCarousel({ slides }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="hero-bg-wrapper">
            <div className="hero-zoom-layer">
                {slides.map((slide, i) => (
                    <img
                        key={slide.id}
                        src={slide?.image}
                        className={`hero-bg-img ${i === index ? "active" : ""}`}
                        style={{
                            objectPosition: slide.mobilePosition || "center"
                        }}
                        alt=""
                    />
                ))}
            </div>
            <div className="hero-overlay-gradient" />
        </div >
    );
}