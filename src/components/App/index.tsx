import * as C from "./styled";

import { Header } from "../Header";
import { Posts } from "../Posts";
import { Sidebar } from "../Sidebar";

const posts =[
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/pdro-h0.png',
      name: 'Pedro Henrique',
      role: 'Front-End',
    },
    content:[
     {type: 'paragraph', content:'Lorem, ipsum dolor..'},
     {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nam saepe. Numquam esse laudantium totam velit ut commodi adipisci!'},
     {type: 'link', content: 'Lorem.ipsum/dolor.'}
    ],
    publicadAt: new Date('2023-03-03 21:35:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'RocketSeat',
    },
    content:[
     {type: 'paragraph', content:'Lorem, ipsum dolor..'},
     {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nam saepe. Numquam esse laudantium totam velit ut commodi adipisci!'},
     {type: 'link', content: 'Lorem.ipsum/dolor.'}
    ],
    publicadAt: new Date('2023-03-03 17:34:00')
  },
  
]
function App() {
  return (
    <>
      <Header />

      <C.Wrapper>
        <Sidebar />

        <main>
            {posts.map((item, index) =>{
              return(
                <Posts 
                key={index}
                author={item.author}
                 content={item.content} 
                 publicadAt={item.publicadAt}
                />
              )
            })}
        </main>
      </C.Wrapper>
    </>
  );
}

export default App;
