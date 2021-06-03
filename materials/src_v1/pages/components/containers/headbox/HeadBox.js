import classNames from "classnames";
import { ReactComponent as Locked } from '../../../../assets/ico/padlock.svg';
import { head_wrapper, locked_wrapper } from './HeadBox.module.css';

const HeadBox = (props) => {
  const { children } = props;

  return (
    <div className={classNames(head_wrapper)}>
      <div className={classNames(locked_wrapper)}>
        <Locked />
      </div>
      <p>{children}</p>
    </div>
  )
}

export default HeadBox;