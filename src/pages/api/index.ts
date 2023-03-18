import type { NextApiRequest, NextApiResponse } from 'next'

export type ApiResponseData<D = string> = {
  status: number
  content: D
}

export const respond = <D = string>(status: number, content: D) => ({
  status,
  content,
})

export const response = {
  ok: <D = string>(content: D) => respond(200, content),
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseData>,
) {
  res.status(200).json(response.ok('To be implemented.'))
}
