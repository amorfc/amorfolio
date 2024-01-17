import { ImagePublicUrls } from "../../constants/imagePublicUrlConstants";

export interface ExperienceTechStackType {
  name: string;
  imgPublicUrl: string;
}

export interface ExperienceType {
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  jobTitle?: string;
  description: string;
  techStack: ExperienceTechStackType[];
  imgPublicUrl: ImagePublicUrls;
  link: string;
}

export const experienceData: ExperienceType[] = [
  {
    company: "Freelance Software Developer",
    location: "Remote",
    startDate: "2022 Aug",
    endDate: "Present",
    jobTitle: undefined,
    description: `
      Spearheaded the creation of a robust API for a crypto staking service, implementing cutting-edge technologies to ensure seamless functionality. This included designing and optimizing backend processes to facilitate secure and efficient staking operations.
      Crafted an intuitive and user-friendly web interface for the crypto staking service, utilizing modern web development tools. Result: an appealing, responsive interface for seamless staking activity management.
    `,
    techStack: [
      { name: "React", imgPublicUrl: "https://via.placeholder.com/150" },
      // Add other technologies if applicable
    ],
    imgPublicUrl: ImagePublicUrls.Profile, // Replace with the actual image public URL
    link: "https://via.placeholder.com/150", // Replace with the actual link
  },
  {
    company: "Beyn Technology",
    location: "Istanbul",
    startDate: "2022 Sep",
    endDate: "2023 Aug",
    jobTitle: "Frontend Developer",
    description: `
      Developed and maintained CRM applications for B2B customers, enhancing customer relations and operational efficiency.
      Engineered an Electron.js application using React and Redux Toolkit Query, delivering betting games across all bet office machines.
      Maintained a React Native application with bare Redux for specialized customers, featuring game offerings and account management.
    `,
    techStack: [
      // Add technologies for this experience if applicable
    ],
    imgPublicUrl: ImagePublicUrls.BeynTechnology, // Replace with the actual image public URL
    link: "https://via.placeholder.com/150", // Replace with the actual link
  },
  {
    company: "KolayBi` Company",
    location: "Istanbul",
    startDate: "2021 Mar",
    endDate: "2022 Sep",
    jobTitle: "Full Stack Developer",
    description: `
      Maintained existing applications and designed and delivered new applications.
      Authored code fixes and enhancements for inclusion in future code releases and patches.
      Developed app via React Native - Expo SDK and published on Google Play Store.
    `,
    techStack: [
      // Add technologies for this experience if applicable
    ],
    imgPublicUrl: ImagePublicUrls.Kolaybi, // Replace with the actual image public URL
    link: "https://via.placeholder.com/150", // Replace with the actual link
  },
  {
    company: "Techbros",
    location: "Istanbul",
    startDate: "2020 Sep",
    endDate: "2020 Oct",
    jobTitle: "Mobile Application Developer Intern",
    description: `
      Developed a complex React Native mobile application from scratch, providing pre-accounting services for mid-cap companies. The app handles invoicing, tracking, and management of orders and invoice-related domains from connected e-commerce platforms.
      Maintained and added new features to an existing web application built with React.
      Supported the CRM frontend team with architectural guidance.
    `,
    techStack: [
      // Add technologies for this experience if applicable
    ],
    imgPublicUrl: ImagePublicUrls.Techbros, // Replace with the actual image public URL
    link: "https://via.placeholder.com/150", // Replace with the actual link
  },
  {
    company: "Appcent",
    location: "Istanbul",
    startDate: "2020 Jul",
    endDate: "2020 Sep",
    jobTitle: "Mobile Application Developer Intern (Android)",
    description: `
      Applied various techniques to locate bugs and errors in applications.
      Managed all aspects of Android app lifecycle from research and planning through deployment and post-launch support.
      Designed user interfaces that engaged multiple senses and produced immersive experiences.
      Created custom mobile applications using native technologies.
    `,
    techStack: [
      // Add technologies for this experience if applicable
    ],
    imgPublicUrl: ImagePublicUrls.Appcent, // Replace with the actual image public URL
    link: "https://via.placeholder.com/150", // Replace with the actual link
  },
];
