export default function Navbar() {
  return (
    <div className="w-full px-5 py-2 absolute text-lg">
      <div className="flex justify-between items-center">
        <div>
          <a href="/">
            <p>Logo</p>
          </a>
        </div>
        <div className="flex gap-10 text-black items-center justify-center">
          <a
            href="/"
            className="border-2 border-gray-400 px-2 bg-gray-300 rounded-lg hover:bg-gray-100"
          >
            Customers
          </a>
          <a
            href="/Stats"
            className="border-2 border-gray-400 px-2 bg-gray-300 rounded-lg hover:bg-gray-100"
          >
            Statistics
          </a>
          <a
            href="/login"
            className="border-2 border-gray-400 px-2 bg-gray-300 rounded-lg hover:bg-gray-100"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
