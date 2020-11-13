import forestspa1 from "./img/forestspa1.png"
import mpaction1 from "./img/mpaction1.png"
import dayplanner2 from "./img/dayplanner2.png"
import musicplayer1 from "./img/musicplayer1.png"
import forestspa2 from "./img/forestspa2.png"
import mpaction2 from "./img/mpaction2.png"
import dayplanner1 from "./img/dayplanner1.png"
import musicplayer2 from "./img/musicplayer2.png"
import forestspa3 from "./img/forestspa3.png"
import forestspa4 from "./img/forestspa4.png"
import mpaction3 from "./img/mpaction3.png"
import musicplayer3 from "./img/musicplayer3.png"
import dayplanner3 from "./img/dayplanner3.png"

export const PortfolioState = () => {
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
            "link",
        },
      ],
    },
    {
      title: "MP Action Photo",
      mainImg: mpaction1,
      url: "/portfolio/mpaction-photo",
      secondaryImg1: mpaction2,
      secondaryImg2: mpaction3,
      secondaryImg3: mpaction3,
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
            "link",
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
            "link",
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
              "link",
        },
      ],
    },
  ];
};
