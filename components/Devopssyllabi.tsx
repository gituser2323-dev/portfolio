"use client";
import { motion } from "framer-motion";


const roadmap = [
  {
    phase: "01",
    title: "Web & Linux Foundations",
    modules: [
      "How Web Applications Work (Client-Server Architecture)",
      "HTTP/HTTPS Protocol Deep Understanding",
      "Linux Basics & Command Line Essentials",
      "File System, Permissions & Process Management",
      "Networking Fundamentals (DNS, IP, Ports)",
      "Shell Scripting Basics",
      "Package Managers & System Utilities",
      "Basic Troubleshooting Techniques",
      "Environment Setup for DevOps",
      "Version Control with Git & GitHub",
      "Branching Strategy & Collaboration Workflow",
      "Basic CI/CD Concepts",
    ],
  },
  {
    phase: "02",
    title: "Programming for DevOps",
    modules: [
      "Python / Bash Scripting for Automation",
      "File Handling & System Automation Scripts",
      "API Interaction using Scripts",
      "Error Handling & Logging in Scripts",
      "Automation of Repetitive Tasks",
      "JSON / YAML Handling",
      "Process Automation Concepts",
      "Environment Variables & Config Management",
      "Basic System Monitoring Scripts",
      "Infrastructure as Code Basics",
      "Script Optimization Techniques",
      "Debugging Automation Scripts",
    ],
  },
  {
    phase: "03",
    title: "Cloud Fundamentals",
    modules: [
      "Introduction to Cloud Computing (IaaS, PaaS, SaaS)",
      "AWS Core Services Overview",
      "EC2, S3, IAM Deep Dive",
      "VPC & Networking in Cloud",
      "Load Balancer Concepts",
      "Auto Scaling Groups",
      "Cloud Security Basics",
      "Storage Types & Management",
      "Cloud Cost Optimization",
      "Cloud Architecture Design Principles",
      "High Availability & Fault Tolerance",
    ],
  },
  {
    phase: "04",
    title: "Containerization & Orchestration",
    modules: [
      "Docker Architecture & Components",
      "Container vs Virtual Machine",
      "Docker Images & Containers",
      "Dockerfile Creation & Optimization",
      "Docker Compose for Multi-Container Apps",
      "Kubernetes Architecture Overview",
      "Pods, Deployments & Services",
      "ConfigMaps & Secrets Management",
      "Scaling & Load Balancing in K8s",
      "Cluster Management Basics",
      "Container Security Best Practices",
    ],
  },
  {
    phase: "05",
    title: "CI/CD Pipelines",
    modules: [
      "CI/CD Pipeline Concepts",
      "Jenkins Setup & Configuration",
      "GitHub Actions Workflows",
      "Automated Build & Test Pipelines",
      "Deployment Strategies (Blue-Green, Rolling)",
      "Pipeline Security Practices",
      "Artifact Management",
      "Rollback Strategies",
      "Integration with Docker & Kubernetes",
      "Monitoring Pipeline Failures",
    ],
  },
  {
    phase: "06",
    title: "Infrastructure as Code",
    modules: [
      "Terraform Basics & Architecture",
      "Writing Infrastructure Templates",
      "Provisioning Cloud Resources",
      "State Management in Terraform",
      "Modules & Reusability",
      "Infrastructure Automation Workflows",
      "Ansible Configuration Management",
      "Playbooks & Inventory Management",
      "Server Provisioning Automation",
      "Multi-Environment Deployment Strategy",
    ],
  },
  {
    phase: "07",
    title: "Monitoring & Logging",
    modules: [
      "System Monitoring Concepts",
      "Prometheus Metrics Collection",
      "Grafana Dashboards",
      "Log Management with ELK Stack",
      "Application Performance Monitoring",
      "Alerting Systems Setup",
      "Incident Detection & Response",
      "Debugging Production Issues",
      "System Health Analysis",
      "Uptime & Reliability Metrics",
    ],
  },
  {
    phase: "08",
    title: "Capstone DevOps Projects",
    modules: [
      "CI/CD Pipeline for Full Stack App",
      "Dockerized Microservices Deployment",
      "Kubernetes Cluster Deployment",
      "Cloud Infrastructure Setup on AWS",
      "Auto Scaling Web Application",
      "Monitoring & Logging System Setup",
      "End-to-End DevOps Project Deployment",
      "Production Readiness Checklist",
      "Disaster Recovery Strategy",
      "Real-Time Industry Simulation Project",
    ],
  },
];



export default function DevopsSyllabi() {
  return (
    <section className="relative bg-black text-white py-20 md:py-28 overflow-hidden">

      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 md:mb-28 max-w-3xl"
        >
          <p className="text-[11px] tracking-[0.45em] text-white/40 uppercase mb-5">
            Full Stack Industry Ready Path
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Become a <span className="text-red-500">Professional Software </span> Professionals
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/15  pl-8 md:pl-14 space-y-16 md:space-y-24">

          {roadmap.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-[10px] md:-left-[60px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500 shadow-lg shadow-red-600/40" />

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/15  rounded-2xl p-6 md:p-8 hover:border-red-500/30 hover:shadow-[0_0_60px_rgba(255,0,0,0.08)] transition-all duration-500">

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                  <span className="text-3xl md:text-5xl text-white/10 font-semibold">
                    {item.phase}
                  </span>

                  <h3 className="text-lg md:text-2xl font-medium">
                    {item.title}
                  </h3>
                </div>

                {/* Modules */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {item.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-white/70 text-sm"
                    >
                      <div className="w-2 h-2 mt-1 rounded-full bg-red-500 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-28">
          <button className="px-8 md:px-10 py-3 md:py-4 bg-red-600 hover:bg-red-500 transition rounded-full font-medium text-sm md:text-base">
            Start Your Developement Journey
          </button>
        </div>

      </div>
    </section>
  )
}
