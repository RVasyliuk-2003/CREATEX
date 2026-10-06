import imageNews1 from "./images/news1.jpg";
import imageNews2 from "./images/news2.jpg";
import imageNews3 from "./images/news3.jpg";
import imageNews4 from "./images/news4.jpg";
import imageNews5 from "./images/news5.jpg";
import imageNews6 from "./images/news6.jpg";

export const categories = [
  "All News",
  "Company News",
  "Innovation",
  "Industry News",
  "Expert Tips",
  "Marketing",
];

export const newsData = [
  {
    id: 1,
    title: "How to Build Climate Change-Resilient Infrastructure",
    category: "Industry News",
    date: "June 24, 2020",
    image: imageNews1,
    excerpt:
      "Iaculis diam tincidunt id ante at semper. Urna, pretium, ut vulputate ac egestas egestas ultrices...",
    content: {
      intro:
        "Vulputate id tincident pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
      body: "Aliquam egestas semper tincident. Risus, pretium, ut vulputate ac egestas egestas ultrices. Sed imperdiet nisl pretium fusce...",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra vitae electus fermentum egestas.",
      checklist: [
        "At fermentum in morbi pretium aliquam adipiscing donec tempus.",
        "Vulputate egestas ultrices pretium fusce.",
        "Fermentum vestibulum est fermentum, egestas gravida scelerisque.",
        "Commodo diam in morbi pretium aliquam egestas.",
      ],
    },
    comments: [
      {
        id: 101,
        author: "Daniel Jackson",
        date: "July 15, 2020",
        text: "Elementum libero hac id diam rhoncus fames. Risus, pretium ut vulputate ac egestas egestas ultrices...",
      },
      {
        id: 102,
        author: "Annette Black",
        date: "July 14, 2020",
        text: "@Daniel Jackson Imperdiet nisl pretium fusce id molestie. Elementum libero hac id diam rhoncus fames.",
      },
      {
        id: 103,
        author: "Albert Flores",
        date: "July 7, 2020",
        text: "Lacus, commodo id rhoncus arcu. Vulputate enim est elementum tristique egestas urna.",
      },
      {
        id: 104,
        author: "Marvin McKinney",
        date: "June 28, 2020",
        text: "Egestas diam in morbi pretium aliquam. Senectus habitant morbi tristique senectus et netus.",
      },
    ],
  },
  {
    id: 2,
    title: "How Construction Tech is Evolving",
    category: "Innovation",
    date: "June 12, 2020",
    image: imageNews2,
    excerpt:
      "Elementum libero hac id diam rhoncus fames. Risus, pretium ut vulputate ac egestas egestas ultrices...",
    content: {
      intro:
        "Modern technology is transforming job sites into safer, faster, and more efficient environments...",
      body: "From drones to automated masonry, the construction industry is undergoing a digital revolution.",
      quote: "Innovation distinguishes between a leader and a follower.",
      checklist: [
        "Drones for site survey",
        "AI project management",
        "3D concrete printing",
      ],
    },
    comments: [
      {
        id: 201,
        author: "Wade Warren",
        date: "June 18, 2020",
        text: "3D concrete printing is completely changing our timelines. Great overview of current tech trends!",
      },
      {
        id: 202,
        author: "Esther Howard",
        date: "June 15, 2020",
        text: "Are there any specific drone models you recommend for site surveying in harsh weather conditions?",
      },
    ],
  },
  {
    id: 3,
    title: "The Difference Between a Dozer and Excavator",
    category: "Expert Tips",
    date: "May 18, 2020",
    image: imageNews3,
    excerpt:
      "Ornare egestas ultrices pretium fusce id molestie. Elementum libero hac id diam rhoncus fames...",
    content: {
      intro:
        "Heavy machinery comes in all shapes and sizes, but choosing the right one saves both time and budget...",
      body: "Excavators are ideal for digging and material handling, while dozers excel at pushing large quantities of soil.",
      quote:
        "Precision in heavy equipment selection is key to project success.",
      checklist: [
        "Weight considerations",
        "Terrain requirements",
        "Fuel efficiency",
      ],
    },
    comments: [
      {
        id: 301,
        author: "Guy Hawkins",
        date: "May 25, 2020",
        text: "Very helpful comparison for junior project managers who are setting up site logistics.",
      },
      {
        id: 302,
        author: "Cody Fisher",
        date: "May 22, 2020",
        text: "Don't forget to factor in operator training when choosing between heavy machinery brands.",
      },
      {
        id: 303,
        author: "Kristin Watson",
        date: "May 20, 2020",
        text: "Fuel efficiency alone saved us 15% on our last grading job by picking the right dozer size.",
      },
    ],
  },
  {
    id: 4,
    title: "Building Construction World Trends",
    category: "Industry News",
    date: "May 5, 2020",
    image: imageNews4,
    excerpt:
      "Risus, pretium, ut vulputate ac egestas egestas ultrices. Sed imperdiet nisl pretium fusce...",
    content: {
      intro:
        "Global construction trends are shifting towards sustainability, prefabrication, and smart materials...",
      body: "Green building certifications are becoming standard requirements for commercial developments worldwide.",
      quote: "Sustainable building is no longer an option, it is a necessity.",
      checklist: [
        "Zero-emission buildings",
        "Recyclable materials",
        "Smart energy grids",
      ],
    },
    comments: [
      {
        id: 401,
        author: "Darlene Robertson",
        date: "May 10, 2020",
        text: "Prefabrication has cut down our on-site noise and waste drastically this past year.",
      },
      {
        id: 402,
        author: "Theresa Webb",
        date: "May 8, 2020",
        text: "Smart energy grids are the future of high-rise commercial architecture.",
      },
    ],
  },
  {
    id: 5,
    title: "Top 10 Construction Trends",
    category: "Company News",
    date: "April 29, 2020",
    image: imageNews5,
    excerpt:
      "Pretium fusce id molestie. Elementum libero hac id diam rhoncus fames. Risus, pretium...",
    content: {
      intro:
        "A quick breakdown of the top 10 developments shaping modern architecture and construction...",
      body: "Modular construction and green infrastructure take top spots in this year's annual survey.",
      quote:
        "Architecture is the learned game, correct and magnificent, of forms assembled in the light.",
      checklist: ["Modular building", "BIM modeling", "VR visualization"],
    },
    comments: [
      {
        id: 501,
        author: "Jerome Bell",
        date: "May 4, 2020",
        text: "BIM modeling has practically eliminated collision errors for our MEP engineers.",
      },
      {
        id: 502,
        author: "Eleanor Pena",
        date: "May 2, 2020",
        text: "VR visualization helped our clients approve design passes two weeks ahead of schedule!",
      },
      {
        id: 503,
        author: "Bessie Cooper",
        date: "April 30, 2020",
        text: "Solid list! Modular construction deserves the number one spot without a doubt.",
      },
      {
        id: 504,
        author: "Floyd Miles",
        date: "April 30, 2020",
        text: "Looking forward to seeing how these trends evolve through the second half of the year.",
      },
    ],
  },
  {
    id: 6,
    title: "Types of Flooring Materials",
    category: "Expert Tips",
    date: "April 15, 2020",
    image: imageNews6,
    excerpt:
      "Sed imperdiet nisl pretium fusce id molestie. Elementum libero hac id diam rhoncus fames...",
    content: {
      intro:
        "Choosing the right floor finish depends on foot traffic, moisture levels, and overall aesthetic goals...",
      body: "From polished concrete to engineered hardwood, each material has distinct pros and cons.",
      quote: "Flooring sets the foundation for every interior space.",
      checklist: ["Durability", "Maintenance", "Cost per sq. ft."],
    },
    comments: [
      {
        id: 601,
        author: "Ronald Richards",
        date: "April 20, 2020",
        text: "Polished concrete is unmatched for industrial loft projects in terms of durability.",
      },
      {
        id: 602,
        author: "Kathryn Murphy",
        date: "April 18, 2020",
        text: "Great advice on checking moisture levels before committing to engineered hardwood.",
      },
      {
        id: 603,
        author: "Jacob Jones",
        date: "April 16, 2020",
        text: "What are your thoughts on LVT (Luxury Vinyl Tile) for high-moisture basement areas?",
      },
    ],
  },
];
