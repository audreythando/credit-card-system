"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var credit_png_1 = require("../assets/images/credit.png");
var LandingPage = function () {
    return (react_1["default"].createElement(material_1.Box, { style: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" } },
        react_1["default"].createElement(material_1.Container, null,
            react_1["default"].createElement(material_1.Grid, { container: true, spacing: 1, justifyContent: "center", alignItems: "center", sx: { minHeight: "100%", width: "1050px" } },
                react_1["default"].createElement(material_1.Box, { component: material_1.Paper, elevation: 3, sx: {
                        padding: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundImage: "linear-gradient(to bottom right, #385170, #142d4c, #38598b)",
                        borderRadius: "10px",
                        backgroundColor: "transparent",
                        minHeight: "100%"
                    } },
                    react_1["default"].createElement(material_1.Grid, { container: true, spacing: 4, alignItems: "center" },
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
                            react_1["default"].createElement(material_1.Typography, { variant: "h4", gutterBottom: true, color: "inherit" }, "Welcome to Our Credit Card Validation System"),
                            react_1["default"].createElement(material_1.Typography, { variant: "body1", paragraph: true }, "The system allows Admins to submit and validate all credit cards easily by flaging any irregularities and ensuring that we run a safe and fraud free payment system for our clients ."),
                            react_1["default"].createElement(material_1.Button, { variant: "outlined", color: "primary", component: react_router_dom_1.Link, to: "/register", sx: { mt: 3, mb: 2, borderRadius: "25px" } }, "Login")),
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
                            react_1["default"].createElement(material_1.Grid, { container: true, spacing: 2 },
                                react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
                                    react_1["default"].createElement("img", { src: credit_png_1["default"], alt: "Credit Card 1", width: "100%" }))))))))));
};
exports["default"] = LandingPage;

//# sourceMappingURL=Home.js.map
