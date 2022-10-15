import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from './model';
import { LoginContainer, LoginTitle } from './styled-components';
import { Button, EmailField, PasswordField } from '@/components';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schemaLogin),
    mode: 'all',
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <Box
        sx={{
          bgcolor: 'grey.200',
          borderRadius: '20px',
          p: '50px',
          width: '20%',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <EmailField register={register} errors={errors} />
            <PasswordField register={register} errors={errors} />
            <Button isDirty={isDirty} isValid={isValid} type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </LoginContainer>
  );
};

export default Login;
