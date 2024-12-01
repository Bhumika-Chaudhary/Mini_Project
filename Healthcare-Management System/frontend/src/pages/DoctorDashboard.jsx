import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Calendar, User } from 'lucide-react';
import DoctorHeader from '../components/shared/DoctorHeader';

// Extended dummy data
const dummyAppointments = [
  {
    id: '1',
    patientName: 'John Doe',
    date: '2023-12-01',
    time: '10:00 AM',
    status: 'Pending',
    review: null,
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    date: '2023-12-02',
    time: '1:00 PM',
    status: 'Confirmed',
    review: null,
  },
  {
    id: '3',
    patientName: 'Tom Lee',
    date: '2023-11-30',
    time: '3:00 PM',
    status: 'Completed',
    review: {
      rating: 5,
      comment: 'Dr. Sarah was amazing! Highly recommend.',
    },
  },
  {
    id: '4',
    patientName: 'Maya Patel',
    date: '2023-12-03',
    time: '9:30 AM',
    status: 'Pending',
    review: null,
  },
  {
    id: '5',
    patientName: 'Amit Gupta',
    date: '2023-12-04',
    time: '11:45 AM',
    status: 'Completed',
    review: {
      rating: 4,
      comment: 'Great experience. Doctor was very patient.',
    },
  },
  {
    id: '6',
    patientName: 'Emily Brown',
    date: '2023-12-05',
    time: '2:15 PM',
    status: 'Cancelled',
    review: null,
  },
];

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState(dummyAppointments);

  // Update appointment status on the frontend
  const updateAppointmentStatus = (appointmentId, status) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === appointmentId ? { ...appointment, status } : appointment
      )
    );
  };

  return (
    <>
      <DoctorHeader />
      <div className="container mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Doctor Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appointments.map((appointment) => (
            <Card
              key={appointment.id}
              className="shadow-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-white"
            >
              <CardHeader className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-6 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <User className="w-6 h-6" />
                  <CardTitle className="text-xl font-semibold">{appointment.patientName}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="py-6 px-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-lg font-medium text-gray-800">{appointment.date}</span>
                </div>
                <p className="text-lg font-medium text-gray-700">{appointment.time}</p>
                <span
                  className={`inline-block mt-4 px-4 py-1 rounded-full text-white text-sm font-semibold transition duration-200 ${
                    appointment.status === 'Pending'
                      ? 'bg-yellow-500'
                      : appointment.status === 'Confirmed'
                      ? 'bg-green-500'
                      : appointment.status === 'Completed'
                      ? 'bg-blue-500'
                      : 'bg-red-500'
                  }`}
                >
                  {appointment.status}
                </span>

                {appointment.status === 'Completed' && appointment.review && (
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`w-5 h-5 ${
                            index < appointment.review.rating ? 'text-yellow-500' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-800 font-semibold">
                        {appointment.review.rating}/5
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 italic">
                      "{appointment.review.comment}"
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between mt-4 px-4 pb-6">
                {appointment.status === 'Pending' && (
                  <>
                    <Button
                      size="sm"
                      className="bg-green-600 text-white hover:bg-green-700 transition duration-200"
                      onClick={() => updateAppointmentStatus(appointment.id, 'Confirmed')}
                    >
                      Confirm
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-600 text-white hover:bg-red-700 transition duration-200"
                      onClick={() => updateAppointmentStatus(appointment.id, 'Cancelled')}
                    >
                      Cancel
                    </Button>
                  </>
                )}
                {appointment.status === 'Confirmed' && (
                  <Button
                    size="sm"
                    className="bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
                    onClick={() => updateAppointmentStatus(appointment.id, 'Completed')}
                  >
                    Complete
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
