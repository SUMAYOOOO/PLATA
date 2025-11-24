'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      // store token in localStorage (demo)
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (e) {
      alert('Login failed (demo)');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-50">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <input className="w-full p-2 border mb-3 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 border mb-3 rounded" type="password" placeholder="Contraseña" value={password} onChange={e=>setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full py-2 rounded bg-purple-600 text-white">Entrar</button>
      </div>
    </div>
  );
}
