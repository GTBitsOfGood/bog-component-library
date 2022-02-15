import { useEffect, useState} from 'react';
import Home from './components/Home';
import LibraryComponents from './components/LibraryComponents';
import ClipLoader from 'react-spinners/ClipLoader';
import {fetchContentfulAPI} from './imageRendering';
import useImage from "./ImageContext";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const {imageURLS, setImageURLS} = useImage(); // this implicitly returns the imageURLS and setImageURLS state values/function 


  useEffect(() => {
    fetchContentfulAPI(imageURLS, setImageURLS, setIsLoading);
  }, []);

  return (
    <>
      {isLoading ? <ClipLoader isLoading={isLoading} />
        :
        <>
        {isHome && <Home handle={setIsHome}/>}
        {!isHome && <LibraryComponents handle={setIsHome}/>}
        </>
      }
    </>
  );
}

export default App;
