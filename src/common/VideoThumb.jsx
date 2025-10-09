'use client';

import React, { useState } from 'react';

const VideoThumbnail = ({ thumbnailSrc, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract the YouTube video ID from URL
  const getYouTubeID = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeID(videoSrc);

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-xl shadow-lg">
      {!isPlaying ? (
        <div
          className="relative cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-90"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnailSrc}
            alt="Video thumbnail"
            className="w-full h-[400px] object-cover"
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-transform duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25v13.5L19.5 12 5.25 5.25z"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="aspect-video w-full rounded-xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;
