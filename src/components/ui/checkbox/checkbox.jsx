import React from 'react';
import { VisuallyHiddenInput } from '/src/components/styled';

function Checkbox({
  checkboxCompanent,
  value,
  text,
  isChecked,
  onChange,
  onClick,
  ...props
}) {
  const CheckboxCompanent = checkboxCompanent;

  return (
    <>
      <VisuallyHiddenInput
        value={value}
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        {...props}
      />

      <CheckboxCompanent onClick={() => onClick()} $checked={isChecked}>
        {text}
      </CheckboxCompanent>
    </>
  );
}

export default Checkbox;
