export const FOUNDATION_INPUT = "[FOUNDATION INPUT]";
export const FOUNDATION_IMAGE = "[FOUNDATION INPUT — APPROVED IMAGE]";
export const FOUNDATION_STAT = "[FOUNDATION INPUT — VERIFIED STAT]";
export const FOUNDATION_APPROVAL = "[FOUNDATION INPUT — APPROVAL REQUIRED]";

const image = (name) => `/images/${name}.webp`;

const programs = [
  {
    slug: "digital-literacy",
    category: "Education",
    title: "Digital Literacy & Computer Training",
    year: "2025–26",
    image: image("digital-literacy"),
    description:
      "Practical computer and digital training intended to improve confidence, employability and access to technology.",
    audience: "School dropouts, rural youth and homemakers.",
    why: "Digital knowledge is increasingly necessary for education, work, communication and everyday access to services.",
    activities: [
      "Basic computer operations, MS Office and internet usage.",
      "Online application and job-search training.",
    ],
    outcome:
      "Increased employability and confidence in using technology for education and livelihood.",
    gallery: [image("digital-literacy")],
  },
  {
    slug: "importance-of-education",
    category: "Education",
    title: "Importance of Education Program",
    year: "2025–26",
    image: image("importance-education"),
    description:
      "An education-awareness initiative focused on schooling, learning access and social transformation.",
    audience:
      "Underprivileged children, school dropouts and youth from low-income communities.",
    why: "The Foundation describes education as a fundamental tool for empowerment and social transformation.",
    activities: [
      "Awareness sessions for parents on the value of schooling.",
      "Basic learning materials and digital access to support learning quality.",
    ],
    outcome:
      "Greater awareness of education and improved access to basic learning support.",
    gallery: [image("importance-education")],
  },
  {
    slug: "learn-together",
    category: "Education",
    title: "Learn Together / Learning Programs",
    year: "2024–25",
    image: image("learn-together"),
    description:
      "Interactive learning designed to nurture foundational skills, curiosity, confidence and a love of learning.",
    audience:
      "Children who need additional learning support and engaging educational environments.",
    why: "The initiative aims to bridge learning gaps while building confidence and teamwork.",
    activities: [
      "Group-based activities and storytelling.",
      "Digital learning tools and practical knowledge sessions.",
      "Foundational academic and creative learning.",
    ],
    outcome:
      "Improved confidence, curiosity, teamwork and learning engagement.",
    gallery: [image("learn-together")],
  },
  {
    slug: "womens-sewing",
    category: "Women & Livelihood",
    title: "Women’s Sewing Skill Development",
    year: "2024–25 / 2025–26",
    image: image("womens-sewing"),
    description:
      "Tailoring and garment-design training intended to help participants build practical skills and livelihood pathways.",
    audience:
      "Economically weaker women, men and girls, as described in the 2025–26 report.",
    why: "The Foundation links practical sewing skills with financial independence and income-generation opportunities.",
    activities: [
      "Hands-on stitching, cutting and design training.",
      "Training in sewing techniques, embroidery and garment making.",
      "Support toward small tailoring units.",
    ],
    outcome:
      "Financial independence and income-generation opportunities for participants.",
    gallery: [image("womens-sewing")],
  },
  {
    slug: "financial-literacy-women",
    category: "Women & Livelihood",
    title: "Financial Literacy for Women",
    year: "2025–26",
    image: image("financial-literacy-women"),
    description:
      "Practical financial awareness for women managing household finances, savings and small businesses.",
    audience: "Women from rural and economically weaker sections of society.",
    why: "Financial literacy can strengthen confidence in managing money, accessing formal financial systems and planning for the future.",
    activities: [
      "Banking, savings and budgeting workshops.",
      "Digital payment and financial-planning training.",
      "Awareness of government financial schemes and SHG benefits.",
      "Entrepreneurial and small-business awareness.",
    ],
    outcome:
      "Greater financial knowledge and confidence in personal, household and small-business decisions.",
    gallery: [image("financial-literacy-women")],
  },
  {
    slug: "womens-rights",
    category: "Women & Livelihood",
    title: "Women’s Rights & Legal Awareness Seminar",
    year: "2024–25",
    image: image("womens-rights"),
    description:
      "Legal-awareness sessions designed to help women understand rights, protections and routes to legal assistance.",
    audience:
      "Women seeking practical knowledge about legal rights and protections.",
    why: "The Foundation focuses on legal literacy as a way to build confidence and informed decision-making.",
    activities: [
      "Sessions on domestic-violence law, workplace harassment, property rights and gender equality.",
      "Guidance on accessing legal aid and reporting violations.",
    ],
    outcome: "Improved legal literacy and confidence to safeguard rights.",
    gallery: [image("womens-rights")],
  },
  {
    slug: "startup-skills",
    category: "Women & Livelihood",
    title: "Start-Up Skills & Financial Awareness",
    year: "2024–25",
    image: image("startup-skills"),
    description:
      "Entrepreneurship education covering the practical knowledge needed to turn an idea into a viable livelihood.",
    audience:
      "Individuals interested in starting or managing small businesses.",
    why: "The program aims to bridge the gap between ambition and actionable business knowledge.",
    activities: [
      "Business planning.",
      "Market analysis.",
      "Effective communication and entrepreneurial thinking.",
    ],
    outcome:
      "Stronger entrepreneurial awareness and greater readiness for self-reliance.",
    gallery: [image("startup-skills")],
  },
  {
    slug: "cell-phone-repair",
    category: "Vocational Development",
    title: "Cell Phone Repair Training",
    year: "2024–25",
    image: image("cell-phone-repair"),
    description:
      "Hands-on technical training intended to turn practical repair skills into livelihood opportunities.",
    audience: "Unemployed youth and aspiring technicians.",
    why: "Mobile technology creates ongoing demand for people with practical repair skills.",
    activities: [
      "Diagnosis and troubleshooting.",
      "Component replacement.",
      "Software repair techniques and hands-on practice.",
    ],
    outcome:
      "Practical technical capability and a pathway toward self-reliant work or entrepreneurship.",
    gallery: [image("cell-phone-repair")],
  },
  {
    slug: "mens-apparel",
    category: "Vocational Development",
    title: "Men’s Apparel Making",
    year: "2024–25",
    image: image("mens-apparel"),
    description:
      "Professional tailoring and garment-making training focused on sustainable livelihood and economic self-reliance.",
    audience: "Individuals seeking practical apparel-making skills.",
    why: "Garment-making can translate practical craftsmanship into income-generating work.",
    activities: [
      "Cutting, stitching, fitting and design.",
      "Hands-on training incorporating contemporary styles.",
    ],
    outcome:
      "Improved apparel-making skills and greater readiness for sustainable livelihoods.",
    gallery: [image("mens-apparel")],
  },
  {
    slug: "online-selling",
    category: "Vocational Development",
    title: "Online Selling & Entrepreneurship Training",
    year: "2025–26",
    image: image("online-selling"),
    description:
      "Digital-commerce training for people learning how to present, market and sell products online.",
    audience: "Small business owners, artisans and women entrepreneurs.",
    why: "Digital commerce can expand market access beyond a participant’s immediate locality.",
    activities: [
      "Product listing.",
      "Product photography.",
      "Online marketing.",
      "Guidance on platforms such as Amazon, Meesho and Flipkart.",
    ],
    outcome: "Increased digital presence and sales opportunities for trainees.",
    gallery: [image("online-selling")],
  },
  {
    slug: "healthcare-support",
    category: "Health & Wellbeing",
    title: "Healthcare Support Initiative",
    year: "2025–26",
    image: image("healthcare-support"),
    description:
      "Direct and referral-based healthcare support for people who may struggle to afford timely medical care.",
    audience:
      "Economically disadvantaged individuals, elderly persons and people unable to afford treatment.",
    why: "The Foundation’s report emphasizes timely medical assistance, preventive care and access to professionals.",
    activities: [
      "Identifying people in need and referring them to doctors or clinics.",
      "Collaboration with medical professionals for subsidized or free services.",
      "Essential medicines and follow-up support when required.",
      "Preventive-health awareness.",
    ],
    outcome:
      "Better access to medical treatment and earlier intervention for people in need.",
    gallery: [image("healthcare-support")],
    contributor:
      "Dr. Fardeen Sheikh is described in the 2025–26 annual report as providing free medical consultations and treatment in collaboration with the Foundation.",
  },
  {
    slug: "womens-wellness",
    category: "Health & Wellbeing",
    title: "Women’s Sanitation & Wellness Program",
    year: "2024–25",
    image: image("womens-wellness"),
    description:
      "Health and hygiene education intended to help women make informed decisions about their wellbeing.",
    audience:
      "Women in communities reached by the Foundation’s workshops and outreach.",
    why: "The initiative creates space for women to discuss health and hygiene openly and access essential knowledge.",
    activities: [
      "Workshops and seminars.",
      "Community outreach on hygiene and women’s health.",
    ],
    outcome: "Improved awareness and healthier everyday practices.",
    gallery: [image("womens-wellness")],
  },
  {
    slug: "donate-life",
    category: "Health & Wellbeing",
    title: "Bone Marrow Donation Awareness",
    year: "2024–25",
    image: image("donate-life"),
    description:
      "Awareness work encouraging participation in bone marrow donation and highlighting its life-saving potential.",
    audience:
      "Community members who may be able to register as donors or spread awareness.",
    why: "The Foundation’s 2024–25 report documents the founder personally registering as a donor to lead by example.",
    activities: [
      "Bone marrow donation awareness.",
      "Encouraging community participation and donor registration.",
    ],
    outcome:
      "Greater awareness of bone marrow donation and collective action around life-saving opportunities.",
    gallery: [image("donate-life")],
  },
  {
    slug: "health-hygiene",
    category: "Health & Wellbeing",
    title: "Health & Hygiene Awareness",
    year: "2025–26",
    image: image("health-hygiene"),
    description:
      "Community health and hygiene education combined with practical support.",
    audience: "Women, children and rural families.",
    why: "The program aims to improve everyday health knowledge and hygiene practices.",
    activities: [
      "Free health check-up camps and doctor consultations.",
      "Menstrual-hygiene awareness.",
      "Sanitary-pad distribution.",
    ],
    outcome:
      "Better health awareness and hygiene habits in target communities.",
    gallery: [image("health-hygiene")],
  },
  {
    slug: "break-bread",
    category: "Community Support",
    title: "Break Bread with the Needy",
    year: "2024–25",
    image: image("break-bread"),
    description:
      "Food support that frames nourishment as both a practical necessity and an act of dignity.",
    audience:
      "People experiencing hunger, homelessness and severe financial hardship.",
    why: "The Foundation describes food as a basic right and emphasizes nourishment, dignity and human connection.",
    activities: [
      "Freshly prepared food distribution.",
      "Volunteer-led service with respectful interaction.",
    ],
    outcome:
      "Immediate nourishment and a more dignified form of community support.",
    gallery: [image("break-bread"), image("continuous-breakfast")],
  },
  {
    slug: "footwear-distribution",
    category: "Community Support",
    title: "Footwear Distribution",
    year: "2024–25",
    image: image("footwear-distribution"),
    description:
      "Distribution of essential footwear to people experiencing poverty or homelessness.",
    audience:
      "Underprivileged and homeless people identified through the Foundation’s community work.",
    why: "Basic protection and dignity can come from addressing needs that are easy to overlook.",
    activities: [
      "Footwear distribution drives.",
      "Direct assistance to people in need.",
    ],
    outcome: "Immediate access to essential footwear and practical support.",
    gallery: [image("footwear-distribution")],
  },
  {
    slug: "sustained-assistance",
    category: "Community Support",
    title: "Sustained Assistance — Recurring Help",
    year: "2024–25",
    image: image("sustained-assistance"),
    description:
      "Ongoing support for a family facing severe hardship, moving beyond one-time relief toward continuity of care.",
    audience: "The family of Abdullah, described in the 2024–25 annual report.",
    why: "The Foundation frames recurring assistance as a commitment to continuous care, dignity and stability.",
    activities: [
      "Monthly assistance.",
      "Food, healthcare, education and basic-needs support as required.",
      "Ongoing contact and guidance.",
    ],
    outcome:
      "Continued support intended to help the family meet essential needs and move toward greater stability.",
    gallery: [image("sustained-assistance")],
  },
  {
    slug: "continuous-breakfast",
    category: "Community Support",
    title: "Continuous Breakfast Distribution",
    year: "2024–25 / 2025–26",
    image: image("continuous-breakfast"),
    description:
      "Regular breakfast distribution for people facing hunger, homelessness and extreme poverty.",
    audience:
      "Underprivileged and homeless individuals, daily-wage earners and people living in extreme poverty.",
    why: "The Foundation aims to ensure that vulnerable people can begin their day with nutritious food and dignity.",
    activities: [
      "Regular distribution of freshly prepared breakfast at community points and public areas.",
      "Volunteer engagement around hygiene, timely service and respectful interaction.",
      "Awareness activities encouraging empathy and social responsibility.",
    ],
    outcome:
      "Improved nutrition and wellbeing, alongside a stronger sense of belonging and community care.",
    gallery: [image("continuous-breakfast")],
  },
  {
    slug: "leaf-to-life",
    category: "Environment",
    title: "Leaf to Life — Plantation Program",
    year: "2024–25",
    image: image("leaf-to-life"),
    description:
      "Tree plantation and environmental conservation with an emphasis on native species and long-term care.",
    audience:
      "Community members participating in environmental and plantation activities.",
    why: "The initiative connects local participation with biodiversity, ecological restoration and climate awareness.",
    activities: [
      "Planting native species.",
      "Community participation in sustainable practices.",
      "Long-term care of planted trees.",
    ],
    outcome:
      "Greater participation in environmental stewardship and ecological restoration.",
    gallery: [image("leaf-to-life")],
  },
];

export const foundation = {
  name: "Munawwar Foundation",
  tagline: "Illuminating Hearts, Transforming Futures",
  hero: {
    image: image("hero"),
    video: null,
    eyebrow: "Education. Skills. Care. Community.",
  },
  founder: {
    name: "Sabah Munawwar Farooqi",
    role: "President, Munawwar Foundation",
    image: null,
    message:
      "The Foundation was born from a desire to carry forward Munawwar’s legacy of kindness and service. The work is a tribute to a life remembered for compassion, strength and the ability to make people feel valued.",
  },
  story: {
    title: "A foundation created in memory of Munawwar.",
    body: "Munawwar Foundation was created as a tribute to Sabah Munawwar Farooqi’s mother, Munawwar. The Foundation’s work carries forward a legacy of kindness and service through programs that support education, healthcare, skills, livelihoods and community wellbeing.",
    image: image("story-legacy"),
  },
  mission:
    "Every individual deserves the opportunity to thrive. Through education, healthcare and community development, Munawwar Foundation seeks to create sustainable solutions that address societal challenges and empower individuals to reach their full potential.",
  vision:
    "An inclusive and self-reliant society where people can access knowledge, training, livelihood opportunities and the support needed to live with dignity and purpose.",
  focusAreas: [
    "Education",
    "Skill development",
    "Women empowerment",
    "Healthcare and health awareness",
    "Community development",
    "Environmental action",
  ],
  registration: {
    registrationNo: "01/01/01/41159/24",
    ngoDarpanId: "MP/2024/0459573",
  },
  impact: {
    beneficiaries: null,
    programs: null,
    communities: null,
    trainingParticipants: null,
  },
  contact: {
    address:
      "145-Reliable Colony, Saint Joseph School, Idgah Hills, Bhopal-462001",
    phones: ["7999269697", "6262226244"],
    email: "munawwarfoundation@gmail.com",
    website: "www.munawwarfoundation.org",
    instagram: "https://instagram.com/munawwarfoundation",
    facebook: "https://www.facebook.com/share/1CezseNi8r/",
  },
  team: [
    {
      name: "Sabah Munawwar Farooqi",
      role: "President",
      image: "/images/team/Sabah .jpeg",
    },
    {
      name: "Farha Farooqui",
      role: "Vice-President",
      image: "/images/team/Farah Farooqui.png",
    },
    {
      name: "S. Nadir Ali",
      role: "Secretary",
      // Temporary image assignment; confirm later.
      image: "/images/team/IMG-20241018-WA0006.jpg",
    },
    {
      name: "S. Yasir Ali",
      role: "Treasurer",
      // Temporary image assignment; confirm later.
      image:
        "/images/team/WhatsApp_Image_2025-01-19_at_17.40.52_1226bf86-removebg-preview (1).png",
    },
    {
      name: "Jaza A. Khan",
      role: "Joint Secretary",
      image: "/images/team/Jaza A. khan.png",
    },
    {
      name: "S. Nasir Ali",
      role: "Member",
      image: "/images/team/nasir ali.png",
    },
    {
      name: "Amay R. Dash",
      role: "Member",
      // Temporary image assignment; confirm later.
      image:
        "/images/team/WhatsApp_Image_2025-01-19_at_19.38.56-removebg-preview.png",
    },
  ],
  teenSquad: [
    {
      name: "Samaira",
      description: "A young changemaker in the Foundation’s Teen Squad.",
    },
    {
      name: "IFLAAH",
      description: "A young changemaker in the Foundation’s Teen Squad.",
    },
    {
      name: "MARIA",
      description: "A young changemaker in the Foundation’s Teen Squad.",
    },
  ],
  programs,
  stories: [
    {
      slug: "abdullah-sustained-assistance",
      category: "Community story",
      date: "2024–25",
      title: "Sustained Assistance: a commitment beyond one-time relief",
      excerpt:
        "The 2024–25 annual report documents ongoing assistance to Abdullah’s family after the loss of his father.",
      image: image("sustained-assistance"),
      body: [
        "The Foundation’s 2024–25 annual report describes Abdullah as a boy who sells tea door to door to support his family after his father died due to illness.",
        "Under the Sustained Assistance — Recurring Help initiative, the Foundation provides monthly aid and support for essential needs, with the stated aim of continuity rather than temporary relief.",
      ],
      gallery: [image("sustained-assistance")],
      relatedProgram: "sustained-assistance",
    },
    {
      slug: "breakfast-with-dignity",
      category: "Community story",
      date: "2024–25 / 2025–26",
      title: "A morning meal can be a message of dignity",
      excerpt:
        "The Foundation’s breakfast initiative combines regular food distribution with respectful, volunteer-led community support.",
      image: image("continuous-breakfast"),
      body: [
        "The annual reports describe regular breakfast distribution for people experiencing hunger, homelessness and extreme poverty.",
        "The initiative is presented not only as food support, but as an effort to offer nourishment, dignity, empathy and a sense of belonging.",
      ],
      gallery: [image("continuous-breakfast"), image("break-bread")],
      relatedProgram: "continuous-breakfast",
    },
    {
      slug: "dr-fardeen-sheikh",
      category: "Healthcare story",
      date: "2025–26",
      title: "Healthcare support through professional collaboration",
      excerpt:
        "The 2025–26 report recognizes Dr. Fardeen Sheikh for providing free medical consultations and treatment in collaboration with the Foundation.",
      image: image("healthcare-support"),
      body: [
        "The 2025–26 annual report describes Dr. Fardeen Sheikh as a doctor who provides free medical consultations and treatment to underprivileged and needy patients in collaboration with Munawwar Foundation.",
        "The report also highlights preventive-care awareness and the Foundation’s broader goal of strengthening access to timely medical support.",
      ],
      gallery: [image("healthcare-support")],
      relatedProgram: "healthcare-support",
    },
  ],
  documents: [
    {
      title: "Munawwar Foundation Profile",
      type: "Foundation profile",
      file: null,
      reference: "Profile supplied to the foundation website team",
    },
    {
      title: "Annual Report 2024–25",
      type: "Annual report",
      file: "/documents/munawwar-annual-report-2024-25.pptx",
    },
    {
      title: "Annual Report 2025–26",
      type: "Annual report",
      file: "/documents/munawwar-annual-report-2025-26.pptx",
    },
    {
      title: "NGO Darpan ID",
      type: "Registration / verification reference",
      file: null,
      reference: "MP/2024/0459573",
    },
    {
      title: "Registration No.",
      type: "Registration reference",
      file: null,
      reference: "01/01/01/41159/24",
    },
    { title: "Bylaws", type: "Approved governing document", file: null },
  ],
  involvement: { donate: null, volunteer: null, partner: null },
};

export const getProgram = (slug) =>
  foundation.programs.find((p) => p.slug === slug);
export const getStory = (slug) =>
  foundation.stories.find((s) => s.slug === slug);
