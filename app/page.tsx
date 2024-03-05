import Image from "next/image";
import Tabs from "./components/tabs";

export default function Home() {
  return (
    <main className="bg-accent2 overflow-hidden px-4 lg:px-0">
      <div className="absolute hidden lg:block top-0 right-0 w-[322px] h-[308px] rounded-full background-gradient blur-[150px] -mt-[5%] -mr-[5%]"></div>
      <section className="min-h-[calc(100vh-88px)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center container mx-auto">
        <div className="max-w-[600px]">
          <h2 className="text-4xl text-white mb-2 font-bold">I am Mohamad</h2>
          <h3 className="text-7xl mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">Senior Frontend Developer</h3>
          <p className="text-white text-xl mb-10">I specialize in building responsive and intuitive user interfaces, leveraging the latest web technologies.</p>
          <div className="flex items-center gap-4">
            <a href="/Mohamad_Sultan_CV.pdf" download className="text-primary py-3 px-8 border border-primary rounded-3xl hover:bg-primary hover:text-white transition-all mr-2 font-medium">Download CV</a>
            <a href="https://www.linkedin.com/in/mohamad-sultan/" target="_blank" className="text-primary group hover:text-white w-9 h-9 border border-primary rounded-full flex items-center justify-center relative transition-colors">
              <span className="z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">    <path fill="currentColor" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" /></svg>
              </span>
              <span className="absolute inset-0 w-full h-full bg-primary rounded-full z-0 scale-0 group-hover:scale-100 transition-transform"></span>
            </a>
            <a href="https://github.com/MSultan9" target="_blank" className="text-primary group hover:text-white w-9 h-9 border border-primary rounded-full flex items-center justify-center relative transition-colors">
              <span className="z-10">
                <svg width="20" height="20" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" /></svg>

              </span>
              <span className="absolute inset-0 w-full h-full bg-primary rounded-full z-0 scale-0 group-hover:scale-100 transition-transform"></span>
            </a>
          </div>
        </div>
        <div className="relative">
          <Image src="/sun.jpg" alt="logo" width={475} height={510}
            className="rotate-6 hover:rotate-0 mx-auto transition-all border-2 border-secondary hover:border-primary rounded-3xl object-cover max-h-[510px] z-10 relative"
          />
          <div className="absolute bottom-0 left-0 w-[220px] h-[220px] rounded-full background-gradient blur-[150px] -mb-[5%] -ml-[5%]"></div>
        </div>
        <div className="flex items-center flex-wrap text-white gap-20">
          <div className="flex items-center gap-2">
            <p className="text-6xl font-bold">5+</p>
            <div>
              <p>Years of</p>
              <p>Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-6xl font-bold">30+</p>
            <div>
              <p>Projects</p>
              <p>Completed</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" id="work">
        <div className="text-center text-white mb-10 max-w-[700px] mx-auto">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">My Recent Work</h2>
          <p>I have a proven track record of delivering high-quality, performant code and collaborating effectively with cross-functional teams.</p>
        </div>
        <Tabs />
      </section>
      <section className="py-20" id="resume">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40">
          <div>
            <h2 className="mb-10 text-5xl text-white">My Experience</h2>
            <div>
              <div className="rounded-3xl px-5 py-7 bg-accent mb-6">
                <div className="text-primary text-xl mb-2 font-bold">2021 - Present</div>
                <h3 className="text-white text-2xl font-bold mb-2">LEAD FRONTEND DEVELOPER</h3>
                <div className="text-white">Acksession LLC</div>
              </div>
              <div className="rounded-3xl px-5 py-7 bg-accent mb-6">
                <div className="text-primary text-xl mb-2 font-bold">2020 - 2021</div>
                <h3 className="text-white text-2xl font-bold mb-2">SENIOR FRONTEND DEVELOPER</h3>
                <div className="text-white">Bluedrop.fr</div>
              </div>
              <div className="rounded-3xl px-5 py-7 bg-accent mb-6">
                <div className="text-primary text-xl mb-2 font-bold">2019 - 2020</div>
                <h3 className="text-white text-2xl font-bold mb-2">FRONTEND DEVELOPER</h3>
                <div className="text-white">Arabia GIS</div>
              </div>
              <div className="rounded-3xl px-5 py-7 bg-accent">
                <div className="text-primary text-xl mb-2 font-bold">2019 - 2019</div>
                <h3 className="text-white text-2xl font-bold mb-2">JUNIOR FRONTEND DEVELOPER</h3>
                <div className="text-white">Rawa TV</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-10 text-5xl text-white">My Education</h2>
            <div>
              <div className="rounded-3xl px-5 py-7 bg-accent mb-6">
                <div className="text-primary text-xl mb-2 font-bold">2020</div>
                <h3 className="text-white text-2xl font-bold mb-2">JavaScript Algorithms and Data Structures</h3>
                <div className="text-white">freeCodeCamp</div>
              </div>
              <div className="rounded-3xl px-5 py-7 bg-accent mb-6">
                <div className="text-primary text-xl mb-2 font-bold">2020</div>
                <h3 className="text-white text-2xl font-bold mb-2">Responsive Web Design</h3>
                <div className="text-white">freeCodeCamp</div>
              </div>
              <div className="rounded-3xl px-5 py-7 bg-accent mb-6">
                <div className="text-primary text-xl mb-2 font-bold">2018</div>
                <h3 className="text-white text-2xl font-bold mb-2">JavaScript Fullstack Developer Bootcamp</h3>
                <div className="text-white">Cinemoz</div>
              </div>
              <div className="rounded-3xl px-5 py-7 bg-accent mb-6">
                <div className="text-primary text-xl mb-2 font-bold">2012 - 2017</div>
                <h3 className="text-white text-2xl font-bold mb-2">Telecommunications and Network Engineering</h3>
                <div className="text-white">Universite Antonine</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" id="skills">
        <div className="text-center text-white mb-10">
          <h2 className="text-5xl font-bold mb-4">My Skills</h2>
          <p>My work has contributed to the success of several high-traffic websites and applications.</p>
          <p>I'm passionate about creating accessible and inclusive digital experiences that push the boundaries of what's possible on the web.</p>
        </div>
        <div className="flex flex-wrap container mx-auto justify-center gap-5">
          <div className="bg-accent rounded-2xl p-5 text-white border border-transparent hover:bg-secondary hover:border-primary transition-colors text-center min-w-40">
            <svg fill="none" height="60" width="60" className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32" /><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25" /><g fill="#fff"><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" /></g></svg>
            <p className="text-xl">Javascript</p>
          </div>
          <div className="bg-accent rounded-2xl p-5 text-white border border-transparent hover:bg-secondary hover:border-primary transition-colors text-center min-w-40">
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4" viewBox="0 0 400 400" width="60" height="60"><path fill="#007acc" d="M0 200V0h400v400H0" /><path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" /></svg>
            <p className="text-xl">Typescript</p>
          </div>
          <div className="bg-accent rounded-2xl p-5 text-white border border-transparent hover:bg-secondary hover:border-primary transition-colors text-center min-w-40">
            <svg height="60" viewBox="175.7 78 490.6 436.9" width="60" className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" /><circle cx="420.9" cy="296.5" r="45.7" /></g></svg>
            <p className="text-xl">ReactJS</p>
          </div>
          <div className="bg-accent rounded-2xl p-5 text-white border border-transparent hover:bg-secondary hover:border-primary transition-colors text-center min-w-40">
            <svg height="60" preserveAspectRatio="xMidYMid" className="mx-auto mb-4" width="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stopColor="#2298bd" /><stop offset="1" stopColor="#0ed7b5" /></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)" /></svg>
            <p className="text-xl">Tailwind CSS</p>
          </div>
          <div className="bg-accent rounded-2xl p-5 text-white border border-transparent hover:bg-secondary hover:border-primary transition-colors text-center min-w-40">
            <svg viewBox="0 0 600 476.30000000000007" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4" width="60" height="60"><path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" fill="#00b0ff" /><path d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z" fill="#0081cb" /><path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff" /><path d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z" fill="#0081cb" /></svg>
            <p className="text-xl">Material UI</p>
          </div>
          <div className="bg-accent rounded-2xl p-5 text-white text-center border border-transparent hover:bg-secondary hover:border-primary transition-colors min-w-40">
            <svg width="60" height="60" viewBox="0 0 256 256" className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#DE4C36" /></svg>
            <p className="text-xl">Git</p>
          </div>
        </div>
      </section>
      <section className="py-20" id="contact">
        <div className="flex justify-center">
          <div className="p-10 rounded-3xl bg-accent">
            <h2 className="text-5xl font-bold text-white mb-4">Let's work together</h2>
            <form action="https://formspree.io/xrgeonpr" method="POST" className="flex flex-col text-white">
              <label htmlFor="name" className="mb-1">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" required className="p-2 text-white bg-black mb-2 border border-gray-600" />
              <label htmlFor="email" className="mb-1">Email</label>
              <input type="email" name="_replyto" id="email" placeholder="Email" required className="p-2 text-white bg-black mb-2 border border-gray-600" />
              <label htmlFor="message" className="mb-1">Message</label>
              <textarea name="message" id="message" placeholder="Message" cols={30} rows={10} className="p-2 text-white bg-black mb-5 border border-gray-600"></textarea>
              <button type="submit" value="Send" className="px-2 py-3 bg-primary rounded-3xl font-bold">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
