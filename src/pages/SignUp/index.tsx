import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import "./style.css";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { handleSignUp } = useAuthContext();

  const onSubmit = (data: any) => {
    handleSignUp(data, navigate);
  };

  const pwd = watch("password");

  return (
    <div className="signUp">
      <div className="signUp__container">
        <h1 className="signUp__title">Sign up</h1>
        <form className="signUp__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                className="signUp__textField"
                label="Почта"
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
                className="signUp__textField"
                label="Пароль"
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
            rules={{
              required: "password confirm is required",
              validate: (value) => value == pwd || "Пароли не совпадают!",
            }}
            render={({ field }) => (
              <TextField
                className="signUp__textField"
                label="Потвердите пароль"
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
    </div>
  );
};

export default SignUp;
