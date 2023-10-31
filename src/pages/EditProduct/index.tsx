import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useProductContext } from "../../context/productContext";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const { editProduct } = useProductContext();

  const onSubmit = (data: any) => {
    console.log(data);
    // editProduct(data, id);
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

export default EditProduct;
