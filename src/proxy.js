import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const currentPath = request.nextUrl.pathname;
    const searchParams = request.nextUrl.searchParams;
    const redirectPath = searchParams.get("redirect") || "/";

    if (!session && currentPath !== "/login") {
        return NextResponse.redirect(
            new URL(`/login?redirect=${encodeURIComponent(currentPath)}`, request.url)
        );
    }

    if (session && currentPath === "/login") {
        return NextResponse.redirect(new URL(redirectPath, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/login",
        "/tutors/:id",
        "/add-tutors",
        "/my-tutors",
        "/my-booked-sessions",
    ],
};