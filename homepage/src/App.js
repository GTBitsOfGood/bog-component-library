import { useState } from 'react';
import Home from './components/Home';
import LibraryComponents from './components/LibraryComponents';

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      {isHome && <Home handle={setIsHome}/>}
      {!isHome && <LibraryComponents handle={setIsHome} />}
    </>
  );
}

export default App;
