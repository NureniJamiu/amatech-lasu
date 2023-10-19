import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-green-900 h-screen flex items-center justify-center">
            <SignIn />
        </div>
    );
}