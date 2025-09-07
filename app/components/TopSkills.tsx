"use client";
import React from "react";
import { StickyScroll } from "./ui/stickyscroll";


const content = [
  {
    title: "LANGUAGES",
    description:
      `My approach to software development combines modern, type-safe programming . I use TypeScript to build robust, scalable, and error-resistant applications, leveraging its powerful type system to ensure code quality and maintainability. This focus on practical application is grounded in my deep expertise in Data Structures and Algorithms, which I've honed using C++. This background enables me to analyze complex problems and implement highly performant, memory-efficient solutions .`,
    img: (
      <div className="flex h-full w-full gap-10 items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="./typescript.svg"
          width={100}
          height={100}
          className=" object-cover"
          alt="linear board demo"
        />
        <img
          src="./c-plus-plus.webp"
          width={200}
          height={200}
          className="object-cover"
          alt="linear board demo"
        />
        <img
          src="./javascript-logo.webp"
          width={100}
          height={100}
          className="object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "FRONT-END DEVELOPMENT",
    description:
      "I build high-performance web applications with Next.js to leverage React's power for server-side rendering, ensuring optimal speed and SEO. This approach allows me to create applications that are not only incredibly fast but also highly discoverable by search engines.",
    img: (
      <div className="flex h-full w-full gap-10 items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="./icon-react.svg"
          width={100}
          height={100}
          className=" object-cover"
          alt="react"
        />
        <img
          src="./icon-next.svg"
          width={100}
          height={100}
          className="object-cover"
          alt="next.js"
        />
      </div>
    ),
  },
  {
    title: "BACKEND DEVELOPMENT",
    description:
      "I build robust and efficient backend services using Node.js and the Express framework. My expertise lies in creating secure and well-structured RESTful APIs to power web applications. I design these systems with scalability in mind, ensuring they can handle growing user traffic. To maintain high availability and security, I implement best practices in authentication and data protection. Additionally, I utilize WebSockets to enable real-time communication features, enhancing user engagement and interactivity within applications.",
    img: (
      <div className="flex h-full w-full items-center gap-5 justify-center text-white">
        <img
          src="/expresslogo.webp"
          width={150}
          height={100}
          className=" object-cover rounded-2xl"
          alt="express"
        />
        <img
          src="/nodejslogo.webp"
          width={150}
          height={100}
          className=" object-cover rounded-2xl"
          alt="nodejs"
        />
         <img
          src="/socket-io.svg"
          width={150}
          height={100}
          className=" object-cover rounded-2xl"
          alt="socket.io"
        />
         <img
          src="/redis.svg"
          width={150}
          height={100}
          className=" object-cover rounded-2xl"
          alt="redis"
        />
      </div>
    ),
  },
  {
    title: "DATABASE MANAGEMENT",
    description:
      "My expertise in database management covers both relational (SQL) and non-relational (NoSQL) systems, allowing me to architect the perfect data storage solution for any application. I am highly proficient with PostgreSQL , To interact with these databases, I use Prisma ORM to write type-safe, efficient, and maintainable queries. On the NoSQL side, I leverage MongoDB with Mongoose to handle flexible, unstructured data, providing the scalability needed for modern, dynamic applications .",
    img: (
      <div className="flex h-full w-full items-center gap-5 justify-center text-white">
        <img
          src="/posgress.svg"
          width={150}
          height={100}
          className=" object-cover rounded-2xl"
          alt="postgresql"
        />
        <img
          src="/icon-mongodb.svg"
          width={150}
          height={100}
          className=" object-cover rounded-2xl"
          alt="mongoose"
        />
      </div>
    ),
  },
  {
    title: "DevOps",
    description:
      "I have hands-on experience with DevOps practices to automate and streamline the entire software development lifecycle. I implement CI/CD pipelines using tools like GitHub Actions to automate building, testing, and deployment. I use Docker to create containerized environments, which I then manage and orchestrate at scale using Kubernetes. This ensures consistency, high availability, and fault tolerance across different stages—from development to production—and allows for rapid, reliable releases. My goal is to bridge the gap between development and operations to build and ship software faster and more efficiently.",
    img: (
      <div className="flex h-full w-full items-center gap-10 justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="./kubernetes.svg"
          width={150}
          height={150}
          className=" object-cover"
          alt="kubernetes"
        />
        <img
          src="./docker.svg"
          width={150}
          height={150}
          className=" object-cover rounded-2xl"
          alt="docker"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full h-screen py-4 bg-[#0f172a]">
      <StickyScroll content={content} />
    </div>
  );
}
