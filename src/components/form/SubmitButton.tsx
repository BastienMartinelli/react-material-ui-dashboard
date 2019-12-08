import React, { forwardRef } from "react";
import { useFormikContext } from "formik";
import { Button, CircularProgress } from "@material-ui/core";

type SubmitProps = Omit<React.ComponentProps<typeof Button>, "type">;

const SubmitButton = forwardRef<HTMLButtonElement, SubmitProps>(
  (props: SubmitProps, ref) => {
    const { children, ...otherProps } = props;
    const { isSubmitting } = useFormikContext();

    return (
      <Button ref={ref} type="submit" {...otherProps}>
        {isSubmitting ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          children
        )}
      </Button>
    );
  }
);

SubmitButton.defaultProps = {};
SubmitButton.displayName = "SubmitButton";

export default SubmitButton;
