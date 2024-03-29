import {useSanityClient} from 'astro-sanity'

export async function getAllPosts(featured = false) {
  const client = useSanityClient();
  let query = '*[_type == "post"]';
  if (featured) {
    query += '[featured == true]';
  }
  const posts = await client.fetch(query);
  return posts;
}

export async function getAllPhotos(featured = false) {
  const client = useSanityClient();
  let query = '*[_type == "photo"]';
  if (featured) {
    query += '[featured == true]';
  }
  const photos = await client.fetch(query);
  return photos;
}
