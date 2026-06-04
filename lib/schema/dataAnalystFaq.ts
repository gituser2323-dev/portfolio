const dataAnalystFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name:
        "Is Data Analytics a good career in Pune?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, Data Analysts are highly in demand across startups, SaaS companies and enterprise organizations in Pune."
      }
    },

    {
      "@type": "Question",

      name:
        "Do you provide internship support?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, students work on real-world analytics dashboards and internship-focused projects."
      }
    },

    {
      "@type": "Question",

      name:
        "Which tools are covered in the Data Analyst course?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "The course covers Excel, SQL, Power BI, Python and real-world data visualization techniques."
      }
    }
  ]
};

export default dataAnalystFaqSchema;