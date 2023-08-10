import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        active: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.active = !state.active;
        }
    }
})

export const toggleTheme = themeSlice.actions.toggleTheme;
export default themeSlice.reducer;