console.log("main before");
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import {
//   AddPost,
//   AllPosts,
//   EditPost,
//   Home,
//   Post,
//   Signup,
// } from "./pages/index.js";
// import { AuthLayout, Login } from "./components/index.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: (
//           <AuthLayout authentication={false}>
//             <Login />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/signup",
//         element: (
//           <AuthLayout authentication={false}>
//             <Signup />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/all-posts",
//         element: (
//           <AuthLayout authentication={true}>
//             {" "}
//             <AllPosts />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/add-posts",
//         element: (
//           <AuthLayout authentication={true}>
//             {" "}
//             <AddPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/edit-post/:slug",
//         element: (
//           <AuthLayout authentication={true}>
//             {" "}
//             <EditPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/post/:slug",
//         element: <Post />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </Provider>
  </React.StrictMode>
);
