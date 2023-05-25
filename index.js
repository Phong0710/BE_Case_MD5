"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var router_1 = require("./src/router/router");
var data_source_1 = require("./src/data-source");
var cors_1 = require("cors");
var app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(function () {
    console.log('Connect Database Success');
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('', router_1.default);
app.listen(3001, function () {
    console.log('Server is running');
});
