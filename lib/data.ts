import React from "react";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { MdQueryStats, MdOutlineLeaderboard } from "react-icons/md";
import { BiCoffee, BiSolidBusiness } from "react-icons/bi";
import bitlio from "@/public/bitlio.jpeg";
import ecommerceProductPage from "@/public/ecommerce-product-page.png";
import hoobank from "@/public/hoobank.jpeg";
import linkfold from "@/public/linkfold.jpeg";
import rentaride from "@/public/rent-a-ride.jpeg";
import telmanHeybat from "@/public/telman-heybat.jpeg";
import threads from "@/public/threads.jpeg";
import lightboxAgency from "@/public/lightbox.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Web Developer",
    location: "Baku, Azerbaijan",
    description:
      "After finishing my learning in the field started to work as freelance web developer to gain more experience and provide services.",
    icon: React.createElement(BiCoffee),
    date: "September, 2021 - May, 2022",
  },
  {
    title: "Full-Stack Web Developer",
    location: "Bitlio",
    description:
      "Worked in my own project which aims to teach programming in Azerbaijani by special courses and strong community. In this role I created full-stack application for Bitlio.",
    icon: React.createElement(BsCode),
    date: "June, 2022 - September, 2022",
  },
  {
    title: "Full-Stack Web Developer",
    location: "Lightbox Agency",
    description:
      "Now, working as Full-Stack Web Developer under framework of Lightbox Agency which owned by me.",
    icon: React.createElement(BsCodeSlash),
    date: "June, 2023 - present",
  },
  {
    title: "SABAH.incubation Member",
    location: "SABAH.hub",
    description:
      "It's time to dive into business! Here I started to learn about startups, business, etc. and tried to expand my knowledge base and not to limit it by only programming.",
    icon: React.createElement(MdQueryStats),
    date: "September, 2023 - present",
  },
  {
    title: "CTO",
    location: "Tabi@",
    description:
      "At the same time I am CTO at team named Tabi@ which created under framework of SABAH.incubation.",
    icon: React.createElement(BiSolidBusiness),
    date: "September, 2023 - present",
  },
  // {
  //   title: "Tech Lead of Front-End Team",
  //   location: "USG of ADA University",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(MdOutlineLeaderboard),
  //   date: "26 October, 2023 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "E-commerce Product Page",
    description:
      "E-commerce Product Page project from Frontend Mentor. Targeted to develop designing, implementing design skills, and state management.",
    tags: ["React", "Tailwind", "Zustand"],
    imageUrl: ecommerceProductPage,
    link: "https://ecommerce-product-page-vlhsmylv.vercel.app/",
  },
  {
    title: "Hoobank",
    description:
      "Modern banking application that enables individuals and businesses to get rid of online payment issues. The website offers a modern and user-friendly interface.",
    tags: ["React", "Tailwind"],
    imageUrl: hoobank,
    link: "https://hoobank-three-neon.vercel.app/",
  },
  {
    title: "Linkfold",
    description:
      "One place your all of your links! Web app like BioLink, Linktree, etc. Contains functionalities such as authentication, database integration, etc.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    imageUrl: linkfold,
    link: "https://linkfold-phi.vercel.app/",
  },
  {
    title: "Rent a Ride",
    description:
      "A car rental website is a digital platform that enables individuals or businesses to lease vehicles for personal or professional purposes. The website offers a user-friendly interface.",
    tags: ["Next.js", "SCSS/SASS"],
    imageUrl: rentaride,
    link: "https://car-rental-service-lightbox.netlify.app/",
  },
  {
    title: "Lightbox Agency",
    description:
      "An Agency Website that provides information for its users and customers. It has different functionalities as order confirmation and order check.",
    tags: ["Next.js", "Firebase", "SCSS/SASS"],
    imageUrl: lightboxAgency,
    link: "https://lightbox-agency.netlify.app/",
  },
  {
    title: "Threads",
    description:
      "Community application that you can create and discuss topics. Web clone of Threads application. Contains functionalities such as authentication, database integration, etc.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    imageUrl: threads,
    link: "https://threads-net.netlify.app/",
  },
  {
    title: "Bitlio",
    description:
      "A Platform that helps people to learn to program in the Azerbaijani language. Has all functionalities such as authentication and database integration.",
    tags: ["Next.js", "Firebase", "Bootstrap"],
    imageUrl: bitlio,
    link: "https://bitlio-ui.netlify.app/",
  },
  {
    title: "Telman Heybat",
    description:
      "A Personal Website for photographer. Contains services, portfolio, and contact sections. It is categorized as a landing page.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: telmanHeybat,
    link: "https://vlhsmylv.github.io/telmanheybat-com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "SCSS/SASS",
  "Prisma",
  "MongoDB",
  "Firebase",
  "Zustand",
  "Express",
] as const;
