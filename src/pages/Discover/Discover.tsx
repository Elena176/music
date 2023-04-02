import React from 'react';

import { useSelector } from 'react-redux';

import { genres } from '../../assets/constans';
import { SongCard } from '../../components';
import { Loader } from '../../components/Loader/Loader';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';
import { AppRootStateType } from '../../redux/store';

import s from './Discover.module.scss';

const Discover = (): any => {
  const genreTitle = 'Pop';
  // const { data, isFetching, error } = useGetTopChartsQuery(undefined);
  const { data, isFetching } = useGetTopChartsQuery(undefined);
  const { activeSong, isPlaying } = useSelector(
    (state: AppRootStateType) => state.player,
  );
  if (isFetching) return <Loader title="Loading songs..." />;
  return (
    <div className={s.container}>
      <div className={s.selectWrap}>
        <h2 className={s.title}>Discover {genreTitle}</h2>
        <select className={s.select}>
          {genres.map(g => (
            <option key={g.value} value={g.value}>
              {g.title}
            </option>
          ))}
        </select>
      </div>
      <div className={s.content}>
        {data?.map(song => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            // data={data}
            // i={i}
          />
        ))}
      </div>
    </div>
  );
};

export { Discover };
