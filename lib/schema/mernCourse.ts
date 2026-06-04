 const mernCourseSchema = {
  "@context": "https://schema.org",

  "@type": "Course",

  name: "MERN Stack Course in Pune",

  description:
    "Industry-focused MERN Stack training in Pune with real-world projects and placement support.",

  provider: {
    "@type": "EducationalOrganization",

    name: "SpeedUp Infotech",

    url: "https://speedupinfotech.com"
  },

  courseMode: [
    "Online",
    "Offline"
  ],

  educationalCredentialAwarded:
    "MERN Stack Certification",

  inLanguage: "en",

  teaches: [
    "MongoDB",
    "Express JS",
    "React JS",
    "Node JS"
  ],

  aggregateRating: {
    "@type": "AggregateRating",

    ratingValue: "4.9",

    reviewCount: "443"
  }
};

export default mernCourseSchema;