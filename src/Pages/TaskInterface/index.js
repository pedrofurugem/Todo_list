import { useState, useRef, useEffect } from 'react'
import axios from 'axios';

import TaskBox from '../../components/Task/index.js'

import { 
  MainContainer, 
  Container,
  LeftContainer,
  BoxContainer,
  TitleBox,
  Description,
  RigthContainer,
  TitleRightContainer,
  DescRightContainer,
  InputTask
} from './style.js'

import Logo from '../../images/logo.png'

export const TaskInterface = () => {
  const [tasks, setTasks] = useState([])
  
  const taskText = useRef("") 
  
  useEffect(()=> {
    const fetchData = async ()=> {
      const {data: taskList} = await axios.get('https://plataforma.universodev.com.br/api/todolist/')
      setTasks(taskList)
    }
    fetchData()
  }, [tasks])
  
  async function insertNewTask(event){
    if(event.key === "Enter"){
      const { data: newTaskInfo } = await axios.put('https://plataforma.universodev.com.br/api/todolist/', { text: taskText.current.value })
      setTasks([...tasks, {id: newTaskInfo.id, text: newTaskInfo.text }])
      taskText.current.value = ""
    }
  }

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
          <TitleRightContainer>Minhas Tarefas</TitleRightContainer>
          <DescRightContainer>Tarefas do dia...</DescRightContainer>
          { tasks.map((task) => ( 
            <TaskBox id={task.id} text={task.text} updateTasks={setTasks}/>
          ))}
          <InputTask type="text"
                      placeholder="Digite sua próxima tarefa aqui... "
                      onKeyDown={insertNewTask}
                      ref={taskText}
          />
        </RigthContainer>
      </Container>
    </MainContainer>
  )
}