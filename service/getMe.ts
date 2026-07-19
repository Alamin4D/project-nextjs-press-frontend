"use server"

import { cookies } from "next/headers"

export const getMe = async () => {
    const cookieStored = await cookies();

    const accessToken = cookieStored.get("accessToken")?.value

    if (!accessToken) {
        return {
            success: false,
            message: "User Not Logged In!"
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
        headers: {
            Cookie: `accessToken=${accessToken}`
        },

        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24, // 1day
            tags: ["my-profile"]
        }

    });

    const result = await res.json()
    console.log(result)
    return result
}