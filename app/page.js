'use client'
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/login');
}

// import { useState } from 'react';
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       router.push('/counter-page');
//     } else {
//       alert('Please enter both username and password');
//     }
//   };

//   return (
//     <div className="flex items-center  bg-blue justify-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow-md w-96"
//       >
//         <h1 className="text-2xl  text-gray-900 font-bold mb-4">Login</h1>
//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Username
//           </label>
//           <input
//             id="username"
//             type="text"
//             className="mt-1 block text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             className="mt-1  text-gray-900 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
