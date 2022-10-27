import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm';
import { User } from '../interfaces/UserInterface';

export const LoginPage = () => {

    const formData:User ={
        username:'',
        password:''
    }

    const {handleLogin} = useContext(AuthContext);

    const { onInputChange,username,password}= useForm(formData);

  return (
    <>
        <div className="main">
            <div className="col-md-6 col-sm-12">
                <div className="login-form">
                <form>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" placeholder="User Name" 
                            value={username} 
                            name="username" 
                            onChange={onInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" 
                            value={password} 
                            name="password" 
                            onChange={onInputChange}/>
                    </div>
                    <hr/>
                    <button type="submit" className="btn btn-black" 
                        onClick={e=> {e.preventDefault();handleLogin({username,password})}}>
                            Login
                    </button>
                </form>
                </div>
            </div>
         </div>
    </>
  )
}
