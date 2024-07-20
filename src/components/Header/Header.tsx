import { Link} from "react-router-dom";

function Header() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <div className="flex-2 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  className="mr-3 h-12 w-55"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex-1 text-center relative">
              {/* Set the parent div as relative */}
              <input
                type="text"
                className="w-[913px] p-2 pl-10 border rounded" // Add padding-left for the icon
                placeholder="Search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="absolute left-12 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
            <div className="flex-2 text-right">
              <button className="px-4 py-2 border hover:text-white rounded hover:bg-blue-600 w-40">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
