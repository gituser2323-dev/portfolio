const pythonCourseSchema = {
  "@context": "https://schema.org",

  "@type": "Course",

  name: "Python Full Stack Course in Pune",

  description:
    "Industry-focused Python Full Stack training in Pune with Django, React.js and real-world projects.",

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
    "Python Full Stack Certification",

  inLanguage: "en",

  teaches: [
    "Python",
    "Django",
    "React JS",
    "REST APIs",
    "PostgreSQL"
  ],

  aggregateRating: {
    "@type": "AggregateRating",

    ratingValue: "4.9",

    reviewCount: "443"
  }
};

export default pythonCourseSchema;