import css from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={css.spinnerBox}>
      <div className={css.configureBorder1}>
        <div className={css.configureCore}></div>
      </div>
      <div className={css.configureBorder2}>
        <div className={css.configureCore}></div>
      </div>
    </div>
  );
};
