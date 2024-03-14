const TableError = () => (
    <div className="flex flex-col mx-12 my-12 text-center items-center justify-center h-full">
    <div className="border border-red-400 bg-red-100 p-8 w-full rounded-lg shadow-lg text-white">
      <h2 className="mb-4 text-slate-900 text-2xl pb-2 font-light">Oops! Something went wrong 😢</h2>
      <p className="text-lg text-slate-600 text-l pb-2 font-thin">Failed to fetch Shortened URLs </p>
    </div>
  </div>
  );

export default TableError;