import axios, {AxiosResponse} from 'axios';

export default class CoronaService {
  get = (): Promise<AxiosResponse> => {
    const coronaUrl =
      'https://coronavirus-tracker-api.herokuapp.com/v2/locations/28?timelines=false';

    return axios.get(coronaUrl);
  };
}
