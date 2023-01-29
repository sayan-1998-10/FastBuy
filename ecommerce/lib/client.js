import sanityClient from '@sanity/client';
import urlBuilder from '@sanity/image-url';

export const client  = sanityClient({
    projectId: 'i1drmkrf',
    dataset: 'production',
    apiVersion: '2023-01-20',
    useCdn : true,
    token : process.env.SANITY_TOKEN_CLIENT
})

const builder = urlBuilder(client);

export const urlFor = (source) => builder.image(source);