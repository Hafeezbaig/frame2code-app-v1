"use client";

import { useAuthContext } from "@/app/provider";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!user?.email) {
            router.push("/"); // Redirect to homepage if not authenticated
        }
    }, [user, router]);

    if (!user?.email) {
        return null; // Prevents rendering while redirecting
    }

    return <>{children}</>;
};

export default ProtectedRoute;
