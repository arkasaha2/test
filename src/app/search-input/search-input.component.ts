import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.css"],
})
export class SearchInputComponent implements OnInit {
  selectedUser = "";

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.selectEvent.subscribe((data) => {
      if (data) {
        this.selectedUser = data.name;
      }
    });
  }

  search(text: string) {
    this.dataService.search(text);
  }
}
