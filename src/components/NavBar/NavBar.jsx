import { NavLink } from "react-router-dom";
import ModeToggle from "../ModeToggle/ModeToggle";
import Logout from "../Logout/Logout";

const NavBar = () => {
    return (
        <nav className="bg-muted p-8 flex justify-between items-center w-[100vw] text-[hsl(var(--text))] relative">
            <div className="flex-1">
                <img src="/images/logo-no-bg.png" alt="logo AQ" className="h-20 w-20" />
            </div>
            <div className="flex justify-center items-center gap-x-4">
                <NavLink
                    to={"/auth/home"}
                    className={({ isActive }) =>
                        isActive ? "capitalize text-primary" : "capitalize"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={"/auth/about"}
                    className={({ isActive }) =>
                        isActive ? "capitalize text-primary" : "capitalize"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to={"/auth/contact"}
                    className={({ isActive }) =>
                        isActive ? "capitalize text-primary" : "capitalize"
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to={"/auth/apidoc"}
                    className={({ isActive }) => {
                        return `capitalize w-full ${isActive ? "text-primary" : ""}`;
                    }}
                >
                    APIDoc
                </NavLink>
            </div>
            <div className="flex-1 flex justify-end gap-2">
                <ModeToggle />
                <Logout/>
            </div>
        </nav>
    );
};

export default NavBar;
