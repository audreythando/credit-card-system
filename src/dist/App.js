"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Register_1 = require("./components/Register");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var CreditCard_1 = require("./components/CreditCard");
var Navbar_1 = require("./components/Navbar/Navbar");
var CreditCardTable_1 = require("./components/CreditCardTable");
var Home_1 = require("./components/Home");
// import {CreditCardDetails} from './types/cardDetailsTypes'
var customTheme = material_1.createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1a1625'
        },
        secondary: {
            main: '#ff4136'
        }
    },
    typography: {
        fontFamily: 'Arial, sans-serif'
    }
});
function App(CardDetails) {
    var _a = react_1.useState([]), capturedCards = _a[0], setCapturedCards = _a[1];
    var handleCardSubmit = function (card) {
        setCapturedCards(__spreadArrays(capturedCards, [card]));
    };
    return (react_1["default"].createElement(material_1.ThemeProvider, { theme: customTheme },
        react_1["default"].createElement(material_1.CssBaseline, null),
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement(material_1.Container, { maxWidth: "sm" },
                react_1["default"].createElement(material_1.Grid, { container: true, spacing: 1, justifyContent: "center", alignItems: "center", style: { minHeight: '100vh' } },
                    react_1["default"].createElement(react_router_dom_1.Routes, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/register", element: react_1["default"].createElement(Register_1["default"], null) }),
                        "* ",
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/credit-card", element: react_1["default"].createElement(CreditCard_1["default"], { onCardSubmit: handleCardSubmit }) }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: '/table', element: react_1["default"].createElement(CreditCardTable_1["default"], { creditCards: capturedCards }) })))))));
}
exports["default"] = App;

//# sourceMappingURL=App.js.map
