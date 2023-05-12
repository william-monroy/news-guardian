import React, { useEffect } from "react";
import styles from "../../styles/QuizStart.module.css";
import { Button, Card, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const QuizStart = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("score", 0);
  }, []);

  return (
    <div className={styles.QuizStart}>
      <Card css={{ p: "1em" }}>
        <Text h3
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        >
          ¡Bienvenido al cuestionario de NewsGuardian!
        </Text>
        <ul>
          <li>
            En este cuestionario, se te proporcionarán una serie de artículos y tu tarea será determinar si cada artículo es verdadero (genuino) o falso (fabricado). Utiliza tus habilidades de pensamiento crítico, conocimiento factual y análisis para tomar una decisión informada.
          </li>
        </ul>
        
        <Text h5>
          Formato
        </Text>
        <ul>
          <li>
            Cada pregunta te presentará un solo artículo.
          </li>
          <ul>
            <li>
              Si crees que el artículo es verdadero, selecciona la opción "Verdadero".
            </li>
            <li>
            Si piensas que el artículo es falso, selecciona la opción "Falso".
            </li>
          </ul>
        </ul>

        <Text h5>
          Puntuación
        </Text>
        <ul>
          <li>
            Cada respuesta correcta te otorgará un punto.
          </li>
          <li>
            Al finalizar el cuestionario se te proporcionará una puntuación.
          </li>
        </ul>

        <Text h5>
          Instrucciones
        </Text>
        <ul>
          <li>
            Lee cuidadosamente el artículo proporcionado para cada pregunta.
          </li>
          <li>
            Considera la credibilidad del editor o sitio web.
          </li>
          <li>
            Analiza el estilo de escritura, gramática y cualquier posible sesgo o propaganda.
          </li>
          <li>
            Evalúa la presencia de pruebas factuales, referencias o datos de respaldo.
          </li>
          <li>
            Ten en cuenta tus propios conocimientos y conciencia sobre el tema.
          </li>
        </ul>

        <Text h5>
          Ejemplo
        </Text>
        <ul>
          <li>
            Comencemos con una pregunta de ejemplo para familiarizarte con el formato:
          </li>
          <li>
            <div>
              <Text>
                ¿Es verdadero o falso el siguiente artículo?
              </Text>
              <Text>
                Para responder, selecciona "Verdadero" o "Falso".
              </Text>
              
            </div>
          </li>
        </ul>

        <Text h5>
          Diviértete y aprende
        </Text>
        <ul>
          <li>
            Recuerda que el propósito de este cuestionario es mejorar tus habilidades de pensamiento crítico y alfabetización mediática.
          </li>
          <li>
          Aprovecha esta oportunidad para afinar tu capacidad de distinguir entre artículos de noticias verdaderos y fabricados.
          </li>
        </ul>

        <Text h4>
          ¡Disfruta del cuestionario y buena suerte!
        </Text>
        
        <Spacer y={1.5} />
        <Button
          auto
          onClick={() => {
            router.push("/quiz/1");
          }}
        >
          Inicio
        </Button>
      </Card>
    </div>
  );
};

export default QuizStart;
