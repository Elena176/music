import { FC } from 'react';

import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

import { ChartType } from '../../redux/services/shazamCore';

type PlayPauseProps = {
  activeSong: ChartType;
  song: ChartType;
  isPlaying: boolean;
  // data: ChartsResponse;
  // i: number;
};
const PlayPause: FC<PlayPauseProps> = ({
  isPlaying,
  activeSong,
  song,
  // handlePause,
  // handlePlay,
}) =>
  isPlaying && activeSong?.title === song.title ? (
    // <FaPauseCircle size={35} className="text-gray-300" onClick={handlePlay} />
    <FaPauseCircle size={35} className="text-gray-300" onClick={() => {}} />
  ) : (
    <FaPlayCircle />
  );

export { PlayPause };
