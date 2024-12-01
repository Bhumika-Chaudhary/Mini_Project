import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Calendar, User } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Header from '../components/shared/Header';

const PatientAppointmentHistory = () => {
  const initialAppointments = [
    {
      id: '1',
      doctorName: 'Dr. Aditi Verma',
      doctorSpecialty: 'Cardiologist',
      date: '2024-11-01',
      status: 'Completed',
      review: null,
    },
    {
      id: '2',
      doctorName: 'Dr. Rahul Singh',
      doctorSpecialty: 'Dentist',
      date: '2024-11-03',
      status: 'Confirmed',
      review: null,
    },
    {
      id: '3',
      doctorName: 'Dr. Neha Sharma',
      doctorSpecialty: 'Pediatrician',
      date: '2024-11-07',
      status: 'Pending',
      review: null,
    },
    {
      id: '4',
      doctorName: 'Dr. Sameer Kulkarni',
      doctorSpecialty: 'Orthopedic',
      date: '2024-10-30',
      status: 'Completed',
      review: {
        rating: 5,
        comment: 'Excellent care, very friendly and professional.',
      },
    },
    {
      id: '5',
      doctorName: 'Dr. Priya Kapoor',
      doctorSpecialty: 'Neurologist',
      date: '2024-11-02',
      status: 'Cancelled',
      review: null,
    },
    {
      id: '6',
      doctorName: 'Dr. Aman Gupta',
      doctorSpecialty: 'Psychiatrist',
      date: '2024-10-25',
      status: 'Completed',
      review: {
        rating: 4,
        comment: 'Very helpful and understanding, but the waiting time was long.',
      },
    },
    {
      id: '7',
      doctorName: 'Dr. Meera Iyer',
      doctorSpecialty: 'Dermatologist',
      date: '2024-10-27',
      status: 'Completed',
      review: null,
    },
    {
      id: '8',
      doctorName: 'Dr. Kunal Deshmukh',
      doctorSpecialty: 'ENT Specialist',
      date: '2024-11-04',
      status: 'Confirmed',
      review: null,
    },
    {
      id: '9',
      doctorName: 'Dr. Shalini Reddy',
      doctorSpecialty: 'Gynecologist',
      date: '2024-10-29',
      status: 'Completed',
      review: {
        rating: 5,
        comment: 'Very professional and caring, answered all my questions.',
      },
    },
  ];

  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : initialAppointments;
  });

  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const openReviewDialog = (appointment) => {
    setSelectedAppointment(appointment);
    setRating(appointment.review ? appointment.review.rating : 5);
    setComment(appointment.review ? appointment.review.comment : '');
    setIsReviewDialogOpen(true);
  };

  const handleReviewSubmit = () => {
    const updatedAppointments = appointments.map((appt) =>
      appt.id === selectedAppointment.id
        ? { ...appt, review: { rating, comment } }
        : appt
    );
    setAppointments(updatedAppointments);
    setIsReviewDialogOpen(false);
  };

  const cancelAppointment = (appointmentId) => {
    const updatedAppointments = appointments.map((appt) =>
      appt.id === appointmentId ? { ...appt, status: 'Cancelled' } : appt
    );
    setAppointments(updatedAppointments);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-4 md:px-8">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          Appointment History
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appointments.map((appointment) => (
            <Card
              key={appointment.id}
              className="shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-200 bg-white rounded-lg"
            >
              <CardHeader className="bg-indigo-50 py-4 px-6 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-indigo-600" />
                  <CardTitle className="text-indigo-800 text-lg font-semibold">
                    Dr. {appointment.doctorName} ({appointment.doctorSpecialty})
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-medium text-gray-700">
                    {appointment.date}
                  </span>
                </div>
                <span
                  className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold ${
                    appointment.status === 'Pending'
                      ? 'bg-yellow-500'
                      : appointment.status === 'Confirmed'
                      ? 'bg-green-500'
                      : appointment.status === 'Cancelled'
                      ? 'bg-red-500'
                      : 'bg-blue-600'
                  }`}
                >
                  {appointment.status}
                </span>

                {appointment.status === 'Completed' && (
                  <div className="mt-4 text-left border-t pt-4">
                    {appointment.review ? (
                      <div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className={`w-4 h-4 ${
                                index < appointment.review.rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-gray-700 font-semibold">
                            {appointment.review.rating}/5
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 italic">
                          "{appointment.review.comment}"
                        </p>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-yellow-500 text-white hover:bg-yellow-600 mt-2"
                        onClick={() => openReviewDialog(appointment)}
                      >
                        Leave Review
                      </Button>
                    )}
                  </div>
                )}

                {appointment.status === 'Pending' && (
                  <Button
                    size="sm"
                    className="bg-red-500 text-white hover:bg-red-600 mt-4 w-full"
                    onClick={() => cancelAppointment(appointment.id)}
                  >
                    Cancel Appointment
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
          <DialogTrigger />
          <DialogContent>
            <DialogTitle className="text-lg font-bold">Leave or Edit Review</DialogTitle>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-6 h-6 cursor-pointer ${
                      index < rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
              <Input
                className="mt-4"
                placeholder="Your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReviewDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700" onClick={handleReviewSubmit}>
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default PatientAppointmentHistory;
