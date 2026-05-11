import { Card, CardContent } from "@/components/ui/card"
import { Code, Rocket, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions that make a real impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I'm Bernard Edet Ekoli, a full-stack developer from Abuja, Nigeria.
              I've been coding since I was 14, and this year I got serious.
              I recently built and deployed TheNigeriaProperties.com, a full stack
              property listing platform for Nigerian real estate, and I'm currently
              building a watermark SaaS API for developers.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              I write clean code, communicate clearly, and ship on time.
              Currently open to remote opportunities and freelance projects.
            </p>
          </div>

          {/* Right column - cards */}
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg">Clean Code</h3>
                    <p className="text-muted-foreground">
                      Writing maintainable, scalable code that stands the test of time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg">Innovation</h3>
                    <p className="text-muted-foreground">
                      Turning complex requirements into intuitive, user-friendly products
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg">Real Impact</h3>
                    <p className="text-muted-foreground">
                      Building technology that works for real people in real time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
