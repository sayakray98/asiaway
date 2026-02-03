import React, { useState, useRef, useEffect } from "react";
import image1 from "../../assets/images/hu-chen-5O6c_pLziXs-unsplash.jpg";
import image2 from "../../assets/images/eirik-skarstein-6yotiQwW0Gs-unsplash.jpg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";
import "../Itinerary/Itinerary.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import {
  Plane,
  Ship,
  MapPin,
  Calendar,
  Palmtree,
  Camera,
  Ticket,
  Mountain,
  Building2,
  Waves,
  Clock,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contactform from "../Contact/ContactForm/Contactform";

const destinationImages = {
  singapore:
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
  kualaLumpur:
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
  langkawi:
    "https://images.unsplash.com/photo-1609946860441-a51ffcf22208?w=800&q=80",
  cruise:
    "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80",
  nightSafari: image1,
  universalStudios:
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&q=80",
  gardensByBay:
    "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&q=80",
  sentosa:
    "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
  gentingHighlands:
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
  batuCaves:
    "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=800&q=80",
  skyBridge: image2,
  islandHopping:
    "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
};

const travelPackages = [
  {
    id: "singapore-5d",
    title: "Singapore",
    duration: "4 Nights / 5 Days",
    destinations: ["Singapore"],
    image: destinationImages.singapore,
    highlights: [
      "Night Safari",
      "Universal Studios",
      "Sentosa Island",
      "Gardens by the Bay",
      "Marina Bay Sands",
    ],
    summary:
      "Experience the best of Singapore with thrilling theme parks, iconic landmarks, and world-class attractions. From the magical Night Safari to the futuristic Gardens by the Bay.",
    days: [
      {
        day: 1,
        title: "Arrival & Night Safari",
        location: "Singapore",
        coordinates: "1.4043° N, 103.7930° E",
        image: destinationImages.nightSafari,
        icon: <Plane className="h-5 w-5" />,
        activities: [
          "Arrival in Singapore Changi Airport",
          "Evening visit to Night Safari",
          "Tram Ride through wildlife habitats",
          "Creatures of the Night Show",
        ],
      },
      {
        day: 2,
        title: "City Tour & Sentosa Island",
        location: "Singapore",
        coordinates: "1.2494° N, 103.8303° E",
        image: destinationImages.sentosa,
        icon: <Building2 className="h-5 w-5" />,
        activities: [
          "Half-day City Tour (Merlion Park, Chinatown, Little India)",
          "Sentosa Island via Cable Car",
          "Wings of Time light & water show",
          "Spirit of Singapore Boat Ride",
          "Ultimate Film Star Experience",
          "Images of Singapore & Madame Tussauds",
        ],
      },
      {
        day: 3,
        title: "Universal Studios Singapore",
        location: "Sentosa, Singapore",
        coordinates: "1.2540° N, 103.8238° E",
        image: destinationImages.universalStudios,
        icon: <Ticket className="h-5 w-5" />,
        activities: [
          "Full day at Universal Studios Singapore",
          "24 rides and attractions across 7 themed zones",
          "Hollywood, New York, Sci-Fi City, Ancient Egypt",
          "The Lost World, Far Far Away, Madagascar",
        ],
      },
      {
        day: 4,
        title: "Gardens by the Bay & Marina Bay Sands",
        location: "Marina Bay, Singapore",
        coordinates: "1.2816° N, 103.8636° E",
        image: destinationImages.gardensByBay,
        icon: <Palmtree className="h-5 w-5" />,
        activities: [
          "Gardens by the Bay exploration",
          "Flower Dome - World's largest glass greenhouse",
          "Cloud Forest with 35m indoor waterfall",
          "Jurassic World experience",
          "Marina Bay Sands SkyPark observation deck",
        ],
      },
      {
        day: 5,
        title: "Departure",
        location: "Singapore Changi Airport",
        coordinates: "1.3644° N, 103.9915° E",
        image: destinationImages.singapore,
        icon: <Plane className="h-5 w-5" />,
        activities: [
          "Leisure time for last-minute shopping",
          "Transfer to Changi Airport",
          "Departure from Singapore",
        ],
      },
    ],
  },
  {
    id: "singapore-cruise",
    title: "Singapore + Cruise Combo",
    duration: "4N + 2N (7 Days)",
    destinations: ["Singapore", "Cruise"],
    image: destinationImages.cruise,
    highlights: [
      "Night Safari",
      "Universal Studios",
      "Luxury Cruise",
      "Gardens by the Bay",
    ],
    summary:
      "Combine the excitement of Singapore with a relaxing cruise experience. Enjoy world-class attractions on land and luxury amenities at sea.",
    days: [
      {
        day: 1,
        title: "Arrival & Night Safari",
        location: "Singapore",
        coordinates: "1.4043° N, 103.7930° E",
        image: destinationImages.nightSafari,
        icon: <Plane className="h-5 w-5" />,
        activities: [
          "Arrival in Singapore Changi Airport",
          "Evening visit to Night Safari",
          "Tram Ride experience",
          "Animal Show",
        ],
      },
      {
        day: 2,
        title: "City Tour & Sentosa Island",
        location: "Sentosa, Singapore",
        coordinates: "1.2494° N, 103.8303° E",
        image: destinationImages.sentosa,
        icon: <Building2 className="h-5 w-5" />,
        activities: [
          "Half-day City Tour",
          "Sentosa Island via Cable Car",
          "Wings of Time show",
          "Madame Tussauds – 4 in 1",
        ],
      },
      {
        day: 3,
        title: "Universal Studios Singapore",
        location: "Sentosa, Singapore",
        coordinates: "1.2540° N, 103.8238° E",
        image: destinationImages.universalStudios,
        icon: <Ticket className="h-5 w-5" />,
        activities: [
          "Full day at Universal Studios Singapore",
          "Theme park rides and attractions",
        ],
      },
      {
        day: 4,
        title: "Cruise Embarkation",
        location: "Singapore Cruise Centre",
        coordinates: "1.2671° N, 103.8199° E",
        image: destinationImages.cruise,
        icon: <Ship className="h-5 w-5" />,
        activities: [
          "Cruise Embarkation",
          "Explore the cruise ship",
          "Welcome aboard activities",
        ],
      },
      {
        day: 5,
        title: "Cruise Sailing",
        location: "At Sea",
        coordinates: "South China Sea",
        image: destinationImages.cruise,
        icon: <Waves className="h-5 w-5" />,
        activities: [
          "Full day cruise sailing",
          "Onboard entertainment and dining",
          "Pool, spa, and recreational activities",
        ],
      },
      {
        day: 6,
        title: "Disembarkation & Gardens by the Bay",
        location: "Marina Bay, Singapore",
        coordinates: "1.2816° N, 103.8636° E",
        image: destinationImages.gardensByBay,
        icon: <Palmtree className="h-5 w-5" />,
        activities: [
          "Cruise Disembarkation",
          "Gardens by the Bay (Flower Dome, Cloud Forest)",
          "Jurassic World experience",
          "Marina Bay Sands SkyPark",
        ],
      },
      {
        day: 7,
        title: "Departure",
        location: "Singapore Changi Airport",
        coordinates: "1.3644° N, 103.9915° E",
        image: destinationImages.singapore,
        icon: <Plane className="h-5 w-5" />,
        activities: ["Departure from Singapore"],
      },
    ],
  },
  {
    id: "singapore-kl",
    title: "Singapore + Kuala Lumpur",
    duration: "4N + 2N (7 Days)",
    destinations: ["Singapore", "Kuala Lumpur"],
    image: destinationImages.kualaLumpur,
    highlights: [
      "Night Safari",
      "Universal Studios",
      "KL Tower",
      "Genting Highlands",
      "Batu Caves",
    ],
    summary:
      "Explore two iconic Southeast Asian cities. Experience Singapore's modern marvels and Malaysia's cultural heritage with stunning views from KL Tower and Genting Highlands.",
    days: [
      {
        day: 1,
        title: "Arrival & Night Safari",
        location: "Singapore",
        coordinates: "1.4043° N, 103.7930° E",
        image: destinationImages.nightSafari,
        icon: <Plane className="h-5 w-5" />,
        activities: [
          "Arrival in Singapore",
          "Evening visit to Night Safari",
          "Tram Ride experience",
          "Animal Show",
        ],
      },
      {
        day: 2,
        title: "City Tour & Sentosa Island",
        location: "Sentosa, Singapore",
        coordinates: "1.2494° N, 103.8303° E",
        image: destinationImages.sentosa,
        icon: <Building2 className="h-5 w-5" />,
        activities: [
          "Half-day City Tour",
          "Sentosa Island via Cable Car",
          "Wings of Time show",
          "Madame Tussauds – 4 in 1",
        ],
      },
      {
        day: 3,
        title: "Universal Studios Singapore",
        location: "Sentosa, Singapore",
        coordinates: "1.2540° N, 103.8238° E",
        image: destinationImages.universalStudios,
        icon: <Ticket className="h-5 w-5" />,
        activities: ["Full day at Universal Studios Singapore"],
      },
      {
        day: 4,
        title: "Gardens by the Bay & Marina Bay Sands",
        location: "Marina Bay, Singapore",
        coordinates: "1.2816° N, 103.8636° E",
        image: destinationImages.gardensByBay,
        icon: <Palmtree className="h-5 w-5" />,
        activities: [
          "Gardens by the Bay (Flower Dome, Cloud Forest)",
          "Jurassic World experience",
          "Marina Bay Sands SkyPark",
        ],
      },
      {
        day: 5,
        title: "Arrival in KL & City Tour",
        location: "Kuala Lumpur, Malaysia",
        coordinates: "3.1390° N, 101.6869° E",
        image: destinationImages.kualaLumpur,
        icon: <Building2 className="h-5 w-5" />,
        activities: [
          "Arrival in Kuala Lumpur",
          "City Tour (Petronas Twin Towers, Independence Square)",
          "KL Tower Observation Deck (421m height)",
        ],
      },
      {
        day: 6,
        title: "Genting Highlands & Batu Caves",
        location: "Genting & Batu Caves, Malaysia",
        coordinates: "3.4236° N, 101.7933° E",
        image: destinationImages.batuCaves,
        icon: <Mountain className="h-5 w-5" />,
        activities: [
          "Genting Highlands excursion (1,800m altitude)",
          "Two-way Cable Car (Awana Skyway)",
          "Batu Caves Temple (272 steps, Hindu shrine)",
        ],
      },
      {
        day: 7,
        title: "Departure",
        location: "Kuala Lumpur International Airport",
        coordinates: "2.7456° N, 101.7072° E",
        image: destinationImages.kualaLumpur,
        icon: <Plane className="h-5 w-5" />,
        activities: ["Departure from Kuala Lumpur"],
      },
    ],
  },
  {
    id: "kl-langkawi",
    title: "Kuala Lumpur + Langkawi",
    duration: "2N + 3N (6 Days)",
    destinations: ["Kuala Lumpur", "Langkawi"],
    image: destinationImages.langkawi,
    highlights: [
      "KL Tower",
      "Genting Highlands",
      "Sky Bridge",
      "Island Hopping",
      "Mangrove Tour",
    ],
    summary:
      "Discover Malaysia's diverse beauty from the bustling capital to the pristine beaches of Langkawi. Experience mountain cable cars, island adventures, and mangrove explorations.",
    days: [
      {
        day: 1,
        title: "Arrival in KL & City Tour",
        location: "Kuala Lumpur, Malaysia",
        coordinates: "3.1390° N, 101.6869° E",
        image: destinationImages.kualaLumpur,
        icon: <Plane className="h-5 w-5" />,
        activities: [
          "Arrival in Kuala Lumpur by Coach",
          "City Tour (Petronas Towers, Merdeka Square)",
          "KL Tower visit",
        ],
      },
      {
        day: 2,
        title: "Genting Highlands & Batu Caves",
        location: "Genting & Batu Caves, Malaysia",
        coordinates: "3.4236° N, 101.7933° E",
        image: destinationImages.batuCaves,
        icon: <Mountain className="h-5 w-5" />,
        activities: [
          "Genting Highlands excursion",
          "Two-way Cable Car ride",
          "Batu Caves photo stop",
        ],
      },
      {
        day: 3,
        title: "Transfer to Langkawi & City Tour",
        location: "Langkawi Island, Malaysia",
        coordinates: "6.3500° N, 99.8000° E",
        image: destinationImages.skyBridge,
        icon: <Palmtree className="h-5 w-5" />,
        activities: [
          "Flight from Kuala Lumpur to Langkawi",
          "Arrival in Langkawi - Jewel of Kedah",
          "City Tour with Sky Bridge Combo",
          "Langkawi Cable Car (660m summit)",
        ],
      },
      {
        day: 4,
        title: "Island Hopping Tour",
        location: "Langkawi Islands, Malaysia",
        coordinates: "6.3833° N, 99.7500° E",
        image: destinationImages.islandHopping,
        icon: <Waves className="h-5 w-5" />,
        activities: [
          "Island Hopping Tour on SIC",
          "Pulau Dayang Bunting (Pregnant Maiden Lake)",
          "Pulau Beras Basah (Beach activities)",
          "Pulau Singa Besar (Eagle feeding)",
        ],
      },
      {
        day: 5,
        title: "Mangrove Tour & Cave Exploration",
        location: "Kilim Geoforest Park, Langkawi",
        coordinates: "6.4333° N, 99.8667° E",
        image: destinationImages.langkawi,
        icon: <Camera className="h-5 w-5" />,
        activities: [
          "Kilim Karst Geoforest Park Mangrove Tour",
          "Cave Exploration",
          "Eagle watching",
          "Fish farm visit",
        ],
      },
      {
        day: 6,
        title: "Departure",
        location: "Langkawi International Airport",
        coordinates: "6.3297° N, 99.7267° E",
        image: destinationImages.langkawi,
        icon: <Plane className="h-5 w-5" />,
        activities: ["Departure from Langkawi"],
      },
    ],
  },
  {
    id: "singapore-kl-langkawi",
    title: "Singapore + KL + Langkawi",
    duration: "4N + 2N + 2N (9 Days)",
    destinations: ["Singapore", "Kuala Lumpur", "Langkawi"],
    image: destinationImages.singapore,
    highlights: [
      "Night Safari",
      "Universal Studios",
      "KL Tower",
      "Sky Bridge",
      "Island Hopping",
    ],
    summary:
      "The ultimate Southeast Asia experience! Explore Singapore's attractions, Malaysia's cultural heritage, and Langkawi's tropical paradise in one epic journey.",
    days: [
      {
        day: 1,
        title: "Arrival & Night Safari",
        location: "Singapore",
        coordinates: "1.4043° N, 103.7930° E",
        image: destinationImages.nightSafari,
        icon: <Plane className="h-5 w-5" />,
        activities: [
          "Arrival in Singapore",
          "Evening visit to Night Safari",
          "Tram Ride experience",
          "Animal Show",
        ],
      },
      {
        day: 2,
        title: "City Tour & Sentosa Island",
        location: "Sentosa, Singapore",
        coordinates: "1.2494° N, 103.8303° E",
        image: destinationImages.sentosa,
        icon: <Building2 className="h-5 w-5" />,
        activities: [
          "Half-day City Tour",
          "Sentosa Island via Cable Car",
          "Wings of Time show",
          "Madame Tussauds – 4 in 1",
        ],
      },
      {
        day: 3,
        title: "Universal Studios Singapore",
        location: "Sentosa, Singapore",
        coordinates: "1.2540° N, 103.8238° E",
        image: destinationImages.universalStudios,
        icon: <Ticket className="h-5 w-5" />,
        activities: ["Full day at Universal Studios Singapore"],
      },
      {
        day: 4,
        title: "Gardens by the Bay & Marina Bay Sands",
        location: "Marina Bay, Singapore",
        coordinates: "1.2816° N, 103.8636° E",
        image: destinationImages.gardensByBay,
        icon: <Palmtree className="h-5 w-5" />,
        activities: [
          "Gardens by the Bay",
          "Flower Dome & Cloud Forest",
          "Jurassic World experience",
          "Marina Bay Sands SkyPark",
        ],
      },
      {
        day: 5,
        title: "Arrival in KL & City Tour",
        location: "Kuala Lumpur, Malaysia",
        coordinates: "3.1390° N, 101.6869° E",
        image: destinationImages.kualaLumpur,
        icon: <Building2 className="h-5 w-5" />,
        activities: [
          "Arrival in Kuala Lumpur",
          "City Tour",
          "KL Tower Observation Deck",
        ],
      },
      {
        day: 6,
        title: "Genting Highlands & Batu Caves",
        location: "Genting & Batu Caves, Malaysia",
        coordinates: "3.4236° N, 101.7933° E",
        image: destinationImages.batuCaves,
        icon: <Mountain className="h-5 w-5" />,
        activities: [
          "Genting Highlands excursion",
          "Two-way Cable Car ride",
          "Batu Caves Temple (Photo Stop)",
        ],
      },
      {
        day: 7,
        title: "Transfer to Langkawi & City Tour",
        location: "Langkawi Island, Malaysia",
        coordinates: "6.3500° N, 99.8000° E",
        image: destinationImages.skyBridge,
        icon: <Palmtree className="h-5 w-5" />,
        activities: [
          "Departure from Kuala Lumpur",
          "Arrival in Langkawi",
          "City Tour with Sky Bridge Combo",
        ],
      },
      {
        day: 8,
        title: "Island Hopping Tour",
        location: "Langkawi Islands, Malaysia",
        coordinates: "6.3833° N, 99.7500° E",
        image: destinationImages.islandHopping,
        icon: <Waves className="h-5 w-5" />,
        activities: [
          "Island Hopping Tour on SIC",
          "Visit multiple pristine islands",
          "Beach activities & swimming",
        ],
      },
      {
        day: 9,
        title: "Departure",
        location: "Langkawi International Airport",
        coordinates: "6.3297° N, 99.7267° E",
        image: destinationImages.langkawi,
        icon: <Plane className="h-5 w-5" />,
        activities: ["Departure from Langkawi"],
      },
    ],
  },

  {
    id: "Custom Itinerary",
    title: "Custom Itinerary",
    destinations: ["Singapore", "Kuala Lumpur", "Langkawi"],

    days: [
      {
        day: 1,
        title: "Arrival & Night Safari",
        location: "Singapore",
        coordinates: "1.4043° N, 103.7930° E",
        image: destinationImages.nightSafari,
        icon: <Plane className="h-5 w-5" />,
        activities: [
          "Arrival in Singapore",
          "Evening visit to Night Safari",
          "Tram Ride experience",
          "Animal Show",
        ],
      },
    ],
  },
];

const getLocationColor = (location) => {
  if (location.includes("Singapore")) {
    return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300";
  }
  if (
    location.includes("Kuala Lumpur") ||
    location.includes("Genting") ||
    location.includes("Batu")
  ) {
    return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
  }
  if (location.includes("Langkawi") || location.includes("Kilim")) {
    return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
  }
  if (location.includes("Sea") || location.includes("Cruise")) {
    return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
  }
  return "bg-muted text-muted-foreground";
};

const getDestinationBadgeColor = (dest) => {
  switch (dest) {
    case "Singapore":
      return "bg-rose-500 text-white";
    case "Kuala Lumpur":
      return "bg-amber-500 text-white";
    case "Langkawi":
      return "bg-emerald-500 text-white";
    case "Cruise":
      return "bg-blue-500 text-white";
    default:
      return "bg-primary text-primary-foreground";
  }
};

const Itinerary = () => {
  const [selectedPackage, setSelectedPackage] = useState(travelPackages[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackageData, setSelectedPackageData] = useState(null);

  const sectionRef = useRef(null);

  const handleScroll = () => {
    setSelectedPackage(selectedPackageData.id);
    setModalOpen(false);
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePackageClick = (pkg) => {
    setSelectedPackageData(pkg);
    setModalOpen(true);
  };

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedPackage]);

  const selectedPkg = travelPackages.find((p) => p.id === selectedPackage);

  return (
    <>
      <Header />

      {modalOpen && selectedPackageData && (
        <div
          className="itinerary-modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <div className="itinerary-modal" onClick={(e) => e.stopPropagation()}>
            {/* HEADER IMAGE */}
            <div className="modal-hero">
              <img src={selectedPackageData.image} alt="" />
              <div className="modal-hero-overlay" />
              <div className="modal-hero-text">
                <h5>{selectedPackageData.title}</h5>
                <span>{selectedPackageData.duration}</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="modal-body">
              {/* DESCRIPTION */}
              <p className="modal-summary">{selectedPackageData.summary}</p>

              {/* DESTINATIONS */}
              <div className="modal-section">
                <h6>Destinations</h6>
                <div className="modal-badges">
                  {selectedPackageData.destinations.map((d) => (
                    <span key={d} className={`dest-badge ${d.toLowerCase()}`}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* HIGHLIGHTS */}
              <div className="modal-section">
                <h6>Highlights</h6>
                <div className="highlight-badges">
                  {selectedPackageData.highlights.map((h, i) => (
                    <span key={i} className="highlight-pill">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* QUICK ITINERARY */}
              <div className="modal-section">
                <h6>Quick Itinerary</h6>

                {selectedPackageData.days.map((day) => (
                  <div key={day.day} className="quick-day">
                    <span className="day-circle">{day.day}</span>
                    <div>
                      <strong>{day.title}</strong>
                      <div className="day-location">{day.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button className="btn btn-dark w-100" onClick={handleScroll} style={{cursor : "pointer"}}>
                View Full Itinerary
              </button>
              <button
                className="btn btn-outline-secondary w-100 mt-2 btn-iti"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-vh-100 bg-light pt-5">
        <div className="container itinerary-container py-4">
          {/* PACKAGE CARDS */}
          <div className="row card-grid">
            {travelPackages
              .filter((e) => e.title !== "Custom Itinerary")
              .map((pkg) => (
                <div key={pkg.id} className="col-12 col-md-6 col-lg-4">
                  <div className="travel-card-2">
                    {/* IMAGE */}
                    <div className="travel-card-img-2">
                      <img src={pkg.image} alt={pkg.title} />

                      {/* BADGES */}
                      <div className="travel-badges-2">
                        {pkg.destinations.map((dest) => (
                          <span
                            key={dest}
                            className={`badge-pill ${dest.toLowerCase().replace(" ", "-")}`}
                          >
                            {dest}
                          </span>
                        ))}
                      </div>

                      {/* OVERLAY TEXT */}
                      <div className="travel-overlay-2">
                        <h5>{pkg.title}</h5>
                        <Clock className="clock-icon" />{" "}
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    {/* BODY */}
                    <div className="travel-card-body-2">
                      <p>{pkg.summary}</p>
                      <span
                        className="travel-link-2"
                        onClick={() => handlePackageClick(pkg)}
                      >
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* SECTION TITLE */}
          <h6 className="fw-semibold mb-2 detail-head">Detailed Itinerary</h6>

          {/* TABS */}
          <div className="package-tabs" ref={sectionRef}>
            {travelPackages.map((pkg) => (
              <button
                key={pkg.id}
                className={`package-tab ${
                  selectedPackage === pkg.id ? "active" : ""
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.title}
              </button>
            ))}
          </div>

          {/* SELECTED PACKAGE */}
          {selectedPkg &&
            (selectedPkg.title === "Custom Itinerary" ? (
              /* ===== CONTACT FORM ===== */
              <div className="custom-itinerary-form" >
                {/* Replace this with your actual contact form component */}
                <Contactform />
              </div>
            ) : (
              /* ===== NORMAL PACKAGE DETAILS ===== */
              <div key={selectedPkg.id}>
                {/* HERO IMAGE */}
                <div className="detail-hero">
                  <img src={selectedPkg.image} alt={selectedPkg.title} />
                  <div className="detail-hero-overlay" />

                  <div className="detail-hero-content">
                    <span className="detail-badge">Singapore</span>
                    <h4>{selectedPkg.title}</h4>
                    <Calendar className="calendar-icon" />{" "}
                    <small>4 Nights / 5 Days</small>
                  </div>
                </div>

                <div className="detail-days">
                  {selectedPkg.days.map((day) => (
                    <div key={day.day} className="detail-day-card">
                      {/* LEFT IMAGE */}
                      <div className="detail-day-img">
                        <img src={day.image} alt={day.title} />
                        <span className="detail-day-number">{day.day}</span>
                      </div>

                      {/* RIGHT CONTENT */}
                      <div className="detail-day-content">
                        <div className="detail-day-header">
                          <h6>
                            <span className="icon-detail">{day.icon}</span>
                            &nbsp;&nbsp;&nbsp; Day {day.day}: {day.title}
                          </h6>
                          <span className="detail-location-badge">
                            {day.location}
                          </span>
                        </div>

                        <div className="detail-coordinates">
                          <MapPin className="mappin-icon" /> &nbsp; Coordinates:{" "}
                          {day.coordinates}
                        </div>

                        <ul className="detail-activity-list">
                          {day.activities.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Itinerary;
