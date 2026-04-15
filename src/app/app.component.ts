import { Component } from '@angular/core';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TokenService } from './services/token.service';
import { CommonModule } from '@angular/common';
import { InputAddTaskComponent } from "./components/input-add-task/input-add-task.component";
import { DelateAllComponent } from "./components/delate-all/delate-all.component";
import { Task } from './models/Task.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TaskAddComponent, TaskEditComponent, InputAddTaskComponent, DelateAllComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private tokenService: TokenService) { this.loadData() }

  title = "totdolist";
  tasks: Task[] = [];
  heightPosition = 1;

  loadData(){
    let tasksStorage = JSON.parse(localStorage.getItem("tasks")!);
    let heightPositionStorage = JSON.parse(localStorage.getItem("heightPosition")!);
    if(tasksStorage){
      this.tasks = tasksStorage as Task[];
      this.heightPosition = heightPositionStorage;
    }
    console.log(this.tasks)
  }
  setData(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    localStorage.setItem("heightPosition", JSON.stringify(this.heightPosition));
  }

  addTask(newTask: string) {
    if (newTask.trim() == ""){ return};
    this.tasks.unshift({ position: this.heightPosition, task: newTask, code: this.tokenService.GenerateToken(), isEdit: false });
    this.heightPosition += 1;
    this.setData();
  }
  deleteTask(code: string){
    let index =  this.tasks.findIndex(x => x.code == code);
    if(index != -1){
      console.log(index);
      this.tasks.splice(index, 1);
    }
    this.setData()
  }
  updateTask(code: string, newTask:string){
    if(newTask.trim() != ""){
      let index = this.tasks.findIndex(x => x.code == code);
      this.tasks[index].task = newTask; 
    }
    this.editTask(code);
    this.setData()
  }
  editTask(code:string){
    let index =  this.tasks.findIndex(x => x.code == code);
    if(index != -1){
      this.tasks[index].isEdit = !this.tasks[index].isEdit;
    }
    this.setData()
  }
  deleAlltasks(){
    this.tasks = [];
    localStorage.clear();
    
  }
  
}
