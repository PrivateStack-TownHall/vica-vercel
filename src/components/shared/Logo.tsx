import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo-white.png"
        alt="Logo"
        width={100}
        height={100}
        style={{
          width: "auto",
          height: "40px",
        }}
        loading="eager"
      />
    </Link>
  );
}
