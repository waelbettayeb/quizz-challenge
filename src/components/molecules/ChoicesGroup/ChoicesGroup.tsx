import { Button } from "baseui/button";
import { ButtonGroup, ButtonGroupProps, MODE } from "baseui/button-group";
import React from "react";

interface Props extends Omit<ButtonGroupProps, "children"> {
  choices: string[];
}

const ChoicesGroup = (props: Props) => {
  const { choices } = props;
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
        <Button>{value}</Button>
      ))}
    </ButtonGroup>
  );
};

export default ChoicesGroup;
