import { TbThumbUp, TbTrash } from "react-icons/tb";
import { Avatar } from "../Avatar";
import * as C from "./styles";

export const Comment = () => {
  return (
    <C.Container>
      <Avatar hasBorder={false} src="https://github.com/pdro-h0.png" alt="Foto do Perfil"/>

      <C.CommentBox>
        <C.CommentContent>
          <header>
            <C.AuthorAndTime>
              <strong>Pedro Henrique</strong>
              <time
                title="11 de Maio de 2023 às 08:13h"
                dateTime="2023-05-11 08:13:30"
              >Cerca de 2h atrás</time>
            </C.AuthorAndTime>

            <button title="deletar comentario">
              <TbTrash size={24} />
            </button>
          </header>

          <p>Lorem ipsum dolor sit!!👏👏</p>
        </C.CommentContent>

        <C.Footer>
          <button>
            <TbThumbUp size={19}/>
            Aplaudir <span>35</span>
          </button>
        </C.Footer>
      </C.CommentBox>
    </C.Container>
  );
};
