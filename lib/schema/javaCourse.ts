const javaCourseSchema = {
  "@context": "https://schema.org",

  "@type": "Course",

  name: "Java Full Stack Course in Pune",

  description:
    "Industry-focused Java Full Stack training in Pune with Spring Boot, React.js and real-world projects.",

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
    "Java Full Stack Certification",

  inLanguage: "en",

  teaches: [
    "Java",
    "Spring Boot",
    "React JS",
    "REST APIs",
    "MySQL"
  ],

  aggregateRating: {
    "@type": "AggregateRating",

    ratingValue: "4.9",

    reviewCount: "443"
  }
};

export default javaCourseSchema;