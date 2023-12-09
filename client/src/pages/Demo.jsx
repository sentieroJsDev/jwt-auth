import { useContext } from "react";
import style from "./style.module.scss";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button/Button";

export default function Demo() {
  const { data, handleLogOut, handleFetchProtected } = useContext(AuthContext);

  return (
    <div className={style.wrapper}>
      <p>{JSON.stringify(data)}</p>
      <Button onClick={handleFetchProtected}>
        Запрос на защищенный роут
      </Button>
      <Button onClick={handleLogOut}>
        Выйти
      </Button>
    </div>
  );
}
