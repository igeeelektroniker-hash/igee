"use client";

import { useEffect, useState } from "react";

type HeroSliderProps = {
  images: string[];
  className?: string;
};

export default function HeroSlider({ images, className }: HeroSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <section className={`relative overflow-hidden ${className ?? ""}`}>
      {images.map((image, imageIndex) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            imageIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden={imageIndex !== index}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/30" />

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              dotIndex === index
                ? "bg-primary ring-2 ring-white/60"
                : "bg-secondary/80 hover:bg-secondary"
            }`}
            aria-label={`${dotIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
