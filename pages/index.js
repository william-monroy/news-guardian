import styles from "../styles/Home.module.css";
import { Button, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main>
        {/* <NavBar /> */}
        <section className={`${styles.section}`}>
          <Text
            h1
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
              textAlign: "center",
            }}
          >
            Can you detect AI from reality?
          </Text>
          <Spacer y={2} />
          <Button auto onClick={() => router.push("/quiz")}>
            Start Quiz ⏎
          </Button>
        </section>
      </main>
    </div>
  );
}
