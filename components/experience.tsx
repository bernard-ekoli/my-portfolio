import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "EkolisPay",
      role: "Founder & Full-Stack Developer",
      period: "Launching October 2025",
      type: "Upcoming",
      description:
        "Creating a next-generation digital wallet experience with focus on fast, secure, and global transactions. Handling all aspects from UI/UX to backend infrastructure.",
      achievements: [
        "Built high-conversion landing page",
        "Developed secure admin dashboard",
        "Architected mobile wallet application",
        "Implemented advanced security features",
      ],
      technologies: ["React Native", "Next.js", "Node.js", "MongoDB", "JWT", "Flutterwave API", "Fincra API", "Paystack API", "ConnectBridge VTU API"],
    },
    {
      company: "Freelance & Contract Work",
      role: "Full-Stack Software Engineer",
      period: "2022 - Present",
      type: "Current",
      description:
        "Delivering custom web applications and digital solutions for various clients. Specializing in modern web technologies and scalable architectures.",
      achievements: [
        "Delivered 5+ successful projects",
        "Maintained 100% client satisfaction rate",
        "Specialized in React, Next.js, and Express.js",
        "Built responsive, high-performance applications",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and leading technical initiatives
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Building className="h-5 w-5 text-primary" />
                        <h3 className="font-serif text-xl font-semibold text-foreground">{exp.company}</h3>
                        <Badge
                          variant={
                            exp.type === "Current" ? "default" : exp.type === "Upcoming" ? "secondary" : "outline"
                          }
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span>{exp.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed">{exp.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:w-80 space-y-3">
                    <h4 className="font-medium text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
