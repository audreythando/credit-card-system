"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var InputAdornment_1 = require("@mui/material/InputAdornment");
var IconButton_1 = require("@mui/material/IconButton");
var icons_material_1 = require("@mui/icons-material");
var react_router_dom_1 = require("react-router-dom");
var formik_1 = require("formik");
var Yup = require("yup");
var Login = function () {
    var navigate = react_router_dom_1.useNavigate();
    var formData = {
        email: "",
        password: ""
    };
    var _a = react_1.useState(false), showPassword = _a[0], setShowPassword = _a[1];
    var handleClickShowPassword = function () {
        setShowPassword(!showPassword);
    };
    var handleSubmit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        return __awaiter(void 0, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, validationSchema.validate(values, { abortEarly: false })];
                    case 1:
                        _b.sent();
                        setSubmitting(false);
                        navigate("/credit-card");
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.error("Validation error:", error_1);
                        setSubmitting(false);
                        alert("Validation failed. Please check your inputs.");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long")
    });
    return (react_1["default"].createElement(material_1.Container, { maxWidth: "sm" },
        react_1["default"].createElement(material_1.Grid, { container: true, spacing: 1, justifyContent: "center", alignItems: "center", style: { minHeight: "80vh" } },
            react_1["default"].createElement(material_1.Box, { component: material_1.Paper, elevation: 3, sx: {
                    padding: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundImage: "linear-gradient(to bottom right, #385170,#142d4c,  #38598b)",
                    borderRadius: "10px",
                    backgroundColor: "transparent"
                } },
                react_1["default"].createElement(material_1.Avatar, { sx: { m: 1, bgcolor: "primary.main" } }),
                react_1["default"].createElement(material_1.Typography, { variant: "h5", color: "primary" }, "Login"),
                react_1["default"].createElement(formik_1.Formik, { initialValues: formData, onSubmit: handleSubmit, validationSchema: validationSchema }, function (_a) {
                    var isSubmitting = _a.isSubmitting;
                    return (react_1["default"].createElement(formik_1.Form, { style: { width: "100%", marginTop: "1rem" } },
                        react_1["default"].createElement(formik_1.Field, { as: material_1.TextField, variant: "outlined", margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", autoFocus: true }),
                        react_1["default"].createElement(formik_1.ErrorMessage, { name: "email", component: "div", className: "error", style: { fontSize: "small", color: "red" } }),
                        react_1["default"].createElement(formik_1.Field, { as: material_1.TextField, variant: "outlined", margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", color: "primary", type: showPassword ? "text" : "password", id: "password", autoComplete: "current-password", InputProps: {
                                endAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "end" },
                                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, edge: "end" }, showPassword ? (react_1["default"].createElement(icons_material_1.Visibility, null)) : (react_1["default"].createElement(icons_material_1.VisibilityOff, null)))))
                            } }),
                        react_1["default"].createElement(formik_1.ErrorMessage, { name: "password", component: "div", className: "error", style: { fontSize: "small", color: "red" } }),
                        react_1["default"].createElement(material_1.Button, { type: "submit", fullWidth: true, variant: "outlined", color: "primary", sx: { mt: 3, mb: 2, borderRadius: "25px" } }, "Login")));
                })))));
};
exports["default"] = Login;

//# sourceMappingURL=Login.js.map
