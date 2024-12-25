"use client"

import { useState } from "react"
import { ArrowUpIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function StatsDashboard() {
  const [activeTab, setActiveTab] = useState<'saas' | 'self-hosted'>('saas')

  return (
    <div className="min-h-screen">
      {/* Mobile Sign In View */}
      <div className="md:hidden p-6 flex flex-col min-h-screen">
        <Card className="flex-1 shadow-lg">
          <CardContent className="p-8 space-y-8">
            <div className="text-center space-y-6">
              <img 
                src="/placeholder.svg?height=48&width=48" 
                alt="CodeAnt AI Logo" 
                className="h-12 mx-auto"
              />
              <h1 className="text-2xl md:text-3xl font-semibold">
                Welcome to CodeAnt AI
              </h1>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-lg">
                <Button 
                  variant={activeTab === 'saas' ? 'default' : 'ghost'}
                  className={`w-full ${activeTab === 'saas' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                  onClick={() => setActiveTab('saas')}
                  aria-pressed={activeTab === 'saas'}
                >
                  SAAS
                </Button>
                <Button 
                  variant={activeTab === 'self-hosted' ? 'default' : 'ghost'}
                  className={`w-full ${activeTab === 'self-hosted' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                  onClick={() => setActiveTab('self-hosted')}
                  aria-pressed={activeTab === 'self-hosted'}
                >
                  Self Hosted
                </Button>
              </div>

              {activeTab === 'saas' && (
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start gap-3 h-14 text-base font-normal">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Sign in with Github
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 h-14 text-base font-normal">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#2684FF" d="M.778 1.213a.768.768 0 0 0-.768.892l3.263 19.81c.084.5.515.873 1.022.873H19.95a.772.772 0 0 0 .77-.646l3.27-20.03a.768.768 0 0 0-.768-.891H.778zM14.52 15.53H9.522L8.17 8.466h7.561l-1.211 7.064z"/>
                    </svg>
                    Sign in with Bitbucket
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 h-14 text-base font-normal">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#0078D7" d="M23.174 9.03c.516-.165 1.034.106 1.153.623c.165.516-.106 1.034-.623 1.153l-5.154 1.65v2.38c0 .54-.44.98-.98.98h-2.94l-2.092 6.685c-.165.516-.683.787-1.2.622s-.787-.683-.622-1.2l1.98-6.328c.088-.274.34-.46.627-.46h3.267v-1.96L4.826 16.55v2.38c0 .54-.44.98-.98.98H.98c-.54 0-.98-.44-.98-.98v-3.92c0-.43.285-.812.696-.934l21.5-6.87c.516-.165 1.034.106 1.153.623c.165.516-.106 1.034-.623 1.153L2.886 15.59v1.96h.98v-1.4c0-.43.285-.812.696-.934L23.174 9.03zM.98 0h2.866c.54 0 .98.44.98.98v3.92c0 .54-.44.98-.98.98H.98c-.54 0-.98-.44-.98-.98V.98C0 .44.44 0 .98 0z"/>
                    </svg>
                    Sign in with Azure Devops
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 h-14 text-base font-normal">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#FC6D26" d="M23.955 13.587l-1.342-4.135l-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452L.045 13.587a.924.924 0 0 0 .331 1.023L11.999 24L23.624 14.61a.92.92 0 0 0 .331-1.023"/>
                    </svg>
                    Sign in with GitLab
                  </Button>
                </div>
              )}

              {activeTab === 'self-hosted' && (
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start gap-3 h-14 text-base font-normal">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#FC6D26" d="M23.955 13.587l-1.342-4.135l-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452L.045 13.587a.924.924 0 0 0 .331 1.023L11.999 24L23.624 14.61a.92.92 0 0 0 .331-1.023"/>
                    </svg>
                    Self Hosted GitLab
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 h-14 text-base font-normal">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z"/>
                    </svg>
                    Sign in with SSO
                  </Button>
                </div>
              )}
            </div>

            <div className="text-center text-sm text-muted-foreground">
              By signing up you agree to the{' '}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
       {/* desktop view of the page */}
      <div className="hidden md:flex min-h-screen">
        <div className="flex-1 p-6 mt-28">
          <div className="w-full max-w-5xl mx-auto space-y-8">
            <Card className="shadow-lg max-w-4xl">
              <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img 
                      src="/placeholder.svg?height=32&width=32" 
                      alt="CodeAnt Logo" 
                      className="w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-xl">
                    AI to Detect & Autofix Bad Code
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">30+</div>
                    <div className="text-sm text-muted-foreground">
                      Language Support
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">10K+</div>
                    <div className="text-sm text-muted-foreground">
                      Developers
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">100K+</div>
                    <div className="text-sm text-muted-foreground">
                      Hours Saved
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative float-right w-5/6">
              <Card className="max-w-sm mx-auto">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-blue-600">
                        <ArrowUpIcon className="w-4 h-4" />
                        <span>14%</span>
                        <span className="text-muted-foreground ml-1">This week</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-4xl font-bold mb-1">
                        500K+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Issues Fixed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center opacity-10">
              <img 
                src="/placeholder.svg?height=200&width=200" 
                alt="Decorative Ant Logo" 
                className="w-48
                h-48"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 bg-background flex items-center">
          <Card className="max-w-md w-full mx-auto shadow-lg">
            <CardContent className="p-8 space-y-8">
              <div className="text-center space-y-6">
                <img 
                  src="/placeholder.svg?height=24&width=24" 
                  alt="CodeAnt AI Logo" 
                  className="h-12 mx-auto"
                />
                <h1 className="text-3xl font-semibold">
                  Welcome to CodeAnt AI
                </h1>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Button 
                    variant={activeTab === 'saas' ? 'default' : 'outline'}
                    className={`flex-1 ${activeTab === 'saas' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                    onClick={() => setActiveTab('saas')}
                    aria-pressed={activeTab === 'saas'}
                  >
                    SAAS
                  </Button>
                  <Button 
                    variant={activeTab === 'self-hosted' ? 'default' : 'outline'}
                    className={`flex-1 ${activeTab === 'self-hosted' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                    onClick={() => setActiveTab('self-hosted')}
                    aria-pressed={activeTab === 'self-hosted'}
                  >
                    Self Hosted
                  </Button>
                </div>

                {activeTab === 'saas' && (
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Sign in with Github
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#0000FF" d="M.778 1.213a.768.768 0 0 0-.768.892l3.263 19.81c.084.5.515.873 1.022.873H19.95a.772.772 0 0 0 .77-.646l3.27-20.03a.768.768 0 0 0-.768-.891H.778zM14.52 15.53H9.522L8.17 8.466h7.561l-1.211 7.064z"/>
                      </svg>
                      Sign in with Bitbucket
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#0000FF" d="M23.174 9.03c.516-.165 1.034.106 1.153.623c.165.516-.106 1.034-.623 1.153l-5.154 1.65v2.38c0 .54-.44.98-.98.98h-2.94l-2.092 6.685c-.165.516-.683.787-1.2.622s-.787-.683-.622-1.2l1.98-6.328c.088-.274.34-.46.627-.46h3.267v-1.96L4.826 16.55v2.38c0 .54-.44.98-.98.98H.98c-.54 0-.98-.44-.98-.98v-3.92c0-.43.285-.812.696-.934l21.5-6.87c.516-.165 1.034.106 1.153.623c.165.516-.106 1.034-.623 1.153L2.886 15.59v1.96h.98v-1.4c0-.43.285-.812.696-.934L23.174 9.03zM.98 0h2.866c.54 0 .98.44.98.98v3.92c0 .54-.44.98-.98.98H.98c-.54 0-.98-.44-.98-.98V.98C0 .44.44 0 .98 0z"/>
                      </svg>
                      Sign in with Azure Devops
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#FF5F1F" d="M23.955 13.587l-1.342-4.135l-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452L.045 13.587a.924.924 0 0 0 .331 1.023L11.999 24L23.624 14.61a.92.92 0 0 0 .331-1.023"/>
                      </svg>
                      Sign in with GitLab
                    </Button>
                  </div>
                )}

                {activeTab === 'self-hosted' && (
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#FF5F1F" d="M23.955 13.587l-1.342-4.135l-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452L.045 13.587a.924.924 0 0 0 .331 1.023L11.999 24L23.624 14.61a.92.92 0 0 0 .331-1.023"/>
                      </svg>
                      Self Hosted GitLab
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z"/>
                      </svg>
                      Sign in with SSO
                    </Button>
                  </div>
                )}
              </div>

              <div className="text-center text-sm text-muted-foreground">
                By signing up you agree to the{' '}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

