import styles from "../css/Profile.module.css";
import { useState } from "react";
import Login from "../components/Login";
import RegisterPoints from "../components/RegisterPoints";
import RegisterActivity from "../components/RegisterActivity";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import RegisterAccount from "../components/RegisterAccount";

function Profile() {
  const [login, setLogin] = useState("false");

  if (login === "true") {
    return (
      <div className={styles.container}>
        <ArrowBackIosNewIcon className={styles.back} onClick={() => setLogin("false")} />
        <button type="button" className={styles.button} onClick={() => setLogin("register")}>
          Registrer poeng
        </button>
        <button type="button" className={styles.button} onClick={() => setLogin("activity")}>
          Legg til aktivitet
        </button>
        <button type="button" className={styles.button} onClick={() => setLogin("account")}>
          Legg til bruker
        </button>
      </div>
    );
  } else if (login === "false") {
    return (
      <div className={styles.container}>
        <Login login={login} setLogin={setLogin} />
      </div>
    );
  } else if (login === "register") {
    return (
      <div className={styles.container}>
        <RegisterPoints setLogin={setLogin} />
      </div>
    );
  } else if (login === "activity") {
    return (
      <div className={styles.container}>
        <RegisterActivity setLogin={setLogin} />
      </div>
    );
  } else if (login === "account") {
    return (
      <div className={styles.container}>
        <RegisterAccount setLogin={setLogin} />
      </div>
    );
  }
}

export default Profile;
