import Calendar from '../../images/icon.png'
import { Link } from 'react-router-dom'

import { MainContainer, 
         Content,
         LeftContent,
         Title,
         Button
       } from './style'

export const Home = () => {
    return(
        <MainContainer>
            <Content>
                <LeftContent>
                    <Title>Organize sua vida com <br/> <span>simplicidade e eficiência</span></Title>
                    <Link to="/TaskInterface">
                      <Button>Iniciar</Button>
                    </Link>
                </LeftContent>
                <img src={Calendar} alt="calendar"/>
            </Content>
        </MainContainer>
    )
}