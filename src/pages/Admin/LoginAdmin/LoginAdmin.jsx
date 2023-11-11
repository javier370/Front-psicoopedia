import './LoginAdmin.scss';
import {LoginForm} from '../../../components/Admin';

export const LoginAdmin = () => {
  return (
    <>
        <div className='login-admin'>
          <div className='login-admin__content'>
            <h1>Ingresar a Psicoopedia</h1>
            <LoginForm/>
          </div>
        </div>
    
    </>
  )
}
