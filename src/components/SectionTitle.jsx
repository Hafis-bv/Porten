const SectionTitle = ({ title, underline = false, className }) => {
  return (
    <h1
      className={`uppercase relative font-normal text-4xl font-display ${
        underline && "sm:text-before"
      }  text-white ${className}`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
