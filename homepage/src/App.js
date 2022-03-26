import { useEffect, useState } from 'react';
import Home from './pages/Home';
import DesignPatterns from './pages/DesignPatterns';
import Designers from './pages/Designers';
import Developers from './pages/Developers';
import Components from './pages/Components';
import Foundations from './pages/Foundations';
import Support from './pages/Support';
import ClipLoader from 'react-spinners/ClipLoader';
import fetchContentfulAPI from './imageRendering/imageRendering';
import useImage from "./imageRendering/ImageContext";
import NavBar from "./components/NavBar.jsx";
import {
  Routes,
  Route,
} from 'react-router-dom';
import "./App.css";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const { imageURLS, setImageURLS } = useImage();

  useEffect(() => {
    if (Object.keys(imageURLS).length === 0) {
      fetchContentfulAPI(imageURLS, setImageURLS, setIsLoading);
    }
  }, [imageURLS, setImageURLS]);


  return (
    <div className="app-container">
      <NavBar/>
      <>
        {isLoading ? <ClipLoader isLoading={isLoading} />
          :
          <>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/designers" element={<Designers />} />
              <Route exact path="/developers" element={<Developers />} />
              <Route exact path="/library-components" element={<Components />} />
              <Route exact path="/foundations" element={<Foundations />} />
              <Route exact path="/design-patterns" element={<DesignPatterns />} />
              <Route exact path="/support" element={<Support />} />
            </Routes>

          </>
        }
      </>
    </div>

  );
}

export default App;
