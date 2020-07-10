import React from "react";
import Head from "next/head";
import AppNavBar from "src/components/molecules/AppNavBar/AppNavBar";
import { ALIGNMENT, BEHAVIOR, Cell, Grid } from "baseui/layout-grid";
import { Radio, RadioGroup } from "baseui/radio";
import { useSession } from "@hooks/Session";
import { Button } from "baseui/button";
import { Label1, Paragraph1 } from "baseui/typography";
import { ButtonGroup, MODE } from "baseui/button-group";

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
  } = useSession();

  return (
    <React.Fragment>
      <Head>
        <title>Quizz - app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNavBar />
      <Grid gridMargins={[10, 20, 100]} align={ALIGNMENT.center}>
        <Cell span={12} align={ALIGNMENT.center}>
          <Label1>Score:{currentScore}</Label1>
        </Cell>
        {current !== null ? (
          <React.Fragment>
            <Cell span={12}>
              <Label1>
                Question: {current + 1}/{questions.length}
              </Label1>
              <Paragraph1>{questions[current].text}</Paragraph1>
              <ButtonGroup
                mode={MODE.radio}
                selected={value}
                onClick={(_event, index) => {
                  setValue(index);
                }}
                disabled={disable}
                overrides={{
                  Root: {
                    style: ({ $theme }) => {
                      return {
                        flexDirection: "column",
                      };
                    },
                  },
                }}
              >
                {questions[current].choises.map((d: string, index: number) => (
                  <Button>{d}</Button>
                ))}
              </ButtonGroup>
            </Cell>
            <Cell span={12}>
              {isSubmited() ? (
                <Button
                  onClick={() => {
                    goNext();
                    setValue(null);
                    setDisable(false);
                  }}
                  kind="secondary"
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => {
                        return {
                          width: "100%",
                        };
                      },
                    },
                  }}
                >
                  تقدم
                </Button>
              ) : (
                <Button
                  disabled={value === null || disable}
                  onClick={() => {
                    submitAnswer(parseInt(value));
                    setDisable(true);
                  }}
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => {
                        return {
                          width: "100%",
                        };
                      },
                    },
                  }}
                >
                  موافق
                </Button>
              )}
            </Cell>
          </React.Fragment>
        ) : (
          <Cell span={12}>
            <Button
              onClick={() => {
                init();
                setValue(null);
                setDisable(false);
              }}
              size={"large"}
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => {
                    return {
                      width: "100%",
                    };
                  },
                },
              }}
            >
              جرب كويزاً آخر
            </Button>
          </Cell>
        )}
      </Grid>
    </React.Fragment>
  );
};
export default Home;
