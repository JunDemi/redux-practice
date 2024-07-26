### 라이브러리 설치
    npm install redux @reduxjs/toolkit react-redux
    yarn add redux @reduxjs/toolkit react-redux
### 1. Context API구성
<Provider>컴포넌트를 적용하여 <App>전체를 감싸도록 합니다. </br>
그리고 store라는 프로퍼티를 반드시 지정해주어야 합니다. </br>
store는 전역 상태의 정보를 객체로 관리하는 역할을 합니다.

    /*index.jsx*/
    import { Provider as ReduxProvider } from "react-redux";
    import store from "./redux/store";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider> 
    );
### 2. Reducer
새로운 상태를 반환하는 함수입니다. <br/>
상태의 변화를 일으키게 되면 action이라는 것이 발생하는데, 이 action을 하나의 객체로 선언해서 관리할 수 있습니다. <br/>
기본적으로 전역 상태의 이름과 초깃값을 지정하고, reducer객체 안에 action을 적용합니다.

    /*redux/reducer.js*/
    import { createSlice } from "@reduxjs/toolkit";
    export const counterSlice = createSlice({
        name: "counter", //전역 상태 이름
        //초깃값
        initialState: {
            value: 1
        },
        //reducer
        reducers: {
            //action
            secondPage: (state) => {
                state.value = 2;
            },
            thirdPage: (state) => {
                state.value = 3;
            }
        }
    });

    export const {secondPage, thirdPage} = counterSlice.actions;
    export default counterSlice.reducer;
### 3. store
인덱스에 값을 지정해주었던 store입니다. 하나의 프로젝트에는 하나의 store만 가지게 됩니다. <br/>
store안에는 reducer.js에서 만든 초깃값을 지정한 상태와 reducer가 포함됩니다.

    /*redux/store.js*/
    import { configureStore } from "@reduxjs/toolkit";
    import counterReducer from "./reducer";

    const store = configureStore({
        reducer: {
          counter: counterReducer
        }
      });

    export default store;
