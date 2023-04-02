import React from 'react';

import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import { Searchbar, Sidebar, TopPlay } from './components';
import {
  AroundYou,
  ArtistDetails,
  Discover,
  Search,
  SongDetails,
  TopArtists,
  TopCharts,
} from './pages';

const App = (): any => (
  /* const a = (): void => {
    console.log('b');
  }; */
  <div className={styles.appContainer}>
    <Sidebar />
    <div className={styles.app}>
      <Searchbar />
      <div className={styles.content}>Content</div>
      <div className={styles.wrap}>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/around-you" element={<AroundYou />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/songs/:songid" element={<SongDetails />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
        <div className={styles.topPlay}>
          <TopPlay />
        </div>
      </div>
    </div>
  </div>
);
export default App;
