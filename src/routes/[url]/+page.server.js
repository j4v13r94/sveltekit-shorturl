import { prisma } from '$lib/server/prisma.js'





export async function load({ url }) {

    const { pathname } = url
    const Url = (path) => {
        return path.replace('/', '')
    }
    const link = Url(pathname)
    const links = await prisma.url.findFirst({ where: { slug: link } })

    return { links }
}