/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tadiyos Banti",
  title: "Hi all, I'm Tad",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer(Backend heavy) | ML Engineer with passion for real-world problems. I have experience developing different systems and applications using various technologies. I am excited to work with you if you have the same desire to make impactful projects." 
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UeUThBicrctg12VmX2Sbsqdke1GO7mT6/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TADIYOS49",
  linkedin: "https://www.linkedin.com/in/tadiyos-banti-77876017a/",
  gmail: "tadiyosbanti@gmail.com",
  telegram: "https://t.me/LtTAD",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do?",
  subTitle: "Enthusiastic Engineer with passion in working with real-world problems!",
  skills: [
    emoji(
      "⚡ Develop and deploy high-performance, innovative SaaS and PaaS solutions"
    ),
    emoji("⚡ Specialize in Generative AI technologies to create intelligent systems with impactful real-world applications"),
    emoji(
      "⚡ Passionate about competitive programming to enhance problem-solving skills and algorithmic thinking"
    ),
    emoji(
      "⚡ Machine Learning expert with a strong foundation in data science and analytics"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Version Control (Git)",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-th"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AutoGen",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql & NoSql Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux Environment",
      fontAwesomeClassname: "fas fa-terminal"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Addis Ababa Science & Technology University",
      logo: require("./assets/images/aastu-logo.jpg"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "June 2018 - June 2022",
      desc: "Graduated with great distinction in Software Engineering.",
      descBullets: [
        "Object-Oriented Programming, Web Design and Development, Mobile Programming, SystemProgramming, Operating Systems, Computer Architecture and Organization, Distributed System Programming. IT Security,Database Administration",
        "Participated in developing Malaria detecting and classifying model based on blood-smear"
      ]
    },
    {
      schoolName: "A2SV",
      logo: require("./assets/images/a2sv.png"),
      subHeader: "DataStructure and Algorithm bootcamp",
      duration: "Feburary 2022 - November 2022",
      desc: "Participated in competitive programming and developed different projects.",
      descBullets: ["Sorting, Sliding Window, Prefix Sum, Recursion, Graph, Greedy, Dynamic Programming, BinarySearch, Binary Trees & more ..."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Technical/Non-Technical Leadership", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Lead | Software Engineer II | ML Engineer",
      company: "A2SV",
      companylogo: require("./assets/images/a2sv.png"),
      date: "March 2022 - December 2024",
      desc: "Worked on AfroChat a project that focuses on developing different Generative AI technologies for the African market.",
      descBullets: [
        "Led a cross-functional team of 12 engineers, a product manager, and a lead UI/UX designer to develop web, mobile, and SaaS solutions for various organizations and internal tools at A2SV.",
        "Optimized a RAG system by reducing hallucinations by 40% through the integration of agentic frameworks like AutoGen, improving contextual understanding and response accuracy.",
        "Enhanced student performance insights and global reach, analyzing historical data for personalized recommendations, acquiring users from 85+ countries via SEO, and mentoring students in DSA and interview prep.",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Mn-ale-addis",
      companylogo: require("./assets/images/mnaleaddis.jpg"),
      date: "August 2019 - January 2020",
      desc: "Mn-ale-Addis is an Event organizing platform that enables users to get the latest events happening in Addis Ababa.",
      descBullets: [
        "Developed and maintained the platform's webapp using Node.js, Express.js, and MongoDB, ensuring seamless data flow and efficient API management.",
        "Implemented a real-time chat feature using Socket.io, enhancing user engagement and communication.",
        "Collaborated with a team of 5 developers to design and develop the platform's architecture, ensuring scalability and performance.",
        "Conducted code reviews and provided mentorship to junior developers, fostering a culture of continuous learning and improvement.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/afrochat.png"),
      projectName: "AfroChat",
      projectDesc: "A platform that enables users to utilize Generative AI technologies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://beta.afrochat.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/akil.png"),
      projectName: "Akil",
      projectDesc: "A platform designed to connect volunteers with organizations in need.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://akilconnect.org"
        }
      ]
    },
    {
      image: require("./assets/images/adot.png"),
      projectName: "Adot",
      projectDesc: "A maternal companion platform for Mom's and Dad's in pregnency and post-pregnency",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://adot.life/en"
        }
      ]
    },
    {
      image: require("./assets/images/a2svhub.png"),
      projectName: "A2SV Hub",
      projectDesc: "A platform for students to succeed in their studies of Data Structures and Algorithms with AI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hub.a2sv.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "EtCPC Top 20",
      subtitle:
        "Top 20 on Ethiopian Collegiate Programming Contest 2021",
      image: require("./assets/images/ACPC.png"),
      imageAlt: "ACPC logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13gZtip03H-YVKgk72tIzuDVEFwmpqGDf/view?usp=sharing"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+251923000081",
  email_address: "tadiyosbanti@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
