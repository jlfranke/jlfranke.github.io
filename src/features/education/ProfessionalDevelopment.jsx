import reactCert from "../../assets/certs/The_Ultimate_React_course_2025_Franke_Jessica.pdf";

function ProfessionalDevelopment() {
  return (
    <div className="text-md">
      <h1 className="text-pink-600 font-bold text-3xl mb-2.5">
        Professional Development
      </h1>
      <p className="font-bold">
        The Ultimate React Course 2025: React, Next.js, Redux & More by Jonas
        Schmedtmann &mdash; Udemy
      </p>
      <p>
        <b>Completed:</b> June 2026
      </p>
      <p>
        <b>Key Skills:</b> React (V18 / V19), React Router, Redux, React Hooks,
        Context API, React Query / Tanstack Query, Tailwind and Next.js
      </p>
      <p>
        <b>Practical Application:</b> Built 10 hands-on projects including
        applications supported with Supabase and deployed with Netlify and
        Vercel.
      </p>
      <a
        href={reactCert}
        target="_blank"
        className="text-pink-500 transition-colors hover:text-pink-700 hover:underline"
      >
        View Certificate
      </a>
    </div>
  );
}

export default ProfessionalDevelopment;
