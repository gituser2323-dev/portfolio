const dataAnalystCourseSchema = {
  "@context": "https://schema.org",

  "@type": "Course",

  name: "Data Analyst Course in Pune",

  description:
    "Industry-focused Data Analyst training in Pune with Excel, SQL, Power BI and Python for real-world analytics projects.",

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
    "Data Analyst Certification",

  inLanguage: "en",

  teaches: [
    "Excel",
    "SQL",
    "Power BI",
    "Python",
    "Data Visualization",
    "Analytics"
  ],

  aggregateRating: {
    "@type": "AggregateRating",

    ratingValue: "4.9",

    reviewCount: "443"
  }
};

export default dataAnalystCourseSchema;