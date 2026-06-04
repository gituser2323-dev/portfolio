const mernFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name:
        "Is MERN Stack a good career in Pune?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, Pune has strong demand for React and Node developers across startups and IT companies."
      }
    },

    {
      "@type": "Question",

      name:
        "Do you provide internship?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, students work on real-world projects and internship-based learning programs."
      }
    }
  ]
};

export default mernFaqSchema;