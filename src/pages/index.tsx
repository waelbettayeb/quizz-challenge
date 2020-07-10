import React from "react";
import Head from "next/head";
import AppNavBar from "src/components/molecules/AppNavBar/AppNavBar";
import { Cell, Grid } from "baseui/layout-grid";
import { Radio, RadioGroup } from "baseui/radio";
import { useSession } from "@hooks/Session";
import { Button } from "baseui/button";
import { Label1, Paragraph1 } from "baseui/typography";

const Home: React.FC = () => {
  const [value, setValue] = React.useState("0");
  const [disable, setDisable] = React.useState(false);
  const { questions, current, submitAnswer, currentScore } = useSession();

  return (
    <React.Fragment>
      <Head>
        <title>Quizz - app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNavBar />
      <Grid>
        <Cell span={6}>
          <Label1>{currentScore}:النتيجة</Label1>
          <Paragraph1>{questions[current].text}</Paragraph1>
          {current != null ? (
            <React.Fragment>
              <RadioGroup
                name="Choices radio"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                disabled={disable}
              >
                {questions[current].choises.map((d: string, index: number) => (
                  <Radio value={index.toString()}>{d}</Radio>
                ))}
              </RadioGroup>
              <Button
                onClick={() => {
                  submitAnswer(parseInt(value));
                  setDisable(true);
                }}
              >
                موافق
              </Button>
            </React.Fragment>
          ) : (
            ""
          )}
        </Cell>
      </Grid>
    </React.Fragment>
  );
};
export default Home;
