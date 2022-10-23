import { LoadingButton as MUILoadingButton } from '@mui/lab';

export const Button = ({
  isDirty,
  isValid,
  children,
  loading = false,
  type,
}: any) => {
  return (
    <MUILoadingButton
      disabled={!isDirty || !isValid}
      fullWidth
      loading={loading}
      variant="outlined"
      type={type}
    >
      {children}
    </MUILoadingButton>
  );
};

export default Button;
