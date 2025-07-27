export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center p-8 w-lg my-20 mx-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Tailwind Elements Demo</h1>
        <ol className="list-decimal text-center sm:text-left">
          <li className="mb-2">
            <a href="/plain.html" className="text-blue-600 underline visited:text-indigo-600">Tailwind Elements with plain HTML.</a>
          </li>
          <li className="mb-2">
            <a href="/server_component" className="text-blue-600 underline visited:text-indigo-600">Tailwind Elements with server components.</a>
          </li>
          <li className="mb-2">
            <a href="/use_effect" className="text-blue-600 underline visited:text-indigo-600">Tailwind Elements with useEffect-loading.</a>
          </li>
          <li>
            <a href="/headless_ui" className="text-blue-600 underline visited:text-indigo-600">Headless UI.</a>
          </li>
        </ol>

      </main>
    </div>
  );
}
