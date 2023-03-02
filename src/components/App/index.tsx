import * as C from "./styled";

import { Header } from "../Header";
import { Posts } from "../Posts";
import { Sidebar } from "../Sidebar";

function App() {
  return (
    <>
      <Header />

      <C.Wrapper>
        <Sidebar />

        <main>
          <Posts />

          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </main>
      </C.Wrapper>
    </>
  );
}

export default App;
