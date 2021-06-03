import classNames from "classnames";
import { check_box_wrapper, text_for_checkbox } from '../checkbox/CheckBox.module.css';


const CheckBox = (props) => {
  const { children } = props;
  return (
    <div className={classNames(check_box_wrapper)}>
      <input type="checkbox" />
      <span className={classNames(text_for_checkbox)}>{children}</span>
    </div>
  )
}

export default CheckBox;