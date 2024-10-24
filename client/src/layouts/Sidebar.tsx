import { NavLink, useNavigate } from 'react-router-dom';
import { BarChart2, Save, MessageSquareText, Pencil, BookMarked, Settings, LogOut } from 'lucide-react';
import Logo from "/logo.svg";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <>
            <div className="w-64 h-screen bg-yellow-700 text-slate-200 p-6 flex flex-col justify-between">
                <nav>
                    <div>
                        <div className="flex items-center gap-2 mb-10">
                            <img src={Logo} className='h-8 w-8' />
                            <h1 className='text-3xl font-semibold'>
                                <NavLink to="/dashboard">
                                    edutrack
                                </NavLink>
                            </h1>
                        </div>

                        <ul className="space-y-2">
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) => isActive ? "flex items-center space-x-2 p-2 rounded bg-yellow-800" : "flex items-center space-x-2 p-2 rounded hover:bg-yellow-800"}>
                                    <BarChart2 size={20} />
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/mycourses"
                                    className={({ isActive }) => isActive ? "flex items-center space-x-2 p-2 rounded bg-yellow-800" : "flex items-center space-x-2 p-2 rounded hover:bg-yellow-800"}>
                                    <BookMarked size={20} />
                                    <span>My Courses</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/assignments"
                                    className={({ isActive }) => isActive ? "flex items-center space-x-2 p-2 rounded bg-yellow-800" : "flex items-center space-x-2 p-2 rounded hover:bg-yellow-800"}>
                                    <Pencil size={20} />
                                    <span>Assignments</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/saved_courses"
                                    className={({ isActive }) => isActive ? "flex items-center space-x-2 p-2 rounded bg-yellow-800" : "flex items-center space-x-2 p-2 rounded hover:bg-yellow-800"}>
                                    <Save size={20} />
                                    <span>Saved Courses</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/messages"
                                    className={({ isActive }) => isActive ? "flex items-center space-x-2 p-2 rounded bg-yellow-800" : "flex items-center space-x-2 p-2 rounded hover:bg-yellow-800"}>
                                    <MessageSquareText size={20} />
                                    <span>Messages</span>
                                </NavLink>
                            </li>
                        </ul>

                        <hr className='my-4 border-slate-300' />

                        <ul className="space-y-2">
                            <li>
                                <NavLink
                                    to="/settings"
                                    className={({ isActive }) => isActive ? "flex items-center space-x-2 p-2 rounded bg-yellow-800" : "flex items-center space-x-2 p-2 rounded hover:bg-yellow-800"}>
                                    <Settings size={20} />
                                    <span>Settings</span>
                                </NavLink>
                            </li>
                            {/* Logout Button */}
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center space-x-2 p-2 rounded hover:bg-yellow-800 w-full text-left">
                                    <LogOut size={20} />
                                    <span>Logout</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Sidebar