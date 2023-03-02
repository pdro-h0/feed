import styled from "styled-components";

export const Container = styled.img<{hasBorder: boolean}>`
        height: calc(3rem + 12px);
        width: calc(3rem + 12px);

        border-radius: 50%;

        border: ${({hasBorder}) => hasBorder ?  '4px solid var(--gray-800)': 'none'};
        outline: ${({hasBorder}) => hasBorder ? '2px solid var(--green-500)' : 0 } ;
`