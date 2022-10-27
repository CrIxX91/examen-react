import { useEffect, useState } from "react";
import { EmployeeApi } from "../api/EmployeeApi";
import { Employee, EmployeeResponse } from "../interfaces/ServiceInterface";
import { NewReg } from "../Pages";

export const useEmployee = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [employees, setEmployees] = useState<Employee[]>([]);

 

    const LoadEmployee = async()=> {
        EmployeeApi.get<EmployeeResponse>(`cristian`).then(
            response => {
                setIsLoading(false);
                setEmployees(response.data.data.employees);
            }
        );
    }



    
    const handleSumit = async(data:NewReg) =>{

        await EmployeeApi.post(`cristian`,data).then( resp => {
            console.log(resp)
          });

          LoadEmployee();
    }

    useEffect(() => {
        LoadEmployee();
    }, [])

    return{
        isLoading,
        employees,
        handleSumit
    }
    
}