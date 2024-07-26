### 라이브러리 설치
    npm install redux @reduxjs/toolkit react-redux
    yarn add redux @reduxjs/toolkit react-redux
### 1. Context API구성
<Provider>컴포넌트를 적용하여 <App>전체를 감싸도록 합니다. 그리고 store라는 프로퍼티를 반드시 지정해주어야 합니다.
store는 전역 상태의 정보를 객체로 관리하는 역할을 합니다.
    //index.jsx
    import { Provider as ReduxProvider } from "react-redux";
    import store from "./redux/store";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider> 
    );
