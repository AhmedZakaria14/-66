import { siteConfig } from "./constants";

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.domain}/#business`,
    name: siteConfig.name,
    alternateName: ["نجارة أبو ثابت للأعمال الخشبية", "Najjar Riyadh"],
    description: siteConfig.description,
    url: siteConfig.domain,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: [`${siteConfig.domain}/images/og-main.jpg`],
    logo: siteConfig.logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: "طريق الملك فهد",
      addressLocality: "الرياض",
      addressRegion: "الرياض",
      postalCode: "11564",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.7136",
      longitude: "46.6753",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "14:00",
        closes: "22:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "الرياض" },
      { "@type": "City", name: "Riyadh" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "24.7136",
        longitude: "46.6753",
      },
      geoRadius: "50000",
    },
    hasMap: "https://maps.google.com/?q=24.7136,46.6753",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.whatsapp,
    ],
  };
};

export const getWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.name,
    description: "أفضل خدمات النجارة في الرياض",
    inLanguage: "ar-SA",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.domain}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
};

export const getServiceSchema = (
  serviceType: string,
  name: string,
  description: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceType,
    name: name,
    description: description,
    provider: { "@id": `${siteConfig.domain}/#business` },
    areaServed: { "@type": "City", name: "الرياض" },
    offers: {
      "@type": "Offer",
      priceCurrency: "SAR",
      availability: "https://schema.org/InStock",
    },
  };
};

export const getBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };
};

export const getFAQSchema = (qas: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: { "@type": "Answer", text: qa.answer },
    })),
  };
};

export const getReviewSchema = (
  authorName: string,
  rating: string,
  reviewBody: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${siteConfig.domain}/#business` },
    author: { "@type": "Person", name: authorName },
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating,
      bestRating: "5",
    },
    reviewBody: reviewBody,
  };
};

export const getBlogSchema = (posts: { title: string; excerpt: string; date: string; slug: string; image: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "المدونة والنصائح | نجار الرياض",
    "description": "مدونة نجار الرياض: مقالات ونصائح حول اختيار الأخشاب، تصاميم المطابخ، العناية بالأثاث، وأحدث ديكورات الخشب.",
    "producer": {
      "@id": `${siteConfig.domain}/#business`
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": `${post.date}T08:00:00+03:00`,
      "url": `${siteConfig.domain}/blog/${post.slug}`,
      "image": post.image,
      "author": {
        "@type": "Organization",
        "name": siteConfig.name,
        "url": siteConfig.domain
      }
    }))
  };
};

export const getArticleSchema = (post: { title: string; excerpt: string; date: string; slug: string; image: string }) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.image],
    "datePublished": `${post.date}T08:00:00+03:00`,
    "dateModified": `${post.date}T08:00:00+03:00`,
    "url": `${siteConfig.domain}/blog/${post.slug}`,
    "author": [{
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.domain
    }],
    "publisher": {
      "@id": `${siteConfig.domain}/#business`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/blog/${post.slug}`
    }
  };
};

