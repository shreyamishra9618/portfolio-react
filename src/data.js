 
import starKids from "./assets/portfolioImages/starKids.png";
import project1 from "./assets/portfolioImages/project1.png";
import blogPost from "./assets/portfolioImages/blogPost.png";
import Page from "./assets/portfolioImages/first.png";
import quiz from "./assets/portfolioImages/quiz.png";
import videoApp from "./assets/portfolioImages/videoApp.png"


 
const ProjectsData = [
   
  {
    id: "star-kids",
    img: starKids,
    name: "Star Kids App",
    stack: [" RESTful API, ", " Sequelize,", " JavaScript,", " Nodejs "],
    live: "https://starkids-app.herokuapp.com/",
    source: "https://github.com/swnova/starKids",
    description:  
        "As a parent user, you set up tasks and their corresponding points for each of your child. You can also set up rewards and their corresponding points. A child can earn points by doing tasks, and with enough points they can choose the reward they want.",
  },

  {
    id: "nationa-parks",
    img: project1,
    name: "National Parks Hiking App",
    stack: [" React.js,", " CSS3,"," Nationa Parks API,"," Google Maps API,"," Open Weather Map API"],
    live: "https://mattdack.github.io/hiking-app/",
    source: "https://github.com/Mattdack/hiking-app",
    description:  
        "The Explore Home allows users to search a valid city name to be provided with a list of national parks in their state. For each park, we provide a list of activities that are available there, directions to get there, and the weather at their initial search location. The site utilizes the google maps places api to autocomplete and generate valid city names as well as directions to selected national park. The openweathermap geo and data api is used to obtain the latitude and longitude of the initial location and weather data there. We also utilize the national park service api to provide a list of national parks and activities. Event tracking enables the initial search and direction buttons. Javascript dynamically updates the page with new weather data, national parks, and directions based on user interaction. The site is responsive to different view port sizes. Lastly, user journal entries are currently stored locally.",
  },
  {
    id: "quiz-app",
    img: quiz,
    name: "Mountain-quiz-app",
    stack: [" Node Js, " , " JavaScript," , " Express.js"],
    live: "https://shreyamishra9618.github.io/Mountain-Quiz/",
    source: "https://github.com/shreyamishra9618/Mountain-Quiz",
    description:  
        "A timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.. It will have a clean, polished, and responsive user interface",
  },

  {
    id: "tech-blog",
    img: blogPost,
    name: "tech-blog",
    stack: [" HTML5,", " CSS3,", " JavaScript,"," Sequelize,"],
    live: "https://tech-hacker.herokuapp.com/",
    source: "https://github.com/shreyamishra9618/Tech-Hacker",
    description:  
        "This blogPost generator app using the blogPost Slip API. A small app to practice JavaScript and mobile first workflow and CSS3",
  },


  {
    id: "Social-Networking-API",
    img: videoApp,
    name: "Social-Networking-API",
    stack: [" JavaScript,  ", "MongoDB,"," Express.js"],
    live: "",
    source: "https://github.com/shreyamishra9618/Social-Networking-API",
    description:  
        `It is a Social Network API using MongoDB (a NoSQL database), Mongoose, and Express.js.
        A user can use this API to create new users with a valid username and email, add other 
        users as friends, and post "thoughts" and "reactions" (similar to comments and replies). 
        Users can also update and delete thoughts and reactions as well as remove friends. 
        Try it out by creating your own username and start interacting with friends!`,
  },

  {
    id: "Employee Tracker",
    img: Page,
    name: "Employee Tracker",
    stack: [" React.js,   ", " CSS3,"," JavaScript,"," MYSQL"],
    live: "",
    source: "https://github.com/shreyamishra9618/Employee-Tracker-The-Content-Management--System",
    description:  
        "Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). This project builds a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
  },  
   
];



export default {ProjectsData}
