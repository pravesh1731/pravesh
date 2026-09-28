import thaisevaWeb from "../assets/projects/thaiseva-web.webp";
import thaisevaApp1 from "../assets/projects/thaiseva-app-1.webp";
import thaisevaApp2 from "../assets/projects/thaiseva-app-2.webp";
import thaisevaApp3 from "../assets/projects/thaiseva-app-3.webp";
import thaisevaApp4 from "../assets/projects/thaiseva-app-4.webp";
import presentMeWeb from "../assets/projects/presentme-web.webp";
import presentMeApp1 from "../assets/projects/presentme-app-1.webp";
import presentMeApp2 from "../assets/projects/presentme-app-2.webp";
import presentMeApp3 from "../assets/projects/presentme-app-3.webp";
import presentMeApp4 from "../assets/projects/presentme-app-4.webp";
import jasaenWeb from "../assets/projects/jasaen-web.webp";

// Details page URL (hash route, see App.jsx).
export const projectPath = (slug) => `#/projects/${slug}`;

const playStore = (id) => `https://play.google.com/store/apps/details?id=${id}`;

// Each project feeds both its card (category → links) and its details page
// at #/projects/<slug> (overview → stackDetails).
//
// - `live`: main links shown on the card; `github` is null for private code.
// - `links`: extra links shown only on the details page.
// - `image` (website screenshot) is the cover; without it the cover shows the
//   tech logos. `screens` (app screenshots) appear on the details page only.
// - `architecture`: layers drawn left to right on the details page.
export const projects = [
  {
    slug: "thaiseva",
    category: "Travel · Mobile & Web",
    title: "Thaiseva",
    tag: "Client project",
    summary:
      "All-in-one travel platform for Thailand: tours, hotels, taxis and food, run from partner and admin panels.",
    highlights: [
      "Tours, hotels, taxis & food in one app",
      "Real-time chat & payments",
      "Restaurant partner panel",
      "2 super-admin panels",
    ],
    techStack: ["Flutter", "Dart", "Riverpod", "Firebase", "React"],
    live: [
      { kind: "website", label: "Website", href: "https://thaiseva.com/" },
      { kind: "play", label: "Play Store", href: playStore("com.app.thaiseva") },
    ],
    github: null,
    links: [{ kind: "admin", label: "Admin panel", href: "https://gothai-admin.web.app/login" }],
    image: thaisevaWeb,
    screens: [thaisevaApp1, thaisevaApp2, thaisevaApp3, thaisevaApp4],

    overview: [
      "Thaiseva is a complete travel platform built for a Thailand-based client. Travellers can book sightseeing packages, hotels, taxis and vehicle rentals, and order food, all from one app or the website.",
      "Behind it, restaurant partners manage their menus and orders from their own panel, while two super-admin panels run the whole platform. I worked on the Flutter app's UI, iOS-specific features, Firebase security, payments and the releases to the Play Store and App Store.",
    ],
    platforms: ["Flutter app (Android & iOS)", "Customer website", "Restaurant partner panel", "2 super-admin panels"],
    features: [
      "Sightseeing packages",
      "Hotel booking",
      "Taxi & vehicle rentals",
      "Food ordering from partner restaurants",
      "Real-time chat",
      "Payment integration",
      "Partner menu & order management",
      "Platform-wide admin controls",
    ],
    architecture: [
      { layer: "Clients", items: ["Flutter app (Riverpod)", "Customer website", "Partner & admin panels (React)"] },
      { layer: "Backend", items: ["Firebase Auth", "Cloud Firestore", "Firebase security rules"] },
      { layer: "Services", items: ["Payment gateway", "Play Store & App Store releases"] },
    ],
    stackDetails: [
      { name: "Flutter", use: "Cross-platform app for Android and iOS" },
      { name: "Dart", use: "App language" },
      { name: "Riverpod", use: "State management in the app" },
      { name: "Firebase", use: "Auth, Firestore data and security rules" },
      { name: "React", use: "Website, partner panel and admin panels" },
    ],
  },
  {
    slug: "present-me",
    category: "EdTech · Mobile & Web",
    title: "Present-Me",
    summary:
      "College attendance without the roll call: students check in over the class hotspot, verified by fingerprint.",
    highlights: [
      "Hotspot + fingerprint attendance",
      "Face recognition & manual modes",
      "HOD admin panel",
      "PDF & Excel reports",
    ],
    techStack: ["Flutter", "BLoC", "Node.js", "Express", "AWS EC2", "DynamoDB", "React"],
    live: [
      { kind: "play", label: "Play Store", href: playStore("com.presentme.app") },
      { kind: "website", label: "Website", href: "https://presentme.in/" },
    ],
    github: "https://github.com/pravesh1731/Present-me",
    links: [],
    image: presentMeWeb,
    screens: [presentMeApp1, presentMeApp2, presentMeApp3, presentMeApp4],

    overview: [
      "Present-Me replaces the paper register in colleges. Students mark themselves present from their own phones, but only while connected to the teacher's classroom hotspot and only after a fingerprint check, so there are no names called and no proxies.",
      "Teachers manage their classes and see attendance live, HODs get an admin panel with reports, and students also get a notice board, timetable and previous year papers in the same app.",
    ],
    platforms: ["Flutter app for students & teachers", "Website", "HOD admin panel", "REST API backend"],
    features: [
      "Hotspot-based smart attendance",
      "Fingerprint / phone-lock verification",
      "Face recognition (video) attendance",
      "Manual attendance fallback",
      "Teacher dashboard & class management",
      "HOD admin panel",
      "PDF & Excel attendance reports",
      "Notice board, timetable & previous year papers",
    ],
    architecture: [
      { layer: "Clients", items: ["Flutter app (BLoC)", "Website & HOD panel (React)"] },
      { layer: "API", items: ["Node.js + Express REST API", "Hosted on AWS EC2"] },
      { layer: "Data", items: ["DynamoDB", "Reports as PDF & Excel"] },
    ],
    stackDetails: [
      { name: "Flutter", use: "Student and teacher app" },
      { name: "BLoC", use: "State management in the app" },
      { name: "Node.js", use: "Backend runtime" },
      { name: "Express", use: "REST API for the app and admin panel" },
      { name: "AWS EC2", use: "Hosting the API" },
      { name: "DynamoDB", use: "Users, classes and attendance records" },
      { name: "React", use: "Website and HOD admin panel" },
    ],
  },
  {
    slug: "jasaen",
    category: "Hospitality · Web",
    title: "Jasaen",
    tag: "Client project",
    summary:
      "Booking website for a Bangkok boutique hotel, synced with Cloudbeds and managed from an admin portal.",
    highlights: [
      "Room booking & management",
      "Cloudbeds integration",
      "Admin portal",
      "Google sign-in",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
    live: [{ kind: "website", label: "Website", href: "https://jasaen.com/" }],
    github: null,
    links: [],
    image: jasaenWeb,
    screens: [],

    overview: [
      "Jasaen is a full-stack booking website for a boutique hotel in Bangkok, built for a Thailand-based client. Guests browse rooms, amenities and the gallery, check availability and book their stay.",
      "Room data is integrated with Cloudbeds, the hotel's property management system, and the hotel team manages content and bookings from an admin portal.",
    ],
    platforms: ["Public booking website", "Admin portal"],
    features: [
      "Room listings, amenities & gallery",
      "Availability search & booking",
      "Cloudbeds integration",
      "Admin portal for rooms and bookings",
      "Google sign-in",
    ],
    architecture: [
      { layer: "Client", items: ["Next.js website", "Admin portal"] },
      { layer: "Server", items: ["Next.js server (TypeScript)", "Google sign-in", "Deployed on Vercel"] },
      { layer: "Data & services", items: ["MongoDB", "Cloudbeds API"] },
    ],
    stackDetails: [
      { name: "Next.js", use: "Website, admin portal and server logic" },
      { name: "TypeScript", use: "Type-safe code across the app" },
      { name: "MongoDB", use: "Site and booking data" },
      { name: "Vercel", use: "Hosting and deployments" },
    ],
  },
  {
    slug: "agridirect",
    category: "AgriTech · Mobile",
    title: "AgriDirect",
    summary:
      "Marketplace that connects farmers directly with buyers, with smart-contract payments and real-time chat.",
    highlights: [
      "Direct farmer-to-buyer orders",
      "Smart-contract payments",
      "Real-time chat over sockets",
      "Inventory management",
    ],
    techStack: ["Flutter", "GetX", "Firebase", "Cloudinary"],
    live: [
      {
        kind: "apk",
        label: "APK",
        href: "https://drive.google.com/file/d/1yJUaqovasxyL30G8hz-2IUv6HhmnKqPV/view?usp=sharing",
      },
    ],
    github: "https://github.com/pravesh1731/agriDirect",
    links: [],
    screens: [],

    overview: [
      "AgriDirect cuts out the middlemen between farmers and buyers so both sides get a fair price. Farmers list their produce and manage stock, and buyers order directly from them.",
      "Payments run through blockchain smart contracts, so every transaction is transparent and tamper-proof, and buyers and farmers can talk in real time.",
    ],
    platforms: ["Flutter app for farmers & buyers"],
    features: [
      "Direct farmer-to-buyer orders",
      "Inventory management for farmers",
      "Real-time chat over sockets",
      "Blockchain smart-contract payments",
      "Product images via Cloudinary",
    ],
    architecture: [
      { layer: "Client", items: ["Flutter app (GetX)"] },
      { layer: "Backend", items: ["Firebase", "Socket server for chat"] },
      { layer: "Services", items: ["Cloudinary (images)", "Smart contracts (payments)"] },
    ],
    stackDetails: [
      { name: "Flutter", use: "Farmer and buyer app" },
      { name: "GetX", use: "State management and routing" },
      { name: "Firebase", use: "Auth and app data" },
      { name: "Cloudinary", use: "Product image storage" },
    ],
  },
];
