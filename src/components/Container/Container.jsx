import st from './Container.module.css';
import classNames from 'classnames';

export const Container = ({ children, className }) => {
  return (
    <div className={classNames(st.container, className)}>
      {children}
    </div>
  )
};
