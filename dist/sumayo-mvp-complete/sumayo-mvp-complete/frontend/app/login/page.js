'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginPage;
const react_1 = require("react");
const axios_1 = require("axios");
const navigation_1 = require("next/navigation");
function LoginPage() {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const router = (0, navigation_1.useRouter)();
    const handle = async () => {
        try {
            const res = await axios_1.default.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.accessToken);
            router.push('/dashboard');
        }
        catch (e) {
            alert('Login failed');
        }
    };
    return (<div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Iniciar sesión</h2>
      <input className="w-full p-2 border mt-4" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <input className="w-full p-2 border mt-2" placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button onClick={handle} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Entrar</button>
    </div>);
}
//# sourceMappingURL=page.js.map