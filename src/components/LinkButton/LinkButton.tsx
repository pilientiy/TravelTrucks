import { Link } from 'react-router-dom';
import clsx from 'clsx';

import css from './LinkButton.module.css';

interface LinkButtonProps {
  link: string;
  newClassName?: string;
  children?: React.ReactNode;
}

const LinkButton = ({
  link,
  newClassName,
  children = 'Search',
}: LinkButtonProps) => {
  return (
    <Link to={link} className={clsx(css.link, newClassName)}>
      {children}
    </Link>
  );
};

export default LinkButton;
