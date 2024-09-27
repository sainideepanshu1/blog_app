import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import themeReducer from "./theme/themeSlice.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// Combine reducers (if you have more reducers, you can add them here)
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

// Persist configuration
const persistConfig = {
  key: "root", // Key for localStorage
  storage, // Storage type (localStorage by default)
  version: 1, // Versioning for persist
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with persistedReducer
export const store = configureStore({
  reducer: persistedReducer, // Use persistedReducer directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Correct typo here
    }),
});

// Create the persistor
export const persistor = persistStore(store);
