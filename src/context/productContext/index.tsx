import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
interface ProductContextI {
  products: any;
  product: any;
  categories: any;
  category: any;
  pages: any;
  createProduct: (product: any) => void;
  getProducts: (_page: any) => void;
}
const INIT_STATE = {
  products: [],
  product: {},
  categories: [],
  category: "",
  pages: 0,
  createProduct: (product: any) => {},
  getProducts: (_page: any) => {},
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

const LIMIT = 3;

const API = "http://localhost:8000";

const productContext = createContext<ProductContextI>(INIT_STATE);

export const useProductContext = () => {
  return useContext(productContext);
};

const ProductContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createProduct = async (product: any) => {
    try {
      console.log(product);
      await axios.post(`${API}/products`, product);
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
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
