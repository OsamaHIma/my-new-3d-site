import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { ToastContainer } from "react-toastify";
const App = () => {


  renderer.domElement.addEventListener(
    "webglcontextlost",
    function (event) {
      event.preventDefault();
      setTimeout(function () {
        renderer.forceContextRestore();
      }, 1);
    },
    false
  );

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <main>
          <About />
          <Experience />
          <Tech />
          <Works />
        </main>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
