const dataScienceCourseSchema = {
  "@context": "https://schema.org",

  "@type": "Course",

  name: "Data Science Course in Pune",

  description:
    "Industry-focused Data Science training in Pune with Python, Machine Learning and AI projects.",

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
    "Data Science Certification",

  inLanguage: "en",

  teaches: [
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "Data Visualization",
    "Pandas"
  ],

  aggregateRating: {
    "@type": "AggregateRating",

    ratingValue: "4.9",

    reviewCount: "443"
  }
};

export default dataScienceCourseSchema;