// Params
export const POKEMON_NAME_PARAM = 'pokemonName'

// Routes Paths
export const POKEMON_DETAILS_PATH = `/pokemon/:${POKEMON_NAME_PARAM}`
export const POKEMON_FAVORITE_LIST_PATH = '/favorites'

// API Urls
export const BASE_POKEAPI = 'https://pokeapi.co/api/v2'
export const POKEAPI_POKEMON_LIST_URL = `${BASE_POKEAPI}/pokemon`
export const POKEAPI_POKEMON_NAME_DETAILS_URL = `${POKEAPI_POKEMON_LIST_URL}/:${POKEMON_NAME_PARAM}`
