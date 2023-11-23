import { LogoProps } from "sanity";
import Image from "next/image";
import Link from "next/link";

// extend the logo
export default function StudioLogo(props: LogoProps) {
  return (
    <Link className={"flex items-center space-x-2"} href={"/"}>
      <Image
        className={"rounded-full object-cover"}
        height={50}
        width={50}
        alt={"hello-logo"}
        src={
          "https://images.unsplash.com/photo-1700587085844-b96c27958df2?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </Link>
  );
}
