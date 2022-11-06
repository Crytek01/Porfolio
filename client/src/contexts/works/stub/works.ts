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
    websiteUrl: 'https://e-commerce-app-live.herokuapp.com/',
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
    information: 'An Uber eats alike app approach.',
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
];
