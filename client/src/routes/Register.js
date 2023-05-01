import styles from "../css/Profile.module.css";
import { useState } from "react";
import Login from "../components/Login";
import RegisterPoints from "../components/RegisterPoints";
import RegisterActivity from "../components/RegisterActivity";

function Profile() {
  const [login, setLogin] = useState("false");

  if (login === "true") {
    return (
      <div className={styles.container}>
        <button type="button" className={styles.button} onClick={() => setLogin("register")}>
          Registrer poeng
        </button>
        <button type="button" className={styles.button} onClick={() => setLogin("activity")}>
          Legg til aktivitet
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
  }
}

export default Profile;
