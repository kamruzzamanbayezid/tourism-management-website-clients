import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import UseTheme from "../../Hooks/UseTheme";

const Menubar = () => {

      const { handleToggleTheme } = UseTheme();
      const [menu, setMenu] = useState(false);
      const { user, logOut } = UseAuth();

      const handleLOgOut = () => {
            logOut()
                  .then(() => {
                        toast.success('SUccessfully Logged Out')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }


      const handleMenu = () => {
            setMenu(!menu)
      }

      return (
            <div className="bg-[#4C4C4C] w-full rounded mt-2 mb-8">
                  <div className="max-w-7xl mx-auto p-2">
                        <div className="flex justify-end items-center gap-2">
                              <div className="flex items-center gap-2">
                                    {/* Toggler */}
                                    <input onChange={handleToggleTheme} type="checkbox" className="toggle toggle-warning" />
                                    <h3 onClick={handleMenu} className="cursor-pointer flex justify-end items-center text-[#FFFFFF] bg-black w-fit px-4 py-1 rounded-lg gap-2 text-xl text-end"><span>
                                          {menu ? <HiOutlineX></HiOutlineX>
                                                :
                                                <HiMenu></HiMenu>}
                                    </span>Menu</h3>

                              </div>


                              {
                                    user && <div className="dropdown dropdown-end">

                                          <div tabIndex={0} className="w-12 rounded-full">
                                                <img src={user.photoURL} className="rounded-full" />
                                          </div>
                                          <ul tabIndex={0} className="dropdown-content z-[1] p-3 shadow bg-base-100 rounded-box w-fit">
                                                <li><a className="text-blue mb-2">{user.displayName}</a></li>
                                                <li><a className="text-blue">{user.email}</a></li>
                                          </ul>
                                    </div>
                              }

                        </div>
                        <ul className={`${menu ? 'flex flex-col' : 'hidden'} text-[#FFF] font-medium mt-3`}>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/' ><li className="py-3 px-8 text-sm h-full ">HOME</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/allTouristSpots' ><li className="py-3 px-8 text-sm h-full">All Tourists Spot</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/addTouristSpot' ><li className="py-3 px-8 text-sm h-full">Add Tourists Spot</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/myList' ><li className="py-3 px-8 text-sm h-full">My List</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/about' ><li className="py-3 px-8 text-sm h-full">About</li></NavLink>
                              {
                                    user ?
                                          <button onClick={handleLOgOut} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium ml-8 w-40 inline-block bg-[#00095E] text-white mt-3">
                                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 common-bg group-hover:h-full opacity-90"></span>
                                                <span className="relative group-hover:text-white">Log Out</span>
                                          </button>
                                          :
                                          <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/login' ><li className="py-3 px-8 text-sm h-full">Login</li></NavLink>
                              }

                              {
                                    !user?.email && <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/register' ><li className="py-3 px-8 text-sm h-full">Register</li></NavLink>
                              }

                        </ul>
                  </div>
            </div>
      );
};

export default Menubar;