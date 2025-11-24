export default function TopicCard({topic}:{topic:any}) {
  return (
    <div className="p-3 border rounded">
      <h4 className="font-medium">{topic.title}</h4>
    </div>
  );
}
