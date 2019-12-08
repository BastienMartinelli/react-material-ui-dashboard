import React, { forwardRef } from "react";
import { Field as FormikField, useField } from "formik";

type FieldProps = React.ComponentProps<typeof FormikField>;

const MUIField = forwardRef<HTMLInputElement, FieldProps>(
  (props: FieldProps, ref) => {
    const { name, comp } = props;

    const [field, meta] = useField({ name });
    const Component = comp;

    return (
      <Component
        ref={ref}
        {...field}
        {...props}
        error={!!meta.error && meta.touched}
        helperText={meta.touched && meta.error}
      />
    );
  }
);

MUIField.defaultProps = {};
MUIField.displayName = "TextField";

export default MUIField;
