import ProductCard from "./ProductCard";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { products } from "../../../constants/products";

const EverlaneSection: React.FC = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateArrows = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth / 4;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth * 3 : cardWidth * 3,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="everlane-section">
      <header className="section-header">
        <h2>Everlane Favorites</h2>
        <p>
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </p>
      </header>

      <div className="relative">
        {showLeftArrow && (
          <button
            className="scroll-arrow left-arrow"
            aria-label="Previous"
            onClick={() => scroll("left")}
          >
            ❮
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="scroll-container"
          onScroll={updateArrows}
        >
          {products.map((product, index) => (
            <div key={index} className="product-card-container">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="scroll-arrow right-arrow"
            aria-label="Next"
            onClick={() => scroll("right")}
          >
            ❯
          </button>
        )}
      </div>
    </section>
  );
};

export default EverlaneSection;
