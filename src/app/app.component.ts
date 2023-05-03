import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practichna30';
  users = [
    {
      id: 1,
      name: 'John Smith',
      birthdate: new Date('1990-01-15'),
      age:17
    },
    {
      id: 2,
      name: 'Jane Doe',
      birthdate: new Date('1985-08-23'),
      age:19
    },
    {
      id: 3,
      name: 'Bob Johnson',
      birthdate: new Date('1995-03-10'),
      age:18
    }
  ];
  formatDate(dateStr: Date): string {
    const day = dateStr.getDate();
    const month = dateStr.getMonth() + 1;
    const year = dateStr.getFullYear();
    return `${day}.${month}.${year}`;
  }  
  sortUsersByAge(): void {
    this.users.sort((a, b) => a.age - b.age);
  }
  sortUsersByAge1(): void {
    this.users.sort((a, b) => b.age - a.age);
  }
  checkbox=false;
  sortUsersCheckBox():void{
    if(this.checkbox==false){
      this.checkbox=true;
      this.sortUsersByAge()
    }else{
      this.checkbox=false;
      this.sortUsersByAge1()
    }
  }
  selectedSortField: string = '';
  sortUsers() {
    if (this.selectedSortField === 'name') {
      this.users.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSortField === 'age') {
      this.users.sort((a, b) => a.age - b.age);
    } else if (this.selectedSortField === 'birthdate') {
      this.users.sort((a, b) => new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime());
    }
  }
  numUsers: number=1;
  startIndex:number=0;

  filteredUsers = this.users.filter(user => user.name.toLowerCase().includes('a'));

  searchText = '';

  get filteredUsers1() {
    if (this.searchText === '') {
      return this.users;
    } else {
      const searchTextLower = this.searchText.toLowerCase();
      return this.users.filter(user =>
        user.name.toLowerCase().includes(searchTextLower)
      );
    }
  }
}
