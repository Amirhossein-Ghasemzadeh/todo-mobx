import {observer} from 'mobx-react-lite';
import taskList, {FILTERS} from '../mobx/TaskList';

const TaskFilter = () => {
  return (
    <label htmlFor='select'>
      Filter:
      <select onChange={(e) => taskList.setFilter(e.target.value)}>
        <option value={FILTERS.ALL}>All</option>
        <option value={FILTERS.DONE}>Done</option>
        <option value={FILTERS.UNDONE}>Undone</option>
      </select>
    </label>
  );
};

export default observer(TaskFilter);
