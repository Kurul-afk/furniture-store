import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { Button, TextField } from '@mui/material';

const SignIn = () => {
    const {
        handleSubmit,
        register,
        control,
        watch,
        formState: { errors },
      } = useForm();
    
      const navigate = useNavigate();
    
      const {handleSignIn} = useAuthContext()
    
      const onSubmit = (data: any) => {
        handleSignIn(data, navigate)
      };
      
    return (
        <>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                label="email"
                error={!!errors.email}
                helperText={errors.email?.message?.toString()}
                {...register("email", {
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered value does not match email format",
                  },
                })}
                {...field}
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: "password is required" }}
            render={({ field }) => (
              <TextField
                label="password"
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
                {...field}
                type="text"
              />
            )}
          />
          <Button variant="outlined" type="submit">
            Outlined
          </Button>
        </form>
        </>
    );
};

export default SignIn;