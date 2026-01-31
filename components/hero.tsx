"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src="/developer-image.jpeg"
              alt="Bernard Edet Ekoli"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground">Bernard Edet Ekoli</h1>
            <p className="font-serif text-xl md:text-2xl text-primary font-semibold">Full-Stack Software Engineer</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building technology that works for real people in real time. I turn ideas into products, from
              pixel-perfect interfaces to rock-solid backends.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToProjects} className="font-medium">
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.github.com/bernard-ekoli" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/bernard-ekoli-b03a1a301" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:bernardekolisocial@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
