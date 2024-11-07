import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
          EmoBoost AI
        </h1>
        <nav>
          <Link href="/login" passHref>
            <Button variant="ghost">Login</Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Unlock the Power of Your Emotions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Experience cutting-edge mood analysis powered by advanced machine
            learning algorithms
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/form" passHref>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Evaluate Your Mood <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/login" passHref>
              <Button size="lg" variant="outline">
                Login to Your Account
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Brain className="w-12 h-12 text-purple-600" />,
              title: "AI-Powered Analysis",
              description:
                "Our state-of-the-art neural networks provide deep insights into your emotional state.",
            },
            {
              icon: <Sparkles className="w-12 h-12 text-purple-600" />,
              title: "Real-time Sentiment Tracking",
              description:
                "Experience the future of emotion recognition with our real-time mood evaluation technology.",
            },
            {
              icon: <Zap className="w-12 h-12 text-purple-600" />,
              title: "Personalized Recommendations",
              description:
                "Receive tailored suggestions to improve your mood based on cutting-edge machine learning algorithms.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        <section className="text-center bg-purple-700 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Emotional Intelligence?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of users who have already discovered the power of
            EmoBoost AI
          </p>
          <Link href="/form" passHref>
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100"
            >
              Start Your Mood Evaluation Now
            </Button>
          </Link>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 EmoBoost AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
