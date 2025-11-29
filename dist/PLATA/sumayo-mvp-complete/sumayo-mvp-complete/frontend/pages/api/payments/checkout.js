"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const axios_1 = require("axios");
async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const r = await axios_1.default.post(process.env.BACKEND_URL + '/api/payments/checkout', req.body);
            res.status(r.status).json(r.data);
        }
        catch (e) {
            res.status(500).json({ error: 'backend error' });
        }
    }
    else
        res.status(405).end();
}
//# sourceMappingURL=checkout.js.map