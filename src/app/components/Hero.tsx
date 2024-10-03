export default function Hero() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold text-center">
        Discover your ideal <br /> career
      </h1>
      <p className="text-center text-neutral-600 mt-2">
        Find your dream job. Your ideal career is waiting for you!
      </p>
      <form className="flex gap-2 mt-4 max-w-xl mx-auto">
        <input
          type="search"
          className="border w-full py-2 px-3 rounded-md border-neutral-400"
          placeholder="Search"
        />
        <button className="bg-stone-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
