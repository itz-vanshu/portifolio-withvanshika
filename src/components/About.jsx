  import React from 'react';
 import profile from '../assets/images/Profile.jpg';
 


// // function About() {
// //     return (
// //       <section className="bg-lime-800 py-16 text-center">
// //         <h2 className="text-4xl font-bold italic mb-6 text-green-50">About Me</h2>
// //         <p className="text-lg font-bold italic text-white mx-auto max-w-3xl">
// //           I am a passionate web developer skilled in JavaScript, React, and modern web technologies. I love building interactive and user-friendly websites.
// //         </p>
// //       </section>
// //     );
// //   }
  
// //   export default About;
  


// function AboutMe() {
//   return (
//     <section id="about" className="bg-gray-100 py-16 px-8">
//       <div className="max-w-5xl mx-flex flex-col lg:flex-row items-center text-center space-x-8"> 
//       {/* <div className="max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center space-x-8"> */}

//         {/* Profile Image */}
//       {/* <img src={profile}
//        alt="Profile.jpg" className= "w-32 h-32 rounded-full mb-8 lg:mb-0"/> */}
        
//         {/* Introduction */}
//         <h2 className="text-4xl font-bold italic  text-gray-800 text-center items-center mb-4">About Me</h2>
//         <div className="w-64 h-64 mb-8 lg:mb-0"> {/* Increase the size here */}

//         <img src={profile}
//        alt="Profile.jpg" className= " w-[400px] h-[300px] object-cover rounded-lg"/>
//        </div>
//         <div className='text-right flex-'>
//         <p className="text-lg font-bold italic text-gray-600 mb-6">
//           "I'm a Full-Stack Developer with a passion for crafting beautiful and functional websites. I specialize in both frontend and backend technologies and always strive for excellence in every project."
//         </p>
//         </div>

       

    
//         {/* Call to Action */} 
//         <div className="mt-8">
//           <p className="text-lg text-gray-800">Interested in working together? Let’s connect!</p>
//           <a href="#contact" className="text-blue-600 underline">Contact Me</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutMe;










function AboutMe() {
  return (
    <section id="about" className="bg-lime-950 py-16 px-8 text-center">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center space-x-8 bg-lime-950">
        
        {/* Left Side: Profile Image */}
        <div className="w-64 h-64 mb-8 lg:mb-0 bg-lime-950">
          <img
            src={profile}// Ensure the path is correct
            alt="Your Profile"
            className="w-[300px] h-[400px] object-cover rounded-full" // Image will be circular
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="text-left flex-1">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg mb-6 text-red-100">
            "I'm a Full-Stack Developer with a passion for crafting beautiful and functional websites. I specialize in both frontend and backend technologies and always strive for excellence in every project."
          </p>
          <p className="text-lg text-white">
            "When I'm not coding, I enjoy photography, gaming, and contributing to open-source projects."
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
