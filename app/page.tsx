import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutGrid } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const apps = [
    {
      name: "Quiz",
      description: "Test your knowledge with interactive quizzes.",
      image: "/images/quiz.jpeg",
      link: "/quiz"
    },
    {
      name: "Draw with AI",
      description: "Create unique artwork with AI-powered drawing tools.",
      image: "/images/draw-with-ai.jpeg",
      link: "/draw"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <LayoutGrid className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">AppHub</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to AppHub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your one-stop destination for all the apps you need. Discover a world of possibilities at your fingertips.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <Card key={index}>
              <CardHeader className="p-0">
                <div className="w-full mb-4">
                  <Image
                    src={app.image}
                    alt={app.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <div className="px-6 pb-4">
                  <CardTitle>{app.name}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="px-6 pb-4">
                <Button asChild className="w-full">
                  <Link href={app.link}>Go to App</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>

      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © 2024 AppHub. All rights reserved.
        </div>
      </footer>
    </div>
  )
}