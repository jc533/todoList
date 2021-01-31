import React from 'react';
// import Layout from './component/Layout.js'
import MainPage from "./pages/main.js";
import { ThemeProvider } from "@material-ui/core"
import theme from "./JizzTheme.js";
import { Router, Link } from "react-router"
import { Route, HashRouter } from 'react-router-dom'
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Route path="/">
                    <MainPage />
                    {/* <Route path="users/:userId" component={Users} /> */}
                </Route>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
