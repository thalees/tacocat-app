import axios, {AxiosResponse} from 'axios';

export default class DogService {
  get = (): Promise<AxiosResponse> => {
    const dogUrl = 'https://dog.ceo/api/breeds/image/random/';

    return axios.get(dogUrl);
  };
}
