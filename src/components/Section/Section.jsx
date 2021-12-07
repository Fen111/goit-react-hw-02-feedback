import PropTypes from 'prop-types';
import s from './Section.module.css';
export default function Section({ title, children }) {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired
}
