import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";

const Nav = () => {

    const {pathname}=useLocation();

    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Agnieszka Piotrowska</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About Me</Link>
                    <Line
                        transition= {{duration: 0.75}}
                        initial= {{width: "0%"}}
                        animate={{width: pathname === "/" ? "50%" : "0%"}}>
                    </Line>
                </li>
                <li>
                    <Link to="/portfolio">My projects</Link>
                    <Line
                        transition= {{duration: 0.75}}
                        initial= {{width: "0%"}}
                        animate={{width: pathname === "/portfolio" ? "50%" : "0%"}}>
                    </Line>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                    <Line
                        transition= {{duration: 0.75}}
                        initial= {{width: "0%"}}
                        animate={{width: pathname === "/contact" ? "50%" : "0%"}}>
                    </Line>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav=styled.nav`
  height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #17252a;
  position: sticky;
  top: 0;
  z-index: 10;
  
  a{
  color: white;
  text-decoration: none;
  }
  
  ul{
  display: flex;
  list-style: none;
  }
  
  #logo {
  font-family: 'Lobster', cursive;;
  font-size: 1.5rem;
  font-weight: lighter;
  }
  
  li{
  padding-left: 10rem;
  position: relative;
  }
  
   @media (max-width: 1300px) {
       flex-direction: column;
       padding: 2rem 1rem;
       height: 20vh;
       
       #logo {
           display: inline-block;
           margin: 0.2rem;
       }
       
       ul{
       padding: 1rem;
       justify-content: space-around;
       width: 100%;
       
       li{
       padding: 0;
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background-color: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    
    @media (max-width: 1300px) {
    left: 0%;
    }
`;

export default Nav;