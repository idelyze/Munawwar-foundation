const image = (name) => `/images/${name}.webp`;

export const programCategories = [
  "Education & Digital Empowerment",
  "Skills & Livelihood",
  "Women’s Empowerment & Financial Awareness",
  "Health & Community Well-Being",
  "Family & Community Support",
  "Environmental Sustainability",
];

export const programAreaSummaries = [
  {
    category: "Education & Digital Empowerment",
    summary: "Literacy, child-friendly learning and practical digital skills.",
    imageProgram: "importance-of-education",
  },
  {
    category: "Skills & Livelihood",
    summary: "Vocational training and skills for work or self-employment.",
    imageProgram: "cell-phone-repair",
  },
  {
    category: "Women’s Empowerment & Financial Awareness",
    summary: "Financial awareness, rights, wellness and safety education.",
    imageProgram: "financial-literacy-women",
  },
  {
    category: "Health & Community Well-Being",
    summary: "Healthcare access, prevention, hygiene and health awareness.",
    imageProgram: "health-hygiene",
  },
  {
    category: "Family & Community Support",
    summary: "Food, essential support and guidance for people and families.",
    imageProgram: "footwear-distribution",
  },
  {
    category: "Environmental Sustainability",
    summary: "Planting and community participation in environmental care.",
    imageProgram: "leaf-to-life",
  },
];

export const foundationObjectives = [
  {
    title: "Education, Training & Knowledge Development",
    items: [
      [
        "Technical Education and Training",
        "Promoting technical education through training centres, ITIs, polytechnics, engineering colleges, training camps and competitions.",
      ],
      [
        "Medical, Scientific and Healthcare Education",
        "Promoting natural sciences, life sciences and medical education, including nursing, paramedical, Ayurvedic, Homeopathic, Unani, Allopathic and other traditional systems of medicine.",
      ],
      [
        "Professional and Higher Education",
        "Supporting the establishment and operation of schools, colleges, technical institutions and universities, and helping trained individuals access employment opportunities.",
      ],
      [
        "Moral and Ethical Education",
        "Promoting moral and ethical education through educational institutions, training camps and competitions.",
      ],
      [
        "Vocational Education and Self-Employment",
        "Providing vocational education, employment-oriented training and self-employment opportunities for unemployed young men and women.",
      ],
      [
        "Digital Literacy and Information Technology",
        "Promoting digital awareness and providing computer, electronics and other technical training.",
      ],
      [
        "Educational Support for Underprivileged Children",
        "Organising general knowledge competitions and supporting children from economically disadvantaged families in accessing education.",
      ],
      [
        "Libraries and Reading Rooms",
        "Establishing and operating libraries and reading rooms to promote intellectual and moral development.",
      ],
    ],
  },
  {
    title: "Agriculture, Livelihoods & Skill Development",
    items: [
      [
        "Medicinal Plant Cultivation",
        "Encouraging the cultivation of medicinal plants and promoting related education, training and awareness.",
      ],
      [
        "Rural and Urban Livelihood Development",
        "Promoting self-reliance among unemployed youth, particularly those from Scheduled Castes, Scheduled Tribes, Backward Classes and minority communities, through training and development programmes.",
      ],
      [
        "Women’s Sewing and Fashion Design Training",
        "Providing training in computerised fashion design, dressmaking, interior design, textile design and tailoring.",
      ],
      [
        "Women’s Traditional and Creative Skills Development",
        "Promoting embroidery, knitting, mehendi art, handicrafts, boutique work and music, along with initiatives such as crèches, adult education and Anganwadi centres.",
      ],
      [
        "Skill Development Centres",
        "Establishing and operating skill development centres and vocational training facilities.",
      ],
      [
        "Handloom Industry Promotion",
        "Promoting products made through handloom industries and working to address challenges faced by the sector.",
      ],
      [
        "Rural Vocational Training and Artisans’ Development",
        "Conducting rural development training, handicraft training and public welfare programmes, while encouraging rural artists and helping them develop their skills.",
      ],
      [
        "Career Counselling and Guidance",
        "Providing career counselling, guidance and personality development support for young people and women.",
      ],
    ],
  },
  {
    title: "Healthcare, Hygiene & Social Well-Being",
    items: [
      [
        "Health Awareness and Medical Assistance",
        "Conducting health awareness programmes and arranging medical facilities according to community needs.",
      ],
      [
        "Environmental Protection and Natural Resource Conservation",
        "Promoting education and awareness concerning education, healthcare, drinking water, water conservation, irrigation, land improvement, natural resources, wildlife, soil conservation, environmental protection and plantation.",
      ],
      [
        "De-addiction, Family Counselling and Social Reform",
        "Establishing de-addiction, family counselling and health-related centres, and addressing social evils and caste-based discrimination through awareness camps.",
      ],
      [
        "Women’s Empowerment",
        "Promoting women’s empowerment through relevant activities and initiatives.",
      ],
      [
        "Women and Child Welfare",
        "Supporting the welfare and development of women and children, promoting social awareness and contributing to rural development.",
      ],
    ],
  },
  {
    title: "Sports, Government Schemes & Community Development",
    items: [
      [
        "Sports and Yoga",
        "Organising and promoting activities related to sports and yoga.",
      ],
      [
        "Government Scheme Awareness and Implementation",
        "Promoting awareness of Central and State Government schemes, supporting their implementation where applicable, and organising training to inform different sections of society.",
      ],
      [
        "Sanitation, Cleanliness and Girl Child Awareness",
        "Raising awareness about toilet construction, the Beti Bachao, Beti Padhao initiative, cleanliness campaigns and comprehensive sanitation programmes.",
      ],
      [
        "Public Welfare Scheme Awareness",
        "Promoting awareness of programmes administered by departments concerned with human resource development, women and child development, labour, social justice, forests and environment, agriculture, urban administration, panchayats and rural development.",
      ],
      [
        "Village Development and Panchayati Raj",
        "Supporting village development in accordance with the principles of Gram Swaraj and Panchayati Raj.",
      ],
      [
        "Rural Development and Community Welfare",
        "Conducting educational and training activities, handicraft training and public welfare programmes to support rural development.",
      ],
      [
        "Cultural, Literary and Artistic Development",
        "Encouraging cultural and literary activities, developing artistic skills and supporting training and competitions in relevant fields.",
      ],
    ],
  },
];

const programs = [
  {
    slug: "digital-literacy",
    category: "Education & Digital Empowerment",
    title: "Digital Literacy & Computer Training",
    year: "2025–26",
    image: image("digital-literacy"),
    description:
      "Practical computer training that builds confidence with everyday digital tools and services.",
    audience:
      "School dropouts, rural youth and homemakers seeking digital skills for learning and work.",
    why: "Digital literacy supports education, employment, communication and personal growth.",
    activities: [
      "Basic computer operations, MS Office and internet use.",
      "Online applications, digital skills and job-search training.",
    ],
    outcome:
      "The programme aims to build practical computer skills, digital confidence and access to education or livelihood opportunities.",
    gallery: [image("digital-literacy")],
  },
  {
    slug: "importance-of-education",
    category: "Education & Digital Empowerment",
    title: "Education & Literacy Awareness",
    year: "2025–26",
    image: image("importance-education"),
    description:
      "Community awareness that encourages children and adults to value education and literacy.",
    audience:
      "Women and men in rural communities across Gairatganj, Obedullaganj, Udaipura and Sanchi in Raisen district, Madhya Pradesh.",
    why: "Education and literacy can support personal growth, social progress and community development.",
    activities: [
      "Community awareness programmes about education and literacy.",
      "Encouraging women, men and families to pursue learning.",
    ],
    outcome:
      "The programme aims to strengthen awareness of education and encourage lifelong learning.",
    gallery: [image("importance-education")],
  },
  {
    slug: "learn-together",
    category: "Education & Digital Empowerment",
    title: "Play-Based Learning (Learn Together)",
    year: "2024–25",
    image: image("learn-together"),
    description:
      "Play-based learning that encourages curiosity, creativity, confidence and foundational skills.",
    audience:
      "Children who need additional learning support and an engaging space to develop essential skills.",
    why: "Children benefit from encouraging environments where they can build foundational skills and confidence through play.",
    activities: [
      "Games, storytelling and fun-based educational activities.",
      "Drawing, colouring, art and craft.",
      "Basic literacy, numeracy and foundational learning.",
      "Group activities that encourage communication, confidence and teamwork.",
    ],
    outcome:
      "The programme aims to strengthen learning engagement, foundational skills, creativity and positive social interaction.",
    gallery: [image("learn-together")],
  },
  {
    slug: "womens-sewing",
    category: "Skills & Livelihood",
    title: "Women’s Sewing Skill Development Training",
    year: "2024–25 / 2025–26",
    image: image("womens-sewing"),
    description:
      "Practical stitching and tailoring training that helps women explore home-based work and self-employment.",
    audience:
      "Women and girls in rural communities with limited access to vocational training and livelihood resources.",
    why: "Practical sewing skills can build confidence and help participants explore opportunities to earn an income.",
    activities: [
      "Basic hand-stitching and machine-stitching techniques.",
      "Measuring, cutting and stitching fabric.",
      "Making and repairing garments.",
      "Simple garment design and finishing.",
      "Guidance on home-based work and small income-generating activities.",
    ],
    outcome:
      "The programme aims to build sewing skills, confidence and awareness of self-employment opportunities.",
    gallery: [image("womens-sewing")],
  },
  {
    slug: "financial-literacy-women",
    category: "Women’s Empowerment & Financial Awareness",
    title: "Women’s Financial Literacy Awareness",
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
    category: "Women’s Empowerment & Financial Awareness",
    title: "Women’s Rights & Legal Awareness",
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
    category: "Women’s Empowerment & Financial Awareness",
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
    category: "Skills & Livelihood",
    title: "Cell Phone Repair Training",
    year: "2024–25",
    image: image("cell-phone-repair"),
    description:
      "Hands-on technical training in mobile phone troubleshooting, hardware repair and software servicing.",
    audience:
      "Unemployed youth, school leavers and people from rural or economically disadvantaged communities.",
    why: "Mobile repair skills can create vocational and self-employment opportunities in a widely used service area.",
    activities: [
      "Basic electronics, soldering, circuit testing and component identification.",
      "Diagnosis and repair of screens, batteries and charging ports.",
      "Software troubleshooting and device maintenance.",
      "Guidance on setting up a small repair workshop and basic business management.",
    ],
    outcome:
      "The programme aims to develop practical repair skills and support pathways to work or self-employment.",
    gallery: [image("cell-phone-repair")],
  },
  {
    slug: "mens-apparel",
    category: "Skills & Livelihood",
    title: "Men’s Garment Stitching Training",
    year: "2024–25",
    image: image("mens-apparel"),
    description:
      "Vocational training in menswear tailoring, garment construction, pattern drafting and finishing.",
    audience:
      "Unemployed youth, aspiring tailors and men in rural or economically disadvantaged communities.",
    why: "Tailoring skills can help participants meet local demand and explore self-employment or income-generating work.",
    activities: [
      "Measurement, fabric selection, pattern drafting and cutting.",
      "Stitching shirts, trousers, traditional attire and outerwear.",
      "Machine operation, garment assembly, finishing and quality checks.",
      "Customer management, pricing and setting up a small tailoring unit.",
    ],
    outcome:
      "The programme aims to strengthen tailoring skills and readiness for employment or independent work.",
    gallery: [image("mens-apparel")],
  },
  {
    slug: "online-selling",
    category: "Skills & Livelihood",
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
    category: "Health & Community Well-Being",
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
      "The website content identifies Dr. Fardeen Sheikh and Major Dr. Jai Singh Baghel as medical contributors who provide free check-ups or consultations through the Foundation’s healthcare initiatives.",
  },
  {
    slug: "womens-wellness",
    category: "Women’s Empowerment & Financial Awareness",
    title: "Women’s Sanitation & Wellness Awareness",
    year: "2024–25",
    image: image("womens-wellness"),
    description:
      "Awareness and practical support around menstrual health, reproductive health and personal sanitation.",
    audience:
      "Women, young girls and mothers in rural and economically disadvantaged communities.",
    why: "Access to health information and hygienic materials can support well-being, dignity and informed choices.",
    activities: [
      "Workshops on menstrual health, personal sanitation and wellness.",
      "Distribution of hygiene kits and essential products.",
      "Open discussions that address myths and taboos.",
    ],
    outcome:
      "The programme aims to improve awareness of hygienic practices and support confidence and dignity.",
    gallery: [image("womens-wellness")],
  },
  {
    slug: "donate-life",
    category: "Health & Community Well-Being",
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
    category: "Health & Community Well-Being",
    title: "Health & Hygiene Awareness",
    year: "2025–26",
    image: image("health-hygiene"),
    description:
      "Community education on personal hygiene, sanitation and preventive healthcare.",
    audience:
      "Families, children and individuals in rural villages, informal settlements and low-income communities.",
    why: "Health education, clean water and sanitation knowledge can help families make informed choices and reduce avoidable health risks.",
    activities: [
      "Sessions on handwashing, sanitation, clean drinking water and disease prevention.",
      "Distribution of hygiene kits and information materials.",
      "Community drives for clean surroundings and environmental sanitation.",
      "Basic health screenings and guidance with local healthcare workers.",
    ],
    outcome:
      "The programme aims to encourage hygienic practices, health awareness and well-being.",
    gallery: [image("health-hygiene")],
  },
  {
    slug: "break-bread",
    category: "Family & Community Support",
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
    category: "Family & Community Support",
    title: "Footwear Distribution Programme",
    year: "2024–25",
    image: image("footwear-distribution"),
    description:
      "Distribution of essential footwear to children and community members who lack suitable shoes.",
    audience:
      "Underprivileged children, daily-wage workers, people experiencing homelessness and families with limited resources.",
    why: "Footwear can protect people from rough or hot ground and support comfort and dignity in daily life.",
    activities: [
      "Identify communities where children and adults lack basic footwear.",
      "Source shoes and sandals in suitable sizes.",
      "Hold respectful distribution drives led by volunteers.",
      "Share basic foot-health and hygiene information.",
    ],
    outcome:
      "The programme aims to improve access to practical footwear and reduce exposure to everyday hazards.",
    gallery: [image("footwear-distribution")],
  },
  {
    slug: "sustained-assistance",
    category: "Family & Community Support",
    title: "Sustained Family Support Initiative",
    year: "2024–25",
    image: image("sustained-assistance"),
    description:
      "Ongoing support for families facing severe hardship, designed to continue beyond one-time relief.",
    audience:
      "Families facing severe hardship, including households affected by illness or the loss of a primary breadwinner.",
    why: "Continuing support can help families meet essential needs while they navigate prolonged hardship.",
    activities: [
      "Monthly assistance for food and other essential needs.",
      "Healthcare and education support as required.",
      "Ongoing contact and guidance from Foundation volunteers.",
    ],
    outcome:
      "The initiative aims to provide continuity of care and help families meet essential needs with greater stability.",
    gallery: [image("sustained-assistance")],
  },
  {
    slug: "continuous-breakfast",
    category: "Family & Community Support",
    title: "Morning Breakfast Distribution Programme",
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
    category: "Environmental Sustainability",
    title: "Leaf to Life — Plantation Programme",
    year: "2024–25",
    image: image("leaf-to-life"),
    description:
      "Tree planting and environmental awareness with community participation and long-term care.",
    audience:
      "Local communities, schools, youth groups and public spaces involved in environmental activities.",
    why: "Planting trees and caring for local ecosystems can support greener spaces and environmental awareness.",
    activities: [
      "Community tree-planting drives.",
      "Workshops and awareness about trees, clean air and environmental protection.",
      "Community initiatives such as “Ek Ped Maa Ke Naam.”",
      "Youth and volunteer participation in planting and long-term care.",
    ],
    outcome:
      "The programme aims to encourage environmental responsibility and care for planted trees.",
    gallery: [image("leaf-to-life")],
  },
  {
    slug: "sexual-violence-awareness",
    category: "Women’s Empowerment & Financial Awareness",
    title: "Sexual Violence Prevention & Awareness",
    year: null,
    image: null,
    description:
      "Community awareness about personal safety, consent, legal protections and routes to support.",
    audience:
      "Women, young people and community members in rural and economically disadvantaged areas.",
    why: "Lack of awareness, stigma and fear of reporting can leave people without support. Shared knowledge and access to guidance can help communities respond more safely.",
    activities: [
      "Awareness sessions on personal safety, bodily autonomy and consent.",
      "Information about legal rights, helplines and reporting options.",
      "Community discussions that address stigma and shared responsibility for safety.",
      "Connections to counselling and legal-aid resources when guidance is needed.",
    ],
    outcome:
      "The programme aims to improve awareness of safety and rights, make it easier to seek support and strengthen community understanding of prevention.",
    gallery: [],
  },
  {
    slug: "community-guidance-support",
    category: "Family & Community Support",
    title: "Community Guidance & Support Initiative",
    year: null,
    image: null,
    description:
      "Community-based guidance and support for individuals and families navigating personal, family and social challenges.",
    audience:
      "Families facing hardship, people seeking personal or family guidance, young people and community members facing social or economic challenges.",
    why: "People facing difficult personal or family circumstances may not know where to turn. Timely guidance and connections to relevant support can help them make informed next steps.",
    activities: [
      "Individual and family guidance sessions.",
      "Connections to community resources, support networks and relevant welfare or legal services.",
      "Workshops on stress management, family relationships and social well-being.",
      "Peer discussions and safe spaces for open conversation.",
    ],
    outcome:
      "The initiative aims to help people find appropriate guidance, strengthen problem-solving and build supportive community connections.",
    gallery: [],
  },
  {
    slug: "family-wellbeing-awareness",
    category: "Family & Community Support",
    title: "Family Well-Being & Relationship Awareness",
    year: null,
    image: null,
    description:
      "Workshops and open discussions that support healthy relationships, communication and well-being within families.",
    audience:
      "Families, couples, parents, young people and community members seeking guidance on communication and family well-being.",
    why: "Healthy communication and mutual respect support emotional well-being. Guidance can help families address conflict and create more supportive home environments.",
    activities: [
      "Workshops on communication, listening and conflict resolution.",
      "Guidance on positive parenting, intergenerational understanding and stress management.",
      "Peer discussions that give people space to share challenges and ideas.",
      "Connections to community resources or professional counselling when needed.",
    ],
    outcome:
      "The programme aims to support clearer communication, emotional resilience and more supportive family relationships.",
    gallery: [],
  },
];

export const foundation = {
  name: "Munawwar Foundation",
  tagline: "Illuminating Hearts, Transforming Futures",
  hero: {
    image: image("digital-literacy"),
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
    title: "A Mother’s Legacy, A Lifetime of Inspiration",
    body: [
      {
        type: "paragraph",
        text: "Munawwar was more than a mother; she was a symbol of love, kindness, compassion, and selflessness. Her life touched many hearts, leaving behind values of humanity, generosity, and care for others.",
      },
      {
        type: "paragraph",
        text: "Though her loss left an irreplaceable void, the belief that love can continue to transform lives inspired the vision of Munawwar Foundation—a heartfelt tribute to her legacy.",
      },
      {
        type: "heading",
        text: "From Personal Loss to a Purpose Beyond Self",
      },
      {
        type: "paragraph",
        text: "Established in loving memory of Munawwar, the Foundation transforms a personal tribute into a lasting commitment to humanity and social welfare. Guided by the values of compassion, dignity, and kindness, it strives to empower individuals, strengthen communities, and create meaningful opportunities. What began as a heartfelt tribute has grown into a purpose of bringing positive change to lives and keeping her beautiful legacy alive through meaningful action.",
      },
      {
        type: "paragraph",
        text: "Munawwar Foundation honours a mother's love by carrying forward her legacy of compassion, kindness, and service. Through meaningful action, we strive to uplift lives, empower communities, and create a brighter future.",
      },
      {
        type: "paragraph",
        text: "Her legacy lives on in every life we touch and every act of kindness we share.",
      },
      {
        type: "closing",
        text: "Munawwar Foundation Illuminating Hearts, Transforming Futures.",
      },
    ],
    image: image("story-legacy"),
  },
  mission:
    "To promote social welfare, empower communities and create meaningful opportunities, guided by compassion, dignity and social responsibility.",

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
  contact: {
    address:
      "145-Reliable Colony, Saint Joseph School, Idgah Hills, Bhopal-462001",
    phones: ["7999269697", "6262226244"],
    email: "munawwarfoundation@gmail.com",
    website: "www.munawwarfoundation.org",
    instagram: "https://instagram.com/munawwarfoundation",
    facebook: "https://www.facebook.com/share/1CezseNi8r/",
  },
  bankAccounts: [
    {
      name: "Equitas Small Finance Bank",
      branch: "MP Nagar",
      accountName: "Munawwar Foundation",
      type: "Current Account",
      accountNumber: "200002713933",
      ifsc: "ESFB0014001",
      micr: "462756001",
    },
    {
      name: "Axis Bank",
      accountName: "Munawwar Foundation",
      type: "Current Account",
      accountNumber: "926020030841711",
      ifsc: "UTIB0002819",
    },
  ],
  team: [
    {
      name: "Sabah Munawwar Farooqi",
      role: "President",
      image: "/images/team/saba .jpeg",
    },
    {
      name: "Farha Farooqui",
      role: "Vice-President",
      image: "/images/team/Farah Farooqui.png",
    },
    {
      name: "S. Nadir Ali",
      role: "Secretary",
      image: "/images/team/S. Nadir Ali.png",
    },
    {
      name: "S. Yasir Ali",
      role: "Treasurer",
      image: "/images/team/S. Yasir Ali.jpg",
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
      image: "/images/team/Amay R. Dash.png",
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
      title: "Society Registration Certificate",
      description:
        "Registration certificate issued by the Madhya Pradesh Registrar of Societies.",
      type: "Registration",
      file: "/documents/registration-certificate.pdf",
    },
    {
      title: "NGO Darpan Registration Details",
      description:
        "Foundation profile and registration details from NGO Darpan.",
      type: "Verification",
      file: "/documents/ngo-darpan-details.pdf",
    },
    {
      title: "Foundation By-laws",
      description: "Governing rules and regulations of Munawwar Foundation.",
      type: "Governance",
      file: "/documents/foundation-bylaws.pdf",
    },
    {
      title: "Annual Report 2024–25",
      description:
        "Activities and information documented for the 2024–25 financial year.",
      type: "Annual report",
      file: "/documents/ANNUAL REPORT 2024-25 MUNAWWAR FOUNDATION.pdf",
    },
    {
      title: "Annual Report 2025–26",
      description:
        "Activities and information documented for the 2025–26 financial year.",
      type: "Annual report",
      file: "/documents/Annual Report 2025-26 Munawwar Foundation.pdf",
    },
  ],
  involvement: { donate: null, volunteer: null, partner: null },
};

export const getProgram = (slug) =>
  foundation.programs.find((p) => p.slug === slug);
export const getStory = (slug) =>
  foundation.stories.find((s) => s.slug === slug);



