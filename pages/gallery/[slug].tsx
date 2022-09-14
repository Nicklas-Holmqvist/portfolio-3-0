import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next/types';
import { useRouter } from 'next/router';
import { request } from '../../lib/datocms';
import { ImageGallery } from '../../queries/dataQuery';

export const getGallery = (params: any) => {
  return `query Gallery {
    gallery(filter: {slug: {eq: ${params.slug}}}) {
      title
      slug
      imageSet {
        responsiveImage {
          title
          src
          srcSet
          width
          height
          alt
            }
      }
    }
  }`;
};

interface Galleries {
  slug: string;
}

export async function getStaticPaths() {
  const res: {
    allGalleries: {
      slug: string;
    }[];
  } = await request({
    query: `query allGallery {
      allGalleries{
        slug
      }
    }`,
  });
  const paths = res.allGalleries.map((item: { slug: string }) => {
    return {
      params: { slug: item.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<{
  [key: string]: ImageGallery;
}> = async ({ params }) => {
  const data: ImageGallery = await request({
    query: getGallery(params),
  });
  return {
    props: { data },
  };
};

const Gallery: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h2>{data.gallery.title}</h2>
    </>
  );
};

export default Gallery;
