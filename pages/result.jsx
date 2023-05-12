import React, { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import styles from "../styles/Result.module.css";
import { Button, Text } from "@nextui-org/react";
import { BsFillTrophyFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Result = () => {
  const [result, setResult] = useState(0);
  const { width, height } = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const result = localStorage.getItem("score");
    setResult(parseInt(result));
  }, []);

  return (
    <div className={styles.Result}>
      <BsFillTrophyFill size={100} color={"F7C04A"} />
      <Text h2>{result}</Text>
      <Text
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        h4
      >
        {result > 0 ? "Congratulations!" : "Try again!"}
      </Text>
      <Button color="gradient" auto onClick={() => router.push("/")}>
        Retake
      </Button>
      <Confetti width={width} height={height} />
    </div>
  );
};

export default Result;
