import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Clock, StickyNote } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import Header from '../components/shared/Header';

const BookAppointment = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const [doctors] = useState([
    {
      id: '1',
      name: 'Dr. Aisha Khan',
      specialty: 'Cardiologist',
      rating: 4.7,
      experience: 10,
      description: 'Expert in heart health, providing care with empathy and precision.',
    },
    {
      id: '2',
      name: 'Dr. Rohan Mehta',
      specialty: 'Dermatologist',
      rating: 4.5,
      experience: 8,
      description: 'Skincare specialist with innovative treatments for all skin types.',
    },
    {
      id: '3',
      name: 'Dr. Neha Kapoor',
      specialty: 'Orthopedic Surgeon',
      rating: 4.8,
      experience: 12,
      description: 'Providing compassionate care for children and adolescents.',
    },
    {
      id: '4',
      name: 'Dr. Arjun Verma',
      specialty: 'Neurologist',
      rating: 4.9,
      experience: 15,
      description: 'Provide complete neurological treatment.',
    },
    {
      id: '5',
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      rating: 4.6,
      experience: 9,
      description: 'Provide complete neurological treatment.',
    },
    {
      id: '6',
      name: 'Dr. Kavita Joshi',
      specialty: 'Psychiatrist',
      rating: 4.9,
      experience: 11,
      description: 'Treated 1000+ patients with mental depression.',
    },
  ]);

  const doctor = doctors.find((doc) => doc.id === (doctorId || '1')) || doctors[0];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [notes, setNotes] = useState('');

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for the appointment.');
      return;
    }

    const newAppointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      appointmentDate: selectedDate.toLocaleDateString(),
      appointmentTime: selectedTime.format('hh:mm A'),
      notes,
    };

    console.log('Appointment Booked:', newAppointment);
    alert('Appointment booked successfully!');
    navigate('/patient-dashboard');
  };

  return (
    <>
      <Header />
     
      <div className="container mx-auto py-12 px-4 lg:px-8">
        <Card className="shadow-xl rounded-xl overflow-hidden bg-white transition-transform transform ">
          <CardHeader className="p-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-t-xl">
            <CardTitle className="text-3xl font-bold text-center">
              {`Book Appointment with ${doctor.name}`}
            </CardTitle>
            <p className="text-center text-lg font-medium mt-2">
              {doctor.specialty}
            </p>
          </CardHeader>
          <CardContent className="space-y-8 p-8">
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="text-gray-700">
                <h2 className="text-xl font-semibold">{doctor.name}</h2>
                <p className="text-sm">{doctor.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold">
                  {doctor.rating.toFixed(1)}
                </span>
                <span className="text-md text-gray-600">
                  {doctor.experience} years
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">
                  <Calendar className="inline w-5 h-5 mr-2 text-blue-500" />
                  Select Date
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholderText="Click to select a date"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">
                  <Clock className="inline w-5 h-5 mr-2 text-blue-500" />
                  Select Time
                </label>
                <TimePicker
                  showSecond={false}
                  value={selectedTime}
                  onChange={setSelectedTime}
                  className="w-full rounded-lg border-2 border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Select time"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">
                <StickyNote className="inline w-5 h-5 mr-2 text-blue-500" />
                Notes
              </label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Additional notes (optional)"
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <Button
              onClick={handleBookAppointment}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 rounded-xl hover:from-pink-600 hover:to-red-600 transition duration-300 shadow-lg transform hover:scale-105"
            >
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BookAppointment;
