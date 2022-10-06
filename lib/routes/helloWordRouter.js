"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get('/', function (_req, res) {
    res.status(200).json({
        message: 'Hello World!',
    });
});
exports.default = router;
