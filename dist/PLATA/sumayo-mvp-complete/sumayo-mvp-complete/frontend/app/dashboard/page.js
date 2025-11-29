"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
const link_1 = require("next/link");
async function Dashboard() {
    const courses = [{ id: 'c1', title: 'Introducción a SUMAYÕ', slug: 'introduccion-sumayo' }];
    return (<div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4 space-y-2">
        {courses.map(c => <link_1.default key={c.id} href={`/courses/${c.slug}`} className="block p-4 border rounded">{c.title}</link_1.default>)}
      </div>
    </div>);
}
//# sourceMappingURL=page.js.map