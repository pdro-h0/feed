import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 1.5rem;

    display: flex;
    gap: 1rem;

    > img{
        height: 3rem;
        width: 3rem;

        border-radius: 50%;
    }
`

export const CommentBox = styled.div`
    flex: 1;
`

export const CommentContent = styled.div`
    background-color: var(--gray-700);

    border-radius: 8px;

    padding: 1rem;

    > header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        > button{
            background: transparent;
            border: 0;

            color: var(--gray-400);

            cursor: pointer;

            line-height: 0;

            border-radius: 1px;

            transition: all ease .1s;

            &:hover{
                color: var(--red-500);
            }
        }
    }

    > p{
        margin-top: 1rem;

        color: var(--gray-300);
    }
`

export const AuthorAndTime = styled.div`
    > strong{
        display: block;

        font-size: .875rem;

        line-height: 1.6;
    }

    > time{
        display: block;

        font-size: .75rem;
        color: var(--gray-400);

        line-height: 1.6;
    }
`

export const Footer = styled.footer`
    margin-top: 1rem;

    > button{
        background-color: transparent;
        border: 0;

        color: var(--gray-400);

        cursor: pointer;

        display: flex;
        align-items: center;

        transition: all ease .1s;

        &:hover{
            color: var(--green-500);
        }

        > svg{
            margin-right: .5rem;
        }

        > span::before{
            content: "\u2022";
            padding: 0 0.25rem;
            
        }
    }
`