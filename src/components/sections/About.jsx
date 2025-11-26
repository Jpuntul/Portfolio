import { FaCode, FaGraduationCap, FaLeaf, FaMountain } from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate Software Engineering student with a love for creating
            innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 slide-in-left">
            <p className="text-gray-600 leading-relaxed">
              Hello! I'm Jutipong, a Software Engineering student at{" "}
              {personalInfo.university}. I'm passionate about full-stack
              development and creating solutions that make a real impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What drives me is the endless possibility to create solutions that
              can impact people's lives. Whether it's building a mobile app that
              helps users track their daily habits or developing a web platform
              that connects communities, I find joy in turning ideas into
              reality through code.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm particularly interested in full-stack development, machine
              learning, and mobile app development. With my university education
              and hands-on project experience, I'm constantly learning and
              working on projects to build my skills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 slide-in-right">
            <div className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <FaCode className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Clean Code</h3>
              <p className="text-gray-600 text-sm">
                Writing maintainable, efficient code
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <FaGraduationCap className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Always Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Exploring new technologies daily
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <FaLeaf className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Sustainable Tech
              </h3>
              <p className="text-gray-600 text-sm">
                Building for a better future
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <FaMountain className="text-3xl text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Problem Solver
              </h3>
              <p className="text-gray-600 text-sm">
                Tackling complex challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
