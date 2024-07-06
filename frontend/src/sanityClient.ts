import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'u42bem90',
  dataset: 'production',
  useCdn: true, 
});
