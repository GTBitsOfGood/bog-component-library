import { useEffect, useState} from 'react';
import Home from './routes/Home';
import DesignPatterns from './routes/DesignPatterns';
import DesignerPage from './routes/DesignerPage';
import DeveloperPage from './routes/DeveloperPage';
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
            {/* <Route exact path="/library-components" element={<LibraryComponents/>} /> */}
            <Route exact path="/design-patterns" element={<DesignPatterns/>} />
            <Route exact path="/designers" element={<DesignerPage/>} />
            <Route exact path="/developers" element={<DeveloperPage/>} />
          </Routes>
          
        </>
      }
    </>
  );
}

export default App;
