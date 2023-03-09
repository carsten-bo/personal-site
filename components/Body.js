const Body = ({ children }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="my-auto max-w-2xl lg:mx-0">
          {children}
        </div>

      </div>
    </div>
  );
}


export default Body;