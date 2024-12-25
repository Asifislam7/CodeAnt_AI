'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Code2, FileCode, HelpCircle, Home, LogOut, Menu, PhoneCall, Plus, RefreshCw, Settings, Shield, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

interface Repository {
  name: string
  isPublic: boolean
  language: string
  size: string
  updatedAt: string
}

const repositories: Repository[] = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
]

export default function RepositoryDashboard() {
  const [isOpen, setIsOpen] = useState(false)

  const MobileNav = () => (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <FileCode className="w-6 h-6" />
          <div className="font-semibold">CodeAnt AI</div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4 border-b">
        <Button variant="ghost" className="w-full justify-start">
          UtkarshDhairyaPanwar
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="space-y-1 p-2">
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/10 text-primary"
            onClick={() => setIsOpen(false)}
          >
            <Home className="w-4 h-4" />
            Repositories
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
            onClick={() => setIsOpen(false)}
          >
            <Code2 className="w-4 h-4" />
            AI Code Review
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
            onClick={() => setIsOpen(false)}
          >
            <Shield className="w-4 h-4" />
            Cloud Security
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
            onClick={() => setIsOpen(false)}
          >
            <HelpCircle className="w-4 h-4" />
            How to Use
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="w-4 h-4" />
            Settings
          </Link>
        </nav>
      </div>
      <div className="border-t p-2">
        <div className="space-y-1">
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
            onClick={() => setIsOpen(false)}
          >
            <PhoneCall className="w-4 h-4" />
            Support
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
            onClick={() => setIsOpen(false)}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:block w-64 border-r bg-card">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <FileCode className="w-8 h-8" />
              <div className="font-semibold">CodeAnt AI</div>
            </div>
          </div>
          <div className="flex flex-col h-[calc(100%-64px)] justify-between p-2">
            <nav className="space-y-1">
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-700 text-white"
              >
                <Home className="w-4 h-4" />
                Repositories
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
              >
                <Code2 className="w-4 h-4" />
                AI Code Review
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
              >
                <Shield className="w-4 h-4" />
                Cloud Security
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
              >
                <HelpCircle className="w-4 h-4" />
                How to Use
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </nav>
            <div className="space-y-1">
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
              >
                <PhoneCall className="w-4 h-4" />
                Support
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="top" className="w-full h-full p-0">
          <MobileNav />
        </SheetContent>
      </Sheet>

      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between md:hidden mb-4">
            <div className="flex items-center gap-2">
              <FileCode className="w-6 h-6" />
              <div className="font-semibold">CodeAnt AI</div>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-full p-0">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
              <p className="text-sm text-muted-foreground">33 total repositories</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" className="sm:w-auto w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh All
              </Button>
              <Button size="sm" className="sm:w-auto w-full bg-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Repository
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search Repositories"
              className="max-w-md"
            />
          </div>

          <div className="space-y-4">
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-medium">{repo.name}</h2>
                      <Badge 
                        variant="secondary"
                        className={`bg-blue-100 text-blue-700 ${repo.isPublic ? 'hover:bg-blue-200' : 'hover:bg-blue-200'}`}
                      >
                        {repo.isPublic ? "Public" : "Private"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        {repo.language}
                      </div>
                      <div>{repo.size}</div>
                      <div>Updated {repo.updatedAt}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

