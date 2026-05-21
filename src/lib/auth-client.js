import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://medi-queue-tutor-booking-system.vercel.app"
})


export const { signIn, signUp, useSession } = createAuthClient()