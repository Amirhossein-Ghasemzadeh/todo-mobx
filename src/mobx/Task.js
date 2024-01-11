import { action, makeAutoObservable, observable } from "mobx";


export default class Task {
  id = Date.now();
  title = "";
  done = false;

  constructor() {
    makeAutoObservable(this, {
      title: observable,
      done: observable,
      setTitle: action,
      toggle: action
    });
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  toggle() {
    this.done = !this.done;
  }

}