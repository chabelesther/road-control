// Base de données complète des véhicules
export const databaseVehicles: Vehicle[] = [
  {
    plate: "AB 8548",
    status: "vérifié",
    timestamp: "14:30:22",
    camera: "Nord-1",
    owner: "Martin Dubois",
    model: "Peugeot 308",
    color: "Gris",
    year: "2019",
    insurance: "Valide jusqu'au 12/06/2024",
    registrationDate: "15/07/2019",
    lastControl: "03/02/2023",
    infractions: "0",
  },
  {
    plate: "AA 87775",
    status: "vérifié",
    timestamp: "14:30:45",
    camera: "Est-2",
    owner: "Sophie Laurent",
    model: "Renault Clio",
    color: "Rouge",
    year: "2020",
    insurance: "Valide jusqu'au 28/03/2024",
    registrationDate: "10/01/2020",
    lastControl: "15/11/2022",
    infractions: "1",
  },
  {
    plate: "CB 6965",
    status: "non vérifié",
    timestamp: "14:31:02",
    camera: "Sud-1",
    owner: "Thomas Moreau",
    model: "Citroen C3",
    color: "Bleu",
    year: "2018",
    insurance: "Expirée depuis le 05/01/2024",
    registrationDate: "22/03/2018",
    lastControl: "17/05/2022",
    infractions: "3",
  },
  {
    plate: "CD 8947",
    status: "vérifié",
    timestamp: "14:31:15",
    camera: "Ouest-3",
    owner: "Léa Bernard",
    model: "Toyota Yaris",
    color: "Blanc",
    year: "2021",
    insurance: "Valide jusqu'au 30/09/2024",
    registrationDate: "14/06/2021",
    lastControl: "Jamais effectué",
    infractions: "0",
  },
  {
    plate: "BC 2314",
    status: "vérifié",
    timestamp: "14:32:08",
    camera: "Nord-2",
    owner: "Pierre Durand",
    model: "Volkswagen Golf",
    color: "Noir",
    year: "2017",
    insurance: "Valide jusqu'au 15/10/2024",
    registrationDate: "20/08/2017",
    lastControl: "05/12/2022",
    infractions: "1",
  },
  {
    plate: "DF 9078",
    status: "non vérifié",
    timestamp: "14:32:45",
    camera: "Est-1",
    owner: "Marie Lefebvre",
    model: "Audi A3",
    color: "Gris métallisé",
    year: "2020",
    insurance: "Expirée depuis le 12/12/2023",
    registrationDate: "28/02/2020",
    lastControl: "10/10/2022",
    infractions: "2",
  },
  {
    plate: "EF 5642",
    status: "vérifié",
    timestamp: "14:33:12",
    camera: "Sud-2",
    owner: "Julie Mercier",
    model: "BMW Série 1",
    color: "Bleu nuit",
    year: "2019",
    insurance: "Valide jusqu'au 03/05/2024",
    registrationDate: "17/04/2019",
    lastControl: "22/01/2023",
    infractions: "0",
  },
  {
    plate: "GH 7890",
    status: "non vérifié",
    timestamp: "14:33:58",
    camera: "Ouest-1",
    owner: "Nicolas Fournier",
    model: "Mercedes Classe A",
    color: "Argent",
    year: "2018",
    insurance: "Non renseignée",
    registrationDate: "09/09/2018",
    lastControl: "14/07/2022",
    infractions: "4",
  },
  {
    plate: "IJ 1234",
    status: "vérifié",
    timestamp: "14:34:23",
    camera: "Nord-3",
    owner: "Emma Girard",
    model: "Ford Fiesta",
    color: "Vert",
    year: "2022",
    insurance: "Valide jusqu'au 20/11/2024",
    registrationDate: "05/03/2022",
    lastControl: "Jamais effectué",
    infractions: "0",
  },
  {
    plate: "KL 5678",
    status: "non vérifié",
    timestamp: "14:35:10",
    camera: "Est-3",
    owner: "Antoine Roux",
    model: "Opel Corsa",
    color: "Jaune",
    year: "2016",
    insurance: "Expirée depuis le 18/02/2024",
    registrationDate: "12/12/2016",
    lastControl: "30/08/2022",
    infractions: "2",
  },
  {
    plate: "MN 9012",
    status: "vérifié",
    timestamp: "14:36:05",
    camera: "Sud-3",
    owner: "Claire Dupont",
    model: "Dacia Sandero",
    color: "Beige",
    year: "2020",
    insurance: "Valide jusqu'au 08/07/2024",
    registrationDate: "23/05/2020",
    lastControl: "12/03/2023",
    infractions: "0",
  },
  {
    plate: "OP 3456",
    status: "non vérifié",
    timestamp: "14:36:32",
    camera: "Ouest-2",
    owner: "Lucas Martin",
    model: "Seat Ibiza",
    color: "Rouge foncé",
    year: "2017",
    insurance: "Expirée depuis le 22/03/2024",
    registrationDate: "18/11/2017",
    lastControl: "25/09/2022",
    infractions: "1",
  },
  {
    plate: "QR 7890",
    status: "vérifié",
    timestamp: "14:37:14",
    camera: "Nord-1",
    owner: "Camille Leroy",
    model: "Kia Sportage",
    color: "Blanc nacré",
    year: "2021",
    insurance: "Valide jusqu'au 14/12/2024",
    registrationDate: "30/01/2021",
    lastControl: "05/05/2023",
    infractions: "0",
  },
  {
    plate: "ST 1234",
    status: "non vérifié",
    timestamp: "14:38:01",
    camera: "Est-2",
    owner: "Mathieu Petit",
    model: "Nissan Qashqai",
    color: "Gris anthracite",
    year: "2019",
    insurance: "Non renseignée",
    registrationDate: "12/04/2019",
    lastControl: "18/10/2022",
    infractions: "3",
  },
  {
    plate: "UV 5678",
    status: "vérifié",
    timestamp: "14:38:47",
    camera: "Sud-1",
    owner: "Sarah Bonnet",
    model: "Hyundai i30",
    color: "Bleu clair",
    year: "2022",
    insurance: "Valide jusqu'au 25/08/2024",
    registrationDate: "08/02/2022",
    lastControl: "Jamais effectué",
    infractions: "0",
  },
  {
    plate: "WX 9012",
    status: "non vérifié",
    timestamp: "14:39:23",
    camera: "Ouest-3",
    owner: "Hugo Fontaine",
    model: "Fiat 500",
    color: "Noir mat",
    year: "2018",
    insurance: "Expirée depuis le 10/04/2024",
    registrationDate: "22/07/2018",
    lastControl: "14/12/2022",
    infractions: "2",
  },
  {
    plate: "YZ 3456",
    status: "vérifié",
    timestamp: "14:40:05",
    camera: "Nord-2",
    owner: "Anna Rousseau",
    model: "Skoda Fabia",
    color: "Orange",
    year: "2020",
    insurance: "Valide jusqu'au 18/05/2024",
    registrationDate: "03/09/2020",
    lastControl: "27/01/2023",
    infractions: "0",
  },
  {
    plate: "AB 7890",
    status: "non vérifié",
    timestamp: "14:41:12",
    camera: "Est-1",
    owner: "Victor Lemoine",
    model: "Suzuki Swift",
    color: "Violet",
    year: "2016",
    insurance: "Expirée depuis le 30/01/2024",
    registrationDate: "15/03/2016",
    lastControl: "08/08/2022",
    infractions: "5",
  },
  {
    plate: "CD 1234",
    status: "vérifié",
    timestamp: "14:42:08",
    camera: "Sud-2",
    owner: "Lucie Marchand",
    model: "Mini Cooper",
    color: "British Racing Green",
    year: "2021",
    insurance: "Valide jusqu'au 07/10/2024",
    registrationDate: "19/12/2021",
    lastControl: "04/06/2023",
    infractions: "0",
  },
  {
    plate: "EF 5678",
    status: "non vérifié",
    timestamp: "14:43:15",
    camera: "Ouest-1",
    owner: "Julien Morvan",
    model: "Mazda 3",
    color: "Rouge bordeaux",
    year: "2017",
    insurance: "Non renseignée",
    registrationDate: "25/05/2017",
    lastControl: "16/11/2022",
    infractions: "2",
  },
  {
    plate: "GH 9012",
    status: "vérifié",
    timestamp: "14:44:22",
    camera: "Nord-3",
    owner: "Manon Dumas",
    model: "Honda Civic",
    color: "Bleu marine",
    year: "2019",
    insurance: "Valide jusqu'au 12/09/2024",
    registrationDate: "07/08/2019",
    lastControl: "20/04/2023",
    infractions: "1",
  },
  {
    plate: "IJ 3456",
    status: "non vérifié",
    timestamp: "14:45:03",
    camera: "Est-3",
    owner: "Maxime Giraud",
    model: "Lexus IS",
    color: "Gris souris",
    year: "2020",
    insurance: "Expirée depuis le 02/02/2024",
    registrationDate: "11/06/2020",
    lastControl: "09/12/2022",
    infractions: "0",
  },
  {
    plate: "KL 7890",
    status: "vérifié",
    timestamp: "14:46:18",
    camera: "Sud-3",
    owner: "Aurélie Faure",
    model: "Volvo V40",
    color: "Blanc crème",
    year: "2018",
    insurance: "Valide jusqu'au 21/07/2024",
    registrationDate: "30/10/2018",
    lastControl: "13/03/2023",
    infractions: "0",
  },
  {
    plate: "MN 1234",
    status: "non vérifié",
    timestamp: "14:47:32",
    camera: "Ouest-2",
    owner: "Romain Blanc",
    model: "Jaguar XE",
    color: "Noir brillant",
    year: "2021",
    insurance: "Valide jusqu'au 15/01/2025",
    registrationDate: "04/04/2021",
    lastControl: "Jamais effectué",
    infractions: "0",
  },
  {
    plate: "OP 5678",
    status: "vérifié",
    timestamp: "14:48:45",
    camera: "Nord-1",
    owner: "Céline Morel",
    model: "Alfa Romeo Giulia",
    color: "Rouge Alfa",
    year: "2019",
    insurance: "Valide jusqu'au 28/04/2024",
    registrationDate: "17/09/2019",
    lastControl: "02/05/2023",
    infractions: "1",
  },
  {
    plate: "QR 9012",
    status: "non vérifié",
    timestamp: "14:49:17",
    camera: "Est-2",
    owner: "Florian Perrin",
    model: "Jeep Renegade",
    color: "Marron",
    year: "2017",
    insurance: "Expirée depuis le 14/03/2024",
    registrationDate: "09/01/2017",
    lastControl: "21/10/2022",
    infractions: "2",
  },
  {
    plate: "ST 3456",
    status: "vérifié",
    timestamp: "14:50:03",
    camera: "Sud-1",
    owner: "Marine Leclerc",
    model: "DS 3",
    color: "Noir/Rouge",
    year: "2020",
    insurance: "Valide jusqu'au 10/06/2024",
    registrationDate: "28/11/2020",
    lastControl: "17/02/2023",
    infractions: "0",
  },
  {
    plate: "UV 7890",
    status: "non vérifié",
    timestamp: "14:51:12",
    camera: "Ouest-3",
    owner: "David Simon",
    model: "Land Rover Evoque",
    color: "Gris sidéral",
    year: "2018",
    insurance: "Non renseignée",
    registrationDate: "13/05/2018",
    lastControl: "25/09/2022",
    infractions: "3",
  },
  {
    plate: "WX 1234",
    status: "vérifié",
    timestamp: "14:52:30",
    camera: "Nord-2",
    owner: "Audrey Vidal",
    model: "Smart ForTwo",
    color: "Bleu électrique",
    year: "2021",
    insurance: "Valide jusqu'au 05/11/2024",
    registrationDate: "20/03/2021",
    lastControl: "06/07/2023",
    infractions: "0",
  },
  {
    plate: "YZ 5678",
    status: "non vérifié",
    timestamp: "14:53:42",
    camera: "Est-1",
    owner: "Guillaume Legrand",
    model: "Mitsubishi ASX",
    color: "Vert foncé",
    year: "2016",
    insurance: "Expirée depuis le 18/12/2023",
    registrationDate: "02/08/2016",
    lastControl: "11/11/2022",
    infractions: "4",
  },
  {
    plate: "AB 9012",
    status: "vérifié",
    timestamp: "14:54:58",
    camera: "Sud-2",
    owner: "Elodie Hubert",
    model: "Subaru Impreza",
    color: "Bleu roi",
    year: "2019",
    insurance: "Valide jusqu'au 23/08/2024",
    registrationDate: "14/10/2019",
    lastControl: "03/04/2023",
    infractions: "0",
  },
  {
    plate: "CD 3456",
    status: "non vérifié",
    timestamp: "14:55:34",
    camera: "Ouest-1",
    owner: "Quentin Caron",
    model: "Chevrolet Spark",
    color: "Rouge vif",
    year: "2017",
    insurance: "Expirée depuis le 09/02/2024",
    registrationDate: "27/07/2017",
    lastControl: "16/08/2022",
    infractions: "1",
  },
  {
    plate: "EF 7890",
    status: "vérifié",
    timestamp: "14:56:09",
    camera: "Nord-3",
    owner: "Marion Weber",
    model: "Tesla Model 3",
    color: "Blanc nacré",
    year: "2022",
    insurance: "Valide jusqu'au 19/12/2024",
    registrationDate: "05/01/2022",
    lastControl: "Jamais effectué",
    infractions: "0",
  },
  {
    plate: "GH 1234",
    status: "non vérifié",
    timestamp: "14:57:25",
    camera: "Est-3",
    owner: "Sébastien Meunier",
    model: "Porsche Macan",
    color: "Gris argenté",
    year: "2020",
    insurance: "Non renseignée",
    registrationDate: "11/11/2020",
    lastControl: "22/05/2023",
    infractions: "2",
  },
  {
    plate: "IJ 5678",
    status: "vérifié",
    timestamp: "14:58:47",
    camera: "Sud-3",
    owner: "Caroline Tanguy",
    model: "Peugeot 2008",
    color: "Bleu turquoise",
    year: "2018",
    insurance: "Valide jusqu'au 01/10/2024",
    registrationDate: "24/04/2018",
    lastControl: "19/01/2023",
    infractions: "0",
  },
  {
    plate: "KL 9012",
    status: "non vérifié",
    timestamp: "14:59:53",
    camera: "Ouest-2",
    owner: "Bastien Gaudin",
    model: "Renault Kadjar",
    color: "Orange métallisé",
    year: "2017",
    insurance: "Expirée depuis le 27/04/2024",
    registrationDate: "08/06/2017",
    lastControl: "15/09/2022",
    infractions: "3",
  },
  {
    plate: "MN 3456",
    status: "vérifié",
    timestamp: "15:01:05",
    camera: "Nord-1",
    owner: "Amandine Robin",
    model: "Audi Q3",
    color: "Noir cosmos",
    year: "2019",
    insurance: "Valide jusqu'au 12/03/2025",
    registrationDate: "30/09/2019",
    lastControl: "04/04/2023",
    infractions: "0",
  },
  {
    plate: "OP 7890",
    status: "non vérifié",
    timestamp: "15:02:18",
    camera: "Est-2",
    owner: "Laurent Menard",
    model: "BMW X1",
    color: "Gris minéral",
    year: "2021",
    insurance: "Valide jusqu'au 17/07/2024",
    registrationDate: "13/08/2021",
    lastControl: "23/02/2023",
    infractions: "1",
  },
  {
    plate: "QR 1234",
    status: "vérifié",
    timestamp: "15:03:29",
    camera: "Sud-1",
    owner: "Nathalie Guichard",
    model: "Mercedes GLA",
    color: "Blanc polaire",
    year: "2020",
    insurance: "Valide jusqu'au 29/05/2024",
    registrationDate: "02/12/2020",
    lastControl: "18/10/2022",
    infractions: "0",
  },
];
