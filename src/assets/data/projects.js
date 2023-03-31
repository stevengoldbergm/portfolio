// Import images for slide covers
import { 
    movieMate3,
    movieMate2,
    jate,
    techBlog,
    noteTaker,
    weather,
    workdayScheduler
} from "../imgs/slides/slides";

const projects = [
    {
        img: movieMate3,
        title: "MovieMate 3.0",
        text: `Search movies, get details, make friends. \n\nMovieMate 3.0 takes all of the functionality of MovieMate 2.0, and adds friends into the mix! The entire site has been rebuilt using MERN stack, enhancing both back-end and front-end functionality.`,
        tech: "MongoDB | Express.js | React | Node.js | Axios | Bulma | GraphQL | Apollo | SASS | JSON WebToken | BCrypt | 3rd Party APIs | Heroku ",
        liveApp: "https://movie-mate-3.herokuapp.com/",
        gitRepo: "https://github.com/stevengoldbergm/movie-mate-3.0",
        id: 1
    },
    {
        img: movieMate2,
        title: "MovieMate 2.0",
        text: "Search movies, get details. \n\nMovieMate utilizes the OMDb and Youtube APIs to provide users with movie information and relevant movie trailers. It also supports user accounts and user reviews using mySQL.",
        tech: "Bulma | mySQL | RESTful API | 3rd Party APIs | Axios | Node.js | Express.js | Handlebars.js",
        liveApp: "https://movie-mate-2.herokuapp.com/",
        gitRepo: "https://github.com/stevengoldbergm/movie-mate-2.0",
        id: 2
    },
    {
        img: jate,
        title: "Text Editor (J.A.T.E)",
        text: "Write notes, install, and work offline! \n\nJ.A.T.E may be just another text editor, but this progressive web app utilizes service-workers, manifests, and Idb to present a seamless text-editor experience. It can run locally, or in browser with heroku.",
        tech: "Codemirror | Mongoose | PWA | Service-workers | Idb | Express.js",
        liveApp: "https://text-editor-stevengoldbergm.herokuapp.com/",
        gitRepo: "https://github.com/stevengoldbergm/text-editor",
        id: 3
    },
    {
        img: techBlog,
        title: "Tech Blog!",
        text: "Sign up! Add Thoughts! \n\nThis tech blog allows users to make an account, post articles to a shared message board, and make comments on each post. You can also edit and delete your posts from the dashboard!",
        tech: "MySQL | Sequelize | .ENV | Express | Express-Handlebars | Express-Session | BCrypt | Bootstrap",
        liveApp: "https://tech-blog-stevengoldbergm.herokuapp.com/",
        gitRepo: "https://github.com/stevengoldbergm/tech-blog",
        id: 4
    },
    {
        img: noteTaker,
        title: "Note Taker",
        text: "Make and delete notes with ease! \n\nNote Taker is a checklist app. Add notes by entering a note title and text, then delete the note by clicking the trash-can when you're finished!",
        tech: "JavaScript | Express.js",
        liveApp: "https://note-taker-sgm86.herokuapp.com/",
        gitRepo: "https://github.com/stevengoldbergm/Note-Taker",
        id: 5
    },
    {
        img: weather,
        title: "US Weather Dashboard",
        text: "Check US weather by city or zip code. \n\nThe US Weather Dashboard utilizes the openweathermap API to check weather conditions across the country. Enter your desired city and state, or just a simple zip-code to get started.",
        tech: "Bulma | OpenWeather API | Fetch Api",
        liveApp: "https://stevengoldbergm.github.io/weather-dashboard/",
        gitRepo: "https://github.com/stevengoldbergm/weather-dashboard",
        id: 6
    },
    {
        img: workdayScheduler,
        title: "Workday Scheduler",
        text: `Make your schedule. Stay on track!\n\nThe Workday Scheduler utilizes local storage to handle saving tasks, and the JavaScript setInterval() method to dynamically color-code page elements. The current, upcoming, and past time blocks are easily identified at a glance!`,
        tech: "Local Storage | JS setInterval",
        liveApp: "https://stevengoldbergm.github.io/daily-planner/",
        gitRepo: "https://github.com/stevengoldbergm/daily-planner",
        id: 7
    },
];
export default projects;