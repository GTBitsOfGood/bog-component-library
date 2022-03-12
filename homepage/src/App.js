import { useEffect, useState} from 'react';
import Home from './routes/Home';
import LibraryComponents from './routes/LibraryComponents';
import ClipLoader from 'react-spinners/ClipLoader';
import fetchContentfulAPI from './imageRendering/imageRendering';
import useImage from "./imageRendering/ImageContext";
import {
  Routes,
  Route,
  Link
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
            <Route exact path="/library-components" element={<LibraryComponents/>} />
          </Routes>
          
        </>
      }
    </>
  );
}

export default App;
