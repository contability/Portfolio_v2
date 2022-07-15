import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Main from './routers/Main';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
