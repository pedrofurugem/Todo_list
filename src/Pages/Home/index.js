import Calendar from '../../images/icon.png'

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
                    <Button>Iniciar</Button>
                </LeftContent>
                <img src={Calendar} alt="claendar"/>
            </Content>
        </MainContainer>
    )
}