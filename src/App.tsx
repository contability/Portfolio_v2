import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import LeftNavBar from './components/left/LeftNavBar';
import Introduce from './routers/Introduce';
import Main from './routers/Main';
import Projects from './routers/Projects';

function App() {
  return (
    <AppBox>
      <HashRouter>
        <GlobalStyle/>
        <LeftNavBar/>
        <section className="rightSection">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/introduce" element={<Introduce/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </section>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.main`
  .rightSection{
    left: 9.6vw;
    width: 90.4vw;
    height: 100vh;
    display: inline-block;
    position: absolute;
    overflow-y: hidden;
  }
`;

export default App;
