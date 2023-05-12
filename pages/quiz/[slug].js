import React, { useEffect } from "react";
import styles from "../../styles/QuizQuestion.module.css";
import { Button, Loading, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const QuizQuestion = ({ slug, text, real }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(true);

  const handleSimulateFetch = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    handleSimulateFetch();
  }, []);

  return (
    <div className={styles.QuizQuestion}>
      <Text h4>Question {slug}</Text>
      {isLoading ? (
        <Loading type="points" />
      ) : (
        <>
          <Text>{text}</Text>
          <Text>REAL: {real}</Text>
          <Row>
            <Button
              color={"success"}
              onClick={() => {
                const score = window.localStorage.getItem("score");
                window.localStorage.setItem(
                  "score",
                  real === 1 ? parseInt(score) + 10 : parseInt(score) - 5
                );
                setIsLoading(true);
                handleSimulateFetch();
                if (parseInt(slug) < 10) {
                  router.push(`/quiz/${parseInt(slug) + 1}`);
                } else {
                  router.push(`/result`);
                }
              }}
            >
              Verdadero
            </Button>
            <Button
              color={"error"}
              onClick={() => {
                const score = window.localStorage.getItem("score");
                window.localStorage.setItem(
                  "score",
                  real === 1 ? parseInt(score) + -5 : parseInt(score) + 10
                );
                setIsLoading(true);
                handleSimulateFetch();
                if (parseInt(slug) < 10) {
                  router.push(`/quiz/${parseInt(slug) + 1}`);
                } else {
                  router.push(`/result`);
                }
              }}
            >
              Falso
            </Button>
          </Row>
        </>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const real = Math.floor(Math.random() * 2);
  if (real) {
    const news = await fetch(`http://localhost:3000/api/news/`);
    const articles = await news.json();
    const text = await articles.articles[
      parseInt(slug) * (Math.floor(Math.random() * 10) + 1)
    ].description;
    return {
      props: {
        slug,
        text,
        real,
      },
    };
  } else {
    const news = await fetch(`http://localhost:3000/api/news/`);
    const articles = await news.json();
    const url = await articles.articles[
      parseInt(slug) * (Math.floor(Math.random() * 10) + 1)
    ].url;
    const fake = await fetch(`http://localhost:3000/api/fakeNews?link=${url}`);
    const fakeNews = await fake.json();
    const text = await fakeNews.choices[0].text;
    console.log(text);
    return {
      props: {
        slug,
        text,
        real,
      },
    };
  }
}

export default QuizQuestion;
