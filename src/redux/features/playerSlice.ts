import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChartType } from '../services/shazamCore';

interface initialStateType {
  currentSongs: [];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: ChartType;
  genreListId: string;
}
/* const initialState: initialStateType = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
}; */

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
  } as initialStateType,
  reducers: {
    setActiveSong: (state, action: PayloadAction<any>) => {
      // eslint-disable-next-line no-param-reassign
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        // eslint-disable-next-line no-param-reassign
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        // eslint-disable-next-line no-param-reassign
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        // eslint-disable-next-line no-param-reassign
        state.currentSongs = action.payload.data;
      }

      // eslint-disable-next-line no-param-reassign
      state.currentIndex = action.payload.i;
      // eslint-disable-next-line no-param-reassign
      state.isActive = true;
    },
    /*
    nextSong: (state, action: PayloadAction<any>) => {
      if (state.currentSongs[action.payload]?.track) {
        // eslint-disable-next-line no-param-reassign
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        // eslint-disable-next-line no-param-reassign
        state.activeSong = state.currentSongs[action.payload];
      }

      // eslint-disable-next-line no-param-reassign
      state.currentIndex = action.payload;
      state.isActive = true;
    }, */

    /* prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },
*/
    playPause: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
