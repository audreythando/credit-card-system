"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AppBar_1 = require("@mui/material/AppBar");
var Box_1 = require("@mui/material/Box");
var Toolbar_1 = require("@mui/material/Toolbar");
var Typography_1 = require("@mui/material/Typography");
var IconButton_1 = require("@mui/material/IconButton");
var Menu_1 = require("@mui/icons-material/Menu");
var Logo_jpg_1 = require("../../assets/images/Logo.jpg");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
function ButtonAppBar() {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(false), drawerOpen = _a[0], setDrawerOpen = _a[1]; // State to manage drawer
    var handleCreditCardsTable = function () {
        navigate("/table");
        handleClose();
    };
    var logout = function () {
        navigate("/");
        handleClose();
    };
    var menuIconRef = react_1.useRef(null);
    var barbieAvatarRef = react_1.useRef(null);
    var _b = react_1.useState(false), tooltipOpen = _b[0], setTooltipOpen = _b[1];
    var handleAvatarClick = function () {
        setTooltipOpen(!tooltipOpen);
    };
    var handleClose = function () {
        setTooltipOpen(false);
    };
    react_1.useEffect(function () {
        var timer;
        if (tooltipOpen) {
            timer = setTimeout(function () {
                handleClose();
            }, 3000); // Close Tooltip after 3 seconds if nothing is clicked
        }
        return function () {
            clearTimeout(timer);
        };
    }, [tooltipOpen]);
    return (react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1 } },
        react_1["default"].createElement(AppBar_1["default"], { position: "static", sx: { color: "#a7bcb9", backgroundColor: "#081f37" } },
            react_1["default"].createElement(Toolbar_1["default"], null,
                react_1["default"].createElement(material_1.Avatar, { src: Logo_jpg_1["default"], alt: "Reg", sx: { width: 25, height: 25, lineHeight: "50%" } }),
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", component: "div", sx: { flexGrow: 1, width: 25, height: 25, lineHeight: "30px", marginLeft: "10px" } }, "CREDIT CARD SYSTEM"),
                react_1["default"].createElement(IconButton_1["default"], { size: "large", edge: "start", "aria-label": "menu", color: "inherit", onClick: function () { return setDrawerOpen(true); }, sx: { mr: 2 }, ref: menuIconRef },
                    react_1["default"].createElement(Menu_1["default"], null)),
                react_1["default"].createElement(material_1.Tooltip, { open: tooltipOpen, onClose: handleClose, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, title: react_1["default"].createElement(material_1.List, { sx: { backgroundColor: "#081f37", width: "150px" } },
                        react_1["default"].createElement(material_1.ListItem, { onClick: handleCreditCardsTable },
                            react_1["default"].createElement(material_1.ListItemText, { primary: "Settings" })),
                        react_1["default"].createElement(material_1.ListItem, { onClick: logout },
                            react_1["default"].createElement(material_1.ListItemText, { primary: "Logout" }))), placement: "bottom-end", arrow: true },
                    react_1["default"].createElement(material_1.Avatar, { ref: barbieAvatarRef, className: "barbie", color: "inherit", onClick: handleAvatarClick, sx: { width: 25, height: 25, marginRight: "10px" } }))),
            react_1["default"].createElement(material_1.Drawer, { anchor: "right", open: drawerOpen, onClose: function () { return setDrawerOpen(false); }, className: "drawer-background" },
                react_1["default"].createElement(material_1.List, { sx: { backgroundColor: "#081f37", height: "100vh" } },
                    react_1["default"].createElement(material_1.ListItem, { onClick: handleCreditCardsTable },
                        react_1["default"].createElement(material_1.ListItemText, { primary: "Credit Cards Table" })),
                    react_1["default"].createElement(material_1.ListItem, { onClick: logout },
                        react_1["default"].createElement(material_1.ListItemText, { primary: "Logout" })))))));
}
exports["default"] = ButtonAppBar;

//# sourceMappingURL=Navbar.js.map
