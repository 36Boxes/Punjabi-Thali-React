import React from 'react';
import ThreeTiles from './components/home/threeTiles';
import MyFooter from './components/shared/myFooter';
import MyJumbotron from './components/shared/MyJumbotron';
import MyNavbar from './components/shared/myNavbar';

function App() {
  return (
    <React.Fragment>
      <MyNavbar/>
      <br/>
      <MyJumbotron/>
      <br/>
      <div className='container'>
        <ThreeTiles/>
      </div>
      <MyFooter/>
    </React.Fragment>
  );
}

export default App;
