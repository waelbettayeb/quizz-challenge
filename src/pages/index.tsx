import React from "react";
import Head from "next/head";
import AppNavBar from "src/components/molecules/AppNavBar/AppNavBar";
import { ALIGNMENT, BEHAVIOR, Cell, Grid } from "baseui/layout-grid";
import { Radio, RadioGroup } from "baseui/radio";
import { useSession } from "@hooks/Session";
import { Button as B } from "baseui/button";
import { Label1, Paragraph1 } from "baseui/typography";
import { ButtonGroup, MODE } from "baseui/button-group";
import Button from "@components/atoms/Button";
import ChoicesGroup from "@components/molecules/ChoicesGroup";

const Home: React.FC = () => {
  const [value, setValue] = React.useState(null);
  const [disable, setDisable] = React.useState(false);
  const {
    questions,
    current,
    submitAnswer,
    currentScore,
    goNext,
    isSubmited,
    init,
    expectedAnswer,
  } = useSession();

  const initUI = () => {
    init();
    setValue(null);
    setDisable(false);
  };
  const nextQuestion = () => {
    goNext();
    setValue(null);
    setDisable(false);
  };
  const submit = () => {
    submitAnswer(parseInt(value));
    setDisable(true);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Quizz - app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNavBar />
      <Grid gridMargins={[10, 20, 100]} align={ALIGNMENT.center}>
        <Cell span={12}>
          <Label1>Score:{currentScore}</Label1>
        </Cell>
        {current !== null ? (
          <React.Fragment>
            <Cell span={12}>
              <Label1>
                Question: {current + 1}/{questions.length}
              </Label1>
              <Paragraph1>{questions[current].text}</Paragraph1>
              <ChoicesGroup
                choices={questions[current].choises}
                onClick={(_event, index) => {
                  setValue(index);
                }}
                selected={value}
                disabled={disable}
                expectedAnswer={expectedAnswer}
              />
            </Cell>
            <Cell span={12}>
              {isSubmited() ? (
                <Button onClick={nextQuestion}>تقدم</Button>
              ) : (
                <Button disabled={value === null || disable} onClick={submit}>
                  موافق
                </Button>
              )}
            </Cell>
          </React.Fragment>
        ) : (
          <Cell span={12}>
            <Button onClick={initUI}>جرب كويزاً آخر</Button>
          </Cell>
        )}
      </Grid>
    </React.Fragment>
  );
};
export default Home;
