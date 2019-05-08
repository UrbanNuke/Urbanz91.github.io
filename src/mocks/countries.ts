import { ICountry } from '../models';
import { Observable, of } from 'rxjs';

const russia: ICountry = {
  main: {
    img: 'assets/images/countries/russia.jpg',
    population: 146781095,
    president:  'Путин Владимир Владимирович',
    capital: 'Москва',
    religion: ['православие, ислам, буддизм'],
    description: `Россия — многонациональное государство, отличающееся большим
                  этнокультурным многообразием.`,
  },
  weather: {
     title: 'Москва',
     icon: 'assets/images/weather/cloudy.png',
     water: 7,
     temperature: 12,
  },
  social: {
     title: 'Россия',
     flag: 'assets/images/flags/russia.png',
     currency: 'Рубли',
     language: 'Русский',
  },
  type: {
    countryName: 'Россия'
  },
};

const iceland: ICountry = {
  main: {
    img: 'assets/images/countries/iceland.jpg',
    population: 357050,
    president:  'Гвюдни Торласиус Йоуханнессон',
    capital: 'Рейкьявик',
    religion: ['не присуща'],
    description: `Исландия - островное государство, расположенное на западе Северной Европы
                    в северной части Атлантического океана (к северо-западу от Великобритании).
                    `,
  },
  weather: {
     title: 'Рейкьявик',
     icon: 'assets/images/weather/rain.png',
     water: 2,
     temperature: 7,
  },
  social: {
     title: 'Исландия',
     flag: 'assets/images/flags/iceland.png',
     currency: 'Исландская крона',
     language: 'Исландский',
  },
  type: {
    countryName: 'Исландия'
  },
};

const spain: ICountry = {
  main: {
    img: 'assets/images/countries/spain.jpg',
    population: 46528966,
    president:  'Педро Санчес Перес-Кастехон',
    capital: 'Мадрид',
    religion: ['католицизм, протестантизм, православие, ислам, буддизм, иудаизм'],
    description: `Испа́ния - официально Короле́вство Испа́ния, суверенное государство на юго-западе Европы
                   и частично в Африке, член Европейского союза и НАТО.`,
  },
  weather: {
     title: 'Мадрид',
     icon: 'assets/images/weather/sun.png',
     water: 10,
     temperature: 16,
  },
  social: {
     title: 'Испа́ния',
     flag: 'assets/images/flags/spain.png',
     currency: 'Евро',
     language: 'испанский',
  },
  type: {
    countryName: 'Испа́ния'
  },
};

const brazil: ICountry = {
  main: {
    img: 'assets/images/countries/brazil.jpg',
    population: 212804996,
    president:  'Жаи́р Месси́ас Болсона́ру',
    capital: 'Бразилиа',
    religion: ['католицизм, протестантизм, адвентизм, ислам, буддизм, иудаизм'],
    description: `Бразилия - государство в Южной Америке, единственное португалоязычное на американском континенте.
                   `,
  },
  weather: {
     title: 'Бразилиа',
     icon: 'assets/images/weather/sun.png',
     water: 17,
     temperature: 24,
  },
  social: {
     title: 'Бразилия',
     flag: 'assets/images/flags/brazil.png',
     currency: 'Бразильский реал',
     language: 'Бразилский, португальский',
  },
  type: {
    countryName: 'Бразилия'
  },
};

export const countries$: Observable<ICountry[]> = of([russia, spain, iceland, brazil]);
