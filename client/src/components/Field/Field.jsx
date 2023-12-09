import { memo } from "react";
import cn from "classnames";
import style from "./field.module.scss";

export default memo(
  ({ register, name, error = false, helperText = "", ...rest }) => {
    return (
      <div className={cn(style.inputField, error && style.inputField__error)}>
        <input {...register(name)} {...rest} />
        {error && <p className={style.error}>{helperText}</p>}
      </div>
    );
  }
);
