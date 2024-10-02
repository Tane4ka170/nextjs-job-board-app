import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between mx-auto items-center">
        <Link href="/" className="font-bold text-xl">
          Job-finder
        </Link>
        <nav className="flex gap-2 *:p-2 *:px-4 *:rounded-md">
          <Link href={"/login"} className="bg-neutral-200">
            Login
          </Link>
          <Link href={"/new-listing"} className=" bg-stone-600 text-white">
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
