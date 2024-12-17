"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";

function SignOutLink() {
  const { toast } = useToast();
  return (
    <SignOutButton redirectUrl="/">
      <button
        onClick={() => {
          toast({
            description: "You have been signed out.",
          });
        }}
      >
        Logout
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;
