// src/data/projectsData.js
import eventManagement from "../../../../assets/eventManagement.png";
import cookverse from "../../../../assets/cookverse.png";
import rswa from "../../../../assets/rswa.png";
const projects = [
  {
    id: "project1",
    name: "Event management application",
    image: eventManagement,
    description:
      "SODEV is a community-driven event management platform where users can create, join, and track social development events in their local area..",
    tech: ["React", "Firebase", "Express", "MongoDB"],
    liveLink: "https://event-management-app-b86d6.web.app/",
    githubLink:
      "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-ashiful2002",
    challenges: "Integrating tracking logic and user authentication.",
    futurePlans: "Add more features in future",
  },
  {
    id: "project2",
    name: "Recipe booking platform",
    image: cookverse,
    description:
      "Cook_verse is a web application designed for food enthusiasts who love to explore and share their favorite recipes. The app allows users to browse featured recipes, save their favorites, and contribute their own — all in a smooth, authenticated environment.",
    tech: ["React", "firebase", "Node.js", "MongoDB"],
    liveLink: "https://books-recipe-app.web.app/",
    githubLink:
      "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-ashiful2002",
    challenges: "Handling complex data filtering and pagination.",
    futurePlans: "Implement user dashboard and recommendations.",
  },
  {
    id: "project3",
    name: "website for a organization",
    image: rswa,
    description:
      "This is a simple website for a organization named 'RSWA'. I had started to work it in before. what i learned i tried to implement on this website. Now user can sign in and add there blood group data in databse , and that are shown in this website ",
    tech: [
      "React",
      "Tailwind CSS",
      "firebase",
      "EXpress",
      "mongoDb",
    
    ],
    liveLink: "https://rswaa.vercel.app/",
    githubLink: "https://github.com/ashiful2002/rswa",
    challenges: "collection data from the users",
    futurePlans:
      "Make more functional, manage blood doners data when they will donate blood and in next when they will prepire for the next blood donation.",
  },
];

export default projects;
