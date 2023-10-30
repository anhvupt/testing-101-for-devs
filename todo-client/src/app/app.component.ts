import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-client';

  tasks: any[] = [];
  serverUrl = 'http://localhost:3000/tasks'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.http.get(this.serverUrl)
      .subscribe((data: any) => {
        this.tasks = data;
      });
  }
}
