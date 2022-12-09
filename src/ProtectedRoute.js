import { Outlet, Navigate } from 'react-router-dom'
const ProtectedRoute = () => {
    return (
        <div>
            {localStorage.getItem("IEEE_user") ? <Outlet /> : <Navigate to="/SignIn" />}
        </div>
    )
}
export default ProtectedRoute
