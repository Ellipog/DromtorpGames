import styles from "../css/Profile.module.css";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

function RegisterAccount(props) {
  const [account, setAccount] = useState({ mail: "", password: "" });
  const [error, setError] = useState(true);

  function registerAccount() {
    if (account.mail !== "" && account.password !== "") {
      axios.post("http://localhost:25584/createAccount", {
        mail: account.mail,
        password: account.password,
      });
    } else {
      setError(false);
    }
  }

  return (
    <div className={styles.miniContainer}>
      <ArrowBackIosNewIcon className={styles.back} onClick={() => props.setLogin("true")} />
      <h1>Opprett ny &nbsp; bruker</h1>
      <div className={styles.inputSection}>
        <p>Mail</p>
        <input type="text" onChange={(e) => setAccount({ ...account, mail: e.target.value })}></input>
      </div>
      <div className={styles.inputSection}>
        <p>Passord</p>
        <input type="password" onChange={(e) => setAccount({ ...account, password: e.target.value })}></input>
      </div>
      <button onClick={() => registerAccount()} className={styles.btn}>
        Opprett
      </button>
    </div>
  );
}

export default RegisterAccount;
