import {BrowserRouter, Routes , Route} from 'react-router-dom'
import AppointmentHistory from './pages/AppointmentHistory'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PatientDashboard from './pages/PatientDashboard'
import BookAppointment from './pages/BookAppointment'
import DoctorDashboard from './pages/DoctorDashboard'
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/appointments' element={<AppointmentHistory/>} />
          <Route path='/patient-dashboard' element={<PatientDashboard/>} />
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>} />
          <Route path='/book-appointment/:doctorId' element={<BookAppointment/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
