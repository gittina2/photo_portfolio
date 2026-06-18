import React, { useRef } from "react";

export default function Lightbox({
    images,
    selectedIndex,
    setSelectedIndex,
}) {

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
            setSelectedIndex((prev) =>
                prev < images.length - 1 ? prev + 1 : 0
            );
        } else if (diff < -threshold) {
            setSelectedIndex((prev) =>
                prev > 0 ? prev - 1 : images.length - 1
            );
        }

        touchStartX.current = null;
    };

    const close = (e) => {
        e.stopPropagation();
        setSelectedIndex(null);
    };

    // --- NAVIGATION FUNCTIONS previous image ---
    const goPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex(prev =>
            prev > 0 ? prev - 1 : images.length - 1
        );
    };

    // --- NAVIGATION FUNCTIONS next image ---
    const goNext = (e) => {
        e.stopPropagation();
        setSelectedIndex(prev =>
            prev < images.length - 1 ? prev + 1 : 0
        );
    };
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