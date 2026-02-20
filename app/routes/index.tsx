import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CaseStudyCard } from "@/components/case-study-card";
import {
  PersonalProjectCard,
  FittedInDiagram,
  MyFlixDiagram,
  SectionHeader,
} from "@/components/personal-project-card";
import { Philosophy } from "@/components/philosophy";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const caseStudies = [
  {
    title: "Rapid Telehealth MVP Deployment",
    subtitle: "We Lysn \u2022 2024 - Present",
    badgeText: "MVP Launch in 2 Sprints",
    badgeVariant: "green" as const,
    challenge:
      "A mental health startup needed to move from concept to a functional workplace wellbeing platform within a highly compressed timeframe to validate the market.",
    solution:
      "Architected the frontend using <strong>Next.js, tRPC, and Supabase</strong>. Collaborated in a 'feature trio' to drive rapid discovery and deployment of core telehealth features.",
    tradeOffs: [
      {
        decision: "Direct Database-to-Frontend Pipeline",
        productBenefit: "Eliminate API layer maintenance for faster shipping",
        techTradeOff: "Coupled deployment cycle",
      },
      {
        decision: "Continuous UI/UX Iteration",
        productBenefit:
          "Allowed technical execution to pivot instantly based on user feedback",
        techTradeOff:
          "Increased refactoring frequency during early discovery phases",
      },
    ],
  },
  {
    title: "Marketplace Performance & Reliability",
    subtitle: "Glints \u2022 2022 - 2024",
    badgeText: "Optimized Web Vitals",
    badgeVariant: "blue" as const,
    challenge:
      "The marketplace platform required better search visibility and extreme reliability to serve millions of career-seekers across Southeast Asia.",
    solution:
      "Optimized <strong>Next.js performance</strong> for SEO and integrated <strong>Cypress/Playwright</strong> E2E testing into CI/CD to eliminate critical post-deployment regressions.",
    tradeOffs: [
      {
        decision: "Design System Maintenance",
        productBenefit:
          "Ensured UI consistency and boosted team shipping velocity",
        techTradeOff: "Ongoing overhead to maintain styled-components library",
      },
      {
        decision: "Automated E2E Testing",
        productBenefit:
          "Reduced critical production bugs, protecting brand trust",
        techTradeOff: "Increased CI/CD pipeline execution time",
      },
    ],
  },
  {
    title: "Cloud Migration & UI Unification",
    subtitle: "Nintex \u2022 2020 - 2022",
    badgeText: "+ Client Conversion",
    badgeVariant: "green" as const,
    challenge:
      "Facilitating complex client transitions from legacy O365 to proprietary cloud systems was a manual bottleneck slowing down revenue growth.",
    solution:
      "Engineered a <strong>Node.js and NestJS-based migration tool</strong> to automate transitions while unifying UI/UX across multiple product suites using React and Angular.",
    tradeOffs: [
      {
        decision: "Automated Migration Tooling",
        productBenefit:
          "Lowered barrier for legacy customers to adopt new cloud systems",
        techTradeOff:
          "High initial development cost to handle legacy data edge-cases",
      },
      {
        decision: "WCAG Accessibility Audit",
        productBenefit:
          "Ensured legal compliance and inclusivity for global users",
        techTradeOff:
          "Required significant refactoring of legacy component architecture",
      },
    ],
  },
];

const personalProjects = [
  {
    title: "Fitted In",
    badges: [
      { text: "AI Agents Orchestrations", variant: "primary" as const },
      { text: "LLM Streaming", variant: "muted" as const },
    ],
    description:
      "A distributed AI pipeline optimized for <strong>zero-latency document synthesis</strong>. By fanning out resume processing to parallel agents, the system aggregates a tailored profile in real-time, streaming <strong>formatted Markdown</strong> directly to a copy-ready workspace for immediate use in Google Docs or Word.",
    features: [],
    githubUrl: "https://github.com/marthaya-putra/fitted-in",
    diagram: <FittedInDiagram />,
  },
  {
    title: "My Flix",
    badges: [
      { text: "Affinity Engine", variant: "primary" as const },
      { text: "Stateful UI", variant: "muted" as const },
    ],
    description:
      "A media discovery engine focused on the <strong>Reciprocal Loop</strong> of user behavior. By weighting sentiment across movie metadata, the system recursively updates a local preference state to re-rank search results and prune discovery feeds, ensuring the interface evolves with the user.",
    features: [
      {
        title: "Sentiment Graphing",
        description:
          "Links user 'Likes/Dislikes' to specific TMDB entities (Actors, Genres, Directors).",
        color: "primary" as const,
      },
      {
        title: "Discovery Pruning",
        description:
          "Implicitly removes content from discovery lists based on cumulative negative affinity scores.",
        color: "destructive" as const,
      },
    ],
    githubUrl: "https://github.com/marthaya-putra/my-flix",
    diagram: <MyFlixDiagram />,
  },
];

function HomePage() {
  return (
    <div className="bg-background text-foreground leading-relaxed min-h-screen">
      <Navbar />

      <Hero />

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <section id="case-studies" className="space-y-16">
          <SectionHeader>Selected Impacts</SectionHeader>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </section>

        <section id="personal-projects" className="mt-24 space-y-16">
          <SectionHeader>Personal Projects</SectionHeader>
          {personalProjects.map((project) => (
            <PersonalProjectCard key={project.title} {...project} />
          ))}
        </section>

        <Philosophy />
      </main>

      <Footer />
    </div>
  );
}
