"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CoursesPage;
const link_1 = require("next/link");
async function CoursesPage() {
    const courses = [{ id: 'c1', title: 'Introducción a SUMAYÕ', slug: 'introduccion-sumayo' }];
    return (<main className="p-8">
      <h1 className="text-2xl font-bold">Cursos</h1>
      <div className="mt-4 space-y-3">
        {courses.map(c => <link_1.default key={c.id} href={`/courses/${c.slug}`} className="block p-4 border rounded">{c.title}</link_1.default>)}
      </div>
    </main>);
}
//# sourceMappingURL=page.js.map