import * as C from './styles'

type AvatarProps={
    src: string
    alt: string
    hasBorder?: boolean
}

export const Avatar = ({ src, alt, hasBorder = true }:AvatarProps)=>{
    return(
        <C.Container hasBorder={hasBorder} src={src} alt={alt}/>
    )
}