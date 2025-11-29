"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("./globals.css");
const NavBar_1 = require("../components/NavBar");
exports.metadata = {
    title: 'SUMAYÕ - MVP',
    description: 'Plataforma educativa'
};
function RootLayout({ children }) {
    return (<html lang="es">
      <body>
        <NavBar_1.default />
        <div className="container mx-auto p-6">{children}</div>
      </body>
    </html>);
}
//# sourceMappingURL=layout.js.map