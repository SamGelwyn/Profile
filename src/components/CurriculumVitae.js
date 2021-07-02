import React from 'react'
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { jobs } from "../data";
import Accordion from './Accordian';

export default function CurriculumVitae() {
  return (
    <section id="curriculum-vitae" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Professional Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {jobs.map((job)=>(
            <Accordion
              title={job.title}
              company={job.company}
              content={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
