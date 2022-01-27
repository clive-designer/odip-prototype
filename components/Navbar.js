import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Navbar list</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/result-accept"><a>Result accept</a></Link>
            <Link href="/"><a>Mortgage dashboard</a></Link>
        </nav>
    );
}

export default Navbar;