"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
const private_controller_1 = require("../controllers/private.controller");
router.get('/special', passport_1.default.authenticate('jwt', { session: false }), private_controller_1.special);
exports.default = router;
