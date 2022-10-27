import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components';
import { AuthProvider } from './context/AuthProvider';
import {  EmployeesPage, HomePage, LoginPage, UploadPage } from './Pages';
export const MainApp = () => {
  return (
    <AuthProvider>
        <NavBar/>

        <div className='container pt-4'>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/employees' element={<EmployeesPage/>}/>
                <Route path='/upload' element={<UploadPage/>}/>
                <Route path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    </AuthProvider>
    
  )
}
