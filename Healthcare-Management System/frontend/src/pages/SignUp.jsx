import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'patient'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      navigate("/signin")
    }
    catch(err){
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
      <Card className="max-w-md w-full p-8 bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-700 font-extrabold text-3xl">
            <UserPlus className="w-8 h-8 text-indigo-600" />
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="p-4 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 w-full"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="p-4 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 w-full"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="p-4 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 w-full"
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="p-4 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 w-full"
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="p-4 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 w-full"
                required
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition duration-200 ease-in-out"
            >
              Sign Up
            </Button>

            <p className="mt-4 text-center text-gray-600">
              Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
