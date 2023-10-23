import { Component } from '@angular/core';
import * as data from "../../../../_data/todo";

const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-sub-menu-list',
  templateUrl: './sub-menu-list.component.html',
  styleUrls: ['./sub-menu-list.component.scss']
})
export class SubMenuListComponent {
  public d = new Date();
  public myDate = `${this.d.getDate()} ${Months[this.d.getMonth() - 1]?.slice(0, 3)}`;
  public text: string = "";
  public todos = data.task;
  public completed: boolean = false;
  public red_border: boolean = false;
  public visible: boolean = false;
  public objToAdd: object = {
    text: "",
    objToAdd: "",
    Date: this.myDate,
    completed: "",
    badgeClass: "",
  };

  constructor() {}

  ngOnInit() {}

  public addTask(text: any) {
    let someData = {
      text: text,
    };

    this.todos.push(text);
  }

  public taskCompleted(task: any) {
    task.completed = !task.completed;
  }

  public taskDeleted(index: any) {
    this.todos.splice(index, 1);
  }
}
