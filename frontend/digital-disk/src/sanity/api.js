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

export async function getAllPortfolioImages() {
  const client = useSanityClient();
  const query = '*[_type == "portfolioImage"]'; // Adjust the query as per your schema

  const images = await client.fetch(query);
  return images;
}