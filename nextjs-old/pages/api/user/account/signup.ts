import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === 'POST') {
        const formData = request.body;

        console.log(formData);

        return response.status(200);

    } else {
        return response.status(405);
    }
}
