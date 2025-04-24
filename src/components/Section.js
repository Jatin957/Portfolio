
import React from "react";

const Section = ({ title, children }) => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
