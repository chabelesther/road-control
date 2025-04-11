"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { databaseVehicles } from "./databaseVehicles";
import { toast } from "sonner";
import {
  Bell,
  BarChart4,
  X,
  PieChart,
  TrendingUp,
  Car,
  ShieldCheck,
  AlertTriangle,
  ChevronUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RechartPieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

// Type pour les notifications
interface Notification {
  id: string;
  plate: string;
  timestamp: string;
  read: boolean;
}

export default function Home() {
  // État pour le flux de données simulé
  const [fluxData, setFluxData] = useState<FluxItem[]>([]);

  // État pour le véhicule sélectionné
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  // État pour les notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // État pour afficher/masquer le panel de notifications
  const [showNotifications, setShowNotifications] = useState(false);

  // État pour le modal dashboard
  const [showDashboard, setShowDashboard] = useState(false);

  // Référence pour l'élément audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Référence pour le conteneur de flux
  const fluxContainerRef = useRef<HTMLDivElement>(null);

  // Données pour les statistiques
  const [statsData, setStatsData] = useState({
    todayVerified: 32,
    todayUnverified: 12,
    weeklyVerified: [18, 25, 30, 28, 32, 25, 29],
    weeklyUnverified: [8, 10, 15, 12, 12, 9, 11],
    cameras: [
      { name: "Nord-1", count: 45 },
      { name: "Est-2", count: 38 },
      { name: "Sud-1", count: 29 },
      { name: "Ouest-3", count: 41 },
      { name: "Nord-2", count: 33 },
      { name: "Est-1", count: 27 },
    ],
    vehicleStatus: [
      { name: "Vérifié", value: 78 },
      { name: "Non vérifié", value: 22 },
    ],
  });

  // Données des 24 dernières heures (simulation)
  const hourlyData = [
    { heure: "00h", vérifié: 2, nonVérifié: 1 },
    { heure: "01h", vérifié: 1, nonVérifié: 0 },
    { heure: "02h", vérifié: 0, nonVérifié: 1 },
    { heure: "03h", vérifié: 1, nonVérifié: 0 },
    { heure: "04h", vérifié: 0, nonVérifié: 0 },
    { heure: "05h", vérifié: 1, nonVérifié: 1 },
    { heure: "06h", vérifié: 3, nonVérifié: 0 },
    { heure: "07h", vérifié: 5, nonVérifié: 1 },
    { heure: "08h", vérifié: 7, nonVérifié: 2 },
    { heure: "09h", vérifié: 4, nonVérifié: 3 },
    { heure: "10h", vérifié: 3, nonVérifié: 1 },
    { heure: "11h", vérifié: 5, nonVérifié: 2 },
    { heure: "12h", vérifié: 6, nonVérifié: 1 },
    { heure: "13h", vérifié: 4, nonVérifié: 2 },
    { heure: "14h", vérifié: 5, nonVérifié: 3 },
    { heure: "15h", vérifié: 8, nonVérifié: 2 },
    { heure: "16h", vérifié: 10, nonVérifié: 4 },
    { heure: "17h", vérifié: 12, nonVérifié: 5 },
    { heure: "18h", vérifié: 9, nonVérifié: 3 },
    { heure: "19h", vérifié: 7, nonVérifié: 2 },
    { heure: "20h", vérifié: 5, nonVérifié: 1 },
    { heure: "21h", vérifié: 3, nonVérifié: 2 },
    { heure: "22h", vérifié: 2, nonVérifié: 1 },
    { heure: "23h", vérifié: 1, nonVérifié: 0 },
  ];

  const COLORS = ["#10B981", "#EF4444"];

  // Fonction pour sélectionner un véhicule quand on clique sur un élément du flux
  const handleVehicleSelect = (plate: string) => {
    const vehicle = databaseVehicles.find((v) => v.plate === plate);
    setSelectedVehicle(vehicle || null);
  };

  // Fonction pour jouer le son de notification
  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((e) => console.error("Erreur de lecture audio:", e));
    }
  };

  // Fonction pour gérer les notifications
  const handleNotification = (vehicle: { plate: string; status: string }) => {
    if (vehicle.status === "non vérifié") {
      // Jouer le son
      playNotificationSound();

      // Afficher un toast avec Sonner
      toast.error("Véhicule non vérifié détecté", {
        description: `Plaque d'immatriculation: ${vehicle.plate}`,
        duration: 5000,
        action: {
          label: "Voir détails",
          onClick: () => handleVehicleSelect(vehicle.plate),
        },
        icon: <Bell className="h-4 w-4" />,
      });

      // Ajouter une notification
      setNotifications((prev) => {
        // Vérifier si la notification existe déjà
        const exists = prev.some((notif) => notif.plate === vehicle.plate);
        if (exists) return prev;

        // Ajouter nouvelle notification
        return [
          {
            id: `${vehicle.plate}-${Date.now()}`,
            plate: vehicle.plate,
            timestamp: new Date().toLocaleTimeString(),
            read: false,
          },
          ...prev,
        ].slice(0, 10); // Garder seulement les 10 dernières
      });
    }
  };

  // Fonction pour marquer une notification comme lue et afficher les détails
  const handleNotificationClick = (plate: string) => {
    // Marquer comme lue
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.plate === plate ? { ...notif, read: true } : notif
      )
    );

    // Sélectionner le véhicule
    handleVehicleSelect(plate);

    // Fermer le panneau de notifications
    setShowNotifications(false);
  };

  // Fonction pour compter les notifications non lues
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Simulation d'un flux de données en temps réel
  useEffect(() => {
    // Fonction pour ajouter un nouveau véhicule au flux toutes les 2 secondes
    const interval = setInterval(() => {
      // Sélectionner aléatoirement un véhicule de la base de données
      const randomIndex = Math.floor(Math.random() * databaseVehicles.length);
      const newVehicle = databaseVehicles[randomIndex];

      // Créer un nouvel élément de flux
      const newFluxItem = {
        plate: newVehicle.plate,
        status: newVehicle.status,
        timestamp: new Date().toLocaleTimeString(),
      };

      // Ajouter le nouveau véhicule au début du flux (limiter à 15 véhicules)
      setFluxData((prevFlux) => {
        const newFlux = [newFluxItem, ...prevFlux];
        // Garder seulement les 15 plus récents
        return newFlux.slice(0, 15);
      });

      // Vérifier si notification nécessaire
      handleNotification(newFluxItem);

      // Faire défiler automatiquement vers le haut quand de nouvelles données arrivent
      if (fluxContainerRef.current) {
        fluxContainerRef.current.scrollTop = 0;
      }
    }, 2000);

    // Nettoyage de l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen p-4 bg-gray-100">
      {/* Élément audio pour les notifications */}
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />

      {/* Toaster de Sonner pour afficher les toasts */}
      <div>
        {/* Le composant Sonner est déjà configuré via le provider global */}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-center">Road Control</h1>

        <div className="flex items-center space-x-4">
          {/* Bouton pour ouvrir le dashboard */}
          <button
            onClick={() => setShowDashboard(true)}
            className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <BarChart4 className="h-5 w-5" />
            <span className="hidden md:inline">Dashboard</span>
          </button>

          {/* Bouton de notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Panel de notifications */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-20 max-h-[400px] overflow-y-auto">
                <div className="p-3 border-b border-gray-200 font-bold">
                  Notifications
                </div>

                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    Aucune notification
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                        notif.read ? "opacity-60" : "bg-blue-50"
                      }`}
                      onClick={() => handleNotificationClick(notif.plate)}
                    >
                      <div className="flex items-center">
                        <div className="h-2 w-2 mr-2 rounded-full bg-red-500"></div>
                        <div className="font-semibold">
                          Véhicule {notif.plate} non vérifié
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Détecté à {notif.timestamp}
                      </div>
                    </div>
                  ))
                )}

                {notifications.length > 0 && (
                  <div
                    className="p-2 text-center text-sm text-blue-600 cursor-pointer hover:underline border-t border-gray-100"
                    onClick={() => setNotifications([])}
                  >
                    Effacer toutes les notifications
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="w-full p-2 mb-4 bg-white rounded-md border border-red-200">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Rechercher un véhicule par plaque d'immatriculation..."
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Colonne de gauche - Flux de données */}
        <div className="w-full md:w-1/5 bg-white p-4 rounded-md border border-gray-200">
          <h2 className="font-bold mb-4">Flux de données</h2>

          {/* Conteneur avec effet de masque aux extrémités */}
          <div className="relative">
            {/* Masque supérieur */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>

            {/* Conteneur de flux avec défilement */}
            <div
              ref={fluxContainerRef}
              className="max-h-[80vh] overflow-y-auto pr-1 space-y-3"
              style={{
                scrollBehavior: "smooth",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              }}
            >
              {fluxData.map((item, index) => (
                <div
                  key={index}
                  className={`p-2 border rounded-md cursor-pointer hover:bg-gray-50 transition-all duration-300 ${
                    index === 0 ? "animate-pulse bg-gray-50" : ""
                  } ${
                    item.status === "vérifié"
                      ? "border-green-500 text-green-700"
                      : "border-red-500 text-red-700"
                  }`}
                  onClick={() => handleVehicleSelect(item.plate)}
                >
                  <div>{item.plate}</div>
                  <div className="text-xs">
                    {item.status} - {item.timestamp}
                  </div>
                </div>
              ))}
            </div>

            {/* Masque inférieur */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Colonne centrale - Véhicule sélectionné et infos */}
        <div className="w-full md:w-2/5 space-y-4">
          <div className="bg-white p-4 rounded-md border border-gray-200">
            <h2 className="font-bold mb-2">
              Matricule du véhicule sélectionné :{" "}
              {selectedVehicle
                ? selectedVehicle.plate
                : "Aucun véhicule sélectionné"}
            </h2>
          </div>

          <div className="bg-white p-4 rounded-md border border-gray-200">
            <h2 className="font-bold mb-4">Info</h2>
            {selectedVehicle ? (
              <>
                <p>
                  <span className="font-semibold">Propriétaire :</span>{" "}
                  {selectedVehicle.owner}
                </p>
                <p>
                  <span className="font-semibold">Status :</span>{" "}
                  {selectedVehicle.status}
                </p>
                <p>
                  <span className="font-semibold">Modèle :</span>{" "}
                  {selectedVehicle.model}
                </p>
                <p>
                  <span className="font-semibold">Couleur :</span>{" "}
                  {selectedVehicle.color}
                </p>
                <p>
                  <span className="font-semibold">Année :</span>{" "}
                  {selectedVehicle.year}
                </p>
                <p>
                  <span className="font-semibold">Assurance :</span>{" "}
                  {selectedVehicle.insurance}
                </p>
                <p>
                  <span className="font-semibold">
                    Date d&apos;immatriculation :
                  </span>{" "}
                  {selectedVehicle.registrationDate}
                </p>
                <p>
                  <span className="font-semibold">
                    Dernier contrôle technique :
                  </span>{" "}
                  {selectedVehicle.lastControl}
                </p>
                <p>
                  <span className="font-semibold">
                    Nombre d&apos;infractions :
                  </span>{" "}
                  {selectedVehicle.infractions}
                </p>
              </>
            ) : (
              <p>Sélectionnez un véhicule pour voir ses informations</p>
            )}
          </div>
        </div>

        {/* Colonne de droite - Vidéo et statistiques */}
        <div className="w-full md:w-2/5 space-y-4">
          <div className="bg-white p-4 rounded-md border border-gray-200">
            <h2 className="font-bold mb-4">Caméra en cours</h2>
            <div className="relative w-full h-48 bg-black rounded-md overflow-hidden">
              <video
                src="/demo.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                controls
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border border-gray-200">
            <h2 className="font-bold mb-4">Autres caméras :</h2>
            <div className="grid grid-cols-2 gap-2">
              {[...Array(3)].map((_, index) => (
                <div
                  key={`stat-${index}`}
                  className="relative h-24 bg-gray-200 rounded-md overflow-hidden"
                >
                  <video
                    src="/demo2.mp4"
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    // controls
                  />
                </div>
              ))}
              {[...Array(3)].map((_, index) => (
                <div
                  key={`stat-${index}`}
                  className="relative h-24 bg-gray-200 rounded-md overflow-hidden"
                >
                  <video
                    src="/demo1.mp4"
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    // controls
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dashboard en plein écran */}
      {showDashboard && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 overflow-auto flex flex-col">
          <div className="p-4 md:p-6 flex justify-between items-center border-b border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <BarChart4 className="mr-3 h-7 w-7" />
              Tableau de Bord - Road Control
            </h2>
            <button
              onClick={() => setShowDashboard(false)}
              className="p-2 rounded-full hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-4 md:p-6 flex-1 overflow-auto">
            {/* Statistiques principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-sm">
                      Total véhicules aujourd&apos;hui
                    </p>
                    <h3 className="text-3xl font-bold mt-1">
                      {statsData.todayVerified + statsData.todayUnverified}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      <ChevronUp className="inline h-4 w-4 mr-1" />
                      <span>+12% par rapport à hier</span>
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Car className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 shadow-lg text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-sm">Véhicules vérifiés</p>
                    <h3 className="text-3xl font-bold mt-1">
                      {statsData.todayVerified}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      <span>
                        {Math.round(
                          (statsData.todayVerified /
                            (statsData.todayVerified +
                              statsData.todayUnverified)) *
                            100
                        )}
                        % du total
                      </span>
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 shadow-lg text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-sm">
                      Véhicules non vérifiés
                    </p>
                    <h3 className="text-3xl font-bold mt-1">
                      {statsData.todayUnverified}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      <span>
                        {Math.round(
                          (statsData.todayUnverified /
                            (statsData.todayVerified +
                              statsData.todayUnverified)) *
                            100
                        )}
                        % du total
                      </span>
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <AlertTriangle className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 shadow-lg text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-sm">
                      Taux de vérification
                    </p>
                    <h3 className="text-3xl font-bold mt-1">78%</h3>
                    <p className="text-white/80 text-sm mt-2">
                      <TrendingUp className="inline h-4 w-4 mr-1" />
                      <span>+5% cette semaine</span>
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <PieChart className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Graphiques */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Graphique d'histogramme - Véhicules par heure */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Véhicules détectés (dernières 24h)
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={hourlyData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 45 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="heure"
                        angle={-45}
                        textAnchor="end"
                        height={70}
                      />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="vérifié"
                        name="Véhicules vérifiés"
                        fill="#10B981"
                      />
                      <Bar
                        dataKey="nonVérifié"
                        name="Véhicules non vérifiés"
                        fill="#EF4444"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Répartition des véhicules (Camembert) */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Répartition des véhicules
                </h3>
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartPieChart>
                      <Pie
                        data={statsData.vehicleStatus}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={130}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {statsData.vehicleStatus.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartPieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Tendance hebdomadaire */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Tendance sur les 7 derniers jours
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        {
                          day: "Lun",
                          vérifié: statsData.weeklyVerified[0],
                          nonVérifié: statsData.weeklyUnverified[0],
                        },
                        {
                          day: "Mar",
                          vérifié: statsData.weeklyVerified[1],
                          nonVérifié: statsData.weeklyUnverified[1],
                        },
                        {
                          day: "Mer",
                          vérifié: statsData.weeklyVerified[2],
                          nonVérifié: statsData.weeklyUnverified[2],
                        },
                        {
                          day: "Jeu",
                          vérifié: statsData.weeklyVerified[3],
                          nonVérifié: statsData.weeklyUnverified[3],
                        },
                        {
                          day: "Ven",
                          vérifié: statsData.weeklyVerified[4],
                          nonVérifié: statsData.weeklyUnverified[4],
                        },
                        {
                          day: "Sam",
                          vérifié: statsData.weeklyVerified[5],
                          nonVérifié: statsData.weeklyUnverified[5],
                        },
                        {
                          day: "Dim",
                          vérifié: statsData.weeklyVerified[6],
                          nonVérifié: statsData.weeklyUnverified[6],
                        },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="vérifié"
                        name="Véhicules vérifiés"
                        stroke="#10B981"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="nonVérifié"
                        name="Véhicules non vérifiés"
                        stroke="#EF4444"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Détection par caméra */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Détections par caméra
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={statsData.cameras}
                    margin={{ top: 20, right: 30, left: 80, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="count"
                      name="Véhicules détectés"
                      fill="#6366F1"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
