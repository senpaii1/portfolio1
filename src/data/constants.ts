export const Bio = {
  name: "Abhinav Negi",
  roles: ["Programmer", "Web Developer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/senpaii1",
  resume:
    "https://drive.google.com/file/d/1rSrm57LN_eZzGurPkSu5ka1n3e4IGaE1/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/abhinav-negi-6075ab141/",
  twitter: "",
  insta: "https://www.instagram.com/senpaii__1/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next Js",
        image:
          "https://res.cloudinary.com/dkwafvqer/image/upload/v1710881169/Portfolio_Images/next-js_eebwzk.png",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://res.cloudinary.com/dkwafvqer/image/upload/v1710880714/Portfolio_Images/express-logo_h5cbvy.png",
      },
      {
        name: "MongoDB",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/eb/MongoDB_Logo.png",
      },
      {
        name: "Nest Js",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
      },
      {
        name: "AWS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "Azure",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/48/Microsoft_Azure_Linux_logo.png",
      },
      {
        name: "Kubernetes",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      },
      {
        name: "Docker",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Kafka",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/01/Apache_Kafka_logo.svg",
      },
      {
        name: "GraphQl",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      },
      {
        name: "Vercel",
        image:
          "https://raw.githubusercontent.com/github/explore/3c66f1237835e0b877190fbea528d0ebece7bccf/topics/vercel/vercel.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://namahaom.com/assets/logo.png",
    role: "Software Engineer",
    company: "San Lak Services Pvt. Ltd.",
    date: "December 2024 - Present",
    desc: [
      "Developed a spiritual services platform for online and on-site Pooja bookings, leveraging Next.js and NestJS with optimized REST API caching for faster response times.",
      "Architected a scalable microservices-based backend using NestJS and Kafka, enabling real-time event-driven communication and improving system responsiveness by 40%.",
      "Leveraged Kafka for monitoring analytics, integrating Prometheus as a data source for metrics, Loki for log aggregation, and Grafana for visualization—improving system observability by 60% and reducing issue detection time by 50%.",
      "Devised a secure JWT-based authentication system using PassportJS and Role-Based Access Control (RBAC) for fine-grained authorization.",
      "Spearheaded the development of a modern, responsive UI using Material-UI (MUI) and Next.js, utilizing TypeScript for better type safety and maintainability, resulting in improved user experience and code stability.",
      "Deployed back-end services on AWS Elastic Beanstalk and front-end on AWS Amplify with Nginx for reverse proxying, increasing reliability by 20%.",
      "Implemented an automated CI/CD pipeline using AWS CodePipeline and S3, reducing deployment time by 40% with zero downtime updates.",
      "Optimized caching strategies using Redis and fine-tuned database queries, reducing API response time by 50%.",
    ],
    skills: [
      "Nest Js",
      "Next Js",
      "JavaScript",
      "TypeScript",
      "Node Js",
      "Kafka",
      "AWS",
    ],
  },
  {
    id: 1,
    img: "https://sigitek.com/wp-content/uploads/2020/06/Sigitek-New-Logo.png",
    role: "Full Stack Developer",
    company: "Sigitek Pvt. Ltd.",
    date: "April 2022 - Nov 2023",
    desc: [
      "Revamped AI-driven services, improving efficiency and aligning with business needs.",
      "Led a team in API optimization, achieving a 60% reduction in load times through improved indexing and caching strategies.",
      "Designed and integrated a high-performance Python-based microservice for real-time image processing using Azure Functions and Azure Cognitive Services.",
      "Deployed the microservice in an Azure-hosted Docker container, accelerating processing speed by 70% and ensuring seamless communication with the Node.js backend.",
      "Mentored junior developers, conducted regular code reviews, and organized training sessions, resulting in a 20% improvement in development speed.",
      "Deployed backend services on Azure and implemented Docker-based pipelines, streamlining releases and reducing deployment time.",
      "Built and deployed frontend applications on Firebase, ensuring high performance and security.",
      "Leveraged Azure web services, logic apps, function apps, and storage accounts to create scalable and reliable cloud applications.",
    ],
    skills: [
      "React Js",
      "Redux",
      "Node Js",
      "Express Js",
      "Tailwind CSS",
      "JavaScript",
      "Next Js",
      "MongoDB",
      "Azure",
      "Docker",
      "Python",
      "Firebase",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://seekvectors.com/storage/images/Lovely%20Professional%20University-04.svg",
    school: "Lovely Professional University, Punjab",
    date: "Sept 2019 - May 2021",
    grade: "8.1 CGPA",
    degree: "Master of Computer Application (MCA)",
  },
  {
    id: 1,
    img: "https://seekvectors.com/storage/images/Lovely%20Professional%20University-04.svg",
    school: "Lovely Professional University, Punjab",
    date: "Sept 2019 - May 2021",
    grade: "7.1 CGPA",
    degree: "Bachelor of Computer Application (BCA)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Genius: A SaaS AI Platform",
    description:
      "Genius is a SaaS AI Platform built using Next.js 14, React, and Tailwind CSS. It provides various AI-powered tools for generating images, videos, conversations, music, and code based on user prompts.",
    image:
      "https://res.cloudinary.com/dkwafvqer/image/upload/v1710879635/Portfolio_Images/genius-dp_pycctm.png",
    tags: ["Next.js", "OpenAI", "TypeScript", "Clerk", "shadcn/ui"],
    github: "https://github.com/rajat-03/Genius.git",
    webapp: "https://genius-ai-saas.rajatkr.tech",
  },
  {
    id: 1,
    title: "Article Summarizer",
    description:
      "Article Summarizer is a web application that utilizes the RapidAPI to extract news or article bodies from URLs and then uses GPT to summarize them. It helps users to quickly grasp the essence of complex news and articles without having to read through the entire content.",
    image:
      "https://res.cloudinary.com/dkwafvqer/image/upload/v1710879537/Portfolio_Images/article-summarizer-dp_modrxd.png",
    tags: ["React.js", "ChatGPT", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/rajat-03/Article-Summarizer.git",
    webapp: "https://article-summarizer.rajatkr.tech",
  },
  {
    id: 2,
    title: "TrackPrice",
    description:
      "TrackPrice is a web application built using Next.js and web scraping techniques to monitor product prices and fluctuations. It utilizes Bright Data for web scraping to gather real-time pricing data and provides users with insights into the price history and fluctuations of the products they are interested in. The application also utilizes cron jobs for scheduling regular updates of product prices.",
    image:
      "https://res.cloudinary.com/dkwafvqer/image/upload/v1710879410/Portfolio_Images/track-price-dp_kimsxp.png",
    tags: ["Next.js", "Web Scraping", "MongoDB", "Bright Data", "JavaScript"],
    github: "https://github.com/rajat-03/track-price2.git",
    webapp: "https://track-price.rajatkr.tech",
  },
  {
    id: 3,
    title: "Quiz App",
    description:
      "Built a full-stack quiz platform using React.js, Spring Boot, and MySQL. Enables users to create and take quizzes on various subjects. Implemented responsive design for optimal user experience",
    image:
      "https://res.cloudinary.com/dkwafvqer/image/upload/v1710880203/Portfolio_Images/quiz-app-dp_s1w6qv.png",
    tags: ["React", "MySql", "Java", "Express.js", "SpringBoot", "Hibernate"],
    github: "https://github.com/rajat-03/Quiz-App",
    webapp: "https://quiz-app-rajat-03.vercel.app",
  },
  {
    id: 4,
    title: "PromptPlaza",
    description:
      "PromptPlaza, a Next.js CRUD (Create, Read, Update, Delete) application designed to streamline the management of AI prompts. This repository serves as a centralized hub where users can efficiently create, store, retrieve, update, and delete AI prompts for various applications and projects.",
    image:
      "https://res.cloudinary.com/dkwafvqer/image/upload/v1710879775/Portfolio_Images/prompt-plaza-dp_ywhhyg.png",
    tags: ["Next.js", "MongoDB", "Clerk", "CRUD", "next-auth"],
    github: "https://github.com/rajat-03/PromptPlaza.git",
    webapp: "https://promptplaza.rajatkr.tech",
  },
  {
    id: 5,
    title: "Currency Converter",
    description:
      "Developed a currency converter application using React.js, integrating real-time currency exchange rates via API. Empowers users to convert currencies with access to comprehensive currency data for conversions. Utilized Tailwind CSS for responsive design, ensuring optimal user experience across devices.",
    image:
      "https://img.freepik.com/free-vector/indian-rupee-currency-exchange_23-2147998469.jpg?w=740&t=st=1706718251~exp=1706718851~hmac=f6dc0341e3bd53d5a8e3ac6b9b53f8578ef2069fb88c43be466f509d83aec050",
    tags: ["React.js", "API Integration", "Tailwind CSS"],
    github: "https://github.com/rajat-03/Currency-Converter.git",
    webapp: "https://currency-converter-rajat-03.vercel.app",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Developed a React-based web application for real-time weather updates, utilizing HTML, CSS, and JavaScript. Integrated OpenWeatherMap API for city-specific weather data, with location-based search functionality. Ensured seamless user experience across mobile and desktop platforms using Material-UI.",
    image:
      "https://nordicapis.com/wp-content/uploads/How-to-Build-an-API-Driven-Weather-App-1024x576.png",
    tags: ["React.js", "Responsive Design", "Material-UI", "API Integration"],
    github: "https://github.com/rajat-03/Weather_App.git",
    webapp: "https://weather-app-rajat-03.vercel.app/",
  },
  {
    id: 7,
    title: "Leave Mangement System",
    description:
      "Designed an intuitive interface with HTML, CSS, and JavaScript to streamline leave request submission, leave balance tracking, and request status monitoring. PHP used to facilitate secure server-side processing and database management.",
    image:
      "https://www.scnsoft.com/blog-pictures/software-development-outsourcing/leave-management-software.png",
    tags: ["HTML", "CSS", "Javascript", "PHP"],
    github: "https://github.com/rajat-03/Leave-Mangement-System.git",
    webapp: "https://leave-management-portal.000webhostapp.com",
  },
  {
    id: 8,
    title: "Password-Generator-Extension",
    description:
      "Chrome extension using JavaScript to provide a secure password generator directly within the browser. Generates strong and unique passwords by combining letters, numbers, and symbols.",
    image:
      "https://res.cloudinary.com/dkwafvqer/image/upload/v1710880381/Portfolio_Images/Password-Generator-Extension-Image_ankthw.jpg",
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/rajat-03/Password-Generator-Extension.git",
    webapp: "https://github.com/rajat-03/Password-Generator-Extension.git",
  },
];
