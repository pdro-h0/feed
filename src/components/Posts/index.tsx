import { Avatar } from "../Avatar";
import { Comment } from "../comment";
import * as C from "./styles";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState, FormEvent, ChangeEvent } from "react";

type PostsProps = {
    key?: number;
    author: {
      avatarUrl: string;
      name: string;
      role: string;
    };
    content: {
      type: string;
      content: string;
    }[];
    publicadAt: Date;
};

export const Posts = ({ author, content, publicadAt }:PostsProps) => {
  const publishedDateFormatted = format(
    publicadAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publicadAt, {
    locale: ptBR,
    addSuffix: true
  });

  const [comments, setComments] = useState<string[]>([
    'post muito bacana hein'
  ])

  const [commentText, setCommentText] = useState<string>('')

  const handleNewComment = (e:FormEvent)=>{
    e.preventDefault()
    if(commentText !== ''){
      let newCommentText = commentText
      setComments([...comments, newCommentText])
      setCommentText('')
    }

  }

  const handleNewCommentText = (e:ChangeEvent<HTMLTextAreaElement>)=>{
    setCommentText(e.target.value)
  }

  const deleteComment = (comment:string)=>{
    const commentsWithoutDeletedOne = comments.filter((item) =>{
      return item !== comment
    })

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <C.Container>
      <header>
        <C.Author>
          <Avatar src={author.avatarUrl} alt="Foto de perfil" />

          <C.AuthorInfo>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </C.AuthorInfo>
        </C.Author>

        <time
          title={publishedDateFormatted}
          dateTime={publicadAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <C.Content>
        {content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index + '@'}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={index + '@'}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </C.Content>

      <C.Form onSubmit={handleNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        onChange={handleNewCommentText} 
        name="comment" 
        value={commentText}
        required
        placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit" disabled={commentText.length === 0}>Publicar</button>
        </footer>
      </C.Form>

      <C.CommentList>
        {comments.map((item, index) =>{
          return <Comment content={item} key={index + '#'} deleteComment={deleteComment}/>
        })}
      </C.CommentList>
    </C.Container>
  );
};
