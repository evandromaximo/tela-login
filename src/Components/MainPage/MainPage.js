import React from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  function onChangeNome (event){
    console.log(event.target.value)
  }
  function onChangeIdade (event){
    
  }
  function onChangeEmail (event){
    
  }
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input
          type={"text"}
          placeholder={'Nome'}
          onChange= {onChangeNome}
           />
        </label>
        <label>
          Idade:
          <Input
          type={"number"}
          placeholder={'Idade'}
          onChange= {onChangeIdade}
          />
        </label> 
        <label>
          Email:
          <Input 
          type={"email"}
          placeholder={'usuario@user.com'}
          onChange={onChangeEmail} />
          </label> 
        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
