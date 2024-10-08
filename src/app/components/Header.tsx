import { getSignInUrl, signOut, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header() {
  // Retrieves the user from the session or returns `null` if no user is signed in
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();

  return (
    <header>
      <div className="container flex justify-between mx-auto items-center my-4">
        <Link href="/" className="font-bold text-xl">
          Job-finder
        </Link>
        <nav className="flex gap-2 ">
          {!user && (
            <Link
              href={signInUrl}
              className="rounded-md bg-neutral-200 py-1 px-2 sm:py-2 sm:px-4"
            >
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="rounded-md bg-neutral-200 py-1 px-2 sm:py-2 sm:px-4"
              >
                Logout
              </button>
            </form>
          )}
          <Link
            href={"/new-listing"}
            className="rounded-md py-1 px-2 sm:py-2 sm:px-4  bg-stone-600 text-white"
          >
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
