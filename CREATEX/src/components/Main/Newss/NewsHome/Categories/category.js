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
      "Climate change is forcing architects, engineers, and construction companies to rethink how infrastructure is designed. Resilient buildings and public spaces must be prepared for extreme weather, rising temperatures, and changing environmental conditions.",
    content: {
      intro:
        "Building climate-resilient infrastructure starts with understanding the environmental risks of a specific location. Engineers and architects need to consider factors such as flooding, extreme heat, strong winds, water availability, and changes in local weather patterns. These risks should be evaluated during the earliest stages of a project rather than after construction has already started. Materials and structural systems can then be selected according to the expected conditions.",

      body: [
        "For example, buildings in areas with a high risk of flooding can be raised above potential flood levels, while projects in hot climates can use reflective surfaces, improved insulation, natural ventilation, and energy-efficient cooling systems. Green roofs, rainwater collection systems, permeable surfaces, and additional vegetation can also help reduce the impact of extreme weather. Although resilient construction can require a larger initial investment, it can significantly reduce maintenance costs and damage over the long term.",
      ],

      quote:
        "Climate change is becoming one of the most important challenges for the construction and infrastructure industry. Rising temperatures, heavier rainfall, stronger storms, flooding, and longer periods of drought are already affecting cities around the world. As a result, traditional approaches to construction are no longer always sufficient for the conditions that buildings may face during their lifetime.",

      checklist: [
        "Analyze local climate risks before starting the design process.",
        "Choose construction materials that can withstand expected environmental conditions.",
        "Improve insulation, ventilation, and energy efficiency.",
        "Use drainage systems and flood-resistant construction where necessary.",
        "Include green infrastructure such as trees, green roofs, and permeable surfaces.",
        "Consider long-term maintenance and operating costs.",
      ],

      outro:
        "The most resilient infrastructure is designed not only for the climate we experience today, but also for the conditions we may face decades from now. Implementing these practices today ensures long-term safety, durability, and cost savings.",
    },

    comments: [
      {
        id: 101,
        author: "Daniel Jackson",
        date: "July 15, 2020",
        text: "The point about considering climate risks before construction begins is especially important. Many projects still treat environmental risks as an afterthought.",
      },
      {
        id: 102,
        author: "Annette Black",
        date: "July 14, 2020",
        text: "@Daniel Jackson I completely agree. Early planning can make a huge difference when it comes to the total cost of a project and its long-term performance.",
      },
      {
        id: 103,
        author: "Albert Flores",
        date: "July 7, 2020",
        text: "Green roofs and rainwater systems are becoming much more common in the projects we work on. They provide benefits beyond simply improving the appearance of a building.",
      },
      {
        id: 104,
        author: "Marvin McKinney",
        date: "June 28, 2020",
        text: "Very interesting overview. I would also like to see more information about how smaller construction companies can implement these principles without dramatically increasing their budgets.",
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
      "New technologies are changing the way construction projects are planned, managed, and completed. From drones and artificial intelligence to robotics and digital modeling, technology is making construction sites safer and more efficient.",
    content: {
      intro:
        "Drones are now being used to capture aerial images, inspect difficult-to-reach areas, and monitor the progress of large construction sites. Building Information Modeling, commonly known as BIM, allows different teams to work with a detailed digital representation of a building before and during construction.",

      body: [
        "Artificial intelligence can analyze project data and help identify potential delays, safety risks, or budget problems. Robotics and automated equipment are also beginning to perform repetitive and physically demanding tasks. Another important development is 3D printing, which can be used to produce construction components and, in some cases, entire structures.",
      ],

      quote:
        "The construction industry has traditionally been slower to adopt new technologies than many other industries. However, this is changing rapidly. Companies are increasingly using digital tools to improve planning, reduce mistakes, monitor construction sites, and make better decisions.",

      checklist: [
        "Use drones to monitor large construction sites.",
        "Create accurate digital models with BIM technology.",
        "Use artificial intelligence to analyze project data.",
        "Automate repetitive and dangerous construction tasks.",
        "Explore 3D printing for selected building components.",
        "Connect project teams through cloud-based collaboration tools.",
      ],

      outro:
        "Technology does not replace the knowledge of construction professionals. Instead, it gives them better tools to make decisions faster, work safer, and deliver higher quality projects.",
    },

    comments: [
      {
        id: 201,
        author: "Wade Warren",
        date: "June 18, 2020",
        text: "3D concrete printing is completely changing our timelines. It is impressive how quickly the technology has developed during the last few years.",
      },
      {
        id: 202,
        author: "Esther Howard",
        date: "June 15, 2020",
        text: "Are there any specific drone models you recommend for site surveying in harsh weather conditions? We are currently considering introducing drones to several projects.",
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
      "Bulldozers and excavators are two of the most recognizable machines on a construction site, but they are designed for very different jobs. Understanding their strengths can help contractors choose the right equipment for each project.",
    content: {
      intro:
        "An excavator is primarily designed for digging, lifting, and moving materials. Its long boom and hydraulic arm allow the operator to reach deep areas and work from different positions. Excavators are particularly useful for digging foundations, trenches, drainage systems, and underground utilities.",

      body: [
        "A bulldozer, on the other hand, is designed primarily for pushing and leveling large amounts of soil, sand, rocks, and other materials. Its large blade allows it to clear land and create relatively flat surfaces. Bulldozers are particularly effective when a project requires heavy pushing power over relatively short distances.",
      ],

      quote:
        "Heavy construction equipment can have a major influence on the speed, cost, and safety of a project. Choosing between these machines depends on the terrain, required task, available space, and project schedule.",

      checklist: [
        "Use excavators for digging trenches, foundations, and deep areas.",
        "Use bulldozers for pushing and leveling large quantities of material.",
        "Consider the size and weight of the equipment.",
        "Evaluate the terrain and available working space.",
        "Choose attachments according to the specific task.",
        "Compare fuel consumption and operating costs before renting equipment.",
      ],

      outro:
        "Choosing the right machine for the right task can save both time and operating costs while significantly improving job-site efficiency and safety.",
    },

    comments: [
      {
        id: 301,
        author: "Guy Hawkins",
        date: "May 25, 2020",
        text: "Very helpful comparison for junior project managers who are setting up site logistics. The difference becomes much clearer when you understand what each machine was designed to do.",
      },
      {
        id: 302,
        author: "Cody Fisher",
        date: "May 22, 2020",
        text: "Don't forget to factor in operator training when choosing between heavy machinery brands. A good operator can make a significant difference in productivity.",
      },
      {
        id: 303,
        author: "Kristin Watson",
        date: "May 20, 2020",
        text: "Fuel efficiency alone saved us a significant amount of money on our last grading project by choosing the correct dozer size.",
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
      "The construction industry is changing as companies respond to environmental concerns, new technologies, rising costs, and changing expectations from building owners. Several global trends are shaping the future of construction.",
    content: {
      intro:
        "One of the most important trends is the growing demand for sustainable construction. Building owners are increasingly interested in energy-efficient systems, renewable energy, recycled materials, and lower operating costs.",

      body: [
        "Prefabrication and modular construction are also becoming more popular because components can be manufactured in controlled environments before being transported to the construction site. Smart building technology, sensors, and digital project management tools are helping teams coordinate information effectively.",
      ],

      quote:
        "Construction is one of the largest industries in the world, and it is constantly adapting to new economic, environmental, and technological conditions. Sustainable construction is no longer simply an environmental goal, but a fundamental part of modern design.",

      checklist: [
        "Increase the use of sustainable and recycled materials.",
        "Improve building energy efficiency.",
        "Use prefabricated and modular construction methods.",
        "Introduce smart building and monitoring systems.",
        "Reduce construction waste and improve material management.",
        "Use digital tools to improve communication between project teams.",
      ],

      outro:
        "Together, these trends are creating buildings that are more efficient, connected, adaptable, and resilient for future generations.",
    },

    comments: [
      {
        id: 401,
        author: "Darlene Robertson",
        date: "May 10, 2020",
        text: "Prefabrication has cut down our on-site noise and waste dramatically. It also makes scheduling much easier because many components can be prepared before they arrive at the site.",
      },
      {
        id: 402,
        author: "Theresa Webb",
        date: "May 8, 2020",
        text: "Smart energy grids are definitely becoming more important for large commercial buildings. The ability to monitor energy consumption in real time is extremely useful.",
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
      "The construction industry is entering a period of rapid change. New digital tools, sustainable materials, modular construction, and advanced visualization technologies are influencing how modern projects are designed and delivered.",
    content: {
      intro:
        "Modular construction is becoming increasingly attractive because building components can be produced in controlled factory environments and assembled quickly on site. Building Information Modeling is improving cooperation between different project teams.",

      body: [
        "Virtual and augmented reality are allowing clients to experience spaces before construction begins. Sustainable materials, robotics, drones, artificial intelligence, cloud-based project management, and 3D printing are further reshaping how architects and contractors operate.",
      ],

      quote:
        "Construction companies around the world are experimenting with new technologies and methods to improve productivity, reduce waste, and deliver better buildings. The future of construction will be shaped by combining experienced people with smarter technology.",

      checklist: [
        "Modular and prefabricated construction.",
        "Building Information Modeling and digital twins.",
        "Virtual and augmented reality visualization.",
        "Sustainable and low-impact building materials.",
        "Drones and automated site monitoring.",
        "Artificial intelligence and predictive analytics.",
        "Robotics and construction automation.",
        "Cloud-based project management.",
      ],

      outro:
        "The companies that successfully combine these innovative technologies with experienced industry professionals will be best prepared for the future.",
    },

    comments: [
      {
        id: 501,
        author: "Jerome Bell",
        date: "May 4, 2020",
        text: "BIM modeling has practically eliminated collision errors for our MEP engineers. It has also made communication between different teams much easier.",
      },
      {
        id: 502,
        author: "Eleanor Pena",
        date: "May 2, 2020",
        text: "VR visualization helped our clients understand the proposed design much earlier. They were able to approve several design decisions before construction even started.",
      },
      {
        id: 503,
        author: "Bessie Cooper",
        date: "April 30, 2020",
        text: "Solid list! Modular construction deserves the number one spot without a doubt. The amount of time it can save on certain projects is impressive.",
      },
      {
        id: 504,
        author: "Floyd Miles",
        date: "April 30, 2020",
        text: "Looking forward to seeing how these trends evolve through the second half of the year. It feels like construction technology is developing faster every year.",
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
      "Choosing the right flooring material depends on the purpose of the room, expected traffic, moisture levels, maintenance requirements, and budget. Each flooring type has its own advantages and limitations.",
    content: {
      intro:
        "Polished concrete is a popular option for industrial and commercial spaces because it is durable and resistant to heavy traffic. Engineered hardwood provides the appearance and warmth of natural wood while offering better stability in changing environments.",

      body: [
        "Ceramic and porcelain tiles are frequently used in areas where moisture resistance is important. Luxury vinyl tile is another flexible option that can reproduce the appearance of wood or stone with great water resistance. Carpet remains popular in offices and bedrooms for warmth and sound absorption.",
      ],

      quote:
        "Flooring is one of the most visible and frequently used elements of an interior space. Choosing a material based only on appearance can lead to expensive maintenance problems later.",

      checklist: [
        "Consider the amount of foot traffic in the room.",
        "Evaluate moisture and humidity levels.",
        "Compare durability and expected lifespan.",
        "Check maintenance and cleaning requirements.",
        "Calculate installation and long-term replacement costs.",
        "Choose a material that matches the purpose of the space.",
      ],

      outro:
        "Good flooring should not only look attractive on the first day, but continue to perform exceptionally well after years of everyday use.",
    },

    comments: [
      {
        id: 601,
        author: "Ronald Richards",
        date: "April 20, 2020",
        text: "Polished concrete is unmatched for industrial loft projects in terms of durability. It also works very well when the design requires a minimal and modern appearance.",
      },
      {
        id: 602,
        author: "Kathryn Murphy",
        date: "April 18, 2020",
        text: "Great advice on checking moisture levels before committing to engineered hardwood. This is something that is often overlooked during renovation projects.",
      },
      {
        id: 603,
        author: "Jacob Jones",
        date: "April 16, 2020",
        text: "What are your thoughts on LVT (Luxury Vinyl Tile) for high-moisture basement areas? I have seen several contractors recommend it, but I would like to hear more opinions.",
      },
    ],
  },
];
