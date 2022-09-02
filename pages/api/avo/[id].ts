import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database";
import enablePublicAccess from '@cors'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {

  try {
    await enablePublicAccess(request, response)

    const db = new Database()
    const avoId = request.query.id as string

    const avo = await db.getById(avoId)

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    response.status(200).json(avo)
  }catch (e) {
    console.error(e)
    response.status(404).end()
  }

};

export default allAvos;
