import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
	publicRoutes: [
		'/',
		'/events/:id',
		'/api/clerk',
		'/api/stripe',
		'/api/uploadthing',
	],
	ignoredRoutes: [
		'/api/clerk',
		'/api/stripe',
		'/api/uploadthing',
	],
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
