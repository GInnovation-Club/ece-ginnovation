import React, { useEffect } from 'react';
//section components
import LandingPage from '../SectionComponents/Home/LandingPage';
import Moto from '../SectionComponents/Home/Moto';
import Members from '../SectionComponents/Home/Members';
import Projects from '../SectionComponents/Home/Projects';
import Videos from '../SectionComponents/Home/Videos';
import Blogs from '../SectionComponents/Home/Blogs';
//aos animation
import Aos from 'aos';
import 'aos/dist/aos.css';
//Main Componet
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <>
      <LandingPage />
      <Moto />
      <Members />
      <Projects />
      <Videos />
      <Blogs />
    </>
  );
};
export default Home;
