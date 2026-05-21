function Footer() {
  return (
    <footer className="bg-pink-400 h-15 flex items-center justify-between px-2.5 text-xl">
      <span>{new Date().getFullYear()}</span>
      <span>&copy; Jessica Franke</span>
    </footer>
  );
}

export default Footer;
