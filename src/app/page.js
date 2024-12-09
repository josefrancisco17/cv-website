import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
        <Image src="/profile.png" alt="Logo" width={100} height={100} className="rounded-full mb-10" />
        <h1 className="text-6xl font-extrabold">José Francisco</h1>
        <h3>Student at Instituto Superior de Engenharia do Porto</h3>
        <p>Aspiring Software Engineer / DevSecOps Engineer</p>
        <div className="flex flex-row gap-x-4">
            <a href="https://github.com/josefrancisco17"><Image src="/github.svg" alt="Github" width={30} height={30} className="rounded-full" /></a>
            <a href="https://www.linkedin.com/in/josefrancisco17/">LinkedIn</a>
            <a href="mailto:josefrancisco17@gmail.com">Email</a>
        </div>
    </div>
  );
}
