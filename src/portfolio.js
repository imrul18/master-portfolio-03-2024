/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Imrul Afnan",
  description:
    "Interested In The Role Of A Computer Engineer Where I Can Contribute My Analytical Skills And Knowledge Acquired By Pursuing My Degree In Computer Engineering. Looking For A Progressive Company Where My Skills Are Utilized In The Maximum Way.",
  og: {
    title: "Imrul Afnan",
    type: "website",
    url: "https://imrul.xyz",
  },
};

//Home Page
const greeting = {
  title: "Md. Imrul Afnan",
  logo_name: "Afnan",
  nickname: "Troy",
  subTitle:
    "Interested In The Role Of A Computer Engineer Where I Can Contribute My Analytical Skills And Knowledge Acquired By Pursuing My Degree In Computer Engineering. Looking For A Progressive Company Where My Skills Are Utilized In The Maximum Way.",
  resumeLink: "https://imrul18.github.io/file/cv.pdf",
  portfolio_repository: "https://github.com/imrul18",
  githubProfile: "https://github.com/imrul18",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/imrul18",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/imrul-afnan/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:imrul.afnan18@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/imrul18/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/imrulafnan/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Building responsive and dynamic user interfaces for web applications using HTML, CSS, and JavaScript",
        "⚡ Implementing efficient and scalable frontend architectures and design patterns",
        "⚡ Integrating APIs and managing state using frontend frameworks such as React.js or Vue.js",
        "⚡ Optimizing website performance and loading times through code and asset optimization techniques",
        "⚡ Debugging and troubleshooting frontend issues across different browsers and devices",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills:  [
        "⚡ Developing robust and scalable backend systems for web applications",
        "⚡ Implementing RESTful APIs and optimizing endpoints for efficient data exchange",
        "⚡ Designing and managing server architecture to ensure high performance and reliability",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        { 
          skillName: "Codeigniter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          style: {
            color: "#EE4323",
          },
        }
      ],
    },
    {
      title: "Database And Server",
      fileName: "FullStackImg",
      skills:  [
        "⚡ Designing efficient database schemas and optimizing queries for performance",
        "⚡ Building and maintaining scalable server infrastructure to support application requirements",
        "⚡ Implementing security measures to protect sensitive data and prevent unauthorized access",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  details:"Discover my academic journey and qualifications, ranging from a Bachelor's degree in Computer Science Engineering to my foundational studies in Science during high school. Explore the courses I've taken, my achievements, and the institutions I've attended.",
  degrees: [
    {
      title: "American International University, Bangladesh",
      subtitle: "BSc in Computer Science Engineering",
      logo_path: "aiub.png",
      alt_name: "AIUB",
      duration: "2018 - 2021",
      descriptions: [
        "✅ Result: 3.84/4.0",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.aiub.edu/",
    },
    {
      title: "Dhaka City College",
      subtitle: "HSC in Science",
      logo_path: "city_college.png",
      alt_name: "DCC",
      duration: "2015 - 2017",
      descriptions: [
        "✅ Result: 5.0/5.0",
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.dhakacitycollege.edu.bd/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Sr. Software Engineer & Assistant Lead",
          company: "VISER X Limited",
          company_url: "https://viserx.com/",
          logo_path: "viserx_logo.png",
          duration: "March 2022 - PRESENT",
          location: "Uttara, Dhaka",
          description:
            "As a Full Stack Developer and Assistant Lead at VISER X Limited, I lead frontend and backend development for client and product-based projects. Responsibilities include architecting robust solutions, mentoring junior developers, and ensuring high-quality deliverables. Actively contribute to project innovation and client satisfaction, leveraging expertise in both frontend and backend technologies.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
  projects: [{
    "id": "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    "name": "masterPortfolio",
    "createdAt": "2020-03-06T16:26:54Z",
    "url": "https://github.com/ashutosh1919/masterPortfolio",
    "description": "🔥 The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer.",
    "isFork": false,
    "languages": [
      {
        "name": "HTML",
        "iconifyClass": "logos-html-5"
      },
      {
        "name": "CSS",
        "iconifyClass": "logos-css-3"
      },
      {
        "name": "JavaScript",
        "iconifyClass": "logos-javascript"
      },
      {
        "name": "Dockerfile",
        "iconifyClass": "simple-icons:docker"
      }
    ]
  },
]
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with PHP and JS based frameworks like React, Vue, Laravel, Codeigniter and so on. Also in payment gateway integration and deployment of web applications.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.imrul.xyz/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Sector-10, Uttara, Dhaka-1230, Bangladesh",
    locality: "Dhaka",
    country: "BD",
    region: "Dhaka",
    postalCode: "1230",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/h3Xt4yN3qQssBizW8",
  },
  phoneSection: {
    title: "Find me in",
    subtitle: "+88 016 777 56337",
  },
};

export {
  certifications,
  competitiveSites,
  contactPageData,
  degrees,
  experience,
  greeting,
  projectsHeader,
  seo,
  settings,
  skills,
  socialMediaLinks
};

