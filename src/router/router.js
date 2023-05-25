"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productRouter_1 = require("./productRouter");
var userRouter_1 = require("./userRouter");
var router = (0, express_1.Router)();
router.use('/products', productRouter_1.default);
router.use('/auth', userRouter_1.userRouter);
exports.default = router;
