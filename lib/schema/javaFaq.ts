const javaFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name:
        "Is Java Full Stack a good career in Pune?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, Java Full Stack developers are in high demand across startups and enterprise companies in Pune."
      }
    },

    {
      "@type": "Question",

      name:
        "Do you provide internship support?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, students work on real-world projects and internship-focused development programs."
      }
    }
  ]
};

export default javaFaqSchema;