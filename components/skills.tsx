import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "AWS", level: 70 },
        { name: "API Integration", level: 95 },
      ],
    },
  ]

  const additionalSkills = [
    "React Native",
    "REST APIs",
    "JWT Authentication",
    "Responsive Design",
    "Performance Optimization",
    "SEO",
    "Testing (Jest)",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My toolkit spans modern web technologies with a focus on performance and user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-serif text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl text-center">Additional Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {additionalSkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
