import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Navbar list</h1>
            </div>
            <Link><a>Result accept</a></Link>
            <Link><a>Access dashboard</a></Link>
            <Link><a>Mortgage dashboard</a></Link>
        </nav>
    );
}

export default Navbar;