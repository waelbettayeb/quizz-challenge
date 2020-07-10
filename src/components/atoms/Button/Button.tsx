import React from "react";
import { Button as B } from "baseui/button";

const Button = (props) => {
  const { onClick, children, disabled } = props;
  return (
    <B
      disabled={disabled}
      onClick={onClick}
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
      {children}
    </B>
  );
};

export default Button;
