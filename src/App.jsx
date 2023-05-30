import { Header } from './components/Header/Header';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Experience } from './components/experience/Experience';
import { Goals } from './components/goals/Goals';
import { Carousel } from './components/carousel/carousel';
import CallMe from './components/callMe/CallMe';
function App() {
  return (
    <>
      <Header />
      <Goals />
      <Experience />
      <AboutMe />
      <Carousel />
      <CallMe />
      <Header />
    </>
  );
}

export default App;
