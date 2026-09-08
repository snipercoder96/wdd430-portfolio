import Image from "next/image";

export default function MainBackground() {
  return (
    <div className="main-background">
        <Image src="/file.svg" alt="Background" width={300} height={200} />
        <div className="para-format">
          <h1>Tailwind CSS practice</h1>
          <p>Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.</p>
        </div>
    </div>
  );
}
  