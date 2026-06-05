function Wordle() {
  return (
    <div>
      <h1 className="font-bold text-lg">Wordle</h1>
      <div className="flex gap-10">
        <a
          href="https://jlfranke.github.io/wordle/"
          target="_blank"
          className="text-pink-500 transition-colors hover:text-pink-700 hover:underline"
        >
          View Game
        </a>

        <a
          href="https://github.com/jlfranke/wordle"
          target="_blank"
          className="text-pink-500 transition-colors hover:text-pink-700 hover:underline"
        >
          View Repository
        </a>
      </div>
      <p>Wordle game built using React and Tailwind</p>
    </div>
  );
}

export default Wordle;
