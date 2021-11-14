import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro';
// import Red from '../assets/images/red.jpeg'



const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 30%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const LINKEDIN = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 70%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const RESUME = styled.div`
color: white;
text-decoration: none;
z-index:1;
`

// const SKILLS = styled(NavLink)`
// color: ${props => props.theme.text};
// text-decoration: none;
// z-index:1;
// `
const CONTACT = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`


const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`
const A = styled.a`
color: white;
background-color: transparent;
text-decoration: none;
`
const A2 = styled.a`
color: black;
background-color: transparent;
text-decoration: none;
`


const Main = () => {

    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);

    // console.log(Red)

    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />
           
            {/* <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <img onClick={handleClick} src="https://t.pimg.jp/044/131/279/5/44131279.jpg"/>
                <span >click here</span>
            </Center> */}

            <Contact target="_blank" to={{pathname:"mailto:phinganhsiao@gmail.com"}}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Email
                </motion.h2>
            </Contact>
            <BLOG to="/blog">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Blogs
                </motion.h2>
            </BLOG>
            <LINKEDIN to="/skills">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Skills
                </motion.h2>
            </LINKEDIN>
            <WORK to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/about" click={+click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About
                </motion.h2>
            </ABOUT>
            <RESUME >
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    <A className="resume" href="https://docs.google.com/document/d/17SiyA6yqiCfF0CfHoHmH_5bMiE0eXWWD1DOqWMqbpZM/edit" target="_blank">
                        Resume
                   </A>
                </motion.h2>
            </RESUME>
            {/* <h2>
                Resume
                <a href="https://docs.google.com/document/d/17SiyA6yqiCfF0CfHoHmH_5bMiE0eXWWD1DOqWMqbpZM/edit">Resume</a>
            </h2> */}
            <RESUME >
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    <A2 className="linkeid" href="https://www.linkedin.com/in/raymond-hsiao-b65249204/" target="_blank"
                        color="white">
                        Linkedin
                   </A2>
                </motion.h2>
            </RESUME>
            <CONTACT to="/contact">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1, delay:0.5}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Contact
                </motion.h2>
            </CONTACT>

            

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
