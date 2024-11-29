import clsx from 'clsx';
import { CopperLoading } from 'respinner';

import css from './Loader.module.css';

interface LoaderProps {
  type: 'routing' | 'async';
}

const Loader: React.FC<LoaderProps> = ({ type }) => {
  return (
    <div
      className={clsx(css.backdrop, {
        [css.routingBackdrop]: type === 'routing',
        [css.asyncBackdrop]: type === 'async',
      })}
    >
      <div
        className={clsx({
          [css.loader]: type === 'routing',
          [css.asyncLoader]: type === 'async',
        })}
      >
        <CopperLoading
          size={Number(
            clsx({
              128: type === 'routing',
              64: type === 'async',
            })
          )}
          strokeWidth={3}
          fill='#e44848'
        />
      </div>
    </div>
  );
};

export default Loader;
