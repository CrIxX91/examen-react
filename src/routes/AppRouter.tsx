import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components';
import { AuthContext } from '../context/AuthContext'
import { LoginPage } from '../Pages';
import { EmployeesRoutes } from './EmployeesRoutes';

export const AppRouter = () => {

    const {authState, handleLogOut} = useContext(AuthContext);

    useEffect(() => {
      handleLogOut()
    }, [])
    

  return (
    <>
     {
            (authState.auth)
            ?(
                <>
                    <Routes>
                        <Route path='/*' element={<EmployeesRoutes/>}></Route>
                    </Routes>
                </>
            ):(
                <>
                    <NavBar/>

                    <div className='container pt-4'>
                        <Routes>
                            <Route path='/' element={<LoginPage/>}/>
                            <Route path='/*' element={<Navigate to='/'/>}/>
                        </Routes>
                    </div>
                </>
            )
        }
    </>
       
  )
}
