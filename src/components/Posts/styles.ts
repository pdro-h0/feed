import styled from "styled-components";

export const Container = styled.article`
  background-color: var(--gray-800);

  border-radius: 8px;

  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > time {
      font-size: 0.875rem;
      color: var(--gray-400);
    }
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    color: var(--gray-100);
    line-height: 1.6;
  }

  > span {
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`;

export const Content = styled.div`
  line-height: 1.6;
  color: var(--gray-300);

  margin-top: 1.5rem;

  > p {
    margin-top: 1rem;

    > a {
      font-weight: bold;
      color: var(--green-500);
      text-decoration: none;

      &:hover {
        color: var(--green-300);
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  margin-top: 1.5rem;
  padding-top: 1.5rem;

  border-top: 1px solid var(--gray-600);

  &:focus-within > footer{
        visibility: visible;
        max-height: none;
    }

  > strong {
    line-height: 1.6;
    color: var(--gray-100);
  }

  > textarea {
    width: 100%;

    background-color: var(--gray-900);

    border: 0;
    resize: none;

    height: 6rem;

    padding: 1rem;
    margin-top: 1rem;

    border-radius: 8px;

    color: var(--gray-100);

    line-height: 1.4;
  }

  > footer {
    visibility: hidden;
    max-height: 0;

    > button[type="submit"] {
      padding: 1rem 1.5rem;
      margin-top: 1rem;

      border-radius: 8px;
      border: 0;

      background-color: var(--green-500);

      color: var(--white);

      font-weight: bold;

      cursor: pointer;

      transition: all ease 0.1s;

      &:not(:disabled):hover {
        background-color: var(--green-300);
      }

      &:disabled{
        background-color: var(--red-500);
        opacity: 0.7;

        cursor: not-allowed;
      }
    }
  }
`;

export const CommentList = styled.div`
  margin-top: 2rem;
`
