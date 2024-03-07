import React from "react";

import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import Track from "./components/Track";

import styles from "./style/App.module.css"


function App() {
  return (
    <div className={styles.body}>
      <SearchBar></SearchBar>
      <div className={styles.mainwrapper}>
        <SearchResult></SearchResult>
        <Tracklist></Tracklist>
      </div>
    </div>
  );
}

export default App;
