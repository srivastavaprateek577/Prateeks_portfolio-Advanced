import { FaDiscord, FaGithub, FaMapPin, FaJava, FaAws, FaDocker, FaLinux, FaGitAlt } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";
import { SiSpringboot, SiHibernate, SiMysql, SiRedis, SiGithubactions, SiPostman, SiIntellijidea, SiSwagger } from "react-icons/si";

export const config = {
    developer: {
        name: "Prateek Srivastava",
    },
    social: {
        github: "srivastavaprateek577",
        linkedin: "prateek-srivastava-30973a248",
        email: "Srivastavaprateek577@gmail.com"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Journal App",
            description: "A journal management system where users can create, update, delete, and organize journal entries with sentiment detection. Includes authentication, database persistence, and fully documented REST APIs.",
            image: "/projects/project-1.webp",
            technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST API", "Swagger"],
            github: "https://github.com/srivastavaprateek577/journalApp",
            demo: "#"
        },
        {
            id: 2,
            title: "Job Application Tracking System",
            description: "A backend-driven system that helps users track job applications, statuses, companies, follow-ups, deadlines, and notes—all managed through a clean REST API backend.",
            image: "/projects/project-2.webp",
            technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "PostgreSQL", "REST API"],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Smart Task AI Manager",
            description: "An AI-powered task management system that intelligently categorizes tasks, assigns priorities, sends reminders, and generates productivity insights using LLM-based APIs.",
            image: "/projects/project-3.webp",
            technologies: ["Java", "Spring Boot", "MongoDB", "SQL", "AI API Integration"],
            github: "#",
            demo: "#"
        }
    ],
    skills: [
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Java", level: "Advanced", hot: true, icon: <FaJava /> },
                { name: "Spring Boot", level: "Advanced", hot: true, icon: <SiSpringboot /> },
                { name: "Hibernate / JPA", level: "Advanced", icon: <SiHibernate /> },
                { name: "MySQL", level: "Advanced", icon: <SiMysql /> },
                { name: "Redis", level: "Intermediate", icon: <SiRedis /> }
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: <HiCube />,
            description: "Deployment & Infrastructure",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "AWS", level: "Intermediate", hot: true, icon: <FaAws /> },
                { name: "Docker", level: "Intermediate", icon: <FaDocker /> },
                { name: "Linux", level: "Intermediate", icon: <FaLinux /> },
                { name: "GitHub Actions", level: "Intermediate", icon: <SiGithubactions /> }
            ]
        },
        {
            title: "Tools",
            icon: <HiCode />,
            description: "Development Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Git & GitHub", level: "Expert", hot: true, icon: <FaGitAlt /> },
                { name: "Postman", level: "Advanced", icon: <SiPostman /> },
                { name: "IntelliJ IDEA", level: "Expert", icon: <SiIntellijidea /> },
                { name: "Swagger", level: "Advanced", icon: <SiSwagger /> }
            ]
        }
    ],
    experiences: [
        {
            position: "Full-Stack Developer Intern",
            company: "Cognifyz Technologies",
            period: "July 2024 – September 2024",
            location: "Remote",
            description: "Built and maintained backend modules using Java and Spring Boot. Designed REST API endpoints and implemented CRUD operations.",
            responsibilities: [
                "Designed REST API endpoints and implemented CRUD operations",
                "Managed database schema design and wrote optimized SQL queries",
                "Collaborated using Git/GitHub and participated in code reviews",
                "Worked in an Agile workflow and contributed to debugging and performance improvements"
            ],
            technologies: ["Java", "Spring Boot", "MySQL", "Git", "REST API"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@srivastavaprateek577",
            link: "https://github.com/srivastavaprateek577"
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "Srivastavaprateek577@gmail.com",
            link: "mailto:Srivastavaprateek577@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}