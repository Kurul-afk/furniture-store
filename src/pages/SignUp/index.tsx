import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {};

  const pwd = watch("password");

  return (
    <div>
      <h1>Sign up</h1>
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
        <Controller
          control={control}
          name="password_confirm"
          rules={{ required: "password confirm is required" }}
          render={({ field }) => (
            <TextField
              label="password_confirm"
              error={!!errors.password_confirm}
              helperText={errors.password_confirm?.message?.toString()}
              {...field}
              type="text"
            />
          )}
        />
        <Button variant="outlined" type="submit">
          Outlined
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
// {
//       <Button variant="outlined">Outlined</Button> */
// }
