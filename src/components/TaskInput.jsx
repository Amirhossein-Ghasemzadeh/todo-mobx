import {useState} from 'react';
import {observer} from 'mobx-react-lite';
import Task from '../mobx/Task';
import taskList from '../mobx/TaskList';

const TaskInput = () => {
  const [title, setTitle] = useState('');

  const onChangeHandler = (e) => setTitle(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = new Task();
    newTask.setTitle(title);
    taskList.add(newTask);
    setTitle('');
    setTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      Input:
      <input placeholder='add your task title' onChange={onChangeHandler} />
    </form>
  );
};

export default observer(TaskInput);
