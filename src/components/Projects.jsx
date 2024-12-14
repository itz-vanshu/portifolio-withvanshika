// import React from 'react';

function Projects() {
    return (
      <section className="py-16">
        {/* <h2 className="text-3xl  text-center mb-8 font-bold italic ">Projects</h2> */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600 mt-4">Description of project 1</p>
            <a href="https://github.com/itz-vanshu/project1" className="text-blue-500 mt-4 block">View on GitHub</a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600 mt-4">Description of project 2</p>
            <a href="https://github.com/itz-vanshu/project2" className="text-blue-500 mt-4 block">View on GitHub</a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600 mt-4">Description of project 3</p>
            <a href="https://github.com/itz-vanshu/project3" className="text-blue-500 mt-4 block">View on GitHub</a>
          </div><div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600 mt-4">Description of project 4</p>
            <a href="https://github.com/itz-vanshu/project4" className="text-blue-500 mt-4 block">View on GitHub</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  