import { NavbarProps } from "sanity";
import Link from "next/link";

// customize the Navbar
export default function StudioNavbar(props: NavbarProps) {
  return (
    <div>
      <div className={"py-4 text-yellow-400 mx-2"}>
        <Link href={"/"}>Back To the Homepage</Link>
      </div>
      {props.renderDefault({ ...props })}
    </div>
  );
}
