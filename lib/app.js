"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var helloWordRouter_1 = require("./routes/helloWordRouter");
var app = express();
app.use('/', helloWordRouter_1.default);
exports.default = app;
