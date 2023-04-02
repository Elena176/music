import { FC } from 'react';

import style from './Loader.module.scss';
import { LoaderIcon } from './LoaderIcon';

interface LoaderProps {
  title: string;
}
const Loader: FC<LoaderProps> = ({ title }) => (
  <div className={style.wrapper}>
    <LoaderIcon />
    <h1 className={style.title}>{title || 'Loading...'}</h1>
  </div>
);

export { Loader };
