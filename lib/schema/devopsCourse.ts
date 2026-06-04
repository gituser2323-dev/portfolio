const devopsCourseSchema = {
  "@context": "https://schema.org",

  "@type": "Course",

  name: "Cloud and DevOps Course in Pune",

  description:
    "Industry-focused Cloud and DevOps training in Pune with AWS, Docker, Kubernetes and CI/CD pipelines.",

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
    "Cloud and DevOps Certification",

  inLanguage: "en",

  teaches: [
    "AWS",
    "Docker",
    "Kubernetes",
    "Linux",
    "CI/CD",
    "DevOps"
  ],

  aggregateRating: {
    "@type": "AggregateRating",

    ratingValue: "4.9",

    reviewCount: "443"
  }
};

export default devopsCourseSchema;