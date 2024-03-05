import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-accent2">
            <div className="container mx-auto py-5 text-white flex items-center px-2 md:px-0">
                <div className="flex items-center gap-4">
                    <Image src="/code.svg" alt="logo" width={48} height={48} />
                    <h1 className="font-medium text-lg">Mohamad Sultan</h1>
                </div>
                <nav className="mx-auto hidden md:block">
                    <ul className="flex items-center gap-4">
                        <li><a href="#work">My Work</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}