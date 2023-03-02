import { Avatar } from "../Avatar";
import { Comment } from "../comment";
import * as C from "./styles";

type PostsProps = {
  author: string;
  content: string;
};
export const Posts = () => {
  return (
    <C.Container>
      <header>
        <C.Author>
          <Avatar src="https://github.com/pdro-h0.png" alt="Foto do perfil"/>

          <C.AuthorInfo>
            <strong>Pedro</strong>
            <span>Front-End</span>
          </C.AuthorInfo>
        </C.Author>

        <time
          title="11 de Maio de 2023 às 08:13h"
          dateTime="2023-05-11 08:13:30"
        >
          Publicado há 1h
        </time>
      </header>

      <C.Content>
        <p>Lorem, ipsum dolor..</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nam
          saepe. Numquam esse, laudantium totam velit ut commodi adipisci!
        </p>
        <p>
          <a href="#">Lorem ipsum dolor sit.</a>
        </p>
        <p>
          <a href="#">#Lorem #ipsum #dolor.</a>
        </p>
      </C.Content>

      <C.Form>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </C.Form>

      <C.CommentList>
        <Comment />
        <Comment />
        <Comment />
      </C.CommentList>
    </C.Container>
  );
};
