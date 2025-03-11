import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Aboutme from "./components/Aboutme";
import { ThemeProvider } from "./context/Darkmode";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-black">
        <Navbar />
        <Herosection />
        <Aboutme />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
