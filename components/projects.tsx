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
      liveUrl: "https://www.thenigerianproperties.com/",
      githubUrl: "https://github.com/bernard-ekoli/theNigerianPropertiesFrontend.git",
    },
    {
      title: "EkolisPay",
      description:
        "A next-generation mobile wallet experience for fast, secure, and global transactions. Currently in development with advanced security features and intuitive user experience.",
      status: "In Development",
      technologies: ["NextJs/ReactJS", "Node.js", "MongoDB", "Flutterwave API", "JWT", "Fincra API", "ConnectBridge VTU API"],
      image: "/ekolispay-site.png",
      liveUrl: "https://ekolis-pay.vercel.app/",
      githubUrl: "https://github.com/bernard-ekoli/ekolis-pay.git",
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
