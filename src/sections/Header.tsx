import {ProjectsSection} from "@/sections/Projects";

export const Header = () => {
    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a href="#hero" className="nav-item">Home</a>
                <a href="#projects" className="nav-item">Projects</a>
                <a href="#about" className="nav-item">About</a>
                <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
                    Contact
                </a>
            </nav>
        </div>
    )

    // <div className="flex justify-center items-center fixed top-3 w-full z-10">
    //     <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
    //         <a href="#" className="nav-item">Home</a>
    //         <a href="/ProjectsSection" className="nav-item">Projects</a>
    //         <a href="#" className="nav-item">About</a>
    //         <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
    //             Contact
    //         </a>
    //     </nav>
    // </div>
};
