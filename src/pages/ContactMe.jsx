import React from "react";
import { ContactCard, Heading } from "../Common/Common";
import { Globe, Handshake, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ContactMe = () => {
  return (
    <section className="pb-10">
      <Heading title="Contact Me" />
      <div className="flex grid grid-cols-2 md:grid-cols-3 gap-4">
        <ContactCard
          icon={Mail}
          title="Email"
          mail="pravesh@gmail.com"
          link="mailto:pravesh@gmail.com"
        />
        <ContactCard
          icon={Phone}
          title="Phone"
          mail="+91 7007458210"
          link="tel:7007458210"
        />
        <ContactCard
          icon={MapPin}
          title="Location"
          mail="Basti, UP, India 272002"
          link="https://www.google.com/maps/place/Mustafabad,+Uttar+Pradesh+272002/@27.384821,82.6450454,118693m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3990daa920256eb5:0x33cfe440c0fc33fb!2sBasti,+Uttar+Pradesh!3b1!8m2!3d26.8390734!4d82.605118!16s%2Fg%2F1jkxjm2b6!3m5!1s0x3990d23b39ed980b:0xc0a9ca615787ffba!8m2!3d26.9072747!4d82.7630304!16s%2Fg%2F12j84t021?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>

      <div className="flex w-full gap-2 mt-6">
        <div className="w-3/5 border-2 border-gray-200 p-4 rounded-xl">
          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="border-1 border-gray-300 p-2 rounded-lg">
                <Send className="text-black-500" />
              </div>
              <h1 className="text-lg font-semibold">Get In Touch</h1>
            </div>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="What's this about?"
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
            <textarea
              placeholder="Write your message here..."
              className="border-1 border-gray-300 p-2 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
          <div className="pt-2">
            <p className="text-sm text-gray-500">
              Your information is safe with me. I will never share it.
            </p>
          </div>
        </div>

        <div className="w-2/5 ">
          <div className="border-2 border-gray-200 p-3 rounded-xl">
            <div className="flex flex-row items-center gap-2">
              <div className="rounded-full bg-gray-200 p-2">
                <Handshake />
              </div>
              <p className="text-md font-semibold">Let's Work Together</p>
            </div>
            <p className="text-sm text-gray-500 pl-12 pb-1">
              I'm open to freelance opportunities projects full-time
              opportunities and collaborations.
            </p>
            <div className="pl-2 pr-2">
              <div className="border-1 border-gray-200 mt-2"></div>
            </div>
            <ul className="disc list-disc pl-6 text-sm text-gray-700 pt-2">
              <li>Mobile App Development</li>
              <li>Cross-platform Solutions</li>
              <li>Clean and Scalable Code</li>
              <li>Hight Performance</li>
            </ul>
          </div>

          {/* box */}
          <div className="border-2 border-gray-200 p-4 rounded-xl mt-2">
            <div className="flex flex-row items-center gap-2">
              <div className="rounded-full bg-gray-200 p-2">
                <Globe />
              </div>
              <p className="text-md font-semibold">Find Me Online</p>
            </div>

            <div className="flex flex-row items-center gap-2 pt-2 pl-1">
              <div>
                <FaGithub className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-semibold">Github</p>
                <p className="text-sm text-gray-500">
                  https://github.com/pravesh1731
                </p>
              </div>
            </div>
            <div className="border-1 border-gray-200 mt-2"></div>

            <div className="flex flex-row items-center gap-2 pt-2 pl-1">
              <div>
                <FaLinkedin className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-semibold">Linkedin</p>
                <p className="text-sm text-gray-500">
                  https://www.linkedin.com/in/pravesh-chaudhary-688a3235b/
                </p>
              </div>
            </div>
            <div className="border-1 border-gray-200 mt-2"></div>

            <div className="flex flex-row items-center gap-2 pt-2 pl-1">
              <div>
                <SiLeetcode className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-semibold">Leetcode</p>
                <p className="text-sm text-gray-500">
                  https://leetcode.com/u/Bh3NAfaoZT/
                </p>
              </div>
            </div>
            <div className="border-1 border-gray-200 mt-2"></div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
