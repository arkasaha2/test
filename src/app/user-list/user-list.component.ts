import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "../data.service";
import { HttpService } from "../http.service";
import { User } from "../user";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users: Observable<Array<User>>;

  constructor(private dataService: DataService, private http: HttpService) {}

  ngOnInit(): void {
    this.dataService.searchEvent.subscribe((data) => {
      this.users = this.http.getData(data);
    });
  }

  selectUser(user: User) {
    this.dataService.select(user);
  }
}
