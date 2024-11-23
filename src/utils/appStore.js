import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configue";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt:gptReducer,
    config:configReducer,
    /* 
    gpt: gptReducer,
    config: configReducer, */
  },
});

export default appStore;