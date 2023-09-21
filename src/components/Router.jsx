// // Router.js
// import React from "react";
// import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
// import Login from "./Login";
// import Signup from "./Signup";
// import GiphyGallery from "./GiphyGallery";
// import PrivateRoute from "./PrivateRoute";

// const AppRouter = ({ authenticated }) => (
//   <Router>
//     <Routes>
//       <Route path="/login" component={Login} />
//       <Route path="/signup" component={Signup} />
//       <PrivateRoute
//         path="/gallery"
//         authenticated={authenticated}
//         component={GiphyGallery}
//       />
//       <Redirect from="/" to="/login" />
//     </Routes>
//   </Router>
// );

// export default AppRouter;





// Router.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Signup from "./Signup";
// import GiphyGallery from "./GiphyGallery";
// import PrivateRoute from "./PrivateRoute";

// const AppRouter = ({ authenticated }) => (
//   <Router>
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <PrivateRoute
//         path="/gallery"
//         authenticated={authenticated}
//         element={<GiphyGallery />}
//       />
//       <Route path="/*" element={<Navigate to="/login" />} />
//     </Routes>
//   </Router>
// );

// export default AppRouter;




// // Router.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
// import Login from "./Login";
// import Signup from "./Signup";
// import GiphyGallery from "./GiphyGallery";
// import PrivateRoute from "./PrivateRoute";

// const AppRouter = ({ authenticated }) => (
//   <Router>
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <PrivateRoute
//         path="/gallery"
//         authenticated={authenticated}
//         element={<GiphyGallery />}
//       />
//       <Route path="/*" element={<Navigate to="/login" />} />
//     </Routes>
//   </Router>
// );

// export default AppRouter;



// Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import GiphyGallery from "./GiphyGallery";

const AppRouter = ({ authenticated }) => (
  <Router>
    <Routes>
      <Route path="/login" element={authenticated ? <Navigate to="/gallery" /> : <Login />} />
      <Route path="/signup" element={authenticated ? <Navigate to="/gallery" /> : <Signup />} />
      <Route
        path="/gallery"
        element={authenticated ? <GiphyGallery /> : <Navigate to="/login" />}
      />
      <Route path="/*" element={authenticated ? <GiphyGallery /> : <Navigate to="/login" />} />
    </Routes>
  </Router>
);

export default AppRouter;
