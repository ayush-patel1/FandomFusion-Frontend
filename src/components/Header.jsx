import { useState } from "react";
import { FaBars, FaUserCircle, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/auth");
  };

  return (
    <header className="bg-blue-600 p-4 text-white flex items-center relative">
  
      <div className="md:hidden flex-none">
        <button aria-label="Toggle sidebar" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      </div>

 
      <h1 className="text-2xl font-bold text-center flex-grow">
        Fandom Fusion
      </h1>

      {/* Profile Dropdown */}
      <div className="relative flex-none">
        <button
          onClick={toggleDropdown}
          aria-label="Open profile menu"
          className="flex items-center space-x-2"
        >
          <FaUserCircle size={24} />
        </button>

    
        {isDropdownOpen && (
          <div
            className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg z-50"
          >
            <ul>
              <li className="flex items-center px-4 py-4 hover:bg-blue-500 hover:text-white cursor-pointer">
                <FaUserAlt className="mr-4" size={16} />
                Profile
              </li>
           
              <li
                className="flex items-center px-4 py-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="mr-4" size={16} />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
