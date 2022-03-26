import { useEffect, useState} from 'react';
import Home from './routes/Home';
import DesignPatterns from './routes/DesignPatterns';
import Designers from './routes/Designers';
import Developers from './routes/Developers';
import Components from './routes/Components';
import Foundations from './routes/Foundations';
import Support from './routes/Support';
import ClipLoader from 'react-spinners/ClipLoader';
import fetchContentfulAPI from './imageRendering/imageRendering';
import useImage from "./imageRendering/ImageContext";
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const {imageURLS, setImageURLS} = useImage(); 

    useEffect(() => {
      if (Object.keys(imageURLS).length === 0) {
        fetchContentfulAPI(imageURLS, setImageURLS, setIsLoading);
      }
    }, [imageURLS, setImageURLS]);
 

  return (
    <>
      {isLoading ? <ClipLoader isLoading={isLoading} />
        :
        <>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/designers" element={<Designers/>} />
            <Route exact path="/developers" element={<Developers/>} />
            <Route exact path="/library-components" element={<Components/>} />
            <Route exact path="/foundations" element={<Foundations/>} />
            <Route exact path="/design-patterns" element={<DesignPatterns/>} />
            <Route exact path="/support" element={<Support/>} />

          </Routes>
          
        </>
      }
    </>
  );
}

export default App;
