"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BounceLoader_1 = require("react-spinners/BounceLoader");
var material_1 = require("@mui/material");
var config_1 = require("../firebase/config");
var auth_1 = require("firebase/auth");
var Login_1 = require("./Login");
var Logo_jpg_1 = require("../assets/images/Logo.jpg");
var Register = function () {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(""), value = _b[0], setValue = _b[1];
    react_1.useEffect(function () {
        setLoading(true);
        setTimeout(function () {
            setLoading(false);
        }, 8000);
    }, []);
    var handleClick = function () {
        auth_1.signInWithPopup(config_1.auth, config_1.provider).then(function (data) {
            var _a, _b;
            setValue(((_a = data.user) === null || _a === void 0 ? void 0 : _a.email) || "");
            localStorage.setItem("email", ((_b = data.user) === null || _b === void 0 ? void 0 : _b.email) || "");
        });
    };
    return (react_1["default"].createElement(material_1.Container, { maxWidth: "sm" }, loading ? (react_1["default"].createElement(material_1.Box, { sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        } },
        react_1["default"].createElement(BounceLoader_1["default"], { color: "#385170", loading: loading, size: 50 }))) : (react_1["default"].createElement(material_1.Box, { component: material_1.Paper, elevation: 3, sx: {
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: "linear-gradient(to bottom right, #385170,#142d4c,  #38598b)",
            borderRadius: "10px",
            backgroundColor: "transparent"
        } }, value ? (react_1["default"].createElement(Login_1["default"], null)) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Avatar, { src: Logo_jpg_1["default"], alt: "Reg " }),
        react_1["default"].createElement(material_1.Typography, { sx: { mt: 2, fontWeight: "600" }, variant: "h6", color: "primary" }, "Hello Admin"),
        react_1["default"].createElement(material_1.Button, { variant: "outlined", color: "primary", sx: { mt: 3, mb: 2, borderRadius: "25px" }, onClick: handleClick }, "Sign In With Google")))))));
};
exports["default"] = Register;

//# sourceMappingURL=Register.js.map
