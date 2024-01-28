import { ImagePublicUrls } from "../../constants/imagePublicUrlConstants";

export interface ProjectType {
  projectName: string;
  description: string;
  imgPublicUrl: ImagePublicUrls;
  redirectUrl?: string;
  sourceCodeUrl?: string;
}

export const projectData: ProjectType[] = [
  {
    projectName: "Nym Updater",
    description: `
    I developed a terminal application designed for the automatic updating of Nym mixnodes and gateways, contributing to the efficiency and reliability of the Nym privacy-centric cryptocurrency network. The application streamlines the update process, ensuring that Nym nodes stay current with the latest features, security patches, and improvements.
    `,
    imgPublicUrl: ImagePublicUrls.Nym,
    redirectUrl: "https://nymtech.net/",
    sourceCodeUrl: "https://github.com/amorfc/nym-updater",
  },
  {
    projectName: "Hoodrun",
    description: `HoodRun offers top-tier open-source technical software support for blockchain projects and staking services. As a founding member, I play a crucial role in leading the oversight of technical needs, actively contributing as part of this open-source community. My efforts ensure seamless integration and support for projects, fostering growth and success within our vibrant community.`,
    imgPublicUrl: ImagePublicUrls.Hoodrun,
    redirectUrl: "https://hoodrun.io/",
    sourceCodeUrl: "https://github.com/orgs/hoodrunio/dashboard",
  },
  {
    projectName: "Amorfolio",
    description: `You are here! Amorfolio is a portfolio website template designed to showcase your work and experience. It is built with React, TypeScript, and TailwindCSS. The website is fully responsive and customizable. The source code is available for free on GitHub.`,
    imgPublicUrl: ImagePublicUrls.Hoodrun,
    redirectUrl: "https://amorfolio/",
    sourceCodeUrl: "https://github.com/orgs/hoodrunio/dashboard",
  },
];
