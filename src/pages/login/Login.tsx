import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from './model';
import { LoginContainer, LoginSpan, LoginTitle } from './styled-components';
import { Button, InputField } from '@/components';
import { useFetchAndLoad } from '@/hook';
import {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
} from '@/redux/states/user';
import { loginUser } from '@/services/public/loginService';
import { userAdapter } from '@/adapters/user.adapter';
import { tokenInterceptor } from '@/utilities';

const Login = () => {
  const { callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schemaLogin),
    mode: 'all',
  });

  const postApiData = async (data: any) => {
    dispatch(loginUserStart());
    try {
      const resp = await callEndpoint(loginUser(data));
      tokenInterceptor(resp);
      const userFormatted: any = userAdapter(resp?.data.data);
      dispatch(loginUserSuccess(userFormatted));
      navigation('/');
    } catch (error: any) {
      dispatch(loginUserFailure());
    }
  };

  const onSubmit = (data: any) => {
    postApiData(data);
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
            <InputField
              errors={errors}
              label="Email"
              name="email"
              register={register}
              type="email"
            />
            <InputField
              errors={errors}
              label="Password"
              name="password"
              register={register}
              type="password"
            />
            <Button isDirty={isDirty} isValid={isValid} type="submit">
              Login
            </Button>
            <LoginSpan>
              Don`t you have an account?
              <Link className="link" to="/register">
                {' '}
                <span>Click here!</span>
              </Link>
            </LoginSpan>
            <LoginSpan>
              <Link className="link" to="/">
                <span>Do you want to return home?</span>
              </Link>
            </LoginSpan>
          </Box>
        </form>
      </Box>
    </LoginContainer>
  );
};

export default Login;
