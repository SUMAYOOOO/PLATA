import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">SUMAYÕ</Link>
        <div className="space-x-4">
          <Link href="/courses" className="text-gray-700">Cursos</Link>
          <Link href="/dashboard" className="text-gray-700">Dashboard</Link>
          <Link href="/login" className="text-purple-600 font-medium">Iniciar sesión</Link>
        </div>
      </div>
    </nav>
  );
}
