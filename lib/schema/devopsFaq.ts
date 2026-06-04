const devopsFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name:
        "Is DevOps a good career in Pune?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, DevOps engineers are highly in demand across cloud, SaaS and enterprise companies in Pune."
      }
    },

    {
      "@type": "Question",

      name:
        "Do you provide internship support?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, students work on real-world deployment and infrastructure projects with internship-focused training."
      }
    },

    {
      "@type": "Question",

      name:
        "Which tools are covered in the DevOps course?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "The course covers AWS, Docker, Kubernetes, Linux, GitHub Actions and CI/CD pipelines."
      }
    }
  ]
};

export default devopsFaqSchema;