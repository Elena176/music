import { FC } from 'react';

import { Link } from 'react-router-dom';

import { ChartType } from '../../redux/services/shazamCore';
import { PlayPause } from '../PlayPause';

import style from './SongCard.module.scss';

type SongCardProps = {
  activeSong: ChartType;
  song: ChartType;
  isPlaying: boolean;
  // data: ChartsResponse;
  // i: number;
};

const SongCard: FC<SongCardProps> = ({ activeSong, song, isPlaying }) => {
  // const handlePauseClick = () => {};
  // const handlePlayClick = () => {};
  const activeClassname =
    activeSong?.title === song.title ? style.activeSong : style.hidden;
  return (
    <div className={style.containerCard}>
      <div className={style.wrap}>
        <div className={`${style.item}${activeClassname}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            // handlePause={handlePauseClick}
            // handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} className={style.image} />
      </div>
      <div className={style.titleWrap}>
        <p className={style.title}>
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        {/* <p className={style.artist}> */}
        {/*  <Link */}
        {/*    to={ */}
        {/*      song.artists */}
        {/*        ? `/artists/${song?.artists[0]?.artist.adamid}` */}
        {/*        : '/top-artists' */}
        {/*    } */}
        {/*  > */}
        {/*    {song.subtitle} */}
        {/*  </Link> */}
        {/* </p> */}
      </div>
    </div>
  );
};
export { SongCard };
