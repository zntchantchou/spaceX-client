import React from 'react';
import styles from './App.module.css';
import SideBar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {

  return (
    <div className={styles.App}>
      < Header/> 
      < SideBar/> 
    </div>
  );
}

export default App;
