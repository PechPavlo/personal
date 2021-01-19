import sanityClient from '../client';

async function ServiceApi(message) {
  const api = await sanityClient
    .fetch(`*[_type == 'author']{
      url,
    }`);
  const res = await fetch(`${api[0].url}${message}`);
  return res.ok;
}

export default ServiceApi;
