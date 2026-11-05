export default function PageHeader({ title, text }: { title: string; text: string }) {
  return (
    <header className="mb-8 max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">{title}</h1>
      <p className="mt-2 text-sm leading-6 text-stone-500">{text}</p>
    </header>
  );
}
