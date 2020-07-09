import * as Api from "./apis";
import { PostsResult } from "../utils/interfaces";
import axios from "axios";
// export const getItems = async (itemid:number) => {
//   const result = await axios
//   .get(`${Api.baseURL}item/${itemid}.json`)
//   .then(({ data }) => data && data)
//   return result;
// }
export const getData = async (api: string) => {
  const url: string = api;

//   const getIds = await axios.get(url).then(({ data }) => data);
//   return getIds;
// };
  try {
    const response = await fetch(url);
    if (response.ok === false) {
      throw new Error("Response Error:" + response.text);
    }
    const json = await response.json();
    const promises = await json
      .map((id:number) =>

        fetch(`${Api.baseURL}item/${id}.json`).then(
          response => response.json()
        ).then(data => data)

      )
    const result:PostsResult[] = await Promise.all(promises);
    console.log(JSON.stringify(result))
    return result
  } catch (err) {
    console.error(err);
  }
}

export const getComments = async (api: string) => {
  const url: string = api;

//   const getIds = await axios.get(url).then(({ data }) => data);
//   return getIds;
// };
console.log(JSON.stringify("url +++++" +url))
  try {
    const response = await fetch(url);
    if (response.ok === false) {
      throw new Error("Response Error:" + response.text);
    }
    const json = await response.json();
    const promises = await json.kids
      // .map((id:number) =>

      //   fetch(`${Api.baseURL}item/${id}.json`).then(
      //     response => response.json()
      //   ).then(data => data.kids && console.log(JSON.stringify("url +++++" + data.kids)))

      // )
      .map((id:number) =>

        fetch(`${Api.baseURL}item/${id}.json`).then(
          response => response.json()
        ).then(data => data)

      )
    const result:PostsResult[] = await Promise.all(promises);
    console.log(JSON.stringify(result))
    return result
  } catch (err) {
    console.error(err);
  }
}