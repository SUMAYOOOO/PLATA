"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("./globals.css");
const link_1 = require("next/link");
exports.metadata = { title: 'SUMAYÕ' };
function RootLayout({ children }) {
    return (<html lang="es">
      <body>
        <header className="bg-white shadow p-4">
          <div className="container mx-auto flex items-center justify-between">
            <link_1.default href="/"><img src="/assets/logo.svg" alt="logo" width="140"/></link_1.default>
            <nav className="space-x-4">
              <link_1.default href="/courses">Cursos</link_1.default>
              <link_1.default href="/dashboard">Dashboard</link_1.default>
              <link_1.default href="/login" className="text-purple-600">Iniciar sesión</link_1.default>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>);
}
//# sourceMappingURL=layout.js.map