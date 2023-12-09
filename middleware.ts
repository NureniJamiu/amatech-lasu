import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
      publicRoutes: [
            "/", 
            "/blogs", 
            "/blogs/(.*)",
            "/students/(.*)", 
            "/academics/(.*)", 
            "/api/posts", 
            "/api/posts/(.*)",
            "/lecturers", 
            "/api/lecturer",
            "/api/lecturer/(.*)",
            "/suggestion-box", 
      ]
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};