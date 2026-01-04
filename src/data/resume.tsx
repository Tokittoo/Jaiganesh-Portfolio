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
      company: "Founder & CEO",
      href: "https://secureworldz.vercel.app",
      badges: [],
      location: "Remote",
      title: "Secure Worldz",
      logoUrl: "/companies/SW.jpg",
      start: "2024",
      end: "Present",
      description:
        "Founded and leading a cybersecurity-focused venture delivering secure technology solutions, tools, and learning platforms. Designed and developed security-driven applications and frameworks across software and cybersecurity domains. Conduct cybersecurity training, mentorship programs, and community initiatives for students and professionals. Provide consulting on secure system architecture, threat analysis, and best security practices. Lead project planning, product strategy, and technical decision-making.",
    },
    {
      company: "Cybersecurity Engineer / Security Researcher",
      href: "https://secureworldz.vercel.app",
      badges: [],
      location: "Remote",
      title: "Independent / Projects-based",
      logoUrl: "/secureworldz.png",
      start: "2024",
      end: "Present",
      description:
        "Worked across offensive and defensive security including vulnerability assessment, penetration testing, and system hardening. Built hands-on projects in networking, web security, and automation using Python and modern technologies.Researched real-world attack vectors and mitigation strategies aligned with industry standards.",
    },
    {
      company: "Cybersecurity Trainer & Tech Speaker",
      href: "https://secureworldz.vercel.app",
      badges: [],
      location: "Remote",
      title: "Independent / Secure Worldz",
      logoUrl: "/companies/SW.jpg",
      start: "2024",
      end: "Present",
      description:
        "Delivered hands-on cybersecurity training and technical workshops to 1000+ students across colleges and institutions. Invited as a Chief Guest and Guest Speaker for technical events, seminars, and cybersecurity awareness programs. Conducted sessions on cybersecurity fundamentals, ethical hacking, career guidance, and real-world security practices. Collaborated with educational institutions and communities to promote cybersecurity awareness and skill development.",
    },
    {
      company: "Cybersecurity Mentor & Community Lead",
      href: "https://secureworldz.vercel.app",
      badges: [],
      location: "Remote",
      title: "Secure Worldz",
      logoUrl: "/companies/SW.jpg",
      start: "2024",
      end: "Present",
      description:
        "Mentored students and early-career professionals in cybersecurity, networking, and secure development practices. Built and managed a growing cybersecurity community through workshops, live sessions, and online platforms. Guided learners on career paths, certifications, hands-on labs, and real-world security exposure. Actively supported learners by sharing industry insights, practical knowledge, and project guidance.",
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
        "Malware research is the defensive practice of safely studying malicious software to understand how it works.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "SQL Injection Tester",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A simple tool to safely detect SQL Injection vulnerabilities in web apps.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Information Gathering & Recon Toolkit",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This is a lightweight information gathering tool I built to automate the recon phase during ethical hacking, bug bounty hunting, or security assessments.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Drago — Founder & Product Lead",
      href: "https://dragotool.shop",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A marketplace for real-world technology and cybersecurity products built by practitioners and engineers who work with technology every day.",
      technologies: [
        "Vue.js",
        "Typescript",
        "TailwindCSS",
        "React",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://dragotool.shop",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Drago.png",
    },
    {
      title: "ProWorldz — Platform Description",
      href: "https://dragotool.shop",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "ProWorldz is a professional technology and cybersecurity ecosystem focused on practical learning, real-world skills, and industry exposure.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://dragotool.shop",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Drago.png",
    }
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
