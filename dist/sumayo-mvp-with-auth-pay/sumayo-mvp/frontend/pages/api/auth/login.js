"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const axios_1 = require("axios");
async function handler(req, res) {
    if (req.method === 'POST') {
        const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001/api/auth/login';
        try {
            const r = await axios_1.default.post(backendUrl, req.body);
            res.status(r.status).json(r.data);
        }
        catch (e) {
            res.status(500).json({ error: 'backend error', details: e.message });
        }
    }
    else {
        res.status(405).end();
    }
}
//# sourceMappingURL=login.js.map