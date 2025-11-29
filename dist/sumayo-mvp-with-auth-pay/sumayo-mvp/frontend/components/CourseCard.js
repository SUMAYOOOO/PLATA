"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CourseCard;
const link_1 = require("next/link");
function CourseCard({ course }) {
    return (<link_1.default href={`/courses/${course.slug}`} className="p-4 border rounded block">
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.description}</p>
    </link_1.default>);
}
//# sourceMappingURL=CourseCard.js.map