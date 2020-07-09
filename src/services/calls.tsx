import * as Api from "./apis";
import { PostsResult } from "../utils/interfaces";
import axios from "axios";

export const getData = async (api: string) => {
  const url: string = api;

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

console.log(JSON.stringify("url +++++" +url))
  try {
    const response = await fetch(url);
    if (response.ok === false) {
      throw new Error("Response Error:" + response.text);
    }
    const json = await response.json();
    const promises = await json.kids
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