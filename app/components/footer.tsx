export default function Footer() {
    return (
        <header className="bg-accent">
            <div className="container mx-auto py-5 text-white flex flex-wrap items-center justify-center lg:justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="font-medium text-lg">Mohamad Sultan © {new Date().getFullYear()}</h1>
                </div>
                <nav>
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