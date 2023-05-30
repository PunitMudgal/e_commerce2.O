import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const ProductContext = createContext();
const apiKey1 = "https://api.pujakaitem.com/api/products";
const apiKey2 = "https://fakestoreapi.com/products";
const initialState = {
  isError: false,
  isLoading: false,
  products: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // STORING DATA OF BOTH API IN ONE ARRAY
  // const allProducts = [...state.products, ...state.gadgets];

  // GET GADGET
  // const getGadgets = async (key) => {
  //   dispatch({ type: "API_LOADING_GADGET" });
  //   try {
  //     const response = await axios.get(key);
  //     const data = await response.data;
  //     dispatch({ type: "API_SUCCESS_GADGET", payload: data });
  //   } catch (err) {
  //     dispatch({ type: "API_ERROR_GADGET" });
  //     console.log(err);
  //   }
  // };
  // // GET PRODUCTS FROM ANOTHER API
  // const getProducts = async (key) => {
  //   dispatch({ type: "API_LOADING_PRODUCT" });
  //   try {
  //     const response = await axios.get(key);
  //     const data = await response.data;
  //     dispatch({ type: "API_SUCCESS_PRODUCT", payload: data });
  //   } catch (err) {
  //     dispatch({ type: "API_ERROR_PRODUCT" });
  //     console.log(err);
  //   }
  // };

  const getAllData = async(key1, key2) => {
    dispatch({type: "ALL_DATA_LOADING"})
    try{
      const response1 = await axios.get(key1);
      const response2 = await axios.get(key2);
      const data1 = await response1.data;
      const data2 = await response2.data;
      dispatch({type: "ALL_DATA_SUCCESS", payload: [...data1,...data2]})
    }
    catch(error){
      dispatch({type: "ALL_DATA_ERROR"})
      console.log(error);
    }
  }

  useEffect(() => {
    getAllData(apiKey1,apiKey2)
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

const UseProductContext = () => {
  return useContext(ProductContext);
};
export { ProductProvider, ProductContext, UseProductContext };