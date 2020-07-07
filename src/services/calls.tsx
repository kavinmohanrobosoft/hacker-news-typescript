
import * as Api from './apis'
import { PostsResult } from '../utils/interfaces';

export async function getData(api:string) {
    const url:string = api;
    try {
      const response = await fetch(url);
      if (response.ok === false) {
        throw new Error("Response Error:" + response.text);
      }
      const json = await response.json();
      const promises = json
        // .slice(0, 100)
        .map((id:number) =>
          fetch(`${Api.common}item/${id}.json`).then(
            response => response.json()
          )
        );
      const result:PostsResult[] = await Promise.all(promises);
      return result
    } catch (err) {
      console.error(err);
    }
  }