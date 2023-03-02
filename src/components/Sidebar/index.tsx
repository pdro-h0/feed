import * as C from './styles'
import { TbPencil } from 'react-icons/tb'
import { Avatar } from '../Avatar'

export const Sidebar = ()=>{
    return(
        <C.Container>
            <img className='cover' src="https://images.unsplash.com/photo-1497384401032-2182d2687715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

            <C.Profile>
                <Avatar src="https://github.com/pdro-h0.png" alt="Foto de perfil"/>
                <strong>Pedro</strong>
                <span>Front-End</span>
            </C.Profile>

            <footer>
                <a href="#"> <TbPencil size={20} /> Editar Perfil</a>
            </footer>
        </C.Container>
    )
}