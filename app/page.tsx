import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  Code,
} from "lucide-react";
import TelegramIcon from "../public/telegram.svg";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  // GitHub repositories data
  const githubRepos = [
    {
      name: "AI Image generation",
      description:
        "This is part of a larger project that I was working on. It is a toolkit for creating and managing AI images. This code here is the code for the image generation. I used a open source project call ai-toolkit to build upon.",
      url: "https://github.com/hexlivelive/ai-toolkit",
      language: "Python",
    },
    {
      name: "NFT Marketplace Smart Contracts",
      description:
        "In this project I created the smart contracts for a NFT marketplace using thirdweb. The thirdweb smart contract had to be heavily modified to fit the needs of the marketplace. Foundry was used to aid in this development. I also have 100% test coverage for the contracts that I wrote. Main work was done here https://github.com/mintra-marketplace/thirdweb_contracts/blob/main/contracts/prebuilts/marketplace/direct-listings/MintraDirectListings.sol",
      url: "https://github.com/mintra-marketplace",
      language: "Solidity",
    },
    {
      name: "Go Pulse MEV",
      description:
        "This is a augmented ethereum geth client that lets you order the transaction with you client wins a block. This is not complete but I was able to create a way to order transactions as you like. I also added a feature that allows you to prioritize transactions based on your needs.",
      url: "https://github.com/pborgen/go-pulse-mev",
      language: "Go",
    },
    {
      name: "Python Ethereum Data Analysis with Dask and Pandas",
      description:
        "Project to analyze ethereum data using python, pandas and dask.",
      url: "https://github.com/pborgen/ethdataanalyze",
      language: "Python",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl">
              <Link href="/">Paul Borgen</Link>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/PaulBorgenResume_2025.pdf"
              target="_blank"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Resume
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#github"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/pborgen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/hexlivelive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/paulborgen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button className="hidden md:flex" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-4 md:py-6">
        {/* Hero Section */}
        <section
          id="about"
          className="py-6 md:py-8 lg:py-10 flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <div className="flex-1 space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              I'm Paul Borgen
              <span className="block text-primary">Software Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Results-driven experienced CTO and lead software engineer with a
              strong background at all layers of the software stack.
            </p>
            <p className="text-xl text-muted-foreground">
              Proven ability to lead technical teams in developing innovative
              solutions, with a focus on driving strategy and operational
              efficiency. Skilled in software design, testing, and project
              execution, ensuring timely delivery of high-quality solutions.
              Adept at working with diverse teams, building strong relationships
              with stakeholders, and delivering customer-focused outcomes.
              Seeking a leadership role that combines technical expertise with
              hands-on involvement.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="/PaulBorgenResume_2025.pdf"
                  target="_blank"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Resume
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end p-8">
            <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden">
              <Image
                src="/personal/Headshot-min-min-2.png"
                alt="Paul Borgen"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks to
              create robust applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>AI & Development Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Claude Code</Badge>
                  <Badge>Claude API</Badge>
                  <Badge>OpenAI API</Badge>
                  <Badge>LLM Integration</Badge>
                  <Badge>AI-Assisted Development</Badge>
                  <Badge>Prompt Engineering</Badge>
                </div>
                <p className="text-muted-foreground">
                  Leveraging AI tools like Claude Code for accelerated
                  development, code review, and building AI-powered
                  applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Go</Badge>
                  <Badge>Typescript</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Python</Badge>
                  <Badge>Java</Badge>
                  <Badge>Bash</Badge>
                  <Badge>C++</Badge>
                  <Badge>C</Badge>
                </div>
                <p className="text-muted-foreground">
                  Developing scalable server-side applications and APIs with a
                  focus on performance and security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Storage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>MongoDB</Badge>
                  <Badge>Postgres</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Oracle</Badge>
                  <Badge>Redis</Badge>
                  <Badge>DragonFly</Badge>
                  <Badge>Dask</Badge>
                  <Badge>Parquet</Badge>
                </div>
                <p className="text-muted-foreground">
                  May different ways to store your data. I have experience with
                  many different types of databases and storage solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub Actions</Badge>
                  <Badge>GitLab</Badge>
                  <Badge>GitLab Pipelines</Badge>
                  <Badge>Jenkins</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>CI/CD</Badge>
                </div>
                <p className="text-muted-foreground">
                  Some of the DevOps type tools I have been exposed to.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>NextJS</Badge>
                  <Badge>NestJs</Badge>
                  <Badge>Spring</Badge>
                  <Badge>Hibernate</Badge>
                  <Badge>ESAPI</Badge>
                  <Badge>Maven</Badge>
                  <Badge>Gradle</Badge>
                  <Badge>Express</Badge>
                  <Badge>React</Badge>
                </div>
                <p className="text-muted-foreground">
                  Some of the frameworks I use and have used.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blockchain</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Foundry</Badge>
                  <Badge>Hardhat</Badge>
                  <Badge>Solidity</Badge>
                  <Badge>ABI's</Badge>
                  <Badge>Data Pipelines</Badge>
                </div>
                <p className="text-muted-foreground">
                  I have experience with blockchain development and have
                  developed a NFT marketplace. As well as various data retrieval
                  and analysis tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and personal projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card key="mintra" className="overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={`/mintra.png?height=192&width=384`}
                  alt={`Mintra`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Mintra Marketplace</CardTitle>
                <CardDescription>
                  "NFT Marketplace build from the ground up. No fork required."
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex justify-between">
                <Button size="sm" asChild>
                  <Link
                    href="https://app.mintra.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="#">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* GitHub Repositories Section */}
        <section id="github" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              GitHub Repositories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open source projects and contributions I've made to the developer
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {githubRepos.map((repo, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Github className="h-5 w-5 text-primary" />
                        <Link
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {repo.name}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {repo.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{repo.language}</Badge>
                  </div>
                </CardHeader>
                <CardFooter className="pt-2 flex justify-between text-sm text-muted-foreground">
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Code className="h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the companies I've worked with.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                role: "AI Principal Software Engineer",
                company: "Alopex Health",
                period: "2025 - Present",
                languages: "AI, LLM, GoLang, Typescript",
                description:
                  "Leveraging AI and LLMs to build the next generation of medical systems.",
              },
              {
                role: "CTO / Lead Software Engineer",
                company: "Mintra Marketplace",
                period: "2021 - 2025",
                languages: "Solidity, Go, Typescript",
                description:
                  "Built a NFT marketplace with a great team from the ground up.",
              },
              {
                role: "Lead Software Engineer",
                company: "Precision Point Systems",
                period: "2020 - 2021",
                languages: "Go, Python, C++, C#, Javascript",
                description:
                  "Development a system to track a football in real time during games. This was done using a combination of computer vision and machine learning.",
              },
              {
                role: "Advanced Software Engineer",
                company: "Honeywell",
                period: "2016 - 2020",
                languages: "Java, Javascript, Python",
                description:
                  "Big Data analysis / DevOps / Full Stack Development",
              },
              {
                role: "Senior Software Engineer",
                company: "Honeywell",
                period: "2012 - 2016",
                languages: "Java, Javascript, Python",
                description: "Full Stack Development / Security / DevOps ",
              },
            ].map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.role}</CardTitle>
                      <CardDescription className="text-lg">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link
                href="/PaulBorgenResume_2025.pdf"
                target="_blank"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Download Resume
              </Link>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 border-t">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you.
            </p>
          </div>

          <div className="flex justify-center max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <Link href="mailto:pborgennc@gmail.com">
                    pborgennc@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link
                    href="https://linkedin.com/in/paulborgen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/paulborgen
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <Link
                    href="https://github.com/pborgen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/pborgen
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <Link
                    href="https://github.com/hexlivelive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/hexlivelive
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Paul Borgen. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image
                src="/claude-logo.svg"
                alt="Claude"
                width={16}
                height={16}
              />
              <span className="text-xs text-muted-foreground">Built with Claude Code</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-gray-500 hover:text-blue-500"
            >
              <Link
                href="https://github.com/pborgen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-gray-500 hover:text-blue-500"
            >
              <Link
                href="https://github.com/hexlivelive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/paulborgen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:pborgennc@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
