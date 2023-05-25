"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.SECRET = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
exports.SECRET = '12456';
var auth = function (req, res, next) {
    var authorization = req.headers.authorization;
    if (authorization) {
        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjIsInVzZXJuYW1lIjoicm9vdCIsInBhc3N3b3JkIjoiJDJiJDEwJFdFTWNId0ZKM1k5QVNDUVJqNkhhQU9qRlhBa2pReEFhcFdNTzF0VDhZMExxL2dCTlV0SGouIiwiaWF0IjoxNjgzMTcwMzI4LCJleHAiOjE3MTkxNzAzMjh9.Bx8_gsAKn8hdorxrZnXnjBOUoINL1-Xtcxt3C1u2MXo
        var accessToken = req.headers.authorization.split(' ')[1];
        if (accessToken) {
            jsonwebtoken_1.default.verify(accessToken, exports.SECRET, function (err, payload) {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous'
                    });
                }
                else {
                    req.decode = payload;
                    next();
                }
            });
        }
        else {
            res.status(401).json({
                message: 'You are anonymous'
            });
        }
    }
    else {
        res.status(401).json({
            message: 'You are anonymous'
        });
    }
};
exports.auth = auth;
