export interface ICountry {
  main: {
    img: string;
    population: number;
    president:  string;
    capital: string;
    religion: string[];
    description: string;
  };
  weather: {
     title: string;
     icon: string;
     water: number,
     temperature: number;
  };
  social: {
     title: string;
     flag: string;
     currency: string;
     language: string;
  };
  type: {
    countryName: string;
  };
}