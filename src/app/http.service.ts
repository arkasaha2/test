import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(text: string) {
    return this.http
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .pipe(map((list) => list.filter((ele) => ele.name.includes(text))));
  }
}
