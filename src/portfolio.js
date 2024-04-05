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
  //aggle: "https://www.kaggle.com/nataliamora23763",
  //medium: "https://medium.com/@nxm23763",
  //stackoverflow: "https://stackoverflow.com/users/23629121/natalia-mora",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I explore various tech stacks for AI/ML research and software engineering, tapping into their overlaps to unearth key insights.",
  skills: [
    emoji(
      "⚡  Implement cutting-edge machine learning algorithms to analyze complex datasets and derive actionable insights"
    ),
    emoji(
      "⚡ Architect scalable cloud infrastructure solutions using AWS services to optimize performance and reliability"
    ),
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
        emoji(
          "🧠 Co-Founder, Former President, and Current VPX of OU AI/ML Club, est. Dec 2020."
        ),
        emoji(
          "👩🏻‍💻 Co-Founder and Co-President of OU Girls Who Code College Loop, est. Aug 2023."
        ),
        emoji("🍀 Loyal Knights of Old Trusty, LKOT 798/."),
        emoji(
          '📔 Published author of independent preprint paper "The Mind Behind The Robot", exploring how anthropomorphism, user perceptions, and social robot design enhance joint-task interactions.'
        ),
        emoji(
          "🤖 4x ML Researcher, specializing in deep reinforcement learning, artificial neural networks, and large language models (LLMs)."
        ),
        emoji(
          "🌐 Co-Creator of award-winning annual OU AI/ML Symposium, showcasing original AI/ML research projects by OU students. Supported by industry leaders like IBM, Walmart Global Tech, Morgan Stanley, Boeing, and ConocoPhillips. 2x Recipient of the Donna Shirley Engineering Award."
        ),
        emoji(
          "🗣️ Public speaker on AI/ML ethics, with a proven track record of delivering engaging presentations at seminars and conferences. Dedicated to fostering dialogue, raising awareness of societal concerns, and guiding audiences through the ethical implications shaping the future of AI/ML."
        ),
        emoji(
          "🔬 Alum of OU First-Year Research Experience (FYRE) and Honors Engineering Research Experience (HERE). Affiliate member of Data Institute for Societal Challenges (DISC) and Robotics, Evolution, Adaptation and Learning Laboratory (REAL Lab)."
        ),
        emoji(
          "🎯 Member of Society of Hispanic Professional Engineers (SHPE), Society of Women Engineers (SWE), Data Science and Analytics (DSA) Club, Hacklahoma, SACM, UI/UX Club, Engineers' Club, and Computer Science Student Board."
        ),
        //emoji("🙌🏻 Involved in on-campus professional societies, the Society of Hispanic Professional Engineers (SHPE) and the Society of Women Engineers (SWE)"),
        //emoji("🌱 Volunteer at The Big Event, OU Engineering Open House, Tomás Rivera Educational Empowerment (TREE) Conference, and OU Girls Learning and Applying Math and Science (GLAMS)"),
        //emoji("✈️ Full-Ride Scholarships to WE23 Conference (Los Angeles, CA), 2022 Salesforce B.A.S.E. Camp (Scotts Valley, CA), 2022 Dow Diamond Symposium (Midland, MI) and the 2022 TIAA Bank Early Immersion Program for Hispanics and Latinos (Charlotte, NC)"),
        emoji(
          "🎓 Relevant Coursework: Artificial Neural Networks & Evolution, Computational Methods of Discrete Optimization, Intro to Intelligent Robotics, Parallel, Distributed, and Network Programming, Software Engineering, Database Management Systems, Capstone Design Project, Intro to Operating Systems, Computer Security, Theory of Computation, Principles of Programming Languages, Data Structures, Discrete Structures, Linear Algebra, Differential Equations, Calculus I-III."
        )
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
        'Engineered "Finalfa", an online financial literacy game designed for first-gen immigrants to achieve economic equity in the US, as a front-end developer using the HTML/CSS/JS framework, React, Figma, and Node.js',
        "Contributed to innovative business solutions and swift product development within a multidisciplinary cohort"
      ]
    }
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
  title: "Projects",
  subtitle: emoji(
    "My role: 🔧 = Back-End | 🎨 = Front-End | 🧠 = AI/ML & Data Engineering"
  ),
  projects: [
    {
      image: require("./assets/images/GCPpic.png"),
      projectName: emoji("🧠 RL Graph Coloring Problem Solver"),
      projectDesc: "Jan-May 2024. Coming soon: ",
      footerLink: [
        {
          name: "ANNE Course",
          url: "https://www.cs.ou.edu/~hougen/classes/Spring-2024/ANNE/"
        }
      ]
    },
    {
      image: require("./assets/images/AgriAIpicture.jpg"),
      projectName: emoji("🧠 DISC Agri:AI Coding Challenge"),
      projectDesc:
        "Mar-Apr 2024. AI Institute Planning: A Gap-Based Approach to Frame and Develop Robust AI for Sustainable Agriculture. Currently building a predictive regression model for charting CO2 fluxes and evapotranspiration in grain-only and graze-out wheat using weather and satellite remote sensing data.",
      footerLink: [
        {
          name: "DISC Agri: AI Website",
          url: "https://www.ou.edu/disc/active-projects/nsf-ai-ag"
        }
      ]
    },
    {
      image: require("./assets/images/yesteryak.png"),
      projectName: emoji("🎨 YesterYak"),
      projectDesc:
        "Feb 2024. Hacklahoma 2024 Best Theme Winner! Imagine stepping into a digital time machine, not to change history, but to listen in on the whispers and roars of the past. Welcome to YesterYak, a social media from the past, now!",
      footerLink: [
        {
          name: "Devpost",
          url: "https://devpost.com/software/yesteryak"
        }
      ]
    },
    {
      image: require("./assets/images/logicPuzzlePic.jpg"),
      projectName: emoji("🧠 RL Matrix Logic Puzzle Solver"),
      projectDesc:
        "Dec 2023-Present. Personal passion project, exploring interpretable Deep-Q Network (DQN) RL models applied to constraint satisfaction problems (CSPs), specifically grid logic puzzles. Analyzing DQN RL efficacy through key metrics like learning rate, convergence behavior, and solution quality. Open-source Github repo to be published soon.",
      footerLink: [
        {
          name: "Puzzle Baron Logic Puzzles",
          url: "https://logic.puzzlebaron.com/"
        }
      ]
    },
    {
      image: require("./assets/images/classesPage.png"),
      projectName: emoji("🔧 BrewMaster's Cauldron"),
      projectDesc:
        "Aug-Dec 2023. Step into BrewMaster's Cauldron, where homebrew adventures come to life! Craft custom heroes, wield spells, and document quests with this React-based MERN (MongoDB, Express, React, Node.js) web app, tailored for adventurers by adventurers. Live demo to be published soon.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/mariadoan247/brew-masters-cauldron"
        }
      ]
    },
    {
      image: require("./assets/images/kobukiTurtlebot.JPG"),
      projectName: emoji("🔧 Oliver: A Speech-Oriented Tour Guide Robot"),
      projectDesc:
        "Aug-Dec 2023. Explore OU's engineering campus with Oliver, our Autonomous Turtlebot Tour Guide! Implemented on a Kobuki Turtlebot using Gazebo and ROS, Oliver employs NLP for real-time social interaction, offering precise navigation and intelligent insights.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/nxm23763/cs4013_oliver"
        },
        {
          name: "Final Poster",
          url: "https://drive.google.com/file/d/1I2MCpXeLwd8m_yWqix61ePRluAU_5FKe/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/tictactoe.png"),
      projectName: emoji(
        "🧠 Tic Tac Alone: A RL-based Proof of Concept for Gamifying Compiler and Code Generator Transformations"
      ),
      projectDesc: "Jan-May 2023.",
      footerLink: [
        {
          name: "Photo credit",
          url: "https://www.zabkat.com/blog/tic-tac-toe-learning.htm"
        }
      ]
    },
    {
      image: require("./assets/images/finalfaHome.png"),
      projectName: emoji("🎨 JPMC AHL Fellowship: Finalfa"),
      projectDesc:
        "Jul 2022. Finalfa helps Hispanic and Latino immigrants bolster their financial literacy and secure their futures! This jeopardy-style game provides a fun, easy, and accessible curriculum for all!",
      footerLink: [
        {
          name: "Glitch Code",
          url: "https://glitch.com/edit/#!/finalfaprototypehackathon"
        },
        {
          name: "Live Demo",
          url: "https://finalfaprototypehackathon.glitch.me"
        }
      ]
    },
    {
      image: require("./assets/images/realLabLogo.png"),
      projectName: emoji(
        "🧠 Modeling Socio-Cognitive Decision Making: An Evolutionary Approach to the Deep RL Agent-Based Neural Network"
      ),
      projectDesc:
        "Jan-May 2021. Robotics, Evolution, Adaptation and Learning (REAL) Lab Research. Proposal to optimize deep RL in socio-cognitive sensorimotor responses with partially supervised RL networks, which demonstrate superior efficiency, requiring less training data and fewer iterations for convergence. This research advocates for a unique hybrid approach to create socially cognizant robots for therapeutic applications.",
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
    }
    /*
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
    */
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: emoji(
    "Emoji key: 🏆 = Award | ⚙️ = Certification/Technical Training | ✈️ = Full-Ride Conference Travel Scholarship"
  ),

  achievementsCards: [
    {
      title: emoji(
        "🏆 Selected Panelist at OU WGS Center for Social Justice's Teach OUt on Race Conference"
      ),
      subtitle: "March 2024",
      image: require("./assets/images/csjLogo.jpg"),
      imageAlt: "SJC Logo",
      footerLink: [
        {
          name: "Teach OUt on Race",
          url: "https://www.ou.edu/cas/csj/programs/teachout"
        }
      ]
    },
    {
      title: emoji("🏆 Hacklahoma 2024 Winner for Best Theme"),
      subtitle: "February 2024",
      image: require("./assets/images/hacklahoma24.png"),
      imageAlt: "TIAA Logo",
      footerLink: [
        {name: "Hacklahoma Website", url: "https://2024.hacklahoma.org/"},
        {
          name: "Project Gallery",
          url: "https://hacklahoma-2024.devpost.com/project-gallery"
        },
        {
          name: "Yesteryak Devpost",
          url: "https://devpost.com/software/yesteryak"
        }
      ]
    },
    {
      title: emoji("⚙️ AWS Certified Cloud Practitioner"),
      subtitle:
        "Certified August 16, 2023. Validation Number: VQLGN48K7EVQQESR",
      image: require("./assets/images/awsccpLogo.png"),
      imageAlt: "AWS CCP Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/eb416594-8ff0-4aa5-b0bd-d40f79a8ddcf/public_url"
        },
        {
          name: "Verify here",
          url: "https://aws.amazon.com/verification"
        }
      ]
    },
    {
      title: emoji(
        "⚙️ Girls Who Code x Deloitte Technical Interview Prep Bootcamp"
      ),
      subtitle: "November 2023",
      image: require("./assets/images/gwcdeloitte.JPG"),
      imageAlt: "TIAA Logo",
      footerLink: [
        {
          name: "TIP Bootcamp Program",
          url: "https://girlswhocode.zendesk.com/hc/en-us/articles/8463807424667-What-is-the-Girls-Who-Code-Technical-Interview-Prep-program"
        },
        {
          name: "Deliverable: Daily Mood Logging Roadmap",
          url: "https://trello.com/b/v91lN99j/%F0%9F%98%84%F0%9F%98%8A%F0%9F%98%90%F0%9F%98%94%F0%9F%98%96-daily-mood-logging-roadmap"
        }
      ]
    },
    {
      title: emoji("✈️ WE23 Conference Attendee"),
      subtitle: "October 2023, Los Angeles, CA",
      image: require("./assets/images/we23.jpg"),
      imageAlt: "WE23 Logo",
      footerLink: [
        {
          name: "WE23",
          url: "https://swe.org/calendar/we23-the-worlds-largest-conference-for-women-in-engineering-and-technology/"
        }
      ]
    },
    {
      title: emoji("✈️ TIAA Early Immersion Program for Hispanic Students"),
      subtitle:
        "In September 2022, I was invited to represent OU at TIAA Bank's Early Immersion Program in Charlotte, NC. Our cohort heard from Hispanic/Latino industry leaders at TIAA on how to thrive in the financial industry and embrace our Latino roots in our professional development.",
      image: require("./assets/images/tiaa.png"),
      imageAlt: "TIAA Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/6130f9b1-7945-44f9-a46c-87f4c2c9914e?source=linked_in_profile"
        }
      ]
    },
    {
      title: emoji(
        "✈️ Dow Diamond Symposium Attendee, Information Systems Cohort"
      ),
      subtitle:
        "In August 2022, I was invited to represent OU at the Dow Diamond Symposium in Midland, MI in the Information Systems cohort. Here, I learned about Dow's core company values as a manufacturing company and how exciting AI/ML innovations influence and power its supply chain operations.",
      image: require("./assets/images/dowDiamondSymposium2022.jpg"),
      imageAlt: "2022 Dow Diamond Symposium Logo",
      footerLink: [
        {
          name: "Dow Diamond Symposium",
          url: "https://corporate.dow.com/en-us/careers/work-at-dow/diamond-symposium.html"
        },
        {
          name: "Dow Diversity Initiatives",
          url: "https://corporate.dow.com/en-us/about/inclusion-and-diversity/encouraging-advocacy-community-and-talent.html"
        }
      ]
    },
    {
      title: emoji("🏆 Hispanic Scholarship Fund Scholar"),
      subtitle:
        "Recognized as a 2022 Hispanic Scholarship Fund (HSF) scholar, commended for exceptional achievements, academic excellence, and commitment to fostering diversity and inclusivity within the Hispanic and Latino community.",
      image: require("./assets/images/hsfLogo.png"),
      imageAlt: "HSF Logo",
      footerLink: [
        {
          name: "HSF Scholar Program",
          url: "https://www.hsf.net/scholarship"
        }
      ]
    },
    {
      title: emoji("✈️ Salesforce B.A.S.E. Camp Fellow"),
      subtitle:
        "In March 2022, I was selected to participate in a multi-day, immersive learning experience hosted at Salesforce's Trailblazer Ranch in Scotts Valley, CA. I had the opportunity to connect with other BIPOC computer science students across the country and engage in skill-building workshops, impactful volunteering activities, and early career explorations with Salesforce.",
      image: require("./assets/images/basecamp.png"),
      imageAlt: "Salesforce BASE Camp Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/6130f9b1-7945-44f9-a46c-87f4c2c9914e?source=linked_in_profile"
        }
      ]
    },
    {
      title: emoji("⚙️ AT&T Summer Learning Academy Extern"),
      subtitle: "August 2021",
      image: require("./assets/images/attExtern.png"),
      imageAlt: "AT&T Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/6130f9b1-7945-44f9-a46c-87f4c2c9914e?source=linked_in_profile"
        }
      ]
    },
    /*
    {
      title: "Volunteer Academic Writing Tutor",
      subtitle: "February 2021",
      image: require("./assets/images/iasaEnglishClusters.png"),
      imageAlt: "IASA Logo",
      footerLink: [
        {name: "Credential", url: "https://www.credly.com/badges/6130f9b1-7945-44f9-a46c-87f4c2c9914e?source=linked_in_profile"}
      ]
    },
    */
    {
      title: emoji("🏆 OU Scholarships"),
      subtitle:
        "I have been a recipient of the OU Resident Freshman Award of Excellence Scholarship, OU GCoE Distinguished Freshman Scholarship, OU GCoE Tomorrow's Engineer Scholarship, and OU GCoE Diversity & Inclusion Resident Tuition Waiver.",
      image: require("./assets/images/gcoeFlag.jpg"),
      imageAlt: "GCoE Flag Logo",
      footerLink: [
        {
          name: "Diploma",
          url: "https://drive.google.com/file/d/17KaBHEdDhKY2FTS27dwvCq-ybJpv9ocr/view?usp=sharing"
        }
      ]
    },
    {
      title: emoji("🏆 AP Capstone Diploma"),
      subtitle:
        'Awarded the AP Capstone Diploma in July 2019 for the outstanding achievements showcased in my independent preprint publication, "The Mind Behind the Robot," now accessible to the public on ResearchGate.',
      image: require("./assets/images/apCapstoneLogo.webp"),
      imageAlt: "AP Capstone Logo",
      footerLink: [
        {
          name: "Diploma",
          url: "https://drive.google.com/file/d/17KaBHEdDhKY2FTS27dwvCq-ybJpv9ocr/view?usp=sharing"
        }
      ]
    },
    {
      title: emoji(
        "✈️ Washington Journalism and Media Conference Attendee National Youth Correspondent"
      ),
      subtitle: "July 2019, Fairfax, VA",
      image: require("./assets/images/wjmcLogo.jpg"),
      imageAlt: "WJMC Logo",
      footerLink: [
        {
          name: "WJMC Program",
          url: "https://wjmc.gmu.edu/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Talks",
  subtitle: "This section will contain the tech talks I have given.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title:
        "Strengthening AI Literacy among policymakers, industry leaders, and the general public",
      subtitle:
        "2024 WGS CSJ Teach OUt on Race Conference. Navigating the Intersection of AI, Technology, and Race: Addressing Bias and Promoting Equity",
      slides_url: "",
      event_url: "https://www.ou.edu/cas/csj/programs/teachout"
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
