import React from "react";
import styles from "../../styles/QuizStart.module.css";
import { Button, Card, Spacer, Text } from "@nextui-org/react";

const QuizStart = () => {
  return (
    <div className={styles.QuizStart}>
      <Card css={{ p: "1em" }}>
        <Text
          h3
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
        >
          Introducción
        </Text>
        <Spacer y={0.5} />
        <Text>
          ¡Bienvenido al cuestionario de "Detección de Artículos Falsos"! En
          este cuestionario, se te presentarán dos artículos y tu tarea será
          determinar cuál de ellos es falso o fabricado. Utiliza tus habilidades
          de pensamiento crítico y conocimientos para identificar cualquier
          señal de alerta o inconsistencia que indique que un artículo no es
          confiable. Formato: Cada pregunta constará de dos opciones,
          etiquetadas como Opción A y Opción B. Deberás elegir la opción
          correcta indicando "A" o "B" como tu respuesta. Puntuación: Cada
          respuesta correcta te otorgará un punto. No hay penalización por
          respuestas incorrectas, así que si no estás seguro, siéntete libre de
          hacer tu mejor suposición. Instrucciones: Lee cuidadosamente tanto la
          Opción A como la Opción B. Presta atención al contenido, lenguaje y
          fuentes mencionadas en los artículos. Considera la credibilidad del
          editor o sitio web. Analiza el estilo de escritura, gramática y
          cualquier posible sesgo o propaganda. Evalúa la presencia de pruebas
          factuales, referencias o datos de respaldo. Ten en cuenta tus propios
          conocimientos y conciencia sobre el tema. Ejemplo: Comencemos con una
          pregunta de ejemplo para familiarizarte con el formato: Pregunta:
          ¿Cuál opción es un artículo falso? Opción A: "Científicos descubren
          una nueva especie de elefantes morados en África" Opción B: "Estudio
          revela que los elefantes pueden volar en entornos de gravedad cero" En
          este ejemplo, la respuesta correcta sería la Opción B, ya que la
          afirmación de que los elefantes pueden volar en entornos de gravedad
          cero claramente está fabricada. Continuando con el cuestionario: Una
          vez que estés listo, continúa con las preguntas reales del
          cuestionario. Lee cuidadosamente tanto la Opción A como la Opción B.
          Elige la opción que creas que es el artículo falso. Indica tu
          respuesta seleccionando "A" o "B" para cada pregunta. Finalizando tus
          respuestas: Revisa tus respuestas antes de enviar el cuestionario.
          Asegúrate de haber respondido todas las preguntas. Cuando estés
          seguro(a) de tus elecciones, envía el cuestionario. Puntuación y
          resultados: Tu puntuación se calculará en base al número de respuestas
          correctas. Después de enviar el cuestionario, recibirás un feedback
          inmediato sobre tu desempeño. Podrás comparar tus respuestas con las
          correctas para aprender más sobre cómo identificar artículos falsos.
          Diviértete y aprende: Recuerda que el propósito de este cuestionario
          es ayudarte a mejorar tus habilidades de pensamiento crítico y
          alfabetización mediática. Aprovecha esta oportunidad para mejorar tu
          capacidad de distinfuir noticias falsas. ¡Buena suerte con el
          cuestionario!
        </Text>
        <Spacer y={1.5} />
        <Button auto onClick={() => router.push("/quiz/1")}>
          Inicio
        </Button>
      </Card>
    </div>
  );
};

export default QuizStart;
