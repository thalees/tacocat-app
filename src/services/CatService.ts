import axios, {AxiosResponse} from 'axios';
import {CatResponse} from './responses/CatResponse';

export default class CatService {
  FILE_ENGINE_APP_URL = 'asdas';

  get = (): Promise<AxiosResponse> => {
    const catUrl = 'http://cat-fact.herokuapp.com/facts/random';

    return axios.get<CatResponse>(catUrl);
  };
}
