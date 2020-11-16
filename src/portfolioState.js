import forestspa1 from "./img/forestspa1.jpg"
import mpaction1 from "./img/mpaction1.jpg"
import dayplanner2 from "./img/dayplanner2.jpg"
import musicplayer1 from "./img/musicplayer1.png"
import forestspa2 from "./img/forestspa2.jpg"
import mpaction2 from "./img/mpaction2.png"
import dayplanner1 from "./img/dayplanner1.jpg"
import musicplayer2 from "./img/musicplayer2.png"
import forestspa3 from "./img/forestspa3.jpg"
import forestspa4 from "./img/forestspa4.png"
import mpaction3 from "./img/mpaction3.png"
import musicplayer3 from "./img/musicplayer3.png"
import dayplanner3 from "./img/dayplanner3.jpg"
import mpaction4 from "./img/mpaction4.png"
import gamesapp from "./img/gamesapp.png";
import gamesapp2 from "./img/gamesapp2.png";
import gamesapp3 from "./img/gamesapp3.jpg";



export const PortfolioState = () => {

  const linkForestSpa = <div className="project-links"><a href="http://forestspa.com.pl/">Project Link</a>
  <a href="https://github.com/AgaPiotrowska/Forest-Spa-www">Github Link</a></div>

  const linkMpAction = <div className="project-links"><a href="https://www.mpactionphoto.pl/">Project Link</a>
    <a href="https://github.com/AgaPiotrowska/MP-Action-Photo-www">Github Link</a></div>

  const linkDayPlanner = <div className="project-links"><a href="https://day-planner-app.netlify.app/">Project Link</a>
    <a href="https://github.com/AgaPiotrowska/DayPlannerApp">Github Link</a></div>

  const linkFavoriteGame = <div className="project-links"><a href="https://yourfavoritegames.netlify.app/">Project Link</a>
    <a href="https://github.com/AgaPiotrowska/Your-favorite-games-App">GitHub Link</a></div>

  const linkMusicApp = <div className="project-links"><a href="https://music-playerapp.netlify.app/">Project Link</a>
    <a href="https://github.com/AgaPiotrowska/MusicApp">Github Link</a></div>

  return [
    {
      title: "Forest Spa",
      mainImg: forestspa1,
      secondaryImg1: forestspa2,
      secondaryImg2: forestspa3,
      secondaryImg3: forestspa4,
      url: "/portfolio/forest-spa",
      awards: [
        {
          title: "Description:",
          description:
            "This is a commercial beauty salon React powered website, designed to present current offer, gallery with interiors and working team.",
        },
        {
          title: "Built with:",
          description:
            "Create React App, SASS, React Router, React Photo Gallery",
        },
        {
          title: "See live at:",
          description:
          linkForestSpa,
        },
      ],
    },
    {
      title: "MP Action Photo",
      mainImg: mpaction1,
      url: "/portfolio/mpaction-photo",
      secondaryImg1: mpaction2,
      secondaryImg2: mpaction3,
      secondaryImg3: mpaction4,
      awards: [
        {
          title: "Description:",
          description:
            "This is a React powered professional photographer website with built-in login page and API for the owner to upload photos and blog posts.",
        },
        {
          title: "Built with",
          description:
            "Create React App, Redux, SASS, React Router, React Photo Gallery, React Snapshot, API, AWS",
        },
        {
          title: "See live at:",
          description:
          linkMpAction,
        },
      ],
    },
    {
      title: "Your Favorite Games",
      mainImg: gamesapp,
      secondaryImg1: gamesapp2,
      secondaryImg2: gamesapp3,
      secondaryImg3: gamesapp,
      url: "/portfolio/games",
      awards: [
        {
          title: "Description:",
          description:
              "This is a React powered app built with the use of API in order to search for the games available on the market.",
        },
        {
          title: "Built with:",
          description:
              "Create React App, Redux, API, React Router, styled components, Framer Motion",
        },
        {
          title: "See live at:",
          description:
          linkFavoriteGame,
        },
      ],
    },
    {
      title: "Day Planner",
      mainImg: dayplanner2,
      url: "/portfolio/day-planner",
      secondaryImg1: dayplanner1,
      secondaryImg2: dayplanner2,
      secondaryImg3: dayplanner3,
      awards: [
        {
          title: "Description:",
          description:
            "This is a simple day planner app to organize your daily tasks and mark the pending and fulfilled ones.",
        },
        {
          title: "Built with:",
          description:
            "Create React App, CSS",
        },
        {
          title: "See live at:",
          description:
          linkDayPlanner,
        },
      ],
    },
    {
      title: "Music Player",
      mainImg: musicplayer1,
      url: "/portfolio/music-player",
      secondaryImg1: musicplayer1,
      secondaryImg2: musicplayer2,
      secondaryImg3: musicplayer3,
      awards: [
        {
          title: "Description:",
          description:
              "This app is powered by Create React App and was created to play your favorite music.",
        },
        {
          title: "Built with:",
          description:
              "Create React App, SASS, FortAwesome, UUID",
        },
        {
          title: "See live at:",
          description:
          linkMusicApp,
        },
      ],
    },
  ];
};
