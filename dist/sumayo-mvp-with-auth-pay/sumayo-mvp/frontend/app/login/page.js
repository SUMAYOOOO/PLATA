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
    const handleLogin = async () => {
        try {
            const res = await axios_1.default.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            router.push('/dashboard');
        }
        catch (e) {
            alert('Login failed (demo)');
        }
    };
    return (<div className="flex justify-center items-center h-screen bg-purple-50">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <input className="w-full p-2 border mb-3 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input className="w-full p-2 border mb-3 rounded" type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleLogin} className="w-full py-2 rounded bg-purple-600 text-white">Entrar</button>
      </div>
    </div>);
}
//# sourceMappingURL=page.js.map