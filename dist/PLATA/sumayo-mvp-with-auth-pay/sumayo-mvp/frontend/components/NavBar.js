"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavBar;
const link_1 = require("next/link");
function NavBar() {
    return (<nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <link_1.default href="/" className="font-bold text-xl">SUMAYÕ</link_1.default>
        <div className="space-x-4">
          <link_1.default href="/courses" className="text-gray-700">Cursos</link_1.default>
          <link_1.default href="/dashboard" className="text-gray-700">Dashboard</link_1.default>
          <link_1.default href="/login" className="text-purple-600 font-medium">Iniciar sesión</link_1.default>
        </div>
      </div>
    </nav>);
}
//# sourceMappingURL=NavBar.js.map