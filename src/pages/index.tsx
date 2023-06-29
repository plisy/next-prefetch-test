import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href={"/joke"}>Dad Joke</Link>
    </nav>
  );
}

export default function Index() {
  return (
    <main>
      <Navbar />
      <div>Index</div>
    </main>
  );
}
