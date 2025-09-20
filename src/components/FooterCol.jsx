const FooterCol = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className=" font-display font-normal text-2xl uppercase ">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default FooterCol;
