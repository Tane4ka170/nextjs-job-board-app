import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withAuth } from "@workos-inc/authkit-nextjs";

export default async function NewListingPage() {
  const { user } = await withAuth();
  return (
    <div className="container">
      {!user && <div> You need to be logged in for posting a job</div>}
      {user && (
        <div>
          <form action="">
            <h2 className="text-lg">Create a company</h2>
            <p className="text-neutral-500 text-sm">
              To create a job listing your first need to register a company
            </p>
            <button className="flex gap-2 items-center bg-neutral-200 px-4 py-2 rounded-md">
              Create a company <FontAwesomeIcon className="h-4" icon={faArrowAltCircleRight}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
