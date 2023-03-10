const Body = ({ children }) => {
  return (
    <div className="flex py-1 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          {children}
        </div>

      </div>
    </div>
  );
}


export default Body;
