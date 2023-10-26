import { 
  MainContainer, 
  Container,
  LeftContainer,
  BoxContainer,
  TitleBox,
  Description,
  RigthContainer,
} from './style.js'

import Logo from '../../images/logo.png'

export const TaskInterface = () => {
    return(
        <MainContainer>
          <Container>
            <LeftContainer>
              <BoxContainer>
                <img src={Logo} alt="logo" />
                <TitleBox>Organize sua vida com <br/><span>simplicidade e eficiência</span></TitleBox>
              </BoxContainer>
              <Description>Adicione ao lado as tarefas que deseja fazer hoje e não pare até ela estar vazia!</Description>
            </LeftContainer>
            <RigthContainer>
              <h1>Minhas Tarefas</h1>
              <p>Tarefas do dia...</p>
              <ul>
                <li>Tarefa 1</li>
                <li>Tarefa 2</li>
              </ul>
              <input type="text" placeholder="Digite sua próxima tarefa aqui... "/>
            </RigthContainer>
          </Container>
        </MainContainer>
    )
}