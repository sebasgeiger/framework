import { posts } from './data.js';

export function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
} 


// https://statsapi.web.nhl.com/api/v1/teams

// https://github.com/erunion/sport-api-specifications/blob/master/nhl/nhl.yaml