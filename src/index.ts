import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const searchForm = document.getElementById('search-form') as HTMLInputElement;
const searchContent = document.getElementById('search-content') as HTMLDivElement;

let searchedRepositories = [];

const onValueChanges$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(searchForm, 'keyup');

function search(source$: Observable<KeyboardEvent>) {
  return source$
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map((ev: KeyboardEvent) => {
        return searchForm.value;
      })
    );
}

const search$: Observable<string> = search(onValueChanges$);
search$.subscribe( (value: string) => {
  fetch(`https://api.github.com/search/repositories?q=${value}`)
    .then((res: Response) => res.json())
    .then(res => {
      searchedRepositories = [];
      while (searchContent.firstChild) {
        searchContent.removeChild(searchContent.firstChild);
      }
      if (res.total_count === 0) {
        const div = document.createElement('div') as HTMLDivElement;
        div.style.cssText = `width: 200px; height: 200px; margin: 40px auto; 
          text-align: center; border-radius: 5px;`;
        div.innerText = `${value} not found`;
        searchContent.append(div);
      } else {
        searchedRepositories = res.items.slice(0, 12);
        searchedRepositories.forEach(item => {
          const div = document.createElement('div') as HTMLDivElement;
          div.classList.add('item');
          div.style.cssText = `width: 200px; height: 200px; background-color: rgb(203, 220, 242);
                              margin: 40px 20px; text-align: center;
                              border-radius: 5px; box-shadow: 3px 3px 13px -7px rgba(0,0,0,0.75);
                              display: flex; flex-direction: column`;
          const p = document.createElement('p') as HTMLParagraphElement;
          p.style.cssText = `font-weight: bold`;
          p.innerText = item.name as string;
          div.append(p);
          const img = document.createElement('img') as HTMLImageElement;
          img.style.cssText = `max-height: 70px; max-width: 70px; margin: 0 auto;`;
          img.setAttribute('src', item.owner.avatar_url as string);
          div.append(img);
          const btn = document.createElement('a') as HTMLAnchorElement;
          btn.setAttribute('href', item.html_url as string);
          btn.innerText = `View repository`;
          btn.style.cssText = `margin-top: 15px; color: #fff; margin: 35px auto 0 auto;
                              padding: 6px 5px 6px 5px; border-radius: 5px; font-size: 14px;
                              width: 60%; text-decoration: none; background-color: black;`
          div.append(btn);
          searchContent.append(div);
        });
      }
    });
  });