'use client';
import React from 'react';
import { Button, Div, Text, TextField } from '@pezeshk-book/ui-kit';
import { ReducerTypes } from '@store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '@store/auth/auth-actions';
import { useDebouncedCallback } from 'use-debounce';
import validMobileNumber from '@utils/phone-validation';
import {useRouter} from "next/navigation";
import routes from "@routes";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { phoneNumber, isNumberValid } = useSelector((state: ReducerTypes) => state.auth);

  const handleUserMobile = useDebouncedCallback((e: any) => {
    const value = e.target.value;
    if (value.length >= 10) {
      const validMobile = validMobileNumber(value);
      if (validMobile.isValid) {
        dispatch(AuthActions.setUserPhoneNumberAction({ phoneNumber: `0${validMobile.mobile}` }));
      } else {
        dispatch(AuthActions.setPhoneNumberValidation({ isNumberValid: false }));
      }
    } else if (isNumberValid) {
      dispatch(AuthActions.setPhoneNumberValidation({ isNumberValid: false }));
    }
  }, 500);

  const handleGetOtp = () => {
    router.push(routes['route.auth.login'])
  };

  return (
    <Div className={'flex-col justify-center py-14 w-full h-screen md:-mt-24 sm:pt-16 md:pb-8 md:pt-0 px-8 sm:px-[20%]'}>
      <Div className={'mb-14 sm:mb-12 md:mb-14 self-center'}>
        <Text type={'bold'} color={'grey.800'} typography={'xl'}>
          ورود
        </Text>
      </Div>
      <Div className={'w-full'}>
        <TextField
          size={'large'}
          onChange={handleUserMobile}
          color={'primary'}
          className={'w-full'}
          variant={'outlined'}
          label={'موبایل'}
          placeholder={'موبایل'}
          placeholderPosition={'center'}
          type={'tel'}
          error={!!(!isNumberValid && phoneNumber)}
          inputClassName={'!text-center sm:!text-t-lg tracking-[10px] sm:tracking-[20px] placeholder-shown:tracking-normal'}
          helperText={!isNumberValid && phoneNumber ? 'لطفا یک شماره موبایل صحیح وارد نمایید.' : undefined}
        />
      </Div>
      <Button size={'large'} color={'primary'} disabled={!isNumberValid} onClick={handleGetOtp} className={'gap-x-2 w-full mt-12 z-50'}>
        ورود
      </Button>
    </Div>
  );
};
export default SignUp;
