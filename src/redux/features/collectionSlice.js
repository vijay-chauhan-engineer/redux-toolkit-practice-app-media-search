import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem("collection", JSON.stringify(state.items));

                toast.success("Added to Collection!", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "dark",
                    transition: Zoom,
                });
            } else {
                toast.info("Already in Collection!", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "dark",
                    transition: Zoom,
                });
            }
        },

        removeCollection: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );

            localStorage.setItem("collection", JSON.stringify(state.items));

            toast.error("Removed from Collection!", {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
                transition: Zoom,
            });
        },

        clearCollection: (state) => {
            state.items = [];
            localStorage.removeItem("collection");

            toast.warning("Collection Cleared!", {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
                transition: Zoom,
            });
        },
    },
});

export const {
    addCollection,
    removeCollection,
    clearCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;
