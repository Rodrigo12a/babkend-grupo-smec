"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/dashboard.ts
const express_1 = require("express");
const dashboard_1 = require("../controllers/dashboard");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
// Ruta: GET /api/auth/Dashboard
router.get('/user', validate_token_1.default, dashboard_1.getDashboard);
exports.default = router;
