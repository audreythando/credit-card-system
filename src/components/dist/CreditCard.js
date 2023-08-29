"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_credit_cards_2_1 = require("react-credit-cards-2");
require("react-credit-cards-2/dist/es/styles-compiled.css");
require("./CreditCard.css");
var material_1 = require("@mui/material");
var formik_1 = require("formik");
var Yup = require("yup");
var Data_1 = require("../Data");
var CreditCard = function (_a) {
    var onCardSubmit = _a.onCardSubmit;
    var navigate = react_router_dom_1.useNavigate();
    var _b = react_1.useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        country: ""
    }), cardDetails = _b[0], setCardDetails = _b[1];
    var _c = react_1.useState(undefined), focus = _c[0], setFocus = _c[1];
    var _d = react_1.useState(false), isBlockedCountry = _d[0], setIsBlockedCountry = _d[1];
    var _e = react_1.useState(null), countryMenuAnchorEl = _e[0], setCountryMenuAnchorEl = _e[1];
    var handleCountryClick = function (event) {
        setCountryMenuAnchorEl(event.currentTarget);
    };
    var handleInputFocus = function (evt) {
        setFocus(evt.target.name);
    };
    var handleCountryClose = function () {
        setCountryMenuAnchorEl(null);
    };
    var validationSchema = Yup.object().shape({
        number: Yup.string()
            .required("Card Number is required")
            .matches(/^\d{16}$/, "Card Number must be 16 digits"),
        name: Yup.string().required("Card Name is required"),
        expiry: Yup.string()
            .required("Expiration Date is required")
            .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid Expiration Date"),
        cvc: Yup.string()
            .required("CVV is required")
            .matches(/^\d{3}$/, "CVV must be 3 digits"),
        country: Yup.string().required("Country is required")
    });
    var handleButtonClick = function () {
        if (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvc || !cardDetails.country) {
            alert("Please fill in all card details.");
        }
        else if (Data_1.blockedCountries.includes(cardDetails.country)) {
            alert("Card submission is blocked for the selected country.");
        }
        else {
            var storedCards = JSON.parse(localStorage.getItem("creditCards") || "[]");
            var cardExists = storedCards.some(function (storedCard) { return storedCard.number === cardDetails.number; });
            if (!cardExists) {
                localStorage.setItem("creditCards", JSON.stringify(__spreadArrays(storedCards, [cardDetails])));
                onCardSubmit(cardDetails);
                setIsBlockedCountry(false);
                navigate("/table");
            }
            else {
                alert("This card has already been captured.");
            }
        }
    };
    var handleNumberChange = function (e) {
        var cleanedNumber = e.target.value.replace(/\D/g, "");
        if (cleanedNumber.length > 16) {
            alert("Card Number must be 16 digits");
        }
        else {
            var formattedNumber_1 = cleanedNumber.replace(/(\d{4})/g, "$1 ").trim();
            setCardDetails(function (prevCardDetails) { return (__assign(__assign({}, prevCardDetails), { number: formattedNumber_1 })); });
        }
    };
    var handleDateChange = function (e) {
        var cleanedDate = e.target.value.replace(/\D/g, "");
        var formattedDate = cleanedDate.replace(/(\d{2})(\d{2})/, "$1/$2");
        setCardDetails(function (prevCardDetails) { return (__assign(__assign({}, prevCardDetails), { expiry: formattedDate })); });
    };
    return (react_1["default"].createElement(material_1.Container, { maxWidth: "sm" },
        react_1["default"].createElement(material_1.Grid, { container: true, spacing: 1, justifyContent: "center", alignItems: "center", style: { minHeight: "100vh" } },
            react_1["default"].createElement(material_1.Box, { component: material_1.Paper, elevation: 2, sx: {
                    padding: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundImage: "linear-gradient(to bottom right, #385170,#142d4c,  #38598b)",
                    borderRadius: "10px",
                    backgroundColor: "transparent"
                } },
                react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
                    react_1["default"].createElement("div", { className: "rccs__card rccs__card--unknown" },
                        react_1["default"].createElement(react_credit_cards_2_1["default"], { number: cardDetails.number, name: cardDetails.name, expiry: cardDetails.expiry, cvc: cardDetails.cvc }))),
                react_1["default"].createElement(formik_1.Formik, { initialValues: cardDetails, validationSchema: validationSchema, onSubmit: function () { } }, function (_a) {
                    var isSubmitting = _a.isSubmitting;
                    return (react_1["default"].createElement(formik_1.Form, null,
                        react_1["default"].createElement(material_1.Grid, { container: true, spacing: 1 },
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
                                react_1["default"].createElement(formik_1.Field, { as: material_1.TextField, fullWidth: true, label: "Card Number", variant: "outlined", name: "number", value: cardDetails.number, onChange: handleNumberChange, onFocus: handleInputFocus, InputLabelProps: { style: { color: "primary" } }, style: { borderRadius: "35px" } }),
                                react_1["default"].createElement(formik_1.ErrorMessage, { name: "number", component: "div", className: "error", style: { fontSize: "small", color: "red" } })),
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
                                react_1["default"].createElement(formik_1.Field, { as: material_1.TextField, fullWidth: true, label: "Card Name", variant: "outlined", name: "name", value: cardDetails.name, onChange: function (e) {
                                        setCardDetails(__assign(__assign({}, cardDetails), { name: e.target.value }));
                                    }, onFocus: handleInputFocus }),
                                react_1["default"].createElement(formik_1.ErrorMessage, { name: "name", component: "div", className: "error", style: { fontSize: "small", color: "red" } })),
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 6 },
                                react_1["default"].createElement(formik_1.Field, { as: material_1.TextField, fullWidth: true, label: "Expiration Date", variant: "outlined", name: "expiry", value: cardDetails.expiry, onChange: handleDateChange, onFocus: handleInputFocus }),
                                react_1["default"].createElement(formik_1.ErrorMessage, { name: "expiry", component: "div", className: "error", style: { fontSize: "small", color: "red" } })),
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 6 },
                                react_1["default"].createElement(formik_1.Field, { as: material_1.TextField, fullWidth: true, label: "CVC", variant: "outlined", name: "cvc", value: cardDetails.cvc, onChange: function (e) {
                                        setCardDetails(__assign(__assign({}, cardDetails), { cvc: e.target.value }));
                                    }, onFocus: handleInputFocus }),
                                react_1["default"].createElement(formik_1.ErrorMessage, { name: "cvc", component: "div", className: "error", style: { fontSize: "small", color: "red" } })),
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
                                react_1["default"].createElement(formik_1.Field, { as: material_1.TextField, fullWidth: true, label: "Country", variant: "outlined", name: "country", value: cardDetails.country, onClick: handleCountryClick, onFocus: handleInputFocus, style: { borderRadius: "35px" } }),
                                react_1["default"].createElement(formik_1.ErrorMessage, { name: "country", component: "div", className: "error", style: { fontSize: "small", color: "red" } }),
                                isBlockedCountry && (react_1["default"].createElement("div", { className: "error", style: { fontSize: "small", color: "red" } }, "Credit card submission is blocked for the selected country.")),
                                react_1["default"].createElement(material_1.Popover, { open: Boolean(countryMenuAnchorEl), anchorEl: countryMenuAnchorEl, onClose: handleCountryClose, anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    } },
                                    react_1["default"].createElement("div", { style: {
                                            maxHeight: "200px",
                                            overflowY: "scroll",
                                            backgroundColor: "#001f3f"
                                        } }, Data_1.countries.map(function (option, index) { return (react_1["default"].createElement(material_1.MenuItem, { key: index, value: option, onClick: function () {
                                            setCardDetails(__assign(__assign({}, cardDetails), { country: option }));
                                            handleCountryClose();
                                        } }, option)); }))))),
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
                            react_1["default"].createElement(material_1.Button, { type: "submit", fullWidth: true, variant: "outlined", color: "primary", sx: { mt: 3, mb: 2, borderRadius: "25px" }, disabled: isSubmitting || isBlockedCountry, onClick: handleButtonClick }, "Submit Card"))));
                })))));
};
exports["default"] = CreditCard;

//# sourceMappingURL=CreditCard.js.map
