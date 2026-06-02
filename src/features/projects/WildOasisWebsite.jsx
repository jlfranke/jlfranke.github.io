function WildOasisWebsite() {
  return (
    <div>
      <h1 className="font-bold text-lg">The Wild Oasis (Guest Access)</h1>
      <div className="flex gap-10">
        <a
          href="https://the-wild-oasis-guest-website.vercel.app/"
          target="_blank"
          className="text-pink-500 transition-colors hover:text-pink-700 hover:underline"
        >
          View Website
        </a>

        <a
          href="https://github.com/jlfranke/the-wild-oasis-guest-website"
          target="_blank"
          className="text-pink-500 transition-colors hover:text-pink-700 hover:underline"
        >
          View Repository
        </a>
      </div>
      <p>
        Final project in Jonas Schmedtmann's Ultimate React course. Built with
        Next.js, Tailwind and Supabase.
      </p>
    </div>
  );
}

export default WildOasisWebsite;
