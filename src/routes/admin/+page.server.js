import { prisma } from '../../lib/server/prisma.js';




export const load = async (event) => {


    try {
        const links = await prisma.url.findMany()

        return {
            links
        }
    } catch (error) {

    }


}


export const actions = {

    Create: async ({ request }) => {


        try {

            const { title, url, slug, clave } = Object.fromEntries(await request.formData())


            if (clave !== 'dTxGWrhcjzlReWv9wN9f1NSO/2Ufm8xQIEpV+lhKfcs=') {
                return { success: true }
            }

            // @ts-ignore
            const newUrl = await prisma.url.create({ data: { title, url, slug } })

            return { success: true, newUrl }

        } catch (error) {
            console.log(error);
            return { success: false }
        }

    },


    Delete: async ({ request }) => {


        try {

            const { id, clave } = Object.fromEntries(await request.formData())


            if (clave !== 'dTxGWrhcjzlReWv9wN9f1NSO/2Ufm8xQIEpV+lhKfcs=') {
                return { success: true }
            }


            if (!id) throw Error('Non ID')


            const data = await prisma.url.delete({ where: { id: Number(id) } })

            return { success: true, result: data }
        } catch (error) {
            console.log(error);
            return { success: false }
        }

    }




};