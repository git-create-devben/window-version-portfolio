// "use client";
// import React, { useState } from "react";
// import Join from "@/app/join";
// import { toast } from "react-hot-toast";
// import { Button } from "./ui/button";

// const Acsess = () => {
//   const [accessGranted, setAccessGranted] = useState(false);
//   const [accessCode, setAccessCode] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleAccessSubmit = (event: any) => {
//     event.preventDefault();
//     setLoading(true); // Start loading spinner
//     // Simulate a delay to mimic processing
//     setTimeout(() => {
//       if (accessCode === "DevBen") {
//         setAccessGranted(true); // Grant access
//         toast.success("access granted")
//       } else {
//         toast.error("Incorrect access code. Please try again."); // Deny access
//       }
//       setLoading(false); // Stop loading spinner
//     }, 2500); // Adjust the delay time as needed
//   };

//   const handleAccessChange = (event: any) => {
//     setAccessCode(event.target.value);
//   };

//   return (
//     <div>
//       {!accessGranted ? (
//         <div className="flex h-screen flex-col items-center justify-center gap-2 bg-slate-950 text-white">
//           <h1 className="text-2xl font-extrabold">Welcome to My Portfolio</h1>
//           {/* <span>Not: new design coming </span> */}
//           <form onSubmit={handleAccessSubmit} className="flex flex-col gap-2">
//             <label htmlFor="access-code">
//               Enter Access Code: &rsquo;DevBen&rsquo; to continue
//             </label>
//             <input
//               type="text"
//               id="access-code"
//               value={accessCode}
//               onChange={handleAccessChange}
//               required
//               className="h-12 w-full rounded-md p-2 text-black outline-none"
//             />
//             <Button type="submit">Submit</Button>
//           </form>
//           {loading && <div className="loading-spinner text-3xl text-white">redirecting.....</div>}
//           <p>{errorMessage}</p>
//         </div>
//       ) : (
//         <Join />
//       )}
//     </div>
//   );
// };

// export default Acsess;
