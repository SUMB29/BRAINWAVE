

const Section = ({
  className,
  id,
  crosses,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative justify-items-center place-items-center border-neutral-700
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

    </div>
  );
};

export default Section;