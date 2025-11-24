import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-8">
        <h1 className="text-3xl font-bold">SUMAYÕ - MVP</h1>
        <p className="mt-4">Bienvenido. <Link href='/login' className='text-purple-600'>Iniciar sesión</Link></p>
      </div>
    </main>
  );
}
