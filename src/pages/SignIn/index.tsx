import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { Button, TextField } from "@mui/material";
import "./style.css";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { handleSignIn } = useAuthContext();

  const onSubmit = (data: any) => {
    console.log(data);
    handleSignIn(data, navigate);
  };

  return (
    <div className="signIn">
      <div className="signIn__container">
        <h1 className="signIn__title">Логин</h1>
        <form className="signIn__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                className="signIn__textField"
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
                className="signIn__textField"
                label="Пароль"
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
                {...field}
                type="text"
              />
            )}
          />
          <Button className="signIn__btn" variant="outlined" type="submit">
            Подтвердить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
