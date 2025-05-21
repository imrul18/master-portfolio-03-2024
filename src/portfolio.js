import project_1_1 from "./assests/images/projects/1/1.png";
import project_1_2 from "./assests/images/projects/1/2.png";
import project_2_1 from "./assests/images/projects/2/1.png";
import project_3_1 from "./assests/images/projects/3/1.png";
import project_3_2 from "./assests/images/projects/3/2.png";
import project_3_3 from "./assests/images/projects/3/3.png";
import project_4_1 from "./assests/images/projects/4/1.png";
import project_4_2 from "./assests/images/projects/4/2.png";
import project_4_3 from "./assests/images/projects/4/3.png";
import project_5_1 from "./assests/images/projects/5/1.png";
import project_5_2 from "./assests/images/projects/5/2.png";
import project_5_3 from "./assests/images/projects/5/3.png";
import project_6_1 from "./assests/images/projects/6/1.png";
import project_6_2 from "./assests/images/projects/6/2.png";
import project_6_3 from "./assests/images/projects/6/3.png";
import project_6_4 from "./assests/images/projects/6/4.png";
import project_7_1 from "./assests/images/projects/7/1.png";
import project_7_2 from "./assests/images/projects/7/2.png";
import project_7_3 from "./assests/images/projects/7/3.png";
import project_7_4 from "./assests/images/projects/7/4.png";
import project_8_1 from "./assests/images/projects/8/1.png";
import project_8_2 from "./assests/images/projects/8/2.png";
import project_8_3 from "./assests/images/projects/8/3.png";
import project_8_4 from "./assests/images/projects/8/4.png";
import project_9_1 from "./assests/images/projects/9/1.png";

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Imrul Afnan",
  description:
    "A Computer Engineering graduate with strong analytical skills and technical knowledge, seeking to contribute effectively in a progressive organization that values innovation and professional growth.",
  og: {
    title: "Imrul Afnan",
    type: "website",
    url: "https://imrul.xyz",
  },
};

//Home Page
const greeting = {
  title: "Md. Imrul Hosen",
  logo_name: "Afnan",
  nickname: "Afnan",
  subTitle: "Driven by code, committed to creating impactful solutions.",
  resumeLink: "https://imrul18.github.io/file/cv.pdf",
  portfolio_repository: "https://github.com/imrul18",
  githubProfile: "https://github.com/imrul18",
};

const socialMediaLinks = [
  {
    name: "Phone",
    link: "tel:+8801677756337",
    fontAwesomeIcon: "fas fa-phone", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/imrul18/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/imrul-afnan/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/imrul18",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:imrul.afnan18@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/imrulafnan/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Mobile App Development (React Native & Expo)",
      fileName: "DataScienceImg",
      skills: [
        "🎯 Cross-platform Mobile App Development",
        "🎯 Firebase Authentication & Firestore Integration",
        "🎯 Push Notifications & Background Services",
        "🎯 Google Maps, Geolocation, & Navigation",
        "🎯 Offline Storage using AsyncStorage / SQLite",
        "🎯 Audio Recording, File Uploads, Image Picker",
        "🎯 Deep Linking, Linking with External Apps (Waze, Uber, Google Maps)",
        "🎯 In-app Updates and Splash Screens",
        "🎯 Backend Integration (Laravel APIs, Firebase)",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Expo",
          fontAwesomeClassname: "simple-icons:expo",
          style: {
            color: "#000020",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
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
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "Google Maps",
          fontAwesomeClassname: "simple-icons:googlemaps",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Web Application Development",
      fileName: "FullStackImg",
      skills: [
        "🎯 Custom Laravel Web Applications (Admin Panels, Dashboards, CRMs)",
        "🎯 RESTful API Development & Integration",
        "🎯 Vue.js/React-based Single Page Applications (SPA)",
        "🎯 Jetstream, Inertia.js, Livewire integration",
        "🎯 Secure Authentication (JWT, Sanctum, Social Logins)",
        "🎯 Database Design, Query Optimization, and Migrations",
        "🎯 Stripe/PayPal Payment Gateway Integration",
        "🎯 Real-time Notification with Pusher, Laravel Echo & Reverb",
        "🎯 Role-based Access & Permissions",
        "🎯 Laravel Queues & Scheduled Jobs",
        "🎯 Custom CMS, ERP, and SaaS development",
      ],
      softwareSkills: [
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#42B883",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#635BFF",
          },
        },
        {
          skillName: "PayPal",
          fontAwesomeClassname: "simple-icons:paypal",
          style: {
            color: "#003087",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Frontend Development",
      fileName: "DesignImg",
      skills: [
        "🎯 Responsive UI with Tailwind CSS / Bootstrap",
        "🎯 Dynamic Components using React/Vue",
        "🎯 Redux / Vuex for State Management",
        "🎯 Clean UX/UI with Mobile-first Approach",
        "🎯 Code Splitting and Lazy Loading for Optimization",
        "🎯 Integration with external APIs",
      ],
      softwareSkills: [
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38B2AC",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
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
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "DevOps & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "🎯 Git & GitHub/GitLab/Bitbucket Workflow",
        "🎯 CI/CD Integration",
        "🎯 VS Code, Android Studio, Xcode",
        "🎯 Laravel Valet and Forge",
        "🎯 Postman, Figma",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#FC6D26",
          },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:githubactions", // Placeholder for CI/CD tools
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Xcode",
          fontAwesomeClassname: "simple-icons:xcode",
          style: {
            color: "#147EFB",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },

    {
      title: "Other Highlights",
      fileName: "FullStackImg",
      skills: [
        "🎯 Admin Panels with Charts, Filters, and Reports",
        "🎯 OTP & Email Verification",
        "🎯 Secure Login, Rate Limiting & Data Validation",
        "🎯 Integration with third-party APIs (Stripe, Twilio, Zoom, Mailchimp, etc.)",
      ],
      softwareSkills: [
        {
          skillName: "Chart.js",
          fontAwesomeClassname: "simple-icons:chartdotjs",
          style: {
            color: "#FF6384",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#635BFF",
          },
        },
        {
          skillName: "Twilio",
          fontAwesomeClassname: "simple-icons:twilio",
          style: {
            color: "#F22F46",
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
  details:
    "Discover my academic journey and qualifications, ranging from a Bachelor's degree in Computer Science Engineering to my foundational studies in Science during high school. Explore the courses I've taken, my achievements, and the institutions I've attended.",
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
  subtitle: "",
  description:
    "I specialize in mobile app development using React Native, creating efficient cross-platform applications. I also have backend experience with Laravel, CodeIgniter, and PHP, and frontend skills in React, Vue, and Blade. Additionally, I’m familiar with Kotlin for native Android development and have worked with WordPress.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Mobile App Developer",
          company: "Weezly GmbH",
          company_url: "https://viserx.com/",
          logo_path: "weezly_logo.svg",
          duration: "May 2024 - PRESENT",
          location: "Leipzig, Germany",
          description:
            "I primarily work as a Kotlin Developer, specializing in building high-performance applications, particularly for Android platforms. In addition to Kotlin, I have hands-on experience with PHP-based frameworks like Laravel and CodeIgniter, where I contribute to building scalable and efficient backend solutions. On the frontend, I work with JavaScript-based frameworks such as React and Vue, and also use React Native for mobile app development. My diverse technical skill set allows me to handle both frontend and backend tasks, ensuring seamless integration across various platforms.",
          color: "#0879bf",
        },
        {
          title: "Sr. Software Engineer & Assistant Lead",
          company: "VISER X Limited",
          company_url: "https://viserx.com/",
          logo_path: "viserx_logo.png",
          duration: "March 2022 - April 2024",
          location: "Uttara, Dhaka",
          description:
            "I was a Full Stack Developer and Assistant Lead at VISER X Limited, where I led frontend and backend development for client and product-based projects. My responsibilities included architecting robust solutions, mentoring junior developers, and ensuring high-quality deliverables. I actively contributed to project innovation and client satisfaction, leveraging my expertise in both frontend and backend technologies, including React Native for mobile app development.",
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
  projects: [
    {
      id: "project_1",
      name: "Courtesy - Order management with Live driver location",
      avatar: project_1_1,
      images: [{ imageName: project_1_1 }, { imageName: project_1_2 }],
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
        {
          name: "Vue.js",
          iconifyClass: "logos:vue",
        },
        {
          name: "React Native",
          iconifyClass: "logos:react",
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            Developed a delivery application designed to manage project-based orders, integrating a robust backend
            with a user-friendly frontend and a dedicated mobile app for drivers.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 20px;">Technologies Used:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 5px;"><strong>Backend:</strong> Laravel, PHP, MySQL</li>
            <li style="margin-bottom: 5px;"><strong>Frontend:</strong> Vue</li>
            <li style="margin-bottom: 5px;"><strong>Mobile App:</strong> React Native, Redux</li>
            <li style="margin-bottom: 5px;"><strong>DevOps:</strong> DigitalOcean</li>
          </ul>
        </div>

        <div style="margin-bottom: 25px;">
          <p>
            This project demonstrates my expertise in full-stack development for mobile and web applications,
            utilizing React Native, Laravel, and Vue.js to build efficient and scalable solutions.
          </p>
        </div>
      </div>`,
    },
    {
      id: "project_2",
      name: "Aqua Life – Gamified Hydration Tracker App with Health Analytics",
      avatar: project_2_1,
      images: [{ imageName: project_2_1 }],
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "devicon:kotlin",
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            Developed <strong>Aqua Life</strong>, a wellness app that sets personalized daily water goals based on user data 
            (gender, weight, height). Users log drinks visually via a body-fill interface and earn trophies for progress.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 20px;">Key Features:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 5px;">• Smart goal calculation</li>
            <li style="margin-bottom: 5px;">• Animated body water-level tracker</li>
            <li style="margin-bottom: 5px;">• Drink type selector (water, tea, juice, etc.)</li>
            <li style="margin-bottom: 5px;">• Visual progress & stats (charts, rings)</li>
            <li style="margin-bottom: 5px;">• Gamification with points/trophies</li>
            <li style="margin-bottom: 5px;">• Multilingual (German)</li>
            <li style="margin-bottom: 5px;">• Mobile-friendly UX with smooth onboarding</li>
          </ul>
        </div>
      </div>`,
    },
    {
      id: "project_3",
      name:
        "Visual Discovery – Investor Startup Platform with Video Portfolio Tool",
      avatar: project_3_1,
      images: [
        { imageName: project_3_1 },
        { imageName: project_3_2 },
        { imageName: project_3_3 },
      ],
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
        {
          name: "Vue.js",
          iconifyClass: "logos:vue",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            Designed and developed a multi-role SaaS platform connecting startup founders with investors.
            Key roles include Admin, Investor, and Founder.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 20px;">Key Features:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 5px;">• Investor profile setup with thesis, cheque size, preferences</li>
            <li style="margin-bottom: 5px;">• Portfolio upload (local & URL) – video support up to 512MB</li>
            <li style="margin-bottom: 5px;">• Admin dashboard with user, document, and credential management</li>
            <li style="margin-bottom: 5px;">• YouTube OAuth token integration</li>
            <li style="margin-bottom: 5px;">• Founder document submission and profile enrichment</li>
            <li style="margin-bottom: 5px;">• Role-based dashboard views with secure access</li>
          </ul>
        </div>

        <div style="margin-bottom: 25px;">
          <p>
            Enables seamless discovery and engagement between founders and investors.
          </p>
        </div>
      </div>`,
    },
    {
      id: "project_4",
      name: "ProKPI – Smart KPI Management System for Enterprises",
      avatar: project_4_1,
      images: [
        { imageName: project_4_1 },
        { imageName: project_4_2 },
        { imageName: project_4_3 },
      ],
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            ProKPI is a modern KPI tracking module built for enterprises to streamline goal setting, approvals, and employee evaluations.
            It features a clean dashboard, multi-level approval flows, department-based insights, and performance summaries.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 20px;">Key Features:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 5px;">- Personalized KPI dashboard</li>
            <li style="margin-bottom: 5px;">- Goal setup with evaluation metrics</li>
            <li style="margin-bottom: 5px;">- Multi-level approval workflow</li>
            <li style="margin-bottom: 5px;">- Department & division insights</li>
            <li style="margin-bottom: 5px;">- Top performer highlights</li>
            <li style="margin-bottom: 5px;">- Real-time KPI window tracking</li>
            <li style="margin-bottom: 5px;">- Role-based access control</li>
          </ul>
        </div>
      </div>`,
    },
    {
      id: "project_5",
      name: "Uplify – AI-Powered Business Growth Platform for Entrepreneurs",
      avatar: project_5_1,
      images: [
        { imageName: project_5_1 },
        { imageName: project_5_2 },
        { imageName: project_5_3 },
      ],
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
        {
          name: "Vue.js",
          iconifyClass: "logos:vue",
        },
        {
          name: "Claude AI",
          iconifyClass: "simple-icons:anthropic",
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            Built an interactive coaching platform to guide entrepreneurs through mindset, systems, and marketing mastery.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 20px;">Key Features:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 5px;">• Interactive milestone-based learning paths</li>
            <li style="margin-bottom: 5px;">• Habit tracking dashboard</li>
            <li style="margin-bottom: 5px;">• Personalized AI agents (e.g., “Lina”)</li>
            <li style="margin-bottom: 5px;">• Topic-specific paths: Mindset, Finance, Legal, Hiring, Sales</li>
            <li style="margin-bottom: 5px;">• Smart assessments & progress tracking</li>
            <li style="margin-bottom: 5px;">• Seamless UI/UX for daily lesson flows</li>
          </ul>
        </div>

        <div style="margin-bottom: 25px;">
          <p>
            Enabled small business owners to transform goals into profitable systems.
          </p>
        </div>
      </div>`,
    },
    {
      id: "project_6",
      name: "Radi8 - Wellness Coaching Web App with Scheduling & Chat",
      avatar: project_6_1,
      images: [
        { imageName: project_6_1 },
        { imageName: project_6_2 },
        { imageName: project_6_3 },
        { imageName: project_6_4 },
      ],
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            Built a complete wellness coaching web app where users can discover, book, and chat with expert coaches.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 20px;">Key Features:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 5px;">• Coach search by category</li>
            <li style="margin-bottom: 5px;">• Appointment scheduling with calendar view</li>
            <li style="margin-bottom: 5px;">• Reschedule & cancel options</li>
            <li style="margin-bottom: 5px;">• Integrated chat system</li>
            <li style="margin-bottom: 5px;">• Real-time status tracking (Pending, Scheduled, Paid)</li>
            <li style="margin-bottom: 5px;">• Coach onboarding & verification</li>
            <li style="margin-bottom: 5px;">• Secure payment system</li>
            <li style="margin-bottom: 5px;">• Responsive UI for dashboard, coaches & chats</li>
          </ul>
        </div>

        <div style="margin-bottom: 25px;">
          <p>
            Empowered seamless wellness journeys through expert access.
          </p>
        </div>
      </div>`,
    },
    {
      id: "project_7",
      name: "Boutikio - Reward Loyalty program with apple and google wallet",
      avatar: project_7_1,
      images: [
        { imageName: project_7_1 },
        { imageName: project_7_2 },
        { imageName: project_7_3 },
        { imageName: project_7_4 },
      ],
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
        {
          name: "Apple Wallet",
          iconifyClass: "logos:apple",
        },
        {
          name: "Google Wallet",
          iconifyClass: "logos:google-wallet",
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            Transform customer engagement strategy with Reward Loyalty. This system allows you to create and manage digital savings cards with ease.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <p>
            Gain complete control over your user base through an intuitive, beautiful interface by using Apple and Google Wallet.
          </p>
        </div>
      </div>`,
    },
    {
      id: "project_8",
      name: "IAATO - Options Trading Mentorship Web & Mobile Platform",
      avatar: project_8_1,
      images: [
        { imageName: project_8_1 },
        { imageName: project_8_2 },
        { imageName: project_8_3 },
        { imageName: project_8_4 },
      ],
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
        {
          name: "React Native",
          iconifyClass: "logos:react",
        },
        {
          name: "PayPal",
          iconifyClass: "logos:paypal",
        },
        {
          name: "Google Auth",
          iconifyClass: "logos:google",
        },
        {
          name: "Facebook Auth",
          iconifyClass: "logos:facebook",
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            Built a cross-platform web and mobile app for an Options Trading Mentorship program serving 4,000+ users. 
            Features include real-time alerts, subscription billing, chat groups, content access, and user dashboards.
            Integrated with Stripe, PayPal, and WhatsApp for seamless payments and support.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 20px;">Key Features:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 5px;">• Web & mobile responsive interface</li>
            <li style="margin-bottom: 5px;">• Real-time trade alerts & chat rooms</li>
            <li style="margin-bottom: 5px;">• Login via social & email auth</li>
            <li style="margin-bottom: 5px;">• Subscription billing (Stripe, PayPal)</li>
            <li style="margin-bottom: 5px;">• Course & market data access</li>
            <li style="margin-bottom: 5px;">• 7-day trial & plan management</li>
            <li style="margin-bottom: 5px;">• Admin & user dashboards</li>
          </ul>
        </div>
      </div>`,
    },
    {
      id: "project_9",
      name: "E-Sign - E-Signature Solution for Secure Document Signing",
      avatar: project_9_1,
      images: [{ imageName: project_9_1 }],
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
        {
          name: "Blade",
          iconifyClass: "logos:laravel-icon", // Blade shares Laravel icon
        },
      ],
      description: `<div>
        <div style="margin-bottom: 25px;">
          <p>
            Developed a robust and user-friendly E-signature platform for secure document signing. The application streamlines the signing process for businesses and individuals, ensuring security and legal compliance.
          </p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 20px;">Key Features:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 5px;">• Secure digital signatures with user authentication.</li>
            <li style="margin-bottom: 5px;">• Intuitive interface for uploading and managing documents.</li>
            <li style="margin-bottom: 5px;">• Integration with Vue.js 3 for dynamic and responsive UI.</li>
            <li style="margin-bottom: 5px;">• Backend developed using Laravel 11 for seamless processing.</li>
            <li style="margin-bottom: 5px;">• Full compliance with industry-standard e-signature protocols.</li>
            <li style="margin-bottom: 5px;">• Hosted on a reliable LAMP stack for optimal performance and scalability.</li>
          </ul>
        </div>
      </div>`,
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Imrul Afnan",
    profile_image_path: "animated_imrul.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with PHP and JS based frameworks like React Native, React, Vue, Laravel, Codeigniter and so on.",
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
    subtitle: "Sector-10, Uttara, Dhaka-1230, Bangladesh",
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
  socialMediaLinks,
};
