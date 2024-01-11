import { makeAutoObservable, action, observable, computed } from 'mobx';
import Task from "./Task";

export const FILTERS = {
  ALL: 'ALL',
  DONE: 'DONE',
  UNDONE: 'UNDONE'
};


class TaskList {
  list = [];
  filter = FILTERS.ALL;

  constructor() {
    makeAutoObservable(this, {
      list: observable,
      filter: observable,
      filteredList: computed,
      setFilter: action,
      add: action
    });
  }

  get filteredList() {
    if (this.filter === FILTERS.DONE) {
      return this.list.filter(task => task.done);
    }
    if (this.filter === FILTERS.UNDONE) {
      return this.list.filter(task => !task.done);
    }
    return this.list;
  }

  setFilter(newFIlter) {
    this.filter = newFIlter;
  }

  add(newTask) {
    this.list.push(newTask);
  }
}

const taskList = new TaskList();

// create todo
const task1 = new Task();
task1.setTitle("Sport");
task1.toggle();

const task2 = new Task();
task2.setTitle("work");

taskList.add(task1);
taskList.add(task2);

export default taskList;