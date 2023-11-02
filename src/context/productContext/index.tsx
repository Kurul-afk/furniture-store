import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-toastify";

const INIT_STATE = {
  products: [],
  product: {},
  categories: [],
  category: "",
  pages: 0,
};

const reducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.total / LIMIT),
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

const LIMIT = 6;

const API = "http://localhost:8000";

const productContext = createContext<any>(INIT_STATE);

export const useProductContext = () => {
  return useContext(productContext);
};

const ProductContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [isProductDeleted, setIsProductDeleted] = useState(false);

  const createProduct = async (product: any) => {
    try {
      console.log(product);
      await axios.post(`${API}/products`, product);
      toast.success("Вы добавили новый продукт!", { position: "top-center" });
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async (_page: number) => {
    try {
      const res = await axios(`${API}/products?_limit=${LIMIT}&_page=${_page}`);
      console.log(res.data);
      dispatch({
        type: "GET_PRODUCTS",
        payload: {
          data: res.data,
          total: res.headers["x-total-count"],
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id: number) => {
    try {
      const { data } = await axios(`${API}/products/${id}`);
      dispatch({
        type: "GET_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      console.log(id);
      await axios.delete(`${API}/products/${id}`);
      toast.warning("Вы удалили данный продукт!", { position: "top-center" });
      setIsProductDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };
  const editProduct = async (product: any, id: number) => {
    try {
      await axios.patch(`${API}/products/${id}`, product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        product: state.product,
        categories: state.categories,
        category: state.category,
        pages: state.pages,
        createProduct,
        getProducts,
        deleteProduct,
        isProductDeleted,
        editProduct,
        getProductById,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
