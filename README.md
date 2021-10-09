# Redux Tutorial
```bash
npm i redux
npm i react-redux
```

> ## Setup
1. In src/index.js
     - ```import { createStore } from 'redux```
    - create store 
    ```javascript
    const store = createStore(allReducers, instructions from redux tools)
    ```
    - ```import { Provider } from react-redux```
    - Wrap App and pass in store
    ```
    <Provider store={store}>
        <App />
    </Provider>
    ```
1. Create folder
    - src/actions
    - src/reducers
1. Create files
    - src/index.js 'for combining all reducers'
1. Actions
    - Action description
1. Reducers
    - Contain the logic in switch statments
