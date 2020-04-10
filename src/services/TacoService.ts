import axios, {AxiosResponse} from 'axios';

export default class TacoService {
  get = (): Promise<AxiosResponse> => {
    const tacoUrl = 'http://taco-randomizer.herokuapp.com/random/';

    return axios.get(tacoUrl);
  };
}
