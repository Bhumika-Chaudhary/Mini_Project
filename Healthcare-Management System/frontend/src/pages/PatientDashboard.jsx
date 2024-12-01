import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/shared/Header';

const PatientDashboard = () => {
  const navigate = useNavigate();

  const [doctors] = useState([
    {
      id: '1',
      name: 'Dr. Aisha Khan',
      specialty: 'Cardiologist',
      rating: 4.7,
      experience: 10,
      patients: 1200,
    },
    {
      id: '2',
      name: 'Dr. Rohan Mehta',
      specialty: 'Dermatologist',
      rating: 4.5,
      experience: 8,
      patients: 950,
    },
    {
      id: '3',
      name: 'Dr. Neha Kapoor',
      specialty: 'Orthopedic Surgeon',
      rating: 4.8,
      experience: 12,
      patients: 1400,
    },
    {
      id: '4',
      name: 'Dr. Arjun Verma',
      specialty: 'Neurologist',
      rating: 4.9,
      experience: 15,
      patients: 1600,
    },
    {
      id: '5',
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      rating: 4.6,
      experience: 9,
      patients: 800,
    },
    {
      id: '6',
      name: 'Dr. Kavita Joshi',
      specialty: 'Psychiatrist',
      rating: 4.9,
      experience: 11,
      patients: 1100,
    },
  ]);

  const handleAppointmentClick = (doctorId) => {

    navigate(`/book-appointment/${doctorId}`);
    
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-4 lg:px-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Meet Our Top Doctors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 border-t-4 border-blue-500">
                <CardHeader>
                  <div className="flex flex-col items-center">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg flex items-center justify-center text-4xl text-white font-bold">
                      {doctor.name[0]}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mt-4 text-center">
                      {doctor.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  {/* Specialty */}
                  <p className="text-lg text-gray-600 font-medium italic">
                    {doctor.specialty}
                  </p>
                  {/* Rating */}
                  <div className="flex justify-center items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <span className="text-lg font-semibold text-yellow-500">
                      {doctor.rating.toFixed(1)}
                    </span>
                  </div>
                  {/* Experience */}
                  <p className="text-gray-600 font-medium">
                    {doctor.experience} years of experience
                  </p>
                  {/* Patients */}
                  <div className="flex justify-center items-center gap-2 text-teal-600 font-medium">
                    <Award className="w-5 h-5" />
                    <span>{doctor.patients}+ Happy Patients</span>
                  </div>
                  {/* Appointment Button */}
                  <Button
                    onClick={() => handleAppointmentClick(doctor.id)}
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
