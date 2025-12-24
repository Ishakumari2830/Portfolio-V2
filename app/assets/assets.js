import user_image from './profile_image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import postman from './postman.jpg';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo-white.png';
import logo_dark from './logo-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_image.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import LeetCodeLogo from './leetcode.jpg';
import CodeChefLogo from './codechef.jpg';
import GFGLogo from './gfg.jpg';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import vercel from './vercel1.png';
import docker from './docker.png';
import kubernetes from './kubernetes.png';
import jira from './jira.png';
import intellij from './intellij.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    postman,
    LeetCodeLogo,
    CodeChefLogo,
    GFGLogo,
    vercel,
    docker,
    kubernetes,
    jira,
    intellij
    
   
};

export const workData = [
    {
        id:0,
        title: 'Job Application System',
        bgImage: '/work-1.png',
        link:"https://github.com/Ishakumari2830/JobAppication"
    },
    {
        id:1,
        title: 'Hospital Management System',
        bgImage: '/work-2.png',
        link:"https://github.com/Ishakumari2830/Hospital-Management-System-Application"
    },
]

export const serviceData = [
    {  id:0,icon: assets.web_icon, title: 'Custom Web Application Development', description: 'I create fully customized, scalable, and responsive web applications tailored to your unique business needs.', link: 'https://github.com/Ishakumari2830/Hospital-Management-System-Application' },
    {  id:1,icon: assets.mobile_icon, title: 'DevOps and API Integration', description: 'I handle the entire DevOps process, including containerization, deployment, and API integration.', link: 'https://github.com/Ishakumari2830' },
    
    {  id:2,icon: assets.ui_icon, title: 'Backend Development', description: 'Building robust and secure server-side applications with seamless API integrations for efficient data flow.', link: 'https://github.com/Ishakumari2830/JobAppication' },
    {  id:3,icon: assets.graphics_icon, title: 'Website Optimization & Maintenance', description: 'Enhancing website performance, ensuring fast load times, and providing ongoing updates and support.', link: 'https://github.com/Ishakumari2830' },
]

export const infoList = [
    {id:0, icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, Java, SQL, Dart' },
    { id:1,icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Information Technology' },
    { id:2, icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const toolsData = [
    assets.vscode,  assets.git,assets.postman, assets.jira, assets.intellij
];

export const EXPERIENCES = [
  {
    year: "August 2023 - August 2024",
    role: "CP/DSA Team Lead",
    company: "GFG GGV",
    description: `Led the Competitive Programming and DSA team by organizing coding sessions, mentoring juniors, and designing problem-solving roadmaps. Conducted contests, improved team performance, and guided members in mastering algorithms and optimization techniques.`,
    technologies: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    year: "August 2023 - August 2024",
    role: "Women Tech Lead",
    company: "Developers Student Club GGV",
    description: `Led initiatives to support women in tech by organizing workshops, mentorship programs, and hands-on sessions. Contributed to technical development by building and optimizing responsive UI components and improving overall frontend performance.`,
    technologies: ["Spring Boot", "Java", "Teamwork", "Leadership"],
  },
  {
    year: "August 2022 - August 2023",
    role: "Executive Member - CP/DSA Team",
    company: "Developers Student Club GGV",
    description: `Supported coding events, solved and explained DSA problems, and assisted in creating practice sheets for the team. Collaborated with peers to help members strengthen logic building and competitive programming fundamentals.`,
    technologies: [ "Java", "DSA", "Competitive Programming"],
  },
];

  export const CODING_STATS=[
    {  
        id:0,
      title:"LeetCode",
      image: LeetCodeLogo, 
      profileLink:"https://leetcode.com/u/IshaKumari2811/", 
      description: "I have successfully completed 640+ coding challenges on LeetCode, showcasing my proficiency in problem-solving and algorithmic thinking.",
      problemsSolved: '640+' 
    },
    {  
        id:1,
      title:"CodeChef",
      image: CodeChefLogo, 
      profileLink:"https://www.codechef.com/users/isha_gupta2811", 
      description: "I have successfully completed 80+ coding challenges on CodeChef, showcasing my proficiency in problem-solving and algorithmic thinking.",
      problemsSolved: '80+' 
    },
    
  ]