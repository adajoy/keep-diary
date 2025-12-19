import { createFileRoute, useRouter } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if user is already logged in
    const userId = localStorage.getItem("userId");
    if (userId) {
      router.navigate({ to: "/diaries" });
    }
  }, [router]);

  // Don't render the form if we're redirecting
  if (!isClient) {
    return null;
  }

  // Check again in case userId was set
  const userId = localStorage.getItem("userId");
  if (userId) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
