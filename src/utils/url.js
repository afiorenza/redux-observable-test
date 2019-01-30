import { ALPHA_API_KEY, ALPHA_URL } from '../config';

export const createUrl = params => `${ALPHA_URL}/query?${params}&apikey=${ALPHA_API_KEY}`;
