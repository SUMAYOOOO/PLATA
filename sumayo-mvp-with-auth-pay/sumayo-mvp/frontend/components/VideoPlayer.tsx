export default function VideoPlayer({ src }: { src: string }) {
  return <video controls style={{ width: '100%' }} src={src} />;
}
