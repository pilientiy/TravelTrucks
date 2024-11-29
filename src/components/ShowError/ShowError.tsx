import css from './ShowError.module.css';

const ShowError = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.message}>
        Error. Something went wrong. Please, try to reload page
      </p>
    </div>
  );
};

export default ShowError;
