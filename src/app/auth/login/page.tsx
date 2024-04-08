'use client';
import React, { ChangeEvent, useEffect } from 'react';
import { Button, Div, Text, TextField } from '@pezeshk-book/ui-kit';
import { ReducerTypes } from '@store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import {removeFromCookie} from "@utils/cookie";
import routes from "@routes";
import {AuthActions} from "@store/auth/auth-actions";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loginLoading, phoneNumber } = useSelector((state: ReducerTypes) => state.auth);

  useEffect(() => {
    if (!phoneNumber) {
      removeFromCookie('guard');
      router.replace(routes['route.auth.sign-up']);
    } else {
      dispatch(AuthActions.getUserOtpAction())
    }
  }, []);

  const handleUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
    // dispatch(AuthActions.setUserPasswordAction({ password: e.target.value }));
  };

  const handleLoginUser = () => {
    // dispatch(AuthActions.loginWithPasswordAction());
  };

  return (
    <Div className={'flex-col justify-center py-14 w-full h-screen md:-mt-24 sm:pt-16 md:pb-8 md:pt-0 px-8 sm:px-[20%]'}>
      <Div className={'mb-14 sm:mb-12 md:mb-14 self-center'}>
        <Text type={'bold'} color={'grey.800'} typography={'xl'}>
          ورود به حساب کاربری
        </Text>
      </Div>
      <Div className={'w-full'}>
        <TextField
          size={'large'}
          color={'primary'}
          type={'password'}
          label={'کلمه عبور'}
          placeholder={'******'}
          placeholderPosition={'center'}
          className={'w-full'}
          variant={'outlined'}
          inputClassName={'!text-center sm:!text-d-lg tracking-[20px]'}
          onChange={handleUserPassword}
        />
      </Div>
      <Button size={'large'} color={'primary'} loading={loginLoading} disabled={loginLoading} onClick={handleLoginUser} className={'gap-x-2 w-full mt-12 z-50'}>
        ورود
      </Button>
    </Div>
  );
};

export default Login;
