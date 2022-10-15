import { Button as MUIButton } from '@mui/material';

export const Button = ({ isDirty, isValid, children, type }: any) => {
  return (
    <MUIButton
      type={type}
      fullWidth
      variant="outlined"
      disabled={!isDirty || !isValid}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
