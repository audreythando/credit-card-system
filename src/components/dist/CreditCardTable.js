"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_credit_cards_2_1 = require("react-credit-cards-2");
require("react-credit-cards-2/dist/es/styles-compiled.css");
require("./CreditCard.css");
var CreditCardTable = function (_a) {
    var creditCards = _a.creditCards;
    var navigate = react_router_dom_1.useNavigate();
    var handleGoBack = function () {
        navigate("/credit-card");
    };
    var handleCardDisplay = function () {
        navigate("/");
    };
    return (react_1["default"].createElement(material_1.Table, { sx: { minWidth: 1050, mt: 2 }, "aria-label": "Credit Card Table" },
        react_1["default"].createElement(material_1.Box, { sx: {
                backgroundImage: "linear-gradient(to bottom right, #385170,#142d4c,  #38598b)",
                borderRadius: '10px',
                backgroundColor: 'transparent'
            } },
            react_1["default"].createElement(material_1.TableHead, null,
                react_1["default"].createElement(material_1.TableRow, null,
                    react_1["default"].createElement(material_1.TableCell, null, "Card "),
                    react_1["default"].createElement(material_1.TableCell, null, "Card Number"),
                    react_1["default"].createElement(material_1.TableCell, null, "Card Name"),
                    react_1["default"].createElement(material_1.TableCell, null, "Expiration Date"),
                    react_1["default"].createElement(material_1.TableCell, null, "CVV"),
                    react_1["default"].createElement(material_1.TableCell, null, "Country"))),
            react_1["default"].createElement(material_1.TableBody, null, creditCards.map(function (card, index) { return (react_1["default"].createElement(material_1.TableRow, { key: index },
                react_1["default"].createElement(material_1.TableCell, null,
                    react_1["default"].createElement(react_credit_cards_2_1["default"], { number: card.number, name: card.name, expiry: card.expiry, cvc: card.cvc })),
                react_1["default"].createElement(material_1.TableCell, null, card.number),
                react_1["default"].createElement(material_1.TableCell, null, card.name),
                react_1["default"].createElement(material_1.TableCell, null, card.expiry),
                react_1["default"].createElement(material_1.TableCell, null, card.cvc),
                react_1["default"].createElement(material_1.TableCell, null, card.country))); })),
            react_1["default"].createElement(material_1.Grid, { container: true, spacing: 2 },
                react_1["default"].createElement(material_1.Grid, { item: true, xs: 6 },
                    react_1["default"].createElement(material_1.Button, { type: "button", fullWidth: true, variant: "outlined", color: "primary", onClick: handleGoBack, sx: { mt: 3, mb: 2, borderRadius: "25px" } }, "Go Back")),
                react_1["default"].createElement(material_1.Grid, { item: true, xs: 6 },
                    react_1["default"].createElement(material_1.Button, { type: "submit", fullWidth: true, variant: "outlined", color: "primary", onClick: handleCardDisplay, sx: { mt: 3, mb: 2, borderRadius: "25px" } }, "Home"))))));
};
exports["default"] = CreditCardTable;

//# sourceMappingURL=CreditCardTable.js.map
