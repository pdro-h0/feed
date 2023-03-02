import * as C from './styles'
import igniteLogo from '../../assets/appName.svg'

export const Header = ()=>{
    return(
        <C.Container>
            <img src={igniteLogo} alt="Logo do Ignite" />
        </C.Container>
    )
}