import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      This is the home page
      <Image
        src="/assets/images/logo.svg"
        alt="Logo"
        width="200"
        height="200"
      />
    </main>
  );
}
