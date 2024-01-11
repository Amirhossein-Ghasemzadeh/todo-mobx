import taskList from '../mobx/TaskList';
import {observer} from 'mobx-react-lite';

const TaskList = () => {
  const toggleTask = (task) => {
    task.toggle();
  };

  return (
    <>
      List :
      <ul>
        {taskList.filteredList.map((task) => (
          <li key={task.id}>
            <input
              type='checkbox'
              checked={task.done}
              onChange={() => toggleTask(task)}
            />{' '}
            {task.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default observer(TaskList);
