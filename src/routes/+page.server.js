


import { prisma } from '../lib/server/prisma';





export const actions = {

    Create: async ({ request }) => {


        try {

            const { title, url, slug } = Object.fromEntries(await request.formData())

            // @ts-ignore
            const newUrl = await prisma.url.create({ data: { title, url, slug } })

            return { success: true, newUrl }

        } catch (error) {

            return { success: false }
        }

    }


};