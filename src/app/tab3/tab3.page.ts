import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public todoList = [];

  constructor(public todosService: TodosService) {
  }

  ionViewWillEnter() {
    // Load the data
    this.todosService.prepareDataRequest()
      .subscribe(
        data => {
          // Set the data to display in the template
          // this.todoList = JSON.stringify(data);
          this.todoList = data as [];
          console.log(typeof this.todoList);
          console.log(this.todoList);
        }
      );
  }

}
