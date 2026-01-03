import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jaiganesh Lakshmanan",
  initials: "JG",
  url: "https://jaiganesh.vercel.app",
  location: "Kovalam, Chennai",
  locationLink: "https://www.google.com/maps/place/kovalam",
  description:
    "Cybersecurity Engineer → Entrepreneur. I build secure tech, create learning platforms, and help people grow in cybersecurity. Founder of Secure Worldz",
  summary:
    "I’m a technology enthusiast with a strong interest in cybersecurity, driven by curiosity about how systems work and how they can be protected from real-world threats. Over time, I’ve explored multiple domains ranging from software development and networking to offensive and defensive security, which gave me practical exposure to the industry. As the Founder & CEO of [Secure Worldz](https://secureworldz.vercel.app), whether it’s building secure solutions, guiding others, or consulting on security and technology, I’m always focused on creating something impactful.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Penetration Testing",
    "Security Training",
    "Tools development",
    "Vulnerability Assessment",
    "Security Code Review",
    "Programming",
    "Development with AI",
    "Web Technology with Testing"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "info.secureworldz@gmail.com",
    tel: "+918754419387",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jaiganeshtech/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jaiganeshlakshmanan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Cyberjaitech",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@jai_tech1",
        icon: Icons.youtube,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/thecyberjai",
        icon: Icons.instagram,
        navbar: true,
      },
      calander: {
        name: "Calander",
        url: "https://cal.com/jaiganesh-lakshamanan-meet",
        icon: Icons.calander,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Secure Worldz",
      href: "https://secureworldz.vercel.app",
      badges: [],
      location: "Remote",
      title: "Chief Executive Officer",
      logoUrl: "/secureworldz.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Malware Research",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Malware research is the defensive practice of safely studying malicious software to understand how it works. By analyzing its behavior in a secure, isolated lab, security experts can develop better tools and strategies to protect networks and individuals. The goal is to turn a threat into actionable intelligence, ultimately strengthening our digital defenses.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "SQL Injection Tester",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A simple tool to safely detect SQL Injection vulnerabilities in web apps. It helps identify weak points where user input can manipulate database queries, risking data leaks or unauthorized access. Perfect for developers and testers to find and fix SQLi issues quickly and securely.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Information Gathering & Recon Toolkit",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This is a lightweight information gathering tool I built to automate the recon phase during ethical hacking, bug bounty hunting, or security assessments. It helps quickly map out a target's external attack surface by pulling public data like subdomains, DNS records, and open ports.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
