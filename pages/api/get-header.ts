import type { NextApiRequest, NextApiResponse } from 'next';

import { request } from '../../lib/datocms';
import { AllFooter } from '../../queries/dataQuery';

export interface Error {
  msg: string;
  status: boolean;
}

export interface AllNavigation {
  text: string;
  link: string;
}

const getHeadersQuery = `query getHeaders {
    allNavigations(orderBy: order_ASC) {
      text
      link
    }
    logo {    
      image {
        url
        alt
      }
      size
      href
    }
  }`;

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
      query: getHeadersQuery,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(errorMsg);
  }
}
