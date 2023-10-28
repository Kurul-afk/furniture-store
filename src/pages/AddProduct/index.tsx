import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import "./style.css";
import { useProductContext } from "../../context/productContext";

const AddProduct = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const { createProduct } = useProductContext();

  const onSubmit = (data: any) => {
    console.log(data);
    createProduct(data);
    reset();
  };

  return (
    <div className="addProduct">
      <div className="addProduct__container">
        <form className="addProduct__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="title"
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <TextField
                label="Title"
                error={!!errors.title}
                helperText={errors.title?.message?.toString()}
                {...field}
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="desc"
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <TextField
                label="Description"
                multiline
                rows={3}
                defaultValue=""
                error={!!errors.desc}
                helperText={errors.desc?.message?.toString()}
                {...field}
                type="multiline"
              />
            )}
          />
          <Controller
            control={control}
            name="price"
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <TextField
                label="Price"
                error={!!errors.price}
                helperText={errors.price?.message?.toString()}
                {...field}
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="url_img"
            rules={{ required: "URL img is required" }}
            render={({ field }) => (
              <TextField
                label="URL img"
                error={!!errors.url_img}
                helperText={errors.url_img?.message?.toString()}
                {...field}
                type="text"
              />
            )}
          />
          <Button variant="contained" type="submit">
            Подтвердить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
