
// export const hello="meow";
const Search = () => {
  return (
    <div className="flex mt-2 justify-end px-3">
        <input className="border border-s border-slate-600 rounded-md p-1 mr-2 w-64 focus:outline-red-500 " type="text" placeholder="Search for Restaurants and food" />
        <button className=" border-2 border-red-500 p-2 rounded-lg text-md">Search</button>
    </div>
  );
};

export default Search;
