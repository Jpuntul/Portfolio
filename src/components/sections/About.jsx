import { FaCode, FaGraduationCap, FaLeaf, FaMountain } from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-stack software engineer with shipped systems, real metrics, and
            a habit of testing what I build.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 slide-in-left">
            <p className="text-gray-600 leading-relaxed">
              Hi, I&rsquo;m Jutipong. I just graduated from{" "}
              {personalInfo.university}&rsquo;s Software Engineering program (
              {personalInfo.graduated}) and I&rsquo;m available for full-time
              roles from July {personalInfo.graduated}.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I lean backend &mdash; REST API design, schema and query
              optimization, real-time data &mdash; but I ship the frontend too.
              My favourite work right now is contributing to VeloSim, an
              open-source bike-network simulator built with BIXI Montr&eacute;al
              that uses WebSocket-driven live updates over a Python + React
              stack.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Strongest projects: <strong>Healthcare Management System</strong>{" "}
              (447 patients, 303 staff, 30+ endpoints, 75% query speedup),{" "}
              <strong>Hand-in-Hand Auction</strong> (real-time charity bidding
              on Firestore), and the <strong>SOEN-390 Campus Navigation</strong>{" "}
              Flutter app (95% location accuracy, 30% faster routing).
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
