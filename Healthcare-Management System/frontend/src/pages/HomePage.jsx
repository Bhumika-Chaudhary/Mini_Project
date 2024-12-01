import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo with Button */}
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACRozO6VizFkUuKWYmT3GQVGgDwONXQishw&s"
              alt="Healthub Logo"
              className="h-12 w-12"
            />
            <h1 className="text-2xl font-bold">Healthub</h1>
            
          </div>

          <Link to='/signin'>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition">
                Book a Doctor
            </button>
          </Link>
        </div>
      </header>

      <section
        className="bg-cover bg-center relative text-white text-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/1290139310/vector/vector-of-a-medical-staff-group-of-doctors-and-nurses.jpg?s=612x612&w=0&k=20&c=cYvcXpTZhDWtfd0uZu6vucPOdHP0Zr3I1La0uKsb4rg=)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl px-6">
          <h1 className="text-5xl font-bold">Empowering Healthcare Access</h1>
          <p className="mt-6 text-xl">
            Welcome to Healthub, your open platform for healthcare solutions.
            We bridge the gap between patients and professionals with
            state-of-the-art services. Whether you're booking consultations,
            accessing medical records, or exploring healthcare options,
            Healthub is here for you.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold text-gray-800">Healthub</span>, we are committed to revolutionizing healthcare by providing a seamless platform for patients and professionals. 
            Our mission is to make healthcare more accessible, efficient, and personalized for everyone. With cutting-edge technology and a user-friendly interface, we aim to empower individuals to take control of their health journey.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="text-center">
              <img
                src="https://img.icons8.com/color/96/heart-health.png"
                alt="Our Mission"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                To bridge the gap between patients and healthcare providers.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://img.icons8.com/color/96/hospital-room.png"
                alt="Our Vision"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">Our Vision</h3>
              <p className="text-gray-600 mt-2">
                To create a healthier, more connected world.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUUvQvtz5jRTz8xi1ARtw18fOO4eBnyCNvw&s"
                alt="Our Values"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">Our Values</h3>
              <p className="text-gray-600 mt-2">
                Compassion, innovation, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                image:
                  "https://randomuser.me/api/portraits/men/75.jpg",
                review:
                  "Healthub is a lifesaver! The platform made it easy for me to connect with doctors from the comfort of my home. Highly recommended!",
                rating: 5,
              },
              {
                name: "Sneha Patil",
                image:
                  "https://randomuser.me/api/portraits/women/65.jpg",
                review:
                  "Exceptional experience using Healthub. The user interface is so intuitive, and the healthcare options are top-notch.",
                rating: 4,
              },
              {
                name: "Amit Shah",
                image:
                  "https://randomuser.me/api/portraits/men/68.jpg",
                review:
                  "Healthub provided me with the best virtual consultation experience. Great platform for families too!",
                rating: 5,
              },
              {
                name: "Priya Singh",
                image:
                  "https://randomuser.me/api/portraits/women/50.jpg",
                review:
                  "This platform has revolutionized how I access healthcare. The personalized recommendations are fantastic!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  className="w-20 h-20 rounded-full border-4 border-blue-500 mb-4"
                />
                <h3 className="font-bold text-lg mb-2">{testimonial.name}</h3>
                <p className="text-gray-700 text-sm">{testimonial.review}</p>
                <p className="mt-4 text-yellow-500 text-lg">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Share Your Feedback</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-left font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left font-bold mb-2">Rating</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>5 - Excellent</option>
                <option>4 - Very Good</option>
                <option>3 - Good</option>
                <option>2 - Fair</option>
                <option>1 - Poor</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-left font-bold mb-2">Comments</label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
