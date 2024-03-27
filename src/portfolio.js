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
  username: "Natalia Mora",
  title: "Hi, I'm Natalia!",
  subTitle: emoji(
    "Dedicated AI/ML researcher, dynamic speaker, and proactive student leader passionate about democratizing AI/ML education for all. 🧠 Proficient in Python, AWS, and deep RL research, with a solid foundation in cloud infrastructure and back-end software engineering. ⚙️ 1st-gen Latina in tech committed to engineering elegant, innovative, and data-driven solutions that prioritize equity, global impact, and human-centered values. 🌍 Anticipating B.Sc in Computer Science in May 2024."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qxbdN4tw1NU6fgA_lAOhedVNb5Cq_H2C/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nxm23763",
  linkedin: "https://www.linkedin.com/in/natalia-mora-ou/",
  researchgate: "https://www.researchgate.net/profile/Natalia-Mora-3",
  orcid: "https://orcid.org/my-orcid?orcid=0000-0001-8748-122X",
  gmail: "nxm23763@gmail.com",
  kaggle: "https://www.kaggle.com/nataliamora23763",
  medium: "https://medium.com/@nxm23763",
  stackoverflow: "https://stackoverflow.com/users/23629121/natalia-mora",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I explore various tech stacks for AI/ML research and software engineering, tapping into their overlaps to unearth key insights.",
  skills: [
    emoji(
      "⚡  Implement cutting-edge machine learning algorithms to analyze complex datasets and derive actionable insights"
    ),
    emoji("⚡ Architect scalable cloud infrastructure solutions using AWS services to optimize performance and reliability"),
    emoji(
      "⚡ Develop data pipelines and automation workflows using Python and SQL to streamline data processing and analysis tasks"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch/Tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "SQL/DBs",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C/C++/C#",
      fontAwesomeClassname: "fas fa-c"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "RESTful API",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-gears"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Oklahoma",
      logo: require("./assets/images/ouLogoBGRemoved.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2020 - May 2024",
      desc: "As a passionate computer science student, AI/ML researcher, and student leader, I've made it my lifelong mission to democratize AI education for all. My journey at the University of Oklahoma Gallogly College of Engineering has laid the groundwork for this mission.",
      descBullets: [
        emoji("🧠 Co-Founder, Former President, and Current VPX of OU AI/ML Club, est. Dec 2020"),
        emoji("👩🏻‍💻 Co-Founder and Co-President of OU Girls Who Code College Loop, est. Aug 2023"),
        emoji("🍀 Loyal Knights of Old Trusty, LKOT 798/"),
        emoji("🌐 Co-Founder of OU AI/ML Symposium, a one-of-a-kind student-led conference showcasing diverse AI/ML projects from the OU student body with historical support from industry leaders such as IBM, Walmart Global Tech, Morgan Stanley, Boeing, DISC, REAL Lab, and ConocoPhillips"),
        emoji("🤖 4x ML Researcher, specializing in deep reinforcement learning (RL), recurrent vector functional link (RVFL) networks, and deep Q-Learning (DQN), applied in real-world tasks such as image compression, compiler transformations, the Graph Coloring Problem, and even mastering matrix logic puzzles with linear algebra"),
        emoji("📔 Published author of independent preprint paper \"The Mind Behind The Robot\", an interdisciplinary study exploring the role of anthropomorphism, user perceptions, and robot design in facilitating effective joint-task interactions, particularly in the context of artificial moral agent (AMA)-powered social robots"),
        emoji("🗣️ Public speaker on AI/ML-related topics at Teach OUt on Race Conference, SASE, GLAMS, ENGR 1411, and other seminars, workshops, and forums"),
        emoji("🔬 Alum of OU First-Year Research Experience (FYRE) and Honors Engineering Research Experience (HERE)"),        emoji("🎯 Member of Data Science and Analytics (DSA) Club, Hacklahoma, ACM, UI/UX Club, Engineers' Club, and Computer Science Student Board"),
        emoji("🙌🏻 Involved in on-campus professional societies, the Society of Hispanic Professional Engineers (SHPE) and the Society of Women Engineers (SWE)"),
        emoji("🌱 Volunteer at The Big Event, OU Engineering Open House, Tomás Rivera Educational Empowerment (TREE) Conference, and OU Girls Learning and Applying Math and Science (GLAMS)"),
        emoji("✈️ Full-Ride Scholarships to WE23 Conference (Los Angeles, CA), 2022 Salesforce B.A.S.E. Camp (Scotts Valley, CA), 2022 Dow Diamond Symposium (Midland, MI) and the 2022 TIAA Bank Early Immersion Program for Hispanics and Latinos (Charlotte, NC)"),
        emoji("🎓 Relevant Coursework: Artificial Neural Networks & Evolution, Computational Methods of Discrete Optimization, Intro to Intelligent Robotics, Parallel, Distributed, and Network Programming, Software Engineering, Database Management Systems, Capstone Design Project, Intro to Operating Systems, Computer Security, Principles of Programming Languages, Data Structures, Discrete Structures, Linear Algebra, Differential Equations, Calculus I-III")
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Research Assistant",
      company: "Data Institute for Societal Challenges",
      companylogo: require("./assets/images/disc2Logo.jpg"),
      date: "April 2024 – Present",
      location: "Norman, OK, US",
      desc: "This April, I will join the Supply Chain Risk Management (SCRM) team at DISC as a data science research assistant.",
      descBullets: [
        "Contribute to an industry project with the Air Force and SOSSEC Inc., developing a risk assessment system for the DoD supply chain",
        "Conduct data analysis with Python, extracting insights from news articles and financial documents to assess financial, legal, cybersecurity, and foreign influence risks"
      ]
    },
    {
      role: "AI Data Science Training Expert",
      company: "Outlier AI",
      companylogo: require("./assets/images/outlierAILogo.jpg"),
      date: "February 2024 – Present",
      location: "Remote",
      desc: "As a freelance AI Data Science Training Expert at Outlier AI, I'll refine generative AI model responses and maintain coding standards, tackling various data science challenges and collaborating on dynamic projects.",
      descBullets: [
        "Refined generative AI model responses and maintained coding standards",
        "Tackled coding challenges in data generation, cleaning, visualization, and machine learning modeling",
        "Collaborated on dynamic projects aimed at training large language models (LLMs) and improving code generation"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "JPMorgan Chase & Co.",
      companylogo: require("./assets/images/jpmcLogo.png"),
      date: "June 2023 – August 2023",
      location: "Palo Alto, CA, US",
      desc: "As a back-end engineer intern on the Site Reliability Engineering team, I focused on enhancing operational efficiency in the company's cloud infrastructure.",
      descBullets: [
        "Mastered foundational AWS with CCP certification, showcasing expertise in S3, EC2, RDC and Lambda",
        "Engineered data-driven Snowflake resource monitoring dashboard using Prometheus metrics",
        "Designed a tailored Grafana dashboard, enabling comprehensive data visualization across all LOBs",
        "Implemented an efficient end-to-end pipeline, enhancing data transfer from AWS S3 to Grafana"
      ]
    },
    {
      role: "IT Support Specialist",
      company: "University of Oklahoma IT",
      companylogo: require("./assets/images/ouitLogo.png"),
      date: "March 2023 – August 2023",
      location: "Norman, OK, US",
      desc: "As an OU Library Technology Platforms (LTP) support specialist, I enhanced the library user experience for staff and patrons by streamlining computer integration and providing efficient technical assistance across all OU branch libraries.",
      descBullets: [
        "Onboarded enterprise computers using KACE and JAMF scripting for seamless integration",
        "Led to the resolution of over 50 Jira IT support tickets, effectively managing IT tasks and improving system efficiency",
        "Managed and troubleshooted hardware issues to optimize system function",
        "Provided remote assistance using Bomgar remote agent for efficient software issue resolution"
      ]
    },
    {
      role: "Algebra Tutor",
      company: "Oklahoma Math Tutoring Corps",
      companylogo: require("./assets/images/okDeptEducationLogo.png"),
      date: "September 2022 – April 2023",
      location: "Remote",
      desc: "As an OMTC algebra tutor, I mentored special education students in grades 7-9 through high-dosage algebra tutoring post-COVID disruptions.",
      descBullets: [
        "Conducted triweekly virtual sessions emphasizing small group hands-on activities and practice problems",
        "Focused on real-world problem-solving techniques sensitive to individual learning styles",
        "Reinforced key concepts of the Oklahoma algebra curriculum"
      ]
    },
    {
      role: "Student Library Assistant",
      company: "University of Oklahoma Libraries",
      companylogo: require("./assets/images/ouLogo.png"),
      date: "October 2021 – March 2023",
      location: "Norman, OK, US",
      desc: "As a library assistant at the Bizzell Memorial Library's History of Science Special Collections, I aided researchers in accessing sensitive historical materials.",
      descBullets: [
        "Guided researchers in accessing pre-1800s historical materials on-site",
        "Processed Interlibrary Loan (ILL) Requests and digitally delivered photo-scanned sensitive materials",
        "Assisted in the preservation efforts and general upkeep of the special collections"
      ]
    },
    {
      role: "Software Engineer Fellow",
      company: "JPMorgan Chase & Co.",
      companylogo: require("./assets/images/jpmcLogo.png"),
      date: "June 2022 – July 2022",
      location: "Plano, TX, US",
      desc: "As a SWE fellow in the inaugural class of the Advancing Hispanics & Latinos (AHL) Fellowship Program, I made an impact by implementing ML on a credit risk assessment model, and developed my front-end skills to create a financial literacy game, aligning with AHL's diversity and economic equity goals.",
      descBullets: [
        "Implemented artificial neural network (ANN)-powered risk assessment model for partner bank Southern Bancorp, leveraging consumer behavior data to support low-income clients in accessing credit-building programs",
        "Engineered \"Finalfa\", an online financial literacy game designed for first-gen immigrants to achieve economic equity in the US, as a front-end developer using the HTML/CSS/JS framework, React, Figma, and Node.js",
        "Contributed to innovative business solutions and swift product development within a multidisciplinary cohort"
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
  subtitle: "Note to self, this section will contain research experiences! THIS IS ALL OUT OF ORDER",
  projects: [
    {
      image: require("./assets/images/realLabLogo.png"),
      projectName: "Robotics, Evolution, Adaptation and Learning (REAL) Lab",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "REAL Lab Website",
          url: "http://real.oucreate.com/about"
        },
        {
          name: "FYRE Program",
          url: "https://www.ou.edu/honors/research/fyre"
        },
        {
          name: "Final Research Poster",
          url: "https://drive.google.com/file/d/1cJKMSpy0FeTNdBzcQqrFI5Kivee59fNn/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AgriAIpicture.jpg"),
      projectName: "DISC Agri:AI Coding Challenge",
      projectDesc: "[COMING SOON]",
      footerLink: [
        {
          name: "DISC Agri:AI Website",
          url: "https://www.ou.edu/disc/active-projects/nsf-ai-ag"
        }
      ]
    },
    {
      image: require("./assets/images/logicPuzzlePic.jpg"),
      projectName: "RL Matrix Logic Puzzle Solver",
      projectDesc: "[COMING SOON]",
      footerLink: [
        {
          name: "Puzzle Baron Logic Puzzles",
          url: "https://logic.puzzlebaron.com/"
        }
      ]
    },
    {
      image: require("./assets/images/GCPpic.png"),
      projectName: "RL Graph Coloring Problem Solver",
      projectDesc: "[COMING SOON]",
      footerLink: [
        {
          name: "ANNE Course",
          url: "https://www.cs.ou.edu/~hougen/classes/Spring-2024/ANNE/"
        }
      ]
    },
    {
      image: require("./assets/images/ouLogo.png"),
      projectName: "Hacklahoma 2023 Best Theme Winner: YesterYak",
      projectDesc: "[COMING SOON] (OU LOGO IS PLACEHOLDER)",
      footerLink: [
        {
          name: "A button goes here",
          url: "https://www.ou.edu/disc/active-projects/nsf-ai-ag"
        }
      ]
    },
    {
      image: require("./assets/images/ouLogo.png"),
      projectName: "BrewMaster's Cauldron",
      projectDesc: "[COMING SOON] (OU LOGO IS PLACEHOLDER)",
      footerLink: [
        {
          name: "A button goes here",
          url: "https://www.ou.edu/disc/active-projects/nsf-ai-ag"
        }
      ]
    },
    {
      image: require("./assets/images/ouLogo.png"),
      projectName: "Oliver: A Speech-Oriented Tour Guide Robot",
      projectDesc: "[COMING SOON] (OU LOGO IS PLACEHOLDER)",
      footerLink: [
        {
          name: "A button goes here",
          url: "https://www.ou.edu/disc/active-projects/nsf-ai-ag"
        }
      ]
    },
    {
      image: require("./assets/images/ouLogo.png"),
      projectName: "JPMC AHL Fellowship: Finalfa",
      projectDesc: "[COMING SOON] (OU LOGO IS PLACEHOLDER)",
      footerLink: [
        {
          name: "A button goes here",
          url: "https://www.ou.edu/disc/active-projects/nsf-ai-ag"
        }
      ]
    },
    {
      image: require("./assets/images/ouLogo.png"),
      projectName: "HERE Research: Gamifying Compiler and Code Generator Transformations",
      projectDesc: "[COMING SOON] (OU LOGO IS PLACEHOLDER)",
      footerLink: [
        {
          name: "A button goes here",
          url: "https://www.ou.edu/disc/active-projects/nsf-ai-ag"
        }
      ]
    },
    {
      image: require("./assets/images/ouLogo.png"),
      projectName: "HERE Research: Investigating Performance of Randomized Neural Networks in Various Applications",
      projectDesc: "[COMING SOON] (OU LOGO IS PLACEHOLDER)",
      footerLink: [
        {
          name: "A button goes here",
          url: "https://www.ou.edu/disc/active-projects/nsf-ai-ag"
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
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
      title: "Strengthening AI Literacy among policymakers, industry leaders, and the general public",
      subtitle: "2024 WGS CSJ Teach OUt on Race Conference. Navigating the Intersection of AI, Technology, and Race: Addressing Bias and Promoting Equity",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.ou.edu/cas/csj/programs/teachout"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "405-906-6964",
  email_address: "nxm23763@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
