import axios from 'axios';
import appsConfig from 'apps.config.json';

const API_BASE_URL = appsConfig['search-app']['api-url'];

export async function fetchCompanies(country = '', areas = []) {
  const url: any = new URL(API_BASE_URL + '/companies');

  if (country) url.searchParams.set('country', country);

  console.log(areas);

  if (areas.length !== 0) {
    url.searchParams.set('area', areas.join(','));
  }
  url.toString();

  const result = await axios.get(url);

  console.log(result);

  if (!result) return null;

  return result.data;
}
