// import React, { createContext, useContext, useState } from "react";

// interface ProductI {
//   title: string;
//   desc: string;
//   price: string;
//   url_img: string;
// }

// interface ProductContextI {
//   products: object;
//   product: string;
//   categories: object;
//   category: string;
//   pages: number;
// }
// const INIT_STATE = {
//   products: [],
//   product: "",
//   categories: [],
//   category: "",
//   pages: 0,
// };

// const API = "http://localhost:8000";

// const productContext = createContext<ProductContextI>(INIT_STATE);

// export const useProductContext = () => {
//   return useContext(productContext);
// };
// const ProductContextProvider = ({ children }: any) => {
//   const [product, useProduct] = useState<object>({});
//   return (
//     <productContext.Provider
//       value={{
//         product,
//       }}
//     >
//       {children}
//     </productContext.Provider>
//   );
// };

// export default ProductContextProvider;
