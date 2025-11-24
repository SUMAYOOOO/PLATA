import Link from 'next/link';
export default function CourseCard({course}:{course:any}) {
  return (
    <Link href={`/courses/${course.slug}`} className="p-4 border rounded block">
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.description}</p>
    </Link>
  );
}
