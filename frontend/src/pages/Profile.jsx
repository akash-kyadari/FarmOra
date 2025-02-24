
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';
import Navbar from "../components/Navbar"
const Profile = ({ }) => {
    const navigator = useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);

    const handleSubmit = () => { }
    const onLogout = (e) => {
        dispatch(logout()).then(() => {
            navigator("/"); // Redirect to home after logout
        });

    }

    if (!user) {
        return (
            <div className="text-center mt-10 text-xl font-semibold">
                <p>User not found. Please <a href="/login" className="text-blue-500 underline">Login</a>.</p>
            </div>
        );
    }
    const profileData = user
    console.log(profileData);
    return (
        <>
            <Navbar />

            <div className=" mx-auto p-8 bg-white rounded-lg shadow-md border-t-black-700"> {/* Main container */}
                <button className=" text-black text-xl flex items-center hover:scale-[1.1] cursor-pointer"
                    onClick={() => navigator("/products")}>
                    ← Back to products
                </button>
                <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4"> {/* Grid for form fields */}
                        <div>
                            <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={profileData.fullName}
                                // onChange={handleChange}
                                readOnly
                                className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* ... other fields in the grid */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profileData.email}
                                // onChange={handleChange}
                                readOnly
                                className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                // value={profileData.phone}
                                // onChange={handleChange}
                                className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-2">Address</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Address fields in the grid */}
                            <div>
                                <label htmlFor="street" className="block text-gray-700 font-medium">Street:</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="address.street"
                                    // value={profileData.address.street}
                                    // onChange={handleChange}
                                    className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-gray-700 font-medium">City:</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="address.city"
                                    // value={profileData.address.city}
                                    // onChange={handleChange}
                                    className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="zip" className="block text-gray-700 font-medium">Zip:</label>
                                <input
                                    type="text"
                                    id="zip"
                                    name="address.zip"
                                    // value={profileData.address.zip}
                                    // onChange={handleChange}
                                    className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-gray-700 font-medium">State:</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="address.state"
                                    // value={profileData.address.state}
                                    // onChange={handleChange}
                                    className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="favoriteFruits" className="block text-gray-700 font-medium">Favorite Fruits (comma-separated):</label>
                        <input
                            type="text"
                            id="favoriteFruits"
                            name="favoriteFruits"
                            // value={profileData.favoriteFruits.join(', ')}
                            // onChange={handleFavoriteFruitsChange}
                            className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                        Save Changes
                    </button>
                </form>



                <button onClick={onLogout} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md">
                    Logout
                </button>
            </div>
        </>
    );
};

export default Profile;