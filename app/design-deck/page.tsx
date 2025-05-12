"use client";
import React, { useState } from "react";
import Lightbox, { GalleryCategory, GallerySection } from "@/components/Lightbox";
import { PixelArts, Sketches, DigitalArt } from "@/constants";

const Page = () => {
  const [lightboxItems, setLightboxItems] = useState<GalleryCategory[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleImageClick = (items: GalleryCategory[], index: number) => {
    setLightboxItems(items);
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const handleClose = () => setIsLightboxOpen(false);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % lightboxItems.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-30 px-4"
      style={{ backgroundImage: "url('/city-bg-5.png')" }}
    >
      <div className="max-w-6xl mx-auto">
        <GallerySection title="Pixel Arts" items={PixelArts} onImageClick={handleImageClick} />
        <GallerySection title="Sketches" items={Sketches} onImageClick={handleImageClick} />
        <GallerySection title="Digital Art" items={DigitalArt} onImageClick={handleImageClick} />
      </div>

      {isLightboxOpen && (
        <Lightbox
          items={lightboxItems}
          currentIndex={currentIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Page;
