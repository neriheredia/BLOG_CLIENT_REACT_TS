import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, EmailField, PasswordField, UsernameField } from '@/components';
import { RegisterContainer, RegisterTitle } from './styled-components';
import { schemaRegister } from './model';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schemaRegister),
    mode: 'all',
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <RegisterContainer className="auth">
      <RegisterTitle>Register</RegisterTitle>
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
            <UsernameField register={register} errors={errors} />
            <EmailField register={register} errors={errors} />
            <PasswordField register={register} errors={errors} />
            <Button isDirty={isDirty} isValid={isValid} type="submit">
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </RegisterContainer>
  );
};

export default Register;
