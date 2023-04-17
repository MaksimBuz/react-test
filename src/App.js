import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [UserName ,SetUserName] = useState(0); 
  const [UserSurname ,SetUserSurname] = useState(0); 
  const [UserChange ,SetUserChange] = useState(0); 
  const [UserMessage ,SetUserMessage] = useState(0); 
  const [UserImage ,SetUserImage] = useState(0); 

  const ChangeNameEventHandler =(text)=>{
    SetUserName(text)
    console.log(UserName)
  
  }

  const ChangeSurNameEventHandler =(text)=>{
    SetUserSurname(text)
  
  }

  const ChangeTypeEventHandler =(text)=>{
    SetUserChange(text)
  
  }

  const ChangeMessageHandler =(text)=>{
    SetUserMessage(text)
  
  }
  const  handleImageChange =(event)=>{
    SetUserImage(event.target.files)
  }

  const error = document.querySelector('.Container__error-mesage');

  const FetchHandler =(e)=>{
    e.preventDefault();

    let UserAnsver = {
      Username:'',
      UserSurname:'',
      UserTypeMessage:'',
      UserMessage:'',
      UserImage:'',
    } 

    if((UserName || UserSurname)){
      error.innerText = '';
      UserAnsver.Username=UserName ;
      UserAnsver.UserSurname=UserSurname;

    }

    else{
      error.innerText = 'Введите имя или фамилию';
      UserAnsver.Username='';
      UserAnsver.UserSurname='';

    }

    if (UserChange) {
      error.innerText = '';
      UserAnsver.UserTypeMessage=UserChange;

    }

    else {
      error.innerText = 'Выберите тип сообшения';
      UserAnsver.UserTypeMessage='';
      
    }
    if (UserMessage.length>10) {
      error.innerText = '';
    } 
    else {
      error.innerText = 'Напишите сообшение по длиннее';
      error.innerText = '';
    }

    if (UserImage[0].size<8388608*3 && (UserImage[0].type=='image/jpeg' || UserImage[0].type=='image/png') ) {
      error.innerText = '';
      UserAnsver.UserImage=UserImage[0];
    } 

    else {
      error.innerText = 'Выберите фаил поменьше';

    }

const json = JSON.stringify(UserAnsver);
console.log(json)
  
    
 
  }
  

  return (
    <div className='container' >
      <h2 className='container__title'>Форма обратной связи</h2>
      <form className='container__form'>
        <input type="text"placeholder='Имя' name="name"  className='container__form-input' onChange={e=>ChangeNameEventHandler(e.target.value,'description')}/> 
        <input type="text" name="name" placeholder='Фамилия' className='container__form-input'onChange={e=>ChangeSurNameEventHandler(e.target.value,'description')}/> 
        <select  className='container__form-input' onChange={e=>ChangeTypeEventHandler(e.target.value)}>
          <option selected ></option>
          <option value="Wishes">Пожелания</option>
          <option value="Complaints">Жалобы</option>
          <option value="Support">Обращение в поддержку</option>
        </select>
        <textarea rows="" cols=""className='container__form-input' minLength={10} placeholder='Сообшение' onChange={e=>ChangeMessageHandler(e.target.value,'description')} ></textarea>
        <input type="file" className='container__form-input' onChange={(e)=>handleImageChange(e)}/>
        <button type="" onClick={FetchHandler} className='form__btn'> Отправить</button>
      </form>
      <p className='Container__error-mesage'> </p>

  </div>
  )
}

export default App;
