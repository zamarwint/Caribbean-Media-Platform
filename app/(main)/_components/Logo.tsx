import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/CMP.svg"
      alt="Logo"
      width={200}
      height={200}
      className="object-cover"
    />
  );
}
