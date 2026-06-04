const dataScienceFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name:
        "Is Data Science a good career in Pune?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, Data Science and AI professionals are highly in demand across startups, SaaS and enterprise companies in Pune."
      }
    },

    {
      "@type": "Question",

      name:
        "Do you provide internship support?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, students work on real-world AI and Machine Learning projects with internship-focused training."
      }
    },

    {
      "@type": "Question",

      name:
        "Which technologies are covered in the Data Science course?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "The course covers Python, Pandas, Machine Learning, Deep Learning, AI and data visualization."
      }
    }
  ]
};

export default dataScienceFaqSchema;