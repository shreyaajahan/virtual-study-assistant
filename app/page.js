import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div><h2>Hello All This is virtual study Assisstant</h2>
    <Button>Subscribe</Button>

    <UserButton/>
    </div>
  );
}
