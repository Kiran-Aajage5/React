// const Shimmer = () => {
//     return (
//     <div className="shimmer-container">

//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
        
        
        

//     </div>
//     );
// }

// export default Shimmer;


// const Shimmer = () => {
//     return (
//       <div className="flex flex-wrap justify-center">
//         {Array(20)
//           .fill("")
//           .map((e, index) => (
//             <div
//               key={index}
//               className="w-52 h-72 bg-gray-300 m-4 rounded-xl animate-pulse"
//             ></div>
//           ))}
//       </div>
//     );
//   };
  
//   export default Shimmer;



const Shimmer = () => {
    return (
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-60 rounded-xl overflow-hidden shadow-lg bg-gray-200 animate-pulse"
            >
              <div className="h-40 bg-gray-300"></div> {/* Image Placeholder */}
              <div className="p-4 space-y-4">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div> {/* Title */}
                <div className="h-4 bg-gray-300 rounded w-1/2"></div> {/* Subtitle */}
                <div className="h-4 bg-gray-300 rounded w-1/3"></div> {/* Price/Info */}
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  
  