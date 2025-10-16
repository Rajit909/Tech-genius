import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import type { SharedData } from "@/types";

export default function Welcome() {
  const { auth } = usePage<SharedData>().props;

  useEffect(() => {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  return (
    <>
      <Head title="Tech Genius Olympiyad">
        <meta
          name="description"
          content="Join the ultimate quiz challenge! Compete with the brightest minds, test your knowledge across multiple categories, and win amazing prizes worth ₹50,000. Register now for QuizMaster 2025."
        />
        <meta
          name="keywords"
          content="quiz competition, online quiz, trivia contest, quiz challenge, knowledge competition, win prizes, quiz tournament"
        />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="flex items-center gap-2 no-underline">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white text-lg">
                🏆
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Tech Genius Olympiyad
              </span>
            </a>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              TISHHA
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center pt-16"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/60"></div>
        <div className="relative text-center max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-600 to-blue-600 mb-6 animate-bounce">
            <span>✨</span>
            <span className="text-lg font-semibold text-white">
              Registration Now Open
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Join the Ultimate <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Quiz Challenge!
            </span>
          </h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto mb-8">
            Test your knowledge, compete with the brightest minds, and win
            amazing prizes. Are you ready to prove you're the ultimate quiz
            master?
          </p>

          <Link href={"/apply"}  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
           Register Now
          </Link>
        
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-purple-600">
            Amazing <span className="text-purple-600">Prizes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Top performers will be rewarded with cash prizes, trophies, and
            recognition. Make your mark in quiz history!
          </p>

          {/* Top 3 Prizes */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                place: "1st Place",
                amount: "₹10,000",
                gradient: "bg-gradient-to-r from-yellow-400 to-orange-400 ",
                extras: [
                  "Golden Trophy",
                  "Medal",
                  "Certificate of Excellence",
                  "QuizMaster Title",
                ],
                lift: true,
              },
              {
                icon: "🥈",
                place: "2nd Place",
                amount: "₹6,000",
                gradient: "bg-gradient-to-r from-gray-300 to-gray-500",
                extras: [
                  "Silver Trophy",
                  "Medal",
                  "Certificate of Achievement",
                  "Quiz Champion Title",
                ],
              },
              {
                icon: "🥉",
                place: "3rd Place",
                amount: "₹3,000",
                gradient: "bg-gradient-to-r from-orange-500 to-amber-600",
                extras: [
                  "Bronze Trophy",
                  "Medal",
                  "Certificate of Merit",
                  "Quiz Expert Title",
                ],
              },
            ].map((prize, i) => (
              <div
                key={i}
                className={`rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg  text-center pb-6 transition-transform ${
                  prize.lift ? "-translate-y-4" : ""
                }`}
              >
                <div className={`h-2 w-full mb-4 ${prize.gradient} rounded-t-lg`}></div>
                <div className="text-5xl mb-3">{prize.icon}</div>
                <div className="text-xl font-semibold">{prize.place}</div>
                <div className="text-3xl font-bold text-purple-600 mb-4">
                  {prize.amount}
                </div>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {prize.extras.map((e, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <span>🎁</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Consolation and Recognition */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 ">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-amber-500 mb-2">
                🏅 Consolation Prizes
              </h3>
              <p className="text-gray-600 text-sm">
                Participants ranking 4th to 10th will receive certificates of
                participation and exciting gift hampers worth ₹1,000 each.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-500 mb-2">
                🏆 Special Recognition
              </h3>
              <p className="text-gray-600 text-sm">
                All finalists will be featured on our website and social media.
                Top performers may receive opportunities for future quiz events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-600">
              About the <span className="text-purple-600">Competition</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get ready for the most exciting quiz competition of the year!
              Challenge yourself across multiple categories and showcase your
              knowledge.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📅",
                title: "Event Dates",
                desc: (
                  <>
                    Preliminary Round: <b>March 15, 2025</b> <br />
                    Grand Finale: <b>March 22, 2025</b>
                  </>
                ),
                color: "text-purple-600 bg-purple-100",
              },
              {
                icon: "👥",
                title: "Eligibility",
                desc: (
                  <>
                    Open to:
                    <br />
                    <b>School Students</b>
                    <br />
                    <b>All College Students</b>
                  </>
                ),
                color: "text-blue-600 bg-blue-100",
              },
              {
                icon: "⏰",
                title: "Format",
                desc: (
                  <>
                    Online preliminary round followed by offline grand finale.
                    Multiple choice and rapid-fire rounds.
                  </>
                ),
                color: "text-yellow-600 bg-yellow-100",
              },
              {
                icon: "🎯",
                title: "Categories",
                desc: (
                  <>
                    General Knowledge, Science & Tech, History, Sports,
                    Entertainment, and Current Affairs.
                  </>
                ),
                color: "text-emerald-600 bg-emerald-100",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-3 ${card.color}`}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Participate */}
          <div className="bg-white border border-gray-200 rounded-xl mt-12 p-8 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-purple-600">Why Participate?</h3>
            <div className="grid sm:grid-cols-3 gap-6 ">
              {[
                { icon: "🏆", title: "Win Big", desc: "Prizes worth ₹50,000+" },
                { icon: "🎓", title: "Learn & Grow", desc: "Expand your knowledge" },
                { icon: "🤝", title: "Network", desc: "Connect with enthusiasts" },
              ].map((item, i) => (
                <div key={i} className="hover:shadow-lg transition">
                  <div className="text-5xl mb-2 ">{item.icon}</div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-16 text-gray-600 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white">
                  🏆
                </div>
                <span className="text-lg font-bold text-gray-800">
                  Tech Genius Olympiyad
                </span>
              </div>
              <p>
                The ultimate platform for quiz enthusiasts. Challenge yourself,
                compete with others, and win amazing prizes!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li>
                  🌐{" "}
                  <a href="https://tishha.com" className="hover:text-purple-600">
                    www.tishha.com
                  </a>
                </li>
                <li>
                  📧{" "}
                  <a
                    href="mailto:contact@tishha.com"
                    className="hover:text-purple-600"
                  >
                    contact@tishha.com
                  </a>
                </li>
                <li>
                  📞{" "}
                  <a href="tel:+91960054444" className="hover:text-purple-600">
                    +91 96900 54444
                  </a>
                </li>
                <li>
                  📍 Shop No. 15, Ace Aspire, Techzone-4, Greater Noida, U.P.,
                  India - 201306
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Follow Us
              </h3>
              <div className="flex gap-3 mt-3">
                {[
                  {
                    href: "https://www.facebook.com/profile.php?id=100064162719795",
                    icon: "📘",
                  },
                  { href: "https://x.com/TishhaServices", icon: "🐦" },
                  {
                    href: "https://www.instagram.com/tishhaconsultantsllp",
                    icon: "📸",
                  },
                  {
                    href: "https://www.linkedin.com/in/tishha-consultants-llp-5977a2322/",
                    icon: "💼",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-purple-600 hover:text-white transition transform hover:-translate-y-1"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="mt-3 text-gray-500 text-sm">
                Stay updated with our latest quiz events and challenges!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center text-gray-500">
            © <span id="current-year"></span> TISHHA CONSULTANCY LLP. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
