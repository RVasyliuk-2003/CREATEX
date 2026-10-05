import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

const projectsData = [
  {
    id: 1,
    title: "Modern Cottage",
    mainImg: image1,
    goal: "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
    description:
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    details: {
      location: "2464 Royal Ln. Mesa, New Jersey",
      client: "Darlene Robertson",
      architect: "HIK Architecture",
      size: "840 sq. feet",
      value: "$2 million",
      completed: "May 2020",
    },
  },
  {
    id: 2,
    title: "Luxury Beach Villa",
    mainImg: image2,
    goal: "Create an open-concept oceanfront villa featuring panoramic glass walls, a sunset deck, and an infinity pool facing the sea.",
    description:
      "Emphasizing natural light and minimalist architecture to blend luxury with coastal landscape.",
    details: {
      location: "102 Ocean Dr. Miami, Florida",
      client: "Robert Fox",
      architect: "Apex Design Lab",
      size: "1200 sq. feet",
      value: "$3.5 million",
      completed: "August 2021",
    },
  },
  {
    id: 3,
    title: "Scandinavian Modern House",
    mainImg: image3,
    goal: "Design an eco-friendly wooden residence focused on energy efficiency, warmth, and seamless integration with the surrounding forest.",
    description:
      "Utilizing sustainable timber, solar panel integrations, and clean Nordic interior design elements.",
    details: {
      location: "88 Pine Rd. Aspen, Colorado",
      client: "Jenny Wilson",
      architect: "Nordic Space Studio",
      size: "650 sq. feet",
      value: "$1.8 million",
      completed: "January 2022",
    },
  },
  {
    id: 4,
    title: "Minimalist Loft Residence",
    mainImg: image4,
    goal: "Reconstruct a spacious duplex house featuring industrial concrete finishes, high ceilings, and an internal courtyard.",
    description:
      "A perfect balance between raw industrial textures and high-end modern domestic comfort.",
    details: {
      location: "414 Austin St. Seattle, Washington",
      client: "Cody Fisher",
      architect: "Urban Form Architects",
      size: "920 sq. feet",
      value: "$2.2 million",
      completed: "November 2022",
    },
  },
  {
    id: 5,
    title: "Glasshouse Terrace Villa",
    mainImg: image5,
    goal: "Construct a multi-level hilltop villa with floor-to-ceiling double-glazed windows and a central open garden.",
    description:
      "Offers 360-degree views of the countryside while maintaining privacy through smart landscape architectural design.",
    details: {
      location: "730 Hilltop Ave. Austin, Texas",
      client: "Kristin Watson",
      architect: "Vanguard Design",
      size: "1050 sq. feet",
      value: "$2.9 million",
      completed: "March 2023",
    },
  },
  {
    id: 6,
    title: "Contemporary Suburban Home",
    mainImg: image6,
    goal: "Develop a functional family residence with a spacious backyard, outdoor kitchen, and subterranean studio space.",
    description:
      "Focused on high security, smart home automation, and warm family-oriented living spaces.",
    details: {
      location: "55 Maple St. Portland, Oregon",
      client: "Eleanor Pena",
      architect: "Horizon Builders",
      size: "780 sq. feet",
      value: "$1.5 million",
      completed: "September 2023",
    },
  },
];

export default projectsData;
