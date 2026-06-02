function WildOasisHotel() {
  return (
    <div>
      <h1 className="font-bold text-lg">The Wild Oasis (Hotel Access)</h1>
      <div className="flex gap-10">
        <a
          href="https://the-wild-oasis-jf.netlify.app/login"
          target="_blank"
          className="text-pink-500 transition-colors hover:text-pink-700 hover:underline"
        >
          View Website
        </a>

        <a
          href="https://github.com/jlfranke/the-wild-oasis"
          target="_blank"
          className="text-pink-500 transition-colors hover:text-pink-700 hover:underline"
        >
          View Repository
        </a>
      </div>
      <p>
        Main project in Jonas Schmedtmann's Ultimate React course. Built with
        React Query and Supabase. (Note: credentials needed to access site.
        Creds are created by existing users.)
      </p>
    </div>
  );
}

export default WildOasisHotel;
