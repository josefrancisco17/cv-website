import Image from "next/image";

export default function Home() {
    return (
        <div className="h-min-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">José Francisco</h1>
            <h3 className="text-lg md:text-xl text-gray-300">Student at Instituto Superior de Engenharia do Porto</h3>
            <p className="text-sm md:text-lg text-gray-400">Aspiring Software Engineer / DevSecOps Engineer</p>
            <div className="flex flex-row gap-6 mt-4">
                <a href="https://github.com/josefrancisco17" aria-label="Github" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/github.svg"
                        alt="Github"
                        width={30}
                        height={30}
                        className="icon transition-transform transform hover:scale-110"
                    />
                </a>
                <a href="https://www.linkedin.com/in/josefrancisco17/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/linkedin.svg"
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="icon transition-transform transform hover:scale-110"
                    />
                </a>
                <a href="mailto:josefrancisco17@gmail.com" aria-label="Email">
                    <Image
                        src="/icons/mail.svg"
                        alt="Email"
                        width={40}
                        height={40}
                        className="icon transition-transform transform hover:scale-110"
                    />
                </a>
            </div>
        </div>
    );
}
