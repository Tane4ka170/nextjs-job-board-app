import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute top-2 right-4">
          <FontAwesomeIcon icon={faHeart} className="size-12" />
        </div>
        <div className="flex gap-4 grow">
          <div className="content-center">
            <img
              src="https://freepnglogo.com/images/all_img/1717224836starbucks-logo-transparent.png"
              alt="logo"
              className="size-12"
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div className="text-neutral-500 text-sm">Starbucks</div>
              <div className="font-bold mb-1 text-lg">Barista</div>
              <div className="text-neutral-400 text-sm">
                On-site &middot; Evesham, UK &middot; Full-time, part-time
              </div>
            </div>
            <div className="content-end text-neutral-500 text-xs">
              2 weeks ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
