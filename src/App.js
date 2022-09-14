import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";
import "./App.css";

const App = () => {
  return (
    // the empty tag is used bcos the Nav was brought out of the container
    <>
      <Nav />;
      <div className="container">
        <Bio />
        <Gallery />
      </div>
    </>
  );
};

export default App;
