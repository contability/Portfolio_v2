import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import LeftNavBar from './components/left/LeftNavBar';
import Introduce from './routers/Introduce';
import Main from './routers/Main';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <GlobalStyle/>
        <LeftNavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/introduce" element={<Introduce/>}/>
          {/* <Route path="/skills" element={}/> */}
          {/* <Route path="/projects" element={}/> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
