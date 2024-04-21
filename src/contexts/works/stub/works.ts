import { IWork } from '../works.service';

export const works: IWork[] = [
  {
    slug: 'e-commerce',
    title: 'E-Commerce',
    information: 'An e-commerce app for shopping cloths',
    details:
      'An e-commerce app based on Firebase and Stripe wrote with React with authentication with Google Accounts.<br/><br/>The app uses Firebase for authentication and to store data related to purchases and Stripe as a medium for payments.',
    logoImage: {
      basic: {
        source: '/images/e-commerce/e-commerce.png',
        type: 'image/png',
      },
      optimized: {
        source: '/images/e-commerce/e-commerce.webp',
        type: 'image/webp',
      },
    },
    description: 'A description of a project',
    githubUrl: 'https://github.com/Crytek01/e-clothing-store',
    websiteUrl: 'https://e-clothing-store.vercel.app/',
    technologyStack: ['Javascript', 'React', 'Redux', 'Firebase'],
    platform: 'Web',
    previewImage: [
      {
        basic: {
          source: '/images/e-commerce/e-commerce-preview.png',
          type: 'image/png',
        },
        optimized: {
          source: '/images/e-commerce/e-commerce-preview.webp',
          type: 'image/webp',
        },
      },
    ],
  },
  {
    slug: 'tours-app',
    title: 'Tours App',
    information: 'A Tours app for reserving tours.',
    details:
      "It's a tour app base on Node.js based on Express, Mongoose, and Pug for reserving tours written with Javascript.<br/><br/>The app uses SendGrid for sending emails, Mongo DB Atlas as a database, and Stripe for transactions.",
    logoImage: {
      basic: {
        source: '/images/tours-app/tours-app.png',
        type: 'image/png',
      },
      optimized: {
        source: '/images/tours-app/tours-app.webp',
        type: 'image/webp',
      },
    },
    description: 'A description of a project',
    githubUrl: 'https://github.com/Crytek01/Natours',
    websiteUrl: 'https://e-natours-app.herokuapp.com/',
    technologyStack: [
      'Javascript',
      'Node.js',
      'Express.js',
      'Mongo DB',
      'Mongoose',
    ],
    platform: 'Web',
    previewImage: [
      {
        basic: {
          source: '/images/tours-app/tours-app-preview-1.png',
          type: 'image/png',
        },
        optimized: {
          source: '/images/tours-app/tours-app-preview-1.webp',
          type: 'image/webp',
        },
      },
    ],
  },
  {
    slug: 'meals-app',
    title: 'Meals App',
    information: 'A meals app for food orders like Uber eats.',
    details:
      "It's a Meals Mobile app based on React Native and Firebase.<br/><br/>The app uses Firebase for auth, backend functions, and Google API for Geo Locations, Restaurant Photos, and Google Maps.",
    logoImage: {
      basic: {
        source: '/images/meals-app/meals-app.png',
        type: 'image/png',
      },
      optimized: {
        source: '/images/meals-app/meals-app.webp',
        type: 'image/webp',
      },
    },
    description: 'A description of a project',
    githubUrl: 'https://github.com/Crytek01/MealsToGoApp',
    technologyStack: ['Typescript', 'React Native', 'Node.js', 'Firebase'],
    websiteUrl: '',
    platform: 'Mobile',
    previewImage: [
      {
        basic: {
          source: '/images/meals-app/meals-app-preview-1.png',
          type: 'image/png',
        },
        optimized: {
          source: '/images/meals-app/meals-app-preview-1.webp',
          type: 'image/webp',
        },
      },
    ],
  },
  {
    slug: 'stock-vision',
    title: 'Stock Vision',
    information: 'A stocks app for tracking stocks prices.',
    details:
      'Stocks App is a web application that allows users to track real-time stock prices of multiple companies. It uses the Alpha Vantage API to fetch stock prices and the Chart.js library to display the prices in a line chart',
    logoImage: {
      basic: {
        source: '/images/stock-vision/stock-vision-logo.png',
        type: 'image/png',
      },
      optimized: {
        source: '/images/stock-vision/stock-vision-logo.webp',
        type: 'image/webp',
      },
    },
    description:
      'A stocks app for tracking stocks prices written with Typescript with Next.js.',
    githubUrl: 'https://github.com/erickbadilla/Stock-Vision-App',
    technologyStack: [
      'Typescript',
      'Next.js',
      'React',
      'Chart.js',
      'Alpha Vantage API',
    ],
    websiteUrl: 'https://stock-vision-app.vercel.app/',
    platform: 'Web',
    previewImage: [
      {
        basic: {
          source: '/images/stock-vision/stock-vision-preview-1.png',
          type: 'image/png',
        },
        optimized: {
          source: '/images/stock-vision/stock-vision-preview-1.webp',
          type: 'image/webp',
        },
      },
      {
        basic: {
          source: '/images/stock-vision/stock-vision-preview-2.png',
          type: 'image/png',
        },
        optimized: {
          source: '/images/stock-vision/stock-vision-preview-2.webp',
          type: 'image/webp',
        },
      },
    ],
  },
  {
    slug: 'crawler',
    title: 'Crawler',
    information:
      'Is a crawler tool built in Node.js tool designed for extracting information from web pages.',
    details:
      'The Crawler API is a Node.js tool designed for extracting information from web pages. Whether you need to collect data or monitor web page statuses, this API has got you covered. With the added bonus of generating Excel reports, managing and visualizing your web crawling results has never been easier.',
    logoImage: {
      basic: {
        source: '/images/crawler/crawler-logo.png',
        type: 'image/png',
      },
      optimized: {
        source: '/images/crawler/crawler-logo.png',
        type: 'image/webp',
      },
    },
    description:
      'A crawler tool built in Node.js tool designed for extracting information from web pages written with Typescript with Next.js.',
    githubUrl: 'https://github.com/erickbadilla/Stock-Vision-App',
    technologyStack: ['Typescript', 'Node.js', 'Excel.js', 'Playwright'],
    platform: 'Web',
    previewImage: [],
  },
];
