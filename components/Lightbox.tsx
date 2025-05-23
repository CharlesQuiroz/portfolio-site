"use client";
import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";

// Gallery Category Type
export type GalleryCategory = {
    title: string;
    src: string;
};

// Component for individual gallery item
export const GalleryItem = ({
    item,
    onClick,
}: {
    item: GalleryCategory;
    onClick: () => void;
}) => {
    return (
        <div
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
            onClick={onClick}
        >
            <div className="relative w-full h-64">
                <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-sm font-medium truncate">{item.title}</h3>
            </div>
        </div>
    );
};

// Gallery Section Component - with horizontal scroll
export const GallerySection = ({
    title,
    items = [],
    onImageClick,
}: {
    title: string;
    items?: GalleryCategory[];
    onImageClick: (categoryItems: GalleryCategory[], index: number) => void;
}) => {
    const scrollRef = useRef<HTMLDivElement>(null); // Always declare the ref first

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = 288 + 16; // image width + gap
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    // Always render the section, even if there are no items
    return (
        <section className="mb-12 relative">
            <h2 className="text-2xl font-bold mb-6 text-white border-b pb-2">
                {title}
            </h2>

            {/* Arrow buttons */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-[200px] transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full"
                aria-label="Scroll left"
            >
                ←
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-[200px] transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full"
                aria-label="Scroll right"
            >
                →
            </button>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-2 space-x-4"
            >
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div
                            key={`${title}-${index}`}
                            className="snap-start flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[370px] min-w-0"
                        >
                            <GalleryItem
                                item={item}
                                onClick={() => onImageClick(items, index)}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-white">No items available</p> // Placeholder message if no items exist
                )}
            </div>
        </section>
    );
};

// Lightbox Component
const Lightbox = ({
    items,
    currentIndex,
    onClose,
    onPrev,
    onNext,
}: {
    items: GalleryCategory[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) => {
    // Use useMemo to compute currentItem unconditionally
    const currentItem = useMemo(() => {
        return items.length > 0 ? items[currentIndex] : null;
    }, [items, currentIndex]);

    // Unconditional useEffect
    useEffect(() => {
        // Skip event listeners if no items
        if (items.length === 0) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowLeft":
                    onPrev();
                    break;
                case "ArrowRight":
                    onNext();
                    break;
                case "Escape":
                    onClose();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [items.length, onClose, onPrev, onNext]);

    // If no items, render a placeholder or nothing
    if (!items.length) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                <p className="text-white">No images to display</p>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center">
            <div className="absolute top-4 right-4 z-10">
                <button
                    onClick={onClose}
                    className="text-white text-4xl hover:text-gray-300"
                    aria-label="Close lightbox"
                >
                    &times;
                </button>
            </div>

            <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                    {currentItem && (
                        <Image
                            src={currentItem.src}
                            alt={currentItem.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 80vw"
                        />
                    )}
                </div>
            </div>

            {/* Top-center navigation with index */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 text-white">
                {/* Prev Button (←) */}
                <button
                    className="bg-green-500 bg-opacity-60 hover:bg-blue-400 text-lg px-3 py-1 rounded transition"
                    onClick={onPrev}
                    aria-label="Previous image"
                >
                    ←
                </button>

                {/* Index */}
                <div
                    className="bg-black/60 text-sm font-semibold px-4 py-1 rounded font-black"
                    aria-live="polite"
                >
                    {currentIndex + 1} / {items.length}
                </div>

                {/* Next Button (→) */}
                <button
                    className="bg-green-500 bg-opacity-60 hover:bg-blue-400 text-lg px-3 py-1 rounded transition"
                    onClick={onNext}
                    aria-label="Next image"
                >
                    →
                </button>
            </div>

            {/* Title below navigation */}
            <div className="absolute bottom-30 left-0 right-0 text-center text-white">
                <h2 className="text-xl bg-black/60 font-bold mt-4 px-4 py-2 rounded w-full break-words">
                    {currentItem?.title}
                </h2>
            </div>
        </div>
    );
};

export default Lightbox;
