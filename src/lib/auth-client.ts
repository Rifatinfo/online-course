'use client'
import { createAuthClient } from "better-auth/react"
import { emailOTPClient } from "better-auth/client/plugins"
import { oneTap } from "better-auth/plugins"; 

export const authClient = createAuthClient({
     plugins: [
        emailOTPClient(),
        oneTap(),  
    ]
})

