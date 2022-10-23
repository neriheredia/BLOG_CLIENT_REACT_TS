import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, InputField, LoadingButton } from '@/components';
import { RegisterContainer, RegisterTitle } from './styled-components';
import { schemaRegister } from './model';
import { useFetchAndLoad } from '@/hook';
import {
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} from '@/redux/states/user';
import { registerUser } from '@/services';
import { AppStore } from '@/redux/store';
import { IUser } from '../../models/user.model';

const Register = () => {
  const { callEndpoint } = useFetchAndLoad();
  const userLoading = useSelector((state: AppStore) => state.user.loading);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schemaRegister),
    mode: 'all',
  });

  const postApiData = async (data: IUser) => {
    dispatch(registerUserStart());
    try {
      const resp = await callEndpoint(registerUser(data));
      dispatch(registerUserSuccess());
      setMessage(resp.data.message);
      setStatus(resp.data.status);
      setShowAlert(true);
    } catch (error: any) {
      dispatch(registerUserFailure());
      setMessage(error.message);
      setShowAlert(true);
    }
  };

  const onSubmit = (data: any) => {
    postApiData(data);
    reset();
    !userLoading && !showAlert && setTimeout(() => navigation('/login'), 3000);
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
            <InputField
              errors={errors}
              label="First Name"
              name="firstName"
              register={register}
              type="text"
            />
            <InputField
              errors={errors}
              label="Surname"
              name="surname"
              register={register}
              type="text"
            />
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
            <LoadingButton
              loading={userLoading}
              isDirty={isDirty}
              isValid={isValid}
              type="submit"
            >
              Register
            </LoadingButton>
          </Box>
        </form>
      </Box>
      <Alert
        error={status !== 201}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        text={message}
      />
    </RegisterContainer>
  );
};

export default Register;
