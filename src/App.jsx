import TaskFilter from './components/TaskFilter';
import TaskInput from './components/TaskInput';
import TaskListView from './components/TaskListView';

function App() {
  return (
    <>
      <div
        style={{
          gap: '10px',
          display: 'grid',
          margin: '1rem',
        }}>
        <h4>mobx todo</h4>
        <TaskFilter />
        <TaskInput />
        <TaskListView />
      </div>
    </>
  );
}

export default App;
