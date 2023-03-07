import * as C from './styles'
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends  ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean
}

export const Avatar = ({ hasBorder = true, ...props }:AvatarProps)=>{
    return(
        <C.Container hasBorder={hasBorder} 
        {...props}/>
    )
}