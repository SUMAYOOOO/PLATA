"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const link_1 = require("next/link");
function Home() {
    return (<div>
      <h1 className="text-3xl font-bold">SUMAYÕ</h1>
      <p className="mt-4">Plataforma educativa MVP</p>
      <link_1.default href="/courses" className="text-purple-600">Ver cursos</link_1.default>
    </div>);
}
//# sourceMappingURL=page.js.map