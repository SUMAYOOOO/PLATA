"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CoursePage;
const link_1 = require("next/link");
function CoursePage({ params }) {
    const slug = params.slug;
    const topics = [{ id: 't1', title: 'Tema 1 - Fundamentos', isFree: true }, { id: 't2', title: 'Tema 2 - Premium', isFree: false }];
    return (<main className="p-8">
      <h1 className="text-2xl font-bold">Curso: {slug}</h1>
      <div className="mt-4 space-y-2">
        {topics.map(t => (<div key={t.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{t.title}</div>
              <div className="text-sm text-gray-500">{t.isFree ? 'Gratis' : 'Pago'}</div>
            </div>
            <link_1.default href={`/courses/${slug}/topics/${t.id}`} className="text-purple-600">Ver</link_1.default>
          </div>))}
      </div>
    </main>);
}
//# sourceMappingURL=page.js.map