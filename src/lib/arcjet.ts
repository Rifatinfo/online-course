import  arcjet, { detectBot, fixedWindow, sensitiveInfo, shield, slidingWindow, protectSignup } from "@arcjet/next";
import { env } from "./env";

export {
    detectBot, fixedWindow, sensitiveInfo, shield, slidingWindow, protectSignup
}

export default arcjet({
    key : env.ARCJET_KEY,
    characteristics : ["fingerprint"],
    
    rules : [
        shield({
            mode : "LIVE"
        })
    ]
})