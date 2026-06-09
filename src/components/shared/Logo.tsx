import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo-white.png"
        alt="VICA Logo"
        width={128}
        height={128}
        priority
        className="rounded"
      />
    </Link>
  );
}
