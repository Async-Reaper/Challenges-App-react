import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/providers/store-providers/config";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
