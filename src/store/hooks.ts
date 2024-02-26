import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";

export const useSlateDispatch = () => useDispatch<AppDispatch>();
export const useSlateSelector: TypedUseSelectorHook<RootState> = useSelector;
