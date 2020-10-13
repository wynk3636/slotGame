"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deps_1 = require("./deps");
var PIXI = require("pixi.js");
deps_1.default(1, 2);
window.onload = function () {
    var app = new PIXI.Application({ width: 400, height: 200 });
    document.body.append(app.view);
    var text = new PIXI.Text("Hello");
    text.style.fill = "#ffffff";
    app.stage.addChild(text);
};
