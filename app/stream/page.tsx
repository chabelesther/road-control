"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

const VideoStream: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const socketRef = useRef<WebSocket | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRequestRef = useRef<number | null>(null);
  const latestImageUrl = useRef<string>("");

  // Optimisation pour réduire les re-renders
  const updateImage = useCallback(() => {
    if (latestImageUrl.current && imageRef.current) {
      imageRef.current.src = latestImageUrl.current;
    }
    frameRequestRef.current = requestAnimationFrame(updateImage);
  }, []);

  useEffect(() => {
    const connectWebSocket = () => {
      const ws = new WebSocket("ws://localhost:8000/ws");

      ws.onopen = () => {
        console.log("Connexion WebSocket établie");
        socketRef.current = ws;
      };

      ws.onmessage = (event) => {
        // Stocker l'URL de l'image sans déclencher de re-render
        latestImageUrl.current = event.data;
      };

      ws.onerror = (error) => {
        console.error("Erreur WebSocket:", error);
        setTimeout(connectWebSocket, 2000);
      };

      ws.onclose = () => {
        console.log("Connexion WebSocket fermée");
      };
    };

    connectWebSocket();

    // Démarrer la boucle d'animation pour mise à jour fluide
    frameRequestRef.current = requestAnimationFrame(updateImage);

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
      if (frameRequestRef.current) {
        cancelAnimationFrame(frameRequestRef.current);
      }
    };
  }, [updateImage]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">
        Détection de Plaques en Temps Réel
      </h2>
      <img
        ref={imageRef}
        alt="Flux vidéo en direct"
        className="max-w-full border border-gray-300 rounded-lg"
        style={{ maxHeight: "80vh" }}
      />
    </div>
  );
};

export default VideoStream;
