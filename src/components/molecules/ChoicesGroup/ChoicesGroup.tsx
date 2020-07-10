import { Button } from "baseui/button";
import { ButtonGroup, ButtonGroupProps, MODE } from "baseui/button-group";
import React from "react";

interface Props extends Omit<ButtonGroupProps, "children"> {
  choices: string[];
  expectedAnswer: () => number | null;
}

const ChoicesGroup = (props: Props) => {
  const { choices, expectedAnswer, selected } = props;

  return (
    <ButtonGroup
      {...props}
      mode={MODE.radio}
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
      {choices.map((value: string, index: number) => (
        <Button
          overrides={{
            BaseButton: {
              style: ({ $theme }) => {
                const getColor = (succes, warning, danger) => {
                  if (index == expectedAnswer()) return succes;
                  else if (selected == index) return warning;
                  else return danger;
                };
                return {
                  outline: expectedAnswer()
                    ? `10px${getColor(
                        $theme.colors.positive,
                        $theme.colors.warning,
                        $theme.colors.negative
                      )} solid`
                    : "inherit",
                  width: "100%",
                };
              },
            },
          }}
        >
          {value}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ChoicesGroup;
