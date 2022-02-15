import { useEffect, useState} from 'react';
import Home from './components/Home';
import LibraryComponents from './components/LibraryComponents';
import ClipLoader from 'react-spinners/ClipLoader';
import fetchContentfulAPI from './imageRendering/imageRendering';
import useImage from "./imageRendering/ImageContext";

function App() {
  const [isHome, setIsHome] = useState(true);
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
        {isHome && <Home handle={setIsHome}/>}
        {!isHome && <LibraryComponents handle={setIsHome}/>}
        </>
      }
    </>
  );
}

export default App;
