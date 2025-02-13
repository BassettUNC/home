// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4B9CD3, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Elijah",
  middleName: "",
  lastName: "Bassett",
  message: "Passionate about helping others create in the digital realm. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/BassettUNC",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/elijah1539/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/elijah-bassett/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/IMG_1224.jpg"),
  imageSize: 330,
  message:
    "My name is Elijah Bassett. I am a student at the University of North Carolina at Chapel Hill and am expected to graduate in May 2024. I'm most passionate in technology that helps other, and my goal is to pursue this passion within the field of software engineering. In my free time I like working out, surfing, and mountain biking.",
  resume:  require("./resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specific projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Current Projects",
  gitHubUsername: "BassettUNC",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/IMG_1224.jpg"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/IMG_1224.jpg"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Python", value: 85 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 75 },
    { name: "SQL", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 75 },
    { name: "Collaboration", value: 85 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for an internship in any computer science related field! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "Bassett@UNC.edu",
};

const experiences = {
  show: true,
  heading: "Past Projects",
  data: [
    {
      role: 'Reeemind', // Here Add Company Name
      companylogo: require('../assets/img/e2.png'),
      date: 'Developed a tier based reminder webapp for those who have too much to do and not enough time to do it (aka... the typical college student).',
    },
    {
      role: 'Porch',
      companylogo: require('../assets/img/e0.png'),
      date: 'Implemented an inventory tracking system for the local food bank, Porch, in collaboration with the UNC club, CS+Social Good.',
    },
    {
      role: 'Personal Website',
      companylogo: require('../assets/img/e3.png'),
      date: 'Worked with author Annette Saunooke Clapsaddle to create a website for her debut book: Even as We Breathe.'
    },
    {
      role: 'Beeglobal Studio and Gallery',
      companylogo: require('../assets/img/e1.png'),
      date: 'Designed a ecommerce platform for local artists to sell their work worldwide.',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
