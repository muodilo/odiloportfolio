'use client';

import { experiences } from '@/data/experiences';

export default function Experience() {
  return (
    <section className="py-20 px-5 md:px-16 lg:px-32">
      <div className="">

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="text-teal-500">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg">
            My professional journey and key achievements throughout my career spanning 5 years.
          </p>
        </div>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-1 bg-teal-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-20">
            
                <div className="absolute left-0 top-2 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

             
                <div className="bg-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {exp.title}
                      </h3>
                      <p className="text-teal-500 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                 
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                 
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 text-sm flex items-start gap-3"
                      >
                        <span className="text-teal-500 font-bold mt-1">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
