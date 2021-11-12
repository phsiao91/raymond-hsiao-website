import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
// import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    {/* <Design width={40} height={40} /> Designer */}
    Frontend Developer
</Title>
<Description>
    Building interactive and visually appealing web applications is something I focus on. Use of react components, inverse data flow, npm libraries, setState, JSX, style sheets. 
</Description>
<Description>
<strong>Skills</strong>
<ul>
    <li>
        Javascript
    </li>
    <li>
        React.js
    </li>
    <li>
        HTML
    </li>
    <li>
        CSS
    </li>
    <li>
        Github
    </li>
</ul>
</Description>
{/* <Description>
<strong>Tools</strong>
<ul>
    <li>
       npm libraries
    </li>
    <li>
       
    </li>
    
</ul>
</Description> */}

            </Main>
            <Main>
<Title>
    {/* <Develope width={40} height={40} /> Frontend Developer */}
    Backend Developer
</Title>
<Description>
    Experienced in building relational databases and Rest APIs. Custom routes, MVC, custom serializers, seeding, rails generator.  
</Description>
<Description>
<strong>Skills</strong>
<ul>
    <li>
        Ruby
    </li>
    <li>
        Ruby on Rails
    </li>
    <li>
        SQL
    </li>
    <li>
        Postgresql
    </li>
    <li>
        Gems
    </li>
</ul>
{/* <p>
Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
</p> */}
</Description>
{/* <Description>
<strong>Tools</strong>
<p>
VScode, Github, Codepen etc.
</p>
</Description> */}

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
