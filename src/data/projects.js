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
import digistallWeb from "../assets/projects/digistall-web.png";
import woozieeWeb from "../assets/projects/wooziee-web.png";
import vakyWeb from "../assets/projects/vaky-web.png";
import agridirectImg from "../assets/projects/agridirect.png";

// Details page URL (HTML5 route, see App.jsx).
export const projectPath = (slug) => `/projects/${slug}`;

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
    slug: "digistall",
    category: "Retail & Logistics · Mobile & Web",
    title: "Gotan Store & Digistall",
    tag: "Client project",
    summary:
      "Rural retail and delivery network comprising three Flutter apps and a central web store for fast order fulfillment.",
    highlights: [
      "3 interconnected Flutter apps",
      "Rider dispatch & delivery tracking",
      "Merchant inventory panel",
      "Live on Play Store & web",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST API", "Git"],
    live: [
      { kind: "website", label: "digistall.in", href: "https://www.digistall.in/" },
      { kind: "website", label: "gotan.in", href: "https://gotan.in/" },
      { kind: "website", label: "rider.digistall.in", href: "https://rider.digistall.in/" },
      { kind: "play", label: "Gotan Store", href: playStore("com.digistall.gotan") },
      { kind: "play", label: "Digistall", href: playStore("com.digistall.digistall") },
      { kind: "play", label: "DigiRider", href: playStore("com.digistall.rider") },
    ],
    github: null,
    links: [],
    image: digistallWeb,
    screens: [],
    overview: [
      "Gotan Store & Digistall form a complete hyperlocal commerce ecosystem empowering rural shop owners, delivery riders, and customers.",
      "The platform includes three distinct production Flutter applications: Gotan Store for buyers, Digistall for local merchants to manage inventory, and DigiRider for delivery dispatch and GPS tracking.",
    ],
    platforms: ["Gotan Store (Play Store)", "Digistall Merchant App", "DigiRider Delivery App", "gotan.in website"],
    features: [
      "Multi-store product ordering",
      "Merchant order management & pricing",
      "Live delivery rider dispatch & routing",
      "SMS & notification alerts",
      "Cloud backend with Firebase synchronization",
    ],
    architecture: [
      { layer: "Apps", items: ["Gotan Store (Flutter)", "Digistall Merchant", "DigiRider Delivery"] },
      { layer: "Web", items: ["gotan.in public portal"] },
      { layer: "Backend", items: ["Firebase Auth & Database", "REST APIs"] },
    ],
    stackDetails: [
      { name: "Flutter", use: "Mobile client application framework" },
      { name: "Dart", use: "App programming language" },
      { name: "Firebase", use: "Realtime data sync & notifications" },
      { name: "REST API", use: "Order & catalog management services" },
    ],
  },
  {
    slug: "wooziee",
    category: "E-Commerce · Mobile",
    title: "Wooziee",
    tag: "Client project",
    summary:
      "Modern e-commerce mobile app built with Flutter and REST APIs, offering seamless product browsing, cart, and checkout.",
    highlights: [
      "Dynamic product catalog & filters",
      "Fast cart & checkout workflow",
      "REST API integration",
      "Live on Google Play Store",
    ],
    techStack: ["Flutter", "Dart", "REST API", "Android", "Git"],
    live: [{ kind: "play", label: "Play Store", href: playStore("com.wooziee.androidapp") }],
    github: null,
    links: [],
    image: woozieeWeb,
    screens: [],
    overview: [
      "Wooziee is a consumer-facing e-commerce mobile application built for Android. It enables shoppers to explore collections, filter items by category, manage a real-time cart, and complete orders with smooth checkout flows.",
      "Developed using Flutter and Dart, the application communicates with high-throughput REST APIs, maintaining quick response times and responsive layouts across diverse screen sizes.",
    ],
    platforms: ["Flutter app for Android"],
    features: [
      "Product catalog with search and filters",
      "Cart management & checkout",
      "User authentication and profiles",
      "Order tracking",
      "Push notifications",
    ],
    architecture: [
      { layer: "Client", items: ["Flutter (Android)", "State management", "Responsive UI"] },
      { layer: "API", items: ["REST API integration", "JSON serialization"] },
      { layer: "Distribution", items: ["Google Play Store release"] },
    ],
    stackDetails: [
      { name: "Flutter", use: "Cross-platform mobile UI" },
      { name: "Dart", use: "Application language" },
      { name: "REST API", use: "Data exchange with backend servers" },
      { name: "Git", use: "Version control and team collaboration" },
    ],
  },
  
  {
    slug: "vaky",
    category: "FinTech & Utility · Mobile",
    title: "Vaky",
    tag: "Client project",
    summary:
      "All-in-one utility and services mobile application with secure payment gateway integration and native platform channels.",
    highlights: [
      "Secure payment gateway integration",
      "Native Android & iOS optimization",
      "High-speed transaction processing",
      "Live on Google Play Store",
    ],
    techStack: ["Flutter", "Dart", "Android", "iOS", "Payments"],
    live: [{ kind: "play", label: "Play Store", href: playStore("com.vaky.aio") }],
    github: null,
    links: [],
    image: vakyWeb,
    screens: [],
    overview: [
      "Vaky is an all-in-one consumer application providing everyday digital services, utility bill settlements, and transactions.",
      "Engineered with Flutter alongside custom native Android and iOS modules, it delivers bank-grade security, frictionless payment checkout, and optimized startup latency.",
    ],
    platforms: ["Flutter app for Android & iOS"],
    features: [
      "Multi-service payments and transactions",
      "Integrated secure payment SDKs",
      "Native platform bridging for performance",
      "Transaction history & downloadable invoices",
    ],
    architecture: [
      { layer: "Client", items: ["Flutter application", "Native Android & iOS plugins"] },
      { layer: "Security", items: ["Encrypted transaction payloads", "Tokenized auth"] },
      { layer: "Payments", items: ["Payment gateway gateway APIs"] },
    ],
    stackDetails: [
      { name: "Flutter", use: "Cross-platform mobile UI" },
      { name: "Dart", use: "App codebase" },
      { name: "Android", use: "Native Kotlin platform channels" },
      { name: "iOS", use: "Native Swift modules" },
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
    image: agridirectImg,
    imageFit: "contain",
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
