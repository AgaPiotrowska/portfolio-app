import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {PortfolioState} from "../portfolioState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ProjectDetail = () => {

    const history=useHistory();
    const url=history.location.pathname;
    const [projects, setProjects] = useState(PortfolioState);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0]);
    }, [projects, url]);

    return (
        <>
            {project && (
                <Details
                    exit="exit"
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                >
                    <HeadLine>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="project"/>
                    </HeadLine>
                    <ProjectText>
                        {project.awards.map((award) => (
                            <TextComponent
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </ProjectText>
                    <ImageDisplay>
                        <img src={project.secondaryImg1} alt="secondary img"/>
                        <img src={project.secondaryImg1} alt="secondary img"/>
                        <img src={project.secondaryImg2} alt="secondary img"/>
                    </ImageDisplay>
                </Details>
            )}
        </>
    )
};

const Details=styled(motion.div)`
  color: white;
`;

const HeadLine=styled.div`
  min-height: 90vh;
  position:relative;
  padding-top: 20vh;
  
  h2{
      position:absolute;
      top: 5%;
      left: 50%;
      transform: translate(-50%, -10%);
  }
  
  img {
      width: 100%;
      object-fit: cover;
  }
`;

const ProjectText=styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 60vh;
  margin: 5rem 10rem;
  align-items: center;
  
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const TextComponentStyle=styled.div`
  padding: 3rem;
  
  h3{
      font-size: 2rem;
  }
  
  .line {
      width: 100%;
      background-color: #23d997;
      height: 0.5rem;
      margin: 1rem 0rem;
  }
  
  p{
      padding: 2rem 0rem;
  }
`;

const ImageDisplay=styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  
  img {
      width: 600px;
      object-fit: cover;
      padding: 1rem;
  }
`;

const TextComponent = ({title, description}) => {
    return (
        <TextComponentStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </TextComponentStyle>
    )
};

export default ProjectDetail;