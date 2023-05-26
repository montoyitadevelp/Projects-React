import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import imageUrl from './img/icons8-instagram.svg'
import imageUrl2 from './img/facebook-color-svgrepo-com.svg'
import imageUrl3 from './img/freecodecamp-svgrepo-com.svg'
import imageUrl4 from './img/code-1115-svgrepo-com.svg'
import imageUrl5 from './img/discord.svg'
import imageUrl6 from './img/coding.svg'
import imageUrl7 from './img/github.svg'
import imageUrl8 from './img/linkedin (2).svg'
import imageUrl9 from './img/Claro.svg.svg'
import imageUrl10 from './img/dev-to-svgrepo-com.svg'


 
 
export const Cards = () => {
  const [routlet, setRoutlet] = React.useState("info");

  const data = [
    
    {
      label: "My info",
      value: "info",
      desc: `Im currently working on React.js - TypeScript, i love learning new things that improve myself. You can find me here`,
      imageUrl,
      imageUrl2,
      
      
    
    },
    {
      label: "My achievements",
      value: "achievements",
      desc: `I started getting a great passion for programming and learning in front of my day to day, I developed a great common sense of reality and how I can defend myself in front of it. Here i learned to programming`,
      imageUrl3,
      imageUrl4,
      
      
      
    },
    {
      label: "Im currently doing",
      value: "doing",
      desc: `Improve my learning and do things for have better experience for my clients in my work. Here is a group of members where i work and offert my service`,
      imageUrl5,
      imageUrl6,
      
                 
    },
    {
      label: "My projects",
      value: "projects",
      desc: `All of my projects has been in update and i make a lot of colaborations with clients in groups of discord, here you can find my projects and more`,
      imageUrl7,
      imageUrl8,
      
                        
    },   
    {
      label: "My experience",
      value: "experiencie",
      desc: `I have been in a pair of companies for which im grateful for bring the experiencie and improve my integrity like developer, Claro one of them and also Discord community.`,
      imageUrl9,
      imageUrl10,

      
    },
  ];

  return (
    <div className="text-center">
      <Tabs value={routlet}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className: "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setRoutlet(value)}
            className={routlet === value ? "text-blue-500" : ""}
          >
            
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="h-52">
        {data.map(({ value, desc, imageUrl, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6, imageUrl7, imageUrl8, imageUrl9, imageUrl10}) => (
          <TabPanel key={value} value={value}>
            {desc}
            <div className="grid grid-cols-2 md:grid-cols-2 items-center">
             <a href="https://www.instagram.com/montoyitadev/" className="h-24">
              <img className="h-24 ml-96" src={imageUrl} />
             </a>
             <a href="https://www.facebook.com/profile.php?id=100002797448651">
              <img className="h-16 ml-28" src={imageUrl2}/>
             </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 items-center">
            <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" className="h-24">
              <img className="h-24 ml-96 -mt-28" src={imageUrl3} />
             </a>
             <a href="https://reactchallenges.live/" className="h-24">
              <img className="h-24 -mt-28 ml-28" src={imageUrl4} />
             </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 items-center">
            <a href="https://discord.gg/nmsk-amigos" className="h-24">
              <img className="h-20 ml-96 -mt-48" src={imageUrl5} />
             </a>
             <a href="https://app.slack.com/client/T02KS88FB0E/C030GKGG9RD/rimeto_profile/U04TRLSRZHD" className="h-24">
              <img className="h-20 -mt-48 ml-28" src={imageUrl6} />
             </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 items-center">
            <a href="https://github.com/montoyitadevelp" className="h-24">
              <img className="h-20 ml-96 -mt-72" src={imageUrl7} />
             </a>
             <a href="https://www.linkedin.com/in/sim%C3%B3n-restrepo-montoya-071244249/" className="">
              <img className="h-12 -mt-80 ml-28" src={imageUrl8} />
             </a>
            </div>
            <div className="flex items-center">
            <a href="https://claro-promociones.co/s/claro-bing?msclkid=e89e260fdfa0132c45b942600a3b58f7&utm_source=bing&  utm_medium=cpc&utm_campaign=CLARO_26_M_TOP_KW&utm_term=claro&utm_content=claro%20exacta" className="h-24">
              <img className="h-20 -mt-96 ml-96" src={imageUrl9} />
             </a>
             <a href="https://dev.to/alexgurr/react-coding-challenges-for-interviews-beginners-1hlk" className="h-24">
              <img className="h-20 -mt-96 ml-96" src={imageUrl10} />
             </a>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
      
      
    </Tabs>
    </div>
  );
}