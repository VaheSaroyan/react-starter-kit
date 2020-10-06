import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/configureStore";
import Routes from "./routes";

export default function App() {
    return (
        <Router>
            <Provider store={store}>
                <PersistGate loading={false} persistor={persistor}>
                    <Routes />
                </PersistGate>
            </Provider>
        </Router>
    );
}