import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
    <>
      <ParallaxProvider>
        <Navbar />
        <Body />
      </ParallaxProvider>
    </>
  );
};

export default App;
