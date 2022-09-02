import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database";
import enablePublicAccess from '@cors'

const allAvos = async (requeset: NextApiRequest, response: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(requeset, response)

    const db = new Database()
    const allEntries = await db.getAll()
    const lenght = allEntries.length

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ lenght, data: allEntries }))
  } catch (e) {
    console.error(e)
    response.statusCode = 500
    response.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }
};

export default allAvos;
