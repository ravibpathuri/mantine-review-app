import { http, HttpResponse } from 'msw';

const API_URL = import.meta.env.VITE_API_URL;

export const HomePageHandlers = [
  http.get(`${API_URL}users`, () => HttpResponse.json([{ name: 'test', email: 'test@gmail.com' }])),
];
