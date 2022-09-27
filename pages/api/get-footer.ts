import type { NextApiRequest, NextApiResponse } from 'next';

import { request } from '../../lib/datocms';
import { AllFooter } from '../../queries/dataQuery';

export interface Error {
  msg: string;
  status: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AllFooter | Error>
) {
  const errorMsg: Error = {
    msg: 'No data to be found',
    status: false,
  };

  try {
    const response = await request({
      query: `
        query Footer {
          allFooters(orderBy: order_ASC) {
            image {
              url
              alt
            }
            title
            hasHover
            size
            href
          }
        }`,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(errorMsg);
  }
}
