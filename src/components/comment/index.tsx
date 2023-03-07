import { TbThumbUp, TbTrash } from "react-icons/tb";
import { Avatar } from "../Avatar";
import * as C from "./styles";
import { useState } from "react";

type CommentProps={
  content: string,
  deleteComment:(arg0: string)=>void
}

export const Comment = ({ content,deleteComment  }:CommentProps) => {
  const handleDeleteComment = ()=>{
    deleteComment(content)
  }

  const [likeCount, setLikeCount] = useState<number>(0)


  const handleLikeButton = ()=>{
    setLikeCount(likeCount + 1)
  }

  return (
    <C.Container>
      <Avatar 
      hasBorder={false} 
      src="https://github.com/pdro-h0.png" 
      alt="Foto do Perfil"
      />

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

            <button onClick={handleDeleteComment} title="deletar comentario">
              <TbTrash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </C.CommentContent>

        <C.Footer>
          <button onClick={handleLikeButton}>
            <TbThumbUp size={19}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </C.Footer>
      </C.CommentBox>
    </C.Container>
  );
};
