import { betterAuth } from "better-auth";
// import { prismaAdapter } from "better-auth/adapters/prisma";
import { env } from "./env";
import { emailOTP } from "better-auth/plugins"
import { resend } from "./resend";

export const auth = betterAuth({
  // database: prismaAdapter(prisma, {
  //   provider: "postgresql",
  // }),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret:  env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: env.GITHUB_CLIENT_ID as string,
      clientSecret: env.GITHUB_CLIENT_SECRET as string
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        await resend.emails.send({
          from: 'Online <onboarding@resend.dev>',
          to: [email],
          subject: 'Verify you email',
          html: `<p>Your OTP is <strong>${otp}</strong>`,
        });
      },
    })
  ]
});