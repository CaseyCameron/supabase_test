import { checkError, client } from './client.js';
export async function getMovies() {
  const req = await client.from('movies').select('*');
  return checkError(req);
}

export async function getMoviesWithDirector() {
  const req = await client.from('movies').select(`
      *, 
      directors(
        id
      )
    `);
  return checkError(req);
}

export async function getDirectorNames() {
  const req = await client.from('directors').select('name');
  return checkError(req);
}

export async function getMovieById(id) {
  const req = await client.from('movies').select('*').match({ id }).single();
  return checkError(req);
}

export async function getMovieByTitle(title) {
  const req = await client.from('movies').select('*').match({ title }).single();
  return checkError(req);
}

export async function getOldestMovie() {
  const req = await client.from('movies').select('*').order('year', { ascending: true }).limit(1).single();
  return checkError(req);
}

export async function getMoviesAfter(year) {
  const req = await client.from('movies').select('*').gte('year', year);
  return checkError(req);
}

export async function getHighestGrossingMovie() {
  const req = await client.from('movies').select('*').order('box_office', { ascending: false }).limit(1).single();
  return checkError(req);
}
