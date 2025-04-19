"use client";
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
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{ width: "100%", height: "auto", backgroundColor: "black" }}
      />
    </div>
  );
};

export default WebcamStream;
