export async function load({ fetch }) {  

  const url = 'https://statsapi.web.nhl.com/api/v1/teams';

  const teamsReq = await fetch(url);

  const teamsRes = await teamsReq.json();

  const nhlteams = teamsRes.teams;

  return { 
    nhlteams
  }
} 

//import { posts } from '../data.js';

//export function load({ params }) {
  //const post = posts.find((post) => post.slug === params.slug);

//  return {
//    post
//  }
//}