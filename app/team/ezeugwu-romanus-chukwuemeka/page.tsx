import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ezeugwu Romanus Chukwuemeka - Senior Software Engineer (Frontend) | Qubic Digital Solutions",
  description: "Ezeugwu Romanus Chukwuemeka is a Senior Software Engineer specializing in frontend development at Qubic. Expert in React, TypeScript, and modern web technologies.",
  keywords: "Ezeugwu Romanus Chukwuemeka, Romanus Chukwuemeka, Senior Software Engineer, Frontend Developer, Qubic, React, TypeScript, web development, frontend technologies, Nigeria frontend engineer, Romeoscript",
  openGraph: {
    title: "Ezeugwu Romanus Chukwuemeka - Senior Software Engineer (Frontend) | Qubic",
    description: "Ezeugwu Romanus Chukwuemeka is a Senior Software Engineer specializing in frontend development at Qubic. Expert in React, TypeScript, and modern web technologies.",
    url: "https://qubic.com.ng/team/ezeugwu-romanus-chukwuemeka",
    siteName: "Qubic",
    images: [
      {
        url: "/assets/home/romeo.jpeg",
        width: 1200,
        height: 630,
        alt: "Ezeugwu Romanus Chukwuemeka - Senior Software Engineer (Frontend) at Qubic",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezeugwu Romanus Chukwuemeka - Senior Software Engineer (Frontend) | Qubic",
    description: "Ezeugwu Romanus Chukwuemeka is a Senior Software Engineer specializing in frontend development at Qubic. Expert in React, TypeScript, and modern web technologies.",
    images: ["/assets/home/romeo.jpeg"],
  },
  alternates: {
    canonical: "https://qubic.com.ng/team/ezeugwu-romanus-chukwuemeka",
  },
};

export default function EzeugwuRomanusPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://qubic.com.ng/team/ezeugwu-romanus-chukwuemeka#person",
    "name": "Romanus Chukwuemeka Ezeugwu",
    "alternateName": ["Romeoscript", "Romeo", "RomeoScript", "Ezeugwu Romanus Chukwuemeka"],
    "jobTitle": "CEO & Senior Software Engineer (Frontend)",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Qubic Digital Services",
        "url": "https://qubic.com.ng"
      },
      {
        "@type": "Organization",
        "name": "LinkedTrust"
      }
    ],
    "url": "https://qubic.com.ng/team/ezeugwu-romanus-chukwuemeka",
    "sameAs": [
      "https://github.com/romeoscript",
      "https://www.linkedin.com/in/ezeugwuromanus/",
      "https://www.instagram.com/romeoscript1/",
      "https://x.com/romeoscript1"
    ],
    "knowsAbout": [
      "Frontend Development",
      "React",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Software Engineering",
      "System Architecture",
      "Product Development",
      "Open Source",
      "Mentoring"
    ],
    "description": "Romanus Chukwuemeka Ezeugwu (Romeoscript) is a Senior Software Engineer specializing in frontend development, CEO of Qubic Digital Services, and works at LinkedTrust. Expert in React, TypeScript, JavaScript, and building scalable web applications.",
    "image": "https://qubic.com.ng/assets/home/romeo.jpeg",
    "email": "romeobourne211@gmail.com",
    "nationality": "Nigerian",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Nigeria"
    },
    "award": [
      "HNG Internship 9 Finalist",
      "GAIN Hackathon Finalist",
      "Featured on FLOSS Weekly podcast"
    ],
    "occupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "skills": [
        "React",
        "TypeScript",
        "JavaScript",
        "Frontend Development",
        "System Architecture"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://qubic.com.ng/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Team",
                "item": "https://qubic.com.ng/#about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Ezeugwu Romanus Chukwuemeka",
                "item": "https://qubic.com.ng/team/ezeugwu-romanus-chukwuemeka"
              }
            ]
          })
        }}
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
              <li className="text-white">Ezeugwu Romanus Chukwuemeka</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <div className="relative">
              <Image
                src="/assets/home/romeo.jpeg"
                alt="Ezeugwu Romanus Chukwuemeka - Senior Software Engineer (Frontend) at Qubic"
                width={600}
                height={800}
                className="rounded-lg object-cover"
                priority
              />
            </div>

            {/* Profile Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">Ezeugwu Romanus Chukwuemeka</h1>
                <p className="text-2xl text-blue-400 mb-4">Senior Software Engineer (Frontend)</p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Ezeugwu Romanus Chukwuemeka is a Senior Software Engineer specializing in frontend development at Qubic. 
                  He brings extensive experience in React, TypeScript, and modern web technologies, creating exceptional 
                  user experiences and innovative digital solutions.
                </p>
              </div>

              {/* Expertise */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-3">
                  {["Frontend Development", "React", "TypeScript", "JavaScript", "Web Technologies", "User Interface Design"].map((skill) => (
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
                    href="https://www.linkedin.com/in/ezeugwuromanus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Ezeugwu Romanus Chukwuemeka's LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://x.com/romeoscript1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Ezeugwu Romanus Chukwuemeka's Twitter profile"
                  >
                    Twitter
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
