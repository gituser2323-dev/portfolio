const homeFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name:
        "Which is the best IT training institute in Pune?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SpeedUp Infotech is a leading IT training institute in Pune offering MERN Stack, Java, Python, AI, Data Science and DevOps courses with internship and placement support."
      }
    },

    {
      "@type": "Question",

      name:
        "Do you provide internship support?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, students work on real-world projects and internship-focused programs designed for industry readiness."
      }
    },

    {
      "@type": "Question",

      name:
        "Which IT courses are available at SpeedUp Infotech?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "We provide MERN Stack, Java Full Stack, Python Full Stack, Data Science, Data Analytics, AI and DevOps training programs."
      }
    },

    {
      "@type": "Question",

      name:
        "Where is SpeedUp Infotech located in Pune?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SpeedUp Infotech is located in Pune near Deccan, FC Road and Shivaji Nagar."
      }
    }
  ]
};

export default homeFaqSchema;