import { ChangeEvent, useState } from 'react'
import { Loading } from '../components';
import { useEmployee } from '../hooks/useemployee';
import {  Employee } from '../interfaces/ServiceInterface';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EmployeeApi } from '../api/EmployeeApi';


export interface NewReg {
  name:string;
  last_name:string;
  birthday:Date;
}

export const EmployeesPage = () => {
    
  const {isLoading,employees,handleSumit} = useEmployee();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [startDate, setStartDate] = useState(new Date());


  const limit = 30;

  const handleNameChange = ({target}:ChangeEvent<HTMLInputElement>) =>{
    setFirstName(target.value.slice(0,limit));
  }

  const handleLastNameChange = ({target}:ChangeEvent<HTMLInputElement>) =>{
    setLastName(target.value.slice(0,limit));
  }

  const resetForm = ()=>{
    setLastName('');
    setFirstName('');
    setCurrentPage(0);
    setStartDate(new Date());
  }

  const sendInfo = async()=> {

    const obj:NewReg ={
      name:firstName,
      last_name:lastName,
      birthday:startDate
    }
     await handleSumit(obj);
     resetForm();
  }

  const filteredEmployee = ():Employee[] => {

      if(search.length ===0)
        return employees.slice(currentPage,currentPage+10);
      
      const filtered = employees.filter(employee => employee.last_name.includes(search));
        return filtered.slice(currentPage,currentPage+10);

  }
  const nextPage = () =>{
    if(currentPage < employees.length-10)
      setCurrentPage(currentPage+10);
  }

  const prevPage = () =>{
    if(currentPage > 0)
      setCurrentPage(currentPage-10);
  }
  const onSearchChange = ({target}:ChangeEvent<HTMLInputElement>) =>{
      setCurrentPage(0);
      setSearch(target.value);
  }

  return (
    <>
      
      <input className='mb-5 form-control' placeholder='Buscar' 
        value={search} 
        onChange={ onSearchChange} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birthday</th>
          </tr>
        </thead>
        <tbody>

          {
            filteredEmployee().map(({birthday,id,last_name,name})=>(

              <tr key={id}>
              <th scope="row">{id}</th>
              <td>{last_name}</td>
              <td>{name}</td>
              <td>{birthday}</td>
            </tr>
            ))
          }
        </tbody>
       </table>
        <button className='btn btn-primary ' onClick={prevPage}>Prev</button>
        &nbsp;
        <button className='btn btn-primary' onClick={nextPage}>Next</button>


        <div className='container'>
      <form >
        <div className="form-group">
          <small id="namehelp" className="form-text text-muted">Name</small>
          <input type="text" 
            className="form-control" 
            id="name" 
            placeholder="Name" 
            value={firstName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
        <small id="lastnameHelp" className="form-text text-muted">Last Name</small>
          <input type="text" 
            className="form-control" 
            id="lastname" 
            placeholder="LastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
            />
        </div>
        <div className="form-group">
        <small id="emailHelp" className="form-text text-muted">Birthday</small>
         <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} required/>
        </div>
        <div className='pt-2'>
          <button type="submit" 
            className="btn btn-primary " 
            onClick={e=> {e.preventDefault();sendInfo()}}>
              Enviar</button>
        </div>
      </form>
    </div>
       
       {
        isLoading&&<Loading/>
       }

       
    </>
  )

}
