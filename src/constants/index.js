import {
  mobile,
  backend,
  next,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  metaversus,
  dashboard,
  youtubey,
  crwnStore,
  tarkez,
  safirni,
  real_estate,
  threeJsWeb,
  my_portfolio,
  threejs,
  JS_certification,
  udacity_certification,React_certification, hasoub_certification
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
];

const experiences = [
  {
    title: "Html & CSS",
    icon: html,
    iconBg: "#383E56",
    date: "7-2021 -  2021",
    img: udacity_certification,
    certification_link: "https://graduation.udacity.com/confirm/GUFTCZJD",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "JavaScript",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "2021 -  2022",
    img: JS_certification,
    certification_link: "https://www.udemy.com/certificate/UC-f55c74b0-92d4-492c-b0e9-5bfac8908752/"
  },
  {
    title: "React.js",
    icon: reactjs,
    iconBg: "#383E56",
    date: " 2022 -  2023",
    img: React_certification,
    certification_link:"https://www.udemy.com/certificate/UC-08a4dda0-2560-40f8-9541-e7602dcdc4a6/",
  },
  {
    title: "Front-end course",
    icon: html,
    iconBg: "#383E56",
    date: " 2022 -  2023",
    img: hasoub_certification,
    certification_link:"https://academy.hsoub.com/certificate/EGJEA4XCERP1JUF76BMV8VPR.pdf",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next.js 13",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Crown Store",
    description: "A next.js 13 e-commerce website with dynamic data from sanity and payment using stripe",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: crwnStore,
    source_code_link: "https://github.com/OsamaHIma/ecommerce-next13",
    live_preview: "https://crown-store-next13.vercel.app/"
  },
  {
    name: "Metaversus",
    description: "A modern next.js 13 landing page with some nice animations using framer motion and Tailwindcss.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: metaversus,
    source_code_link: "https://github.com/OsamaHIma/Metaverse",
    live_preview: "https://metaversuslite.netlify.app/"
  },
  {
    name: "Admin Dashboard",
    description:
      "A full admin dashboard to manage users and sales with some charts to make it easier to collect data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Nivo charts",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/OsamaHIma/Fancy-admin-dashboard",
    live_preview: "https://fancy-admin-dashboard2002.vercel.app/"
  }, {
    name: "My other Portfolio",
    description:
      "Built using Three.js was but I added a lot of 3D models which caused the portfolio to take a long time to reload.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: my_portfolio,
    source_code_link: "https://github.com/OsamaHIma/my-3D-portfolio/",
    live_preview: "https://osama3dportfolio.vercel.app/"
  },
  {
    name: "Safirni",
    description: "A next.js 13 website for Real estate",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Framer motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: real_estate,
    source_code_link: "https://github.com/OsamaHIma/RealEstate",
    live_preview: "https://real-estate-next13.vercel.app/"
  },
  {
    name: "Safirni",
    description: "A next.js 13 website for tourism with full login and signup functionality",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: safirni,
    source_code_link: "https://github.com/OsamaHIma/safirni",
    live_preview: "https://safirni.vercel.app/"
  },
  {
    name: "3D Shirt",
    description: "Customize your own shirt using 3D change the colors and upload your images",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "React-three-fiber",
        color: "pink-text-gradient",
      },
    ],
    image: threeJsWeb,
    source_code_link: "https://github.com/OsamaHIma/ThreeJs-Shirt",
    live_preview: "https://3d-shirt-osamahima.vercel.app/"
  },
  {
    name: "Tarkez",
    description:
      "A full website for 'Romooz' company fully optimized to ensure fast loading.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "React-router",
        color: "pink-text-gradient",
      },
    ],
    image: tarkez,
    source_code_link: "https://github.com/OsamaHIma/Romooz-task",
    live_preview: "https://romooz.netlify.app/"
  },

  {
    name: "Youtubey",
    description:
      "This project was my first time to build a full website using HTML, CSS, and JS.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: youtubey,
    source_code_link: "https://github.com/OsamaHIma/Youtubey",
    live_preview: "https://youtubey.netlify.app/"
  },

];

export { services, technologies, experiences, projects };
