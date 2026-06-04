export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",

    "@id": "https://speedupinfotech.com/#organization",

    name: "SpeedUp Infotech",
    url: "https://speedupinfotech.com",
    logo: "https://speedupinfotech.com/speedup.png",
    image: "https://speedupinfotech.com/og-image.png",

    description:
      "SpeedUp Infotech is a leading MERN Stack, Full Stack, AI and Data Analytics training institute in Pune offering real-world projects and placement-focused training.",

    telephone: "+917219777599",
    email: "support@speedupinfotech.com",
    priceRange: "₹₹",
    foundingDate: "2020",

    address: {
      "@type": "PostalAddress",
      streetAddress: "FC Road, Shivaji Nagar",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411005",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5204,
      longitude: 73.8567,
    },

    areaServed: {
      "@type": "City",
      name: "Pune",
    },

    knowsAbout: [
      "MERN Stack Development",
      "Full Stack Development",
      "React JS",
      "Node JS",
      "MongoDB",
      "Data Analytics",
      "Data Science",
      "Artificial Intelligence",
      "Python Programming",
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+917219777599",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],

    sameAs: [
      "https://instagram.com/speedupinfotech",
      "https://linkedin.com/company/speedupinfotech",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Training Courses",
      itemListElement: [
        "MERN Stack Development",
        "Full Stack Development",
        "Data Analytics",
        "Data Science",
        "Python Full Stack",
        "MERN Stack With AI",
      ].map((course) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: course,
          provider: {
            "@id": "https://speedupinfotech.com/#organization",
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}