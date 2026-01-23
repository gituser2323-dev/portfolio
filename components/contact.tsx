"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/data"
import { Mail, Calendar, Linkedin, Github, Youtube, Instagram, ArrowRight, Send } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
              Let&apos;s work together
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Have a project in mind, need mentorship, or want to invite me to speak? 
              I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-7">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2.5"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2.5"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2.5"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-5">
              {/* Book a Call CTA */}
              <Card className="border-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5">
                <CardContent className="p-7">
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-primary/20 text-primary">
                      <Calendar size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Prefer a call?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-5">
                        Book a free 15-minute discovery call to discuss your goals.
                      </p>
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Link href={siteConfig.calendarLink} target="_blank">
                          Book via Calendar
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border border-border/50 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <Link
                        href={`mailto:${siteConfig.email}`}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {siteConfig.email}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border border-border/50 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-5">
                    Connect with me
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      className="p-3.5 rounded-xl border border-border/50 bg-card/50 hover:bg-primary hover:border-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </Link>
                    <Link
                      href={siteConfig.social.github}
                      target="_blank"
                      className="p-3.5 rounded-xl border border-border/50 bg-card/50 hover:bg-primary hover:border-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href={siteConfig.social.youtube}
                      target="_blank"
                      className="p-3.5 rounded-xl border border-border/50 bg-card/50 hover:bg-primary hover:border-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                      aria-label="YouTube"
                    >
                      <Youtube size={20} />
                    </Link>
                    <Link
                      href={siteConfig.social.instagram}
                      target="_blank"
                      className="p-3.5 rounded-xl border border-border/50 bg-card/50 hover:bg-primary hover:border-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
