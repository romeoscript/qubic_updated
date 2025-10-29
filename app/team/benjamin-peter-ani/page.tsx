import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Benjamin Peter Ani - Backend & DevOps Engineer | Qubic Digital Solutions",
  description: "Benjamin Peter Ani is a Backend & DevOps Engineer at Qubic, specializing in server-side development, cloud infrastructure, and deployment automation. Expert in scalable backend systems.",
  keywords: "Benjamin Peter Ani, Peter Ani, Backend Engineer, DevOps Engineer, Qubic, server-side development, cloud infrastructure, deployment automation, scalable systems, Nigeria backend engineer",
  openGraph: {
    title: "Benjamin Peter Ani - Backend & DevOps Engineer | Qubic",
    description: "Benjamin Peter Ani is a Backend & DevOps Engineer at Qubic, specializing in server-side development, cloud infrastructure, and deployment automation. Expert in scalable backend systems.",
    url: "https://qubic.com.ng/team/benjamin-peter-ani",
    siteName: "Qubic",
    images: [
      {
        url: "/assets/home/peter.jpeg",
        width: 1200,
        height: 630,
        alt: "Benjamin Peter Ani - Backend & DevOps Engineer at Qubic",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Peter Ani - Backend & DevOps Engineer | Qubic",
    description: "Benjamin Peter Ani is a Backend & DevOps Engineer at Qubic, specializing in server-side development, cloud infrastructure, and deployment automation. Expert in scalable backend systems.",
    images: ["/assets/home/peter.jpeg"],
  },
  alternates: {
    canonical: "https://qubic.com.ng/team/benjamin-peter-ani",
  },
};

export default function BenjaminPeterAniPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Benjamin Peter Ani",
    "jobTitle": "Backend & DevOps Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Qubic",
      "url": "https://qubic.com.ng"
    },
    "image": "https://qubic.com.ng/assets/home/peter.jpeg",
    "description": "Benjamin Peter Ani is a Backend & DevOps Engineer at Qubic, specializing in server-side development, cloud infrastructure, and deployment automation. He brings extensive experience in scalable backend systems.",
    "knowsAbout": ["Backend Development", "DevOps", "Cloud Infrastructure", "Server-side Development", "Deployment Automation", "Scalable Systems"],
    "sameAs": [
      "https://www.linkedin.com/in/peter-ani-642a5722a/",
      "https://x.com",
      "https://github.com"
    ],
    "url": "https://qubic.com.ng/team/benjamin-peter-ani"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-20">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li>/</li>
              <li className="text-white">Benjamin Peter Ani</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <div className="relative">
              <Image
                src="/assets/home/peter.jpeg"
                alt="Benjamin Peter Ani - Backend & DevOps Engineer at Qubic"
                width={600}
                height={800}
                className="rounded-lg object-cover"
                priority
              />
            </div>

            {/* Profile Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">Benjamin Peter Ani</h1>
                <p className="text-2xl text-blue-400 mb-4">Backend & DevOps Engineer</p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Benjamin Peter Ani is a Backend & DevOps Engineer at Qubic, specializing in server-side development, 
                  cloud infrastructure, and deployment automation. He brings extensive experience in building scalable 
                  backend systems and managing cloud infrastructure.
                </p>
              </div>

              {/* Expertise */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-3">
                  {["Backend Development", "DevOps", "Cloud Infrastructure", "Server-side Development", "Deployment Automation", "Scalable Systems"].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Connect</h2>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.linkedin.com/in/peter-ani-642a5722a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Benjamin Peter Ani's LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Benjamin Peter Ani's Twitter profile"
                  >
                    Twitter
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Benjamin Peter Ani's GitHub profile"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Back to Team */}
              <div className="pt-8">
                <Link 
                  href="/#about" 
                  className="inline-flex items-center text-blue-400 hover:text-white transition-colors"
                >
                  ← Back to Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
