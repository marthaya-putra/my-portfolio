import type { ReactNode } from "react"
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
import globalsCss from "@/app/globals.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        // Chrome Origin Trial token — enables HTMLInCanvas on marthayaputra.xyz (+ subdomains). Expires ~2026-11-18.
        "http-equiv": "origin-trial",
        content:
          "Ao1vsyx6bXGH7HknX8YSIZ+xCnqAKIxHMZ9FBx1SirymRw5uU6C5XPdM5jz31A0QxCDOSFI607tD3WJU7h5PfwUAAABqeyJvcmlnaW4iOiJodHRwczovL21hcnRoYXlhcHV0cmEueHl6OjQ0MyIsImZlYXR1cmUiOiJIVE1MSW5DYW52YXMiLCJleHBpcnkiOjE3OTI0NTQ0MDAsImlzU3ViZG9tYWluIjp0cnVlfQ==",
      },
      {
        title: "Software Engineer & Product Strategist | Portfolio",
      },
      {
        name: "description",
        content:
          "I build systems that solve product problems. Software Engineer specializing in bridging the gap between complex technical constraints and business growth.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: globalsCss,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
