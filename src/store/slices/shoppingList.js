import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: []
};
const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      if (state.list.length > 0) {
        let f = false;
        state.list.map((el) => {
          if (el.id === action.payload.id) {
            el.quantity = el.quantity + 1;
            console.log(el);
            f = true;
          }
        });
        if (!f) {
          let item = { ...action.payload, quantity: 1 };
          state.list.push(item);
          console.log(item);
        }
      } else {
        let item = { ...action.payload, quantity: 1 };
        state.list.push(item);
        console.log(item);
      }
    },
    removeOne: (state, action) => {
      console.log("Add one");
      state.list = state.list.filter((el) => {
        if (el.id === action.payload) {
          return false;
        }
        el.quantity = el.quantity - 1;
      });
    },
    addOne: (state, action) => {
      console.log("Add one");
      state.list = state.list.filter((el) => {
        if (el.id === action.payload) {
          return false;
        }
        el.quantity = el.quantity + 1;
      });
    },
    removeFromList: (state, action) => {
      state.list = state.list.filter((el) => {
        if (el.id === action.payload) {
          return false;
        }
        return true;
      });
    },
    removeAll: (state) => {
      state.list = [];
    }
  }
});
export default shoppingListSlice.reducer;
export const { addToList, removeFromList, removeAll, removeOne, addOne } =
  shoppingListSlice.actions;
