
import { Provider } from 'react-redux'
import store from './redux/store'
import TodoLists from './components/TodoLists'

function App() {

  return (
    <>
      <Provider store={store}>
          <div>
              <TodoLists/>
          </div>
      </Provider>
    </>
  )
}

export default App
