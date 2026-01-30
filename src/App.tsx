import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProjectSlider from './components/ProjectSlider/ProjectSlider';
import About from './components/About/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F8F8F8] to-[#22222222]">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <ProjectSlider />
        <About />
      </main>
    </div>
  );
}

export default App;
