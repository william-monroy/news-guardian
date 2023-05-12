import Head from "next/head";
import styles from "../styles/Home.module.css";
import WriteToCloudFirestore from "@/components/cloudFirestore/Write";
import ReadDataFromCloudFirestore from "@/components/cloudFirestore/Read";
import { useUser } from "@/lib/firebase/useUser";
import Counter from "@/components/realtimeDatabase/Counter";
import UploadFile from "@/components/storage/UploadFile";
import { Button, Card, Spacer, Text } from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import { Layout } from "@/components/Layouts/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const { user, logout } = useUser();

  const router = useRouter();

  if (user) {
    return (
      <div className={styles.container}>
        {/* <Card>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <hr />
            {user.profilePic ? (
              <image src={user.profilePic} height={100} width={100}></image>
            ) : (
              <p>No profile pic</p>
            )}
            <hr />
            <WriteToCloudFirestore />
            <ReadDataFromCloudFirestore />
            <hr />
            <Counter id={user.id} />
            <hr />
            <UploadFile />
            <hr />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button onClick={() => logout()} style={{ width: "100px" }}>
                Log Out
              </Button>
              <a
                href="https://github.com/bjcarlson42/nextjs-with-firebase"
                target="_blank"
              >
                <Button variant="outline-secondary" style={{ width: "100px" }}>
                  Code
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card> */}
      </div>
    );
  } else
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
