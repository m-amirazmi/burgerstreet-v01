import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { browserRouter } from "./utils/menu";

const router = createBrowserRouter(browserRouter);

export default function App() {
  return <RouterProvider router={router} />;
}

// import { useState } from "react";
// import { api } from "./utils/configs";

// export default function App() {
//   const [urls, setUrls] = useState([]);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const fileInput = e.target.querySelector("input[type=file]");

//     setMessage("");
//     setUrls([]);

//     formData.append("type", "stalls");
//     formData.append("id", "thisisid");
//     [...fileInput.files].forEach((file) => formData.append("images", file));

//     try {
//       const { data } = await api.post("/uploads", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setUrls(data.urls);
//     } catch (error) {
//       setMessage(error.response.data.message);
//     }

//     e.target.reset();
//   };
//   return (
//     <div className="h-screen w-screen bg-zinc-900 text-white flex flex-col gap-5 items-center justify-center">
//       <form
//         className="flex flex-col gap-4"
//         onSubmit={handleSubmit}
//         encType="multipart/form-data"
//       >
//         <input type="file" accept="image/*" multiple />
//         <button className="border p-2 hover:bg-zinc-800">Add Images</button>
//       </form>

//       <div>{message}</div>

//       <div className="max-w-3xl  mx-auto flex gap-2">
//         {urls?.map((url) => {
//           return (
//             <div key={url} className="h-60 w-60">
//               <img src={url} className="w-full h-full object-cover" />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
