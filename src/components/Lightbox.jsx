import React, { useRef, useEffect } from "react";

export default function Lightbox({
    images,
    selectedIndex,
    setSelectedIndex,
}) {

    const changeImage = (direction) => {
        setSelectedIndex(prev => {
            if (prev === null) return 0;

            const nextIndex = prev + direction;

            if (nextIndex < 0) return images.length - 1;
            if (nextIndex >= images.length) return 0;

            return nextIndex;
        });
    };

    const close = (e) => {
        e?.stopPropagation();
        setSelectedIndex(null);
    };

    const touchStartX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        const threshold = 50;

        if (diff > threshold) {
            changeImage(+1);
        } else if (diff < -threshold) {
            changeImage(-1);
        }

        touchStartX.current = null;
    };

    // --- NAVIGATION FUNCTIONS previous image ---
    const goPrev = (e) => {
        e?.stopPropagation();
        changeImage(-1);
    };

    // --- NAVIGATION FUNCTIONS next image ---
    const goNext = (e) => {
        e?.stopPropagation();
        changeImage(+1);
    };

    // --- KEYBOARD NAVIGATION ---
    useEffect(() => {
        const handleKeyDown = (e) => {

            if (e.key === "Escape") {
                setSelectedIndex(null);
                return;
            }

            if (e.key === "ArrowRight") {
                changeImage(+1);
            }

            if (e.key === "ArrowLeft") {
                changeImage(-1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => { window.removeEventListener("keydown", handleKeyDown) };

    }, [images.length]);

    return (
        selectedIndex !== null && (
            <div className="lightbox" onClick={() => setSelectedIndex(null)}>

                <button
                    className="lightbox-close"
                    onClick={close}

                >
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>

                <button
                    className="lightbox-arrow lightbox-arrow-left"
                    onClick={goPrev}
                >
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>

                <div className="lightbox-image"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}>

                    <img
                        src={images[selectedIndex].url}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <div className="lightbox-caption">
                        <p>{images[selectedIndex].caption}</p>
                    </div>
                </div>

                {/* RIGHT */}
                <button
                    className="lightbox-arrow lightbox-arrow-right"
                    onClick={goNext}
                >
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
        )
    );
}