// import type { RequestHandler } from './$types';

export const GET = (({ url }) => {
  return Response.json({
    random: String(Math.random())
  })
})