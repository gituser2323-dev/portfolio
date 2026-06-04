const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": "EducationalOrganization",

  name: "SpeedUp Infotech",

  url: "https://speedupinfotech.com",

  telephone: "+91XXXXXXXXXX",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "3rd Floor, DNG House, JM Road",

    addressLocality:
      "Pune",

    addressRegion:
      "Maharashtra",

    postalCode:
      "411004",

    addressCountry:
      "IN"
  },

  aggregateRating: {
    "@type": "AggregateRating",

    ratingValue: "4.9",

    reviewCount: "443"
  },

  sameAs: [
    "https://www.instagram.com/speedupinfotech_official/",
    "https://www.linkedin.com/company/speedupinfotech/",
    
  ]
};

export default localBusinessSchema;