const Container = ({ children, className, id }) => {
  return (
    <div className={`max-w-300mx-auto px-5 ${className}`} id={id || ""}>
      {children}
    </div>
  );
};

export default Container;
