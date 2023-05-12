import FirebaseAuth from "@/components/auth/FirebaseAuth";
import React from "react";
import styles from "../styles/Login.module.css";
import { Card, Text } from "@nextui-org/react";

const login = () => {
  return (
    <div className={styles.login}>
      <Card width={"300px"} css={{ d: "flex", jc: "center", ai: "center" }}>
        <Text h2>Login</Text>
        {/* <FirebaseAuth /> */}
      </Card>
    </div>
  );
};

export default login;
