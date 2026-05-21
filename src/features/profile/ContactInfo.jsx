function ContactInfo() {
  return (
    <div className="text-md">
      <h1 className="text-pink-600 font-bold text-3xl">Contact Info</h1>
      <p className="mb-2.5 flex items-center gap-1.5">
        <span>
          <i class="fa-solid fa-mobile-screen-button"></i>
        </span>
        <span>(956)281-4083</span>
      </p>
      <p className="mb-2.5 flex items-center gap-1.5">
        <span>
          <i class="fa-solid fa-at"></i>
        </span>
        <span>
          <a
            href="mailto:jessicafranke715@gmail.com"
            className="hover:text-pink-600"
          >
            jessicafranke715@gmail.com
          </a>
        </span>
      </p>
      <p className="mb-2.5 flex items-center gap-1.5">
        <span>
          <i class="fa-solid fa-location-pin"></i>
        </span>
        <span>Harlingen, Texas</span>
      </p>
      <p className="mb-2.5 flex items-center gap-1.5">
        <span>
          <i class="fa-brands fa-linkedin"></i>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/jessica-l-franke"
            target="_blank"
            className="hover:text-pink-600"
          >
            www.linkedin.com/in/jessica-l-franke
          </a>
        </span>
      </p>
      <p className="mb-2.5 flex items-center gap-1.5">
        <span>
          <i class="fa-brands fa-github"></i>
        </span>
        <span>
          <a
            href="https://github.com/jlfranke"
            target="_blank"
            className="hover:text-pink-600"
          >
            https://github.com/jlfranke
          </a>
        </span>
      </p>
    </div>
  );
}

export default ContactInfo;
