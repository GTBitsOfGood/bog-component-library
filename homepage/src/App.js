import { useEffect, useState} from 'react';
import Home from './components/Home';
import LibraryComponents from './components/LibraryComponents';
import ClipLoader from 'react-spinners/ClipLoader';
import {fetchContentfulAPI} from './imageRendering';

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [imageURLS, setImageURLS] = useState([]);

  // make the api call
  useEffect(() => {
    fetchContentfulAPI(imageURLS, setImageURLS, setIsLoading);
  }, []);

  return (
    <>
      {isLoading ? <ClipLoader isLoading={isLoading} />
        :
        <>
        {isHome && <Home handle={setIsHome} imageURLS={imageURLS}/>}
        {!isHome && <LibraryComponents handle={setIsHome} imageURLS={imageURLS}/>}
        </>
      }
    </>
  );
}

export default App;
