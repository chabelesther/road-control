"use client";
import Image from "next/image";
// components/WebcamStream.tsx
import React, { useRef, useEffect } from "react";

const WebcamStream = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const enableVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: undefined, // ou spécifie DroidCam ici
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Erreur d'accès à la webcam:", err);
      }
    };

    enableVideoStream();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{ width: "100%", height: "auto", backgroundColor: "black" }}
      />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          layout="fill"
          src="http://localhost:8000/video"
          alt="Flux vidéo"
          className="w-full max-w-4xl"
          onError={(e) => {
            e.target.alt = "Erreur : Impossible de charger le flux vidéo";
            console.error("Erreur de chargement du flux");
          }}
        />
      </div>
    </div>
  );
};

export default WebcamStream;
