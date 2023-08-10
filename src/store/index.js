import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";

export default configureStore({
    reducer: {
        switchTheme: themeReducer
    }
});