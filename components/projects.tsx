import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "TheNigerianProperties",
      description:
        "A comprehensive real estate platform connecting buyers, sellers, and renters across Nigeria. Features include property listings, virtual tours, and advanced search filters.",
      status: "Completed",
      technologies: ["NextJs/ReactJS", "Node.js", "MongoDB", "Flutterwave API", "JWT", "Paystack API"],
      image: "/theNigeriapropertiesimage.png",
      liveUrl: "https://www.thenigerianproperties.com",
      githubUrl: "https://github.com/bernard-ekoli/theNigerianPropertiesFrontend.git",
    },
    {
      title: "Ekmark",
      description:
        "A full-stack SaaS product built with Next.js, Node.js/Express, TypeScript, and Firebase. Features bulk image watermarking, a public REST API, and a pre-launch waitlist system. Designed for speed, privacy, and zero cost to users no sign-up required, no limits, forever free.",
      status: "Completed",
      technologies: ["NextJs/ReactJS", "Node.js/Express", "TypeScript", "Firebase"],
      image: "/ekmark-image.png",
      liveUrl: "https://ekmark.ekolix.com.ng",
      githubUrl: "https://github.com/bernard-ekoli/ekmark-frontend.git",
    },
    {
      title: "EkolisPay",
      description:
        "A fintech platform giving freelancers easy access to Naira and Dollar accounts, built on top of licensed banking rails (Fincra, Wema Bank, Flutterwave). Non-custodial payment orchestration layer with a backend ledger, virtual account issuance, and webhook-driven balance updates no funds held directly, just a fast, simple interface over compliant infrastructure.",
      status: "In Development",
      technologies: ["NextJs/ReactJS", "Node.js/Express", "TypeScript", "PostgreSQL"],
      image: "/ekolispay.png",
      liveUrl: "https://ep.ekolix.com.ng",
      githubUrl: "https://github.com/bernard-ekoli/ekolispay-frontend",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from fintech solutions to neural labs innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "default"
                        : project.status === "In Development"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
