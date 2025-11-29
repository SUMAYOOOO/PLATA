"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const link_1 = require("next/link");
function Home() {
    return (<main className="min-h-screen flex items-center justify-center">
      <div className="p-8">
        <h1 className="text-3xl font-bold">SUMAYÕ - MVP</h1>
        <p className="mt-4">Bienvenido. <link_1.default href='/login' className='text-purple-600'>Iniciar sesión</link_1.default></p>
      </div>
    </main>);
}
//# sourceMappingURL=page.js.map