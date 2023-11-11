import './AdminLayout.scss';
import {LoginAdmin} from '../../pages/Admin/LoginAdmin'
import { useAuth } from '../../hooks';

export const AdminLayout = (props) => {
    const {children} = props;
    
    const {auth} = useAuth();

    if (!auth) return <LoginAdmin/>

    return (
        <>
            <h1>AdminLayout</h1>
            {children}
        </>
    )
}
