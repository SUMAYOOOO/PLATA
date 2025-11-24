import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Proxy to backend
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001/api/auth/login';
    try {
      const r = await axios.post(backendUrl, req.body);
      res.status(r.status).json(r.data);
    } catch (e: any) {
      res.status(500).json({ error: 'backend error', details: e.message });
    }
  } else {
    res.status(405).end();
  }
}
