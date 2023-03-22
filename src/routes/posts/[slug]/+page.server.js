import { posts } from '../data.js';

export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  return {
    post
  }
} 
/* export async function load({ fetch }) {

  const url = 'https://statsapi.web.nhl.com/api/v1/teams?fields=teams,id,name,venue,firstYearOfPlay,division';

  const teamsReq = await fetch(url);

  const teamsRes = await teamsReq.json();

  const nhlteams = teamsRes.data;

  return { 
    nhlteams
  }
} 
 */

// https://statsapi.web.nhl.com/api/v1/teams

// https://github.com/erunion/sport-api-specifications/blob/master/nhl/nhl.yaml