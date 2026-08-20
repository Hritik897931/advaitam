"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Play, Pause, X } from "lucide-react";
import { VideoHeroProps } from "./types";

export function VideoHero({
  src,
  label = "DESTINATION",
  title = "Jim Corbett.",
  subtitle = "Nature's Finest.",
  description = "A land of breathtaking beauty, thriving wildlife, and rising opportunities.",
  ctaText = "EXPLORE DESTINATION",
  ctaHref,
  className = "",
  onEnded,
}: Readonly<VideoHeroProps>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [isPlaying]);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    onEnded?.();
  }, [onEnded]);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting && !video.paused) {
          setIsFloating(true);
        } else if (entry.isIntersecting) {
          setIsFloating(false);
        }
      },
      { threshold: 0 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const closeFloating = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setIsFloating(false);
  }, []);


  return (
    <section
      ref={sectionRef}
      className={`group/section relative w-full h-[50vh] min-h-[450px] overflow-hidden bg-ink ${className}`}
    >
      <div 
        className={isFloating 
          ? "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-48 sm:w-80 aspect-video shadow-2xl rounded-lg overflow-hidden transition-all duration-300 pointer-events-auto bg-ink border border-ivory/20" 
          : "absolute inset-0 z-0"
        }
      >
        <video
          ref={videoRef}
          src={src}
          playsInline
          className="h-full w-full object-cover pointer-events-none"
          onEnded={handleEnded}
          translate="no"
          controlsList="nodownload"
        >
          <track kind="captions" />
        </video>
        
        {isFloating && (
          <button
            type="button"
            onClick={closeFloating}
            className="absolute top-2 right-2 p-1.5 bg-ink/80 hover:bg-ink rounded-full text-ivory/80 hover:text-ivory backdrop-blur-sm transition-colors border border-ivory/20"
            aria-label="Close video"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Dark overlay for readability - Always Visible */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent pointer-events-none" />

      {/* Left content - Always Visible */}
      <div className="absolute inset-0 z-20 mx-auto flex w-full max-w-[1400px] flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pointer-events-none">
        <p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-brass uppercase pointer-events-auto w-max">
          {label}
        </p>

        <h1 className="max-w-xl text-4xl leading-tight font-display text-ivory sm:text-5xl lg:text-6xl pointer-events-auto w-max">
          {title}
          <br />
          <span className="italic text-brass-soft">{subtitle}</span>
        </h1>

        <p className="mt-5 max-w-md text-[13px] leading-relaxed text-ivory/80 sm:text-sm pointer-events-auto">
          {description}
        </p>

        {ctaText && (
          <div className="mt-8 pointer-events-auto w-max">
            {ctaHref ? (
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] text-brass uppercase transition hover:text-brass-soft border-b border-brass/30 pb-1 hover:border-brass/50"
              >
                {ctaText}
                <span aria-hidden>→</span>
              </a>
            ) : (
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] text-brass uppercase transition hover:text-brass-soft border-b border-brass/30 pb-1 hover:border-brass/50"
              >
                {ctaText}
                <span aria-hidden>→</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Play/Pause button (center on desktop, pushed down on mobile) */}
      {!isFloating && (
        <button
          type="button"
        onClick={togglePlay}
        className={`absolute top-[80%] md:top-1/2 left-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 group transition-opacity duration-500 ${isPlaying ? 'opacity-0 group-hover/section:opacity-100' : 'opacity-100'}`}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/40 transition group-hover:border-ivory/80 sm:h-[72px] sm:w-[72px] bg-ink/10 backdrop-blur-sm">
          {isPlaying ? (
            <Pause className="h-6 w-6 fill-ivory text-ivory sm:h-7 sm:w-7" />
          ) : (
            <Play className="ml-1 h-6 w-6 fill-ivory text-ivory sm:h-7 sm:w-7" />
          )}
        </div>
        <span className="text-[10px] font-bold tracking-[0.15em] text-brass uppercase">
          {isPlaying ? "PAUSE VIDEO" : "PLAY VIDEO"}
        </span>
      </button>
      )}

    </section>
  );
}
