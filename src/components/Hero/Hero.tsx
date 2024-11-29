import LinkButton from '../LinkButton/LinkButton';

import css from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={css.heroWrap}>
      <div className={css.titleWrap}>
        <h1>Campers of your dreams</h1>
        <h2>You can find everything you want in our catalog</h2>
        <LinkButton link='/campers' newClassName={css.heroLink}>
          View Now
        </LinkButton>
      </div>
    </div>
  );
};

export default Hero;
