import Link from 'next/link';
export default async function Dashboard() {
  // In a real app you'd fetch user/courses from the backend
  const courses = [{ id: 'c1', title: 'Introducción a SUMAYÕ', slug: 'introduccion-sumayo' }];
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {courses.map(c => (
          <Link key={c.id} href={`/courses/${c.slug}`} className="p-4 border rounded">{c.title}</Link>
        ))}
      </div>
    </main>
  );
}
