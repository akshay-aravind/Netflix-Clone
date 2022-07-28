import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action, originals, comedy,horrer,romance,documentaries } from './urls';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <RowPost url={originals} title='Netflix Originals' />
     <RowPost url={action} title='Action' isSmall />
     <RowPost url={comedy} title='Comedy' isSmall />
     <RowPost url={horrer} title='Horrer' isSmall />
     <RowPost url={romance} title='Romance' isSmall />
     <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
