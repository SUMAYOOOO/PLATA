import './globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'SUMAYÕ - MVP',
  description: 'Plataforma educativa'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <div className="container mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
