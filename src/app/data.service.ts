import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class DataService {
  searchEvent = new BehaviorSubject("");
  selectEvent = new BehaviorSubject(null);
  constructor() {}

  search(text: string) {
    this.searchEvent.next(text);
  }

  select(user: User) {
    this.selectEvent.next(user);
  }
}
