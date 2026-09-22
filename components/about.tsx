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

        <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
          <p className="text-lg leading-relaxed text-foreground">
            I'm Bernard Edet Ekoli, a self-taught full-stack software engineer based in Abuja, Nigeria. I've been building software since I was 14 and have spent the last 4+ years turning ideas and real requirements into production applications.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            I work across the stack, from building responsive interfaces with React and Next.js to designing APIs, handling databases and business logic, and getting applications deployed and running in production. I enjoy taking ownership of a feature or product from the initial idea through implementation and deployment.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            I'm currently expanding into AI application engineering and learning how to build useful AI features with LLM APIs, LangChain, RAG, and related tooling. I'm open to remote full-time, contract, and freelance opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
