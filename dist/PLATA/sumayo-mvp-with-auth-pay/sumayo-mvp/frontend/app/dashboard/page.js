"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
const link_1 = require("next/link");
async function Dashboard() {
    const courses = [{ id: 'c1', title: 'Introducción a SUMAYÕ', slug: 'introduccion-sumayo' }];
    return (<main className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {courses.map(c => (<link_1.default key={c.id} href={`/courses/${c.slug}`} className="p-4 border rounded">{c.title}</link_1.default>))}
      </div>
    </main>);
}
//# sourceMappingURL=page.js.map