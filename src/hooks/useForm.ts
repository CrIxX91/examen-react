import { useState } from 'react';
import { User } from '../interfaces/UserInterface';

export const useForm = (initial:User) => {
    const [formState, setFormState] = useState(initial);

    const onInputChange = ({target}:any)=> {
        const {name,value} = target;
        setFormState({
            ...formState,[name]:value
        });
    }

    const onResetForm =()=>{
        setFormState(initial)
    }
  return {
    ...formState,formState,onInputChange,onResetForm
  }
  
}
