"use client";

import { useEffect, useState } from "react";

const PHONE = "+918382858019";

const places = [
  {
    time: "5:30 AM",
    period: "SUNRISE",
    title: "Marina Beach",
    subtitle: "Start with the first light",
    emoji: "🌅",
    description:
      "Subah ki pehli roshni ke saath Marina Beach se din ki shuruaat. Thodi shaanti, thodi thandi hawa aur ek khoobsurat beginning.",
    address:
      "Kamarajar Salai, Marina Beach, Triplicane, Chennai, Tamil Nadu 600005",
    map: "https://maps.app.goo.gl/Z9YDKLT4ZVTs8Mjq5",
    type: "beach",
    note: "Aaj alarm se zyada important hai sunrise. ❤️",
  },

  {
    time: "7:30 – 8:00 AM",
    period: "BREAKFAST",
    title: "Ratna Cafe",
    subtitle: "Breakfast at Triplicane",
    emoji: "🍽️",
    description:
      "Sunrise ke baad ek proper South Indian breakfast. Aur haan, bina jaldi kiye — aaj ka din rush karne ke liye nahi hai.",
    address:
      "Ratna Cafe, Triplicane High Rd, Triplicane, Chennai, Tamil Nadu 600005",
    map: "https://share.google/oTCt8THkO92TRlVOg",
    type: "food",
    note: "Pehle breakfast. Baaki duniya baad mein. 😂❤️",
  },

  {
    time: "9:30 – 10:00 AM",
    period: "EXPERIENCE",
    title: "VGP Marine Kingdom",
    subtitle: "Explore the underwater world",
    emoji: "🐠",
    description:
      "Marine life ke beech thoda time spend karna aur ek aisi duniya dekhna jo hum roz nahi dekhte.",
    address: "SH 49, Injambakkam, Chennai, Tamil Nadu 600115",
    map: "https://maps.app.goo.gl/Jo9AprxjLDgZJWVXA",
    type: "experience",
    note: "Bas enjoy karna hai. Photos bhi, memories bhi. ✨",
  },

  {
    time: "1:00 PM",
    period: "LUNCH",
    title: "Zaitoon Restaurant",
    subtitle: "Lunch on ECR",
    emoji: "🍛",
    description:
      "Subah ki exploring ke baad ek achha sa lunch. Thoda rest, thodi baatein aur phir adventure continues.",
    address: "East Coast Road (ECR), Chennai, Tamil Nadu",
    map: "https://maps.app.goo.gl/husbvb7wJH8aiMgA8",
    type: "food",
    note: "Food ke maamle mein compromise allowed nahi hai. 😂",
  },

  {
    time: "AFTER LUNCH",
    period: "RELAX",
    title: "VGP Golden Beach",
    subtitle: "Just slow down",
    emoji: "🏖️",
    description:
      "Lunch ke baad thoda beach time. No schedule pressure. Bas samundar, hawa aur thoda sa sukoon.",
    address: "Injambakkam, Chennai, Tamil Nadu 600115",
    map: "https://maps.app.goo.gl/QXNqiX4HnXW86L648",
    type: "beach",
    note: "Yahan bas rukna hai. Kahin bhaagna nahi. 🌊",
  },

  {
    time: "4:00 – 5:00 PM",
    period: "SUNSET",
    title: "Besant Nagar Beach",
    subtitle: "Watch the sky change",
    emoji: "🌇",
    description:
      "Poore din ghoomne ke baad, Besant Nagar Beach par thoda theherna, samundar ki lehron ko dekhna aur dheere-dheere badalte aasman ke rangon ko mehsoos karna. 🌅🌊❤️",
    address: "Besant Nagar, Chennai, Tamil Nadu 600090",
    map: "https://share.google/uErgC5K1nRVaIar3q",
    type: "beach",
    note: "Shayad din ka sabse khoobsurat moment yahin ho. ❤️",
  },

  {
    time: "EVENING",
    period: "DINNER",
    title: "TAMEN – The Local Ramen",
    subtitle: "End the day with ramen",
    emoji: "🍜",
    description:
      "Din ka end ek relaxed dinner ke saath. Thakaan hogi, lekin hopefully smile bhi hogi.",
    address: "Besant Nagar, Chennai, Tamil Nadu 600090",
    map: "https://maps.app.goo.gl/qRq7XudWZjQ5ZHh49",
    type: "food",
    note: "Aur phir officially... Chennai Day complete. ❤️",
  },
];

export default function Page() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showTicket, setShowTicket] = useState(false);
  const [completed, setCompleted] = useState<number[]>([]);
  const [celebration, setCelebration] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const completedCount = completed.length;
  const allCompleted = completedCount === places.length;
  const progress = (completedCount / places.length) * 100;

  useEffect(() => {
    setMounted(true);

    try {
      const saved = localStorage.getItem("chennai-day-completed");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setCompleted(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors.
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem(
      "chennai-day-completed",
      JSON.stringify(completed)
    );
  }, [completed, mounted]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCelebration(false);
        setSecretOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const smallCelebration = () => {
    const amount = 30;

    for (let i = 0; i < amount; i++) {
      const particle = document.createElement("div");

      particle.className = "celebrationParticle";

      particle.style.left = `${45 + Math.random() * 10}%`;
      particle.style.top = `${45 + Math.random() * 10}%`;

      particle.style.setProperty(
        "--x",
        `${(Math.random() - 0.5) * 500}px`
      );

      particle.style.setProperty(
        "--y",
        `${(Math.random() - 0.5) * 500}px`
      );

      particle.style.setProperty(
        "--r",
        `${Math.random() * 720}deg`
      );

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1200);
    }
  };

  const toggleComplete = (index: number) => {
    const alreadyCompleted = completed.includes(index);

    if (alreadyCompleted) {
      setCompleted((prev) =>
        prev.filter((item) => item !== index)
      );

      return;
    }

    setCompleted((prev) => [...prev, index]);

    smallCelebration();
  };

  const finalCelebration = () => {
    if (!allCompleted) return;

    setCelebration(true);

    for (let i = 0; i < 180; i++) {
      const particle = document.createElement("div");

      particle.className = "celebrationParticle big";

      particle.style.left = `${45 + Math.random() * 10}%`;
      particle.style.top = `${45 + Math.random() * 10}%`;

      particle.style.setProperty(
        "--x",
        `${(Math.random() - 0.5) * 1000}px`
      );

      particle.style.setProperty(
        "--y",
        `${(Math.random() - 0.5) * 900}px`
      );

      particle.style.setProperty(
        "--r",
        `${Math.random() * 1000}deg`
      );

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1800);
    }

    document.body.classList.add("celebrationFlash");

    setTimeout(() => {
      document.body.classList.remove("celebrationFlash");
    }, 1800);
  };

  const resetDay = () => {
    setCompleted([]);
    setCelebration(false);
    setSecretOpen(false);
    localStorage.removeItem("chennai-day-completed");
  };

  return (
    <main className="site">

      {/* ==============================
          FLOATING PROGRESS
      =============================== */}

      <div className="floatingProgress">
        <span>{completedCount}/7</span>

        <div>
          <small>DAY PROGRESS</small>

          <div className="miniProgress">
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>


      {/* ==============================
          HERO
      =============================== */}

      <section className="hero">

        <div className="heroOverlay" />

        <nav className="nav">

          <div className="logo">
            CHENNAI<span>•</span>DAY
          </div>

          <div className="topActions">

            <a
              href={`tel:${PHONE}`}
              className="contactButton callButton"
            >
              📞 <span>Call Me</span>
            </a>

            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contactButton whatsappButton"
            >
              💬 <span>WhatsApp</span>
            </a>

            <a
              href="#itinerary"
              className="navButton"
            >
              View the day ↓
            </a>

          </div>

        </nav>


        <div className="heroContent">

          <p className="eyebrow heroReveal">
            MADE ESPECIALLY FOR YOU
          </p>

          <p className="heroGreeting heroReveal">
            Dear Disha,
          </p>

          <h1 className="heroReveal">
            A Day
            <br />
            in <span>Chennai.</span>
          </h1>

          <div className="heroLine" />

          <p className="heroText heroReveal">
            Aaj ka din tumhara hai — aur ye din kabhi wapas
            nahi aayega. Toh sab kuch bhool jao, saari tension
            chhod do, aur is din ka har ek pal dil khol kar
            enjoy karo. ❤️✨
          </p>

          <p className="heroText heroReveal">
            Aur haan, mujhpar gussa nahi karna…
            <br />
            aaj ke din bilkul bhi nahi. 😂
          </p>

          <a
            href="#itinerary"
            className="startButton"
          >
            <span>Let's begin</span>
            <strong>↓</strong>
          </a>

        </div>


        <div className="heroBottom">

          <span>
            CHENNAI · INDIA
          </span>

          <span>
            ONE DAY · MANY MEMORIES
          </span>

        </div>

      </section>


      {/* ==============================
          PERSONAL INTRO
      =============================== */}

      <section className="intro">

        <div className="introSmall">
          SOMETHING I THINK
        </div>

        <div className="introText">

          <p className="introMini">
            Tum aur samudra mein ek similarity hai,
            according to me… ❤️
          </p>

          <div className="oceanThought">

            <div className="thoughtBlock">

              <span className="thoughtNumber">
                01
              </span>

              <h2>
                Jitna dekho,
                <br />
                <em>
                  utna hi aur dekhne ka mann karta hai.
                </em>
              </h2>

            </div>


            <div className="thoughtDivider">
              <span>✦</span>
            </div>


            <div className="thoughtBlock simpleThought">

              <span className="thoughtNumber">
                02
              </span>

              <p>
                Dono ke saath waqt ka pata hi nahi chalta,
                aur dono apne aap mein ek alag hi sukoon
                rakhte hain. ✨
              </p>

            </div>


            <div className="thoughtBlock simpleThought">

              <span className="thoughtNumber">
                03
              </span>

              <p>
                Uski lehron ki awaaz se kabhi bore nahi hota,
                <br />
                aur tumhari baaton se bhi nahi. ❤️
              </p>

            </div>


            <div className="similarityPunchline">

              <div className="punchlineLabel">
                BUT THERE'S ONE MORE SIMILARITY…
              </div>

              <div className="punchlineContent">

                <div className="waveMark">
                  🌊
                </div>

                <p>
                  Samudra ka paani kabhi-kabhi
                  <br />

                  <strong>
                    jalan deta hai,
                  </strong>

                  <br />

                  aur tumhari harkatein bhi. 😂❤️
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==============================
          LITTLE NOTE
      =============================== */}

      <section className="noteSection">

        <div className="noteCard">

          <span className="noteIcon">
            ✦
          </span>

          <p className="noteLabel">
            ONE SMALL RULE FOR TODAY
          </p>

          <h2>
            No overthinking.
            <br />
            <em>Bas enjoy karna hai.</em>
          </h2>

          <p>
            Aaj koi tension nahi. Koi unnecessary stress nahi.
            Jo moment saamne hai, bas usko enjoy karna hai.
            ❤️
          </p>

        </div>

      </section>


      {/* ==============================
          ITINERARY
      =============================== */}

      <section
        className="itinerary"
        id="itinerary"
      >

        <div className="sectionHeading">

          <div>
            <p className="eyebrow dark">
              THE DAY AHEAD
            </p>

            <h2>
              Our Chennai day
            </h2>
          </div>

          <div className="progressBox">

            <span>
              {completedCount}/{places.length}
            </span>

            <small>
              MOMENTS COMPLETED
            </small>

            <div className="progressBar">
              <div
                className="progressFill"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

          </div>

          <p className="sectionDescription">
            From the first light of morning to the last
            bowl of ramen — take your time.
          </p>

        </div>


        <div className="timeline">

          <div className="timelineLine" />

          {places.map((place, index) => {

            const isCompleted =
              completed.includes(index);

            const isSelected =
              selected === index;

            return (
              <article
                className={`timelineItem ${
                  isSelected ? "active" : ""
                } ${
                  isCompleted ? "completedItem" : ""
                }`}
                key={place.title}
              >

                <div className="timelineDot">

                  {isCompleted ? (
                    <span className="checkMark">
                      ✓
                    </span>
                  ) : (
                    <span>
                      {index + 1}
                    </span>
                  )}

                </div>


                <div className="time">

                  {place.time}

                  <small>
                    {place.period}
                  </small>

                </div>


                <div
                  className={`placeCard ${place.type} ${
                    isSelected ? "activeCard" : ""
                  } ${
                    isCompleted ? "completedCard" : ""
                  }`}
                  onClick={() =>
                    setSelected(
                      isSelected ? null : index
                    )
                  }
                >

                  <div className="cardTop">

                    <div className="placeEmoji">
                      {place.emoji}
                    </div>

                    <div className="cardArrow">
                      {isSelected ? "−" : "+"}
                    </div>

                  </div>


                  <h3>
                    {place.title}
                  </h3>

                  <p className="subtitle">
                    {place.subtitle}
                  </p>


                  <div className="cardDetails">

                    <p className="description">
                      {place.description}
                    </p>


                    <div className="memoryNote">
                      <span>♡</span>
                      {place.note}
                    </div>


                    <div className="address">

                      <span>📍</span>

                      <span>
                        {place.address}
                      </span>

                    </div>


                    <a
                      href={place.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mapButton"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >
                      Open location ↗
                    </a>


                    {place.title ===
                      "VGP Marine Kingdom" && (

                      <div
                        className="ticketArea"
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                      >

                        <button
                          type="button"
                          className="ticketButton"
                          onClick={() =>
                            setShowTicket(!showTicket)
                          }
                        >
                          🎟️{" "}
                          {showTicket
                            ? "Hide Ticket"
                            : "View Ticket"}
                        </button>


                        {showTicket && (

                          <div className="ticketBox">

                            <p className="ticketTitle">
                              VGP MARINE KINGDOM TICKET
                            </p>

                            <img
                              src="/vgp-ticket.jpg"
                              alt="VGP Marine Kingdom ticket"
                              className="ticketImage"
                            />

                            <a
                              href="/vgp-ticket.jpg"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ticketOpen"
                            >
                              Open ticket image ↗
                            </a>

                          </div>

                        )}

                      </div>

                    )}


                    <button
                      type="button"
                      className={`completeButton ${
                        isCompleted
                          ? "completeButtonDone"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(index);
                      }}
                    >

                      {isCompleted ? (
                        <>
                          ✓ Memory collected
                          <span>✨</span>
                        </>
                      ) : (
                        <>
                          □ Mark this moment
                        </>
                      )}

                    </button>

                  </div>

                </div>

              </article>
            );
          })}

        </div>


        {allCompleted && (

          <div className="completeDayArea">

            <div className="completeDayLine" />

            <p>
              YOU MADE IT THROUGH THE DAY
            </p>

            <h3>
              Every moment collected.
            </h3>

            <p className="completeDayText">
              From sunrise to ramen, you made it through
              the entire Chennai day. ❤️
            </p>

            <button
              type="button"
              className="finishButton"
              onClick={finalCelebration}
            >
              🎉 COMPLETE THE DAY 🎉
            </button>

          </div>

        )}

      </section>


      {/* ==============================
          SUNSET
      =============================== */}

      <section className="visualSection">

        <div className="visualImage" />

        <div className="visualContent">

          <p className="eyebrow">
            THE MOMENT TO SLOW DOWN
          </p>

          <h2>
            Chasing
            <br />
            <span>the sunset.</span>
          </h2>

          <p>
            Poore din ghoomne ke baad, Besant Nagar Beach
            par thoda theherna, samundar ki lehron ko dekhna
            aur dheere-dheere badalte aasman ke rangon ko
            mehsoos karna. 🌅🌊❤️
          </p>

          <div className="sunsetTime">

            <strong>
              04:00 – 05:00
            </strong>

            <span>
              PM · BESANT NAGAR BEACH
            </span>

          </div>

        </div>

      </section>


      {/* ==============================
          FOOD
      =============================== */}

      <section className="foodSection">

        <div className="foodIntro">

          <p className="eyebrow dark">
            BECAUSE FOOD MATTERS
          </p>

          <h2>
            Good food.
            <br />
            <em>Better memories.</em>
          </h2>

          <p>
            Breakfast se lekar dinner tak — har meal ko
            sirf khana nahi, ek aur memory banana hai.
          </p>

        </div>


        <div className="foodCards">

          <div className="foodCard">

            <span>🍽️</span>

            <small>
              BREAKFAST · 7:30–8:00 AM
            </small>

            <h3>
              Ratna Cafe
            </h3>

            <p>
              Triplicane
            </p>

          </div>


          <div className="foodCard">

            <span>🍛</span>

            <small>
              LUNCH · 1:00 PM
            </small>

            <h3>
              Zaitoon
            </h3>

            <p>
              ECR
            </p>

          </div>


          <div className="foodCard">

            <span>🍜</span>

            <small>
              EVENING · DINNER
            </small>

            <h3>
              TAMEN
            </h3>

            <p>
              The Local Ramen
            </p>

          </div>

        </div>

      </section>


      {/* ==============================
          SUMMARY
      =============================== */}

      <section className="summary">

        <div className="summaryInner">

          <p className="eyebrow">
            FROM MORNING TO NIGHT
          </p>

          <h2>
            Sunrise
            <span> → </span>
            Sunset
          </h2>

          <p className="summaryText">
            Marina Beach → Ratna Cafe →
            VGP Marine Kingdom → Zaitoon →
            VGP Golden Beach → Besant Nagar →
            TAMEN
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="summaryButton"
          >
            Explore Chennai maps ↗
          </a>

        </div>

      </section>


      {/* ==============================
          FINAL PERSONAL MESSAGE
      =============================== */}

      <section className="final">

        <div className="finalGlow" />

        <p className="eyebrow">
          ONE LAST THING
        </p>

        <h2>
          I hope
          <br />
          <span>you smile.</span>
        </h2>

        <div className="heart">
          ♥
        </div>

        <p className="finalMessage">
          Dear Disha,
          <br />
          I just wanted to make your day
          <br />
          a little more beautiful.
          <br />
          <br />
          I hope I succeeded,
          <br />
          even just a little. ❤️
        </p>

        <p className="signature">
          — With love
        </p>

        <button
          type="button"
          className="secretButton"
          onClick={() => setSecretOpen(true)}
        >
          There’s one more thing… ❤️
        </button>

      </section>


      {/* ==============================
          FOOTER
      =============================== */}

      <footer>

        <div>
          CHENNAI · 2026
        </div>

        <div>
          MADE FOR DISHA ♥
        </div>

      </footer>


      {/* ==============================
          SECRET MESSAGE
      =============================== */}

      {secretOpen && (

        <div
          className="secretOverlay"
          onClick={() => setSecretOpen(false)}
        >

          <div
            className="secretBox"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="secretHeart">
              ❤️
            </div>

            <p>
              JUST BETWEEN US
            </p>

            <h2>
              The day may end...
              <br />
              <span>but the memory doesn't.</span>
            </h2>

            <div className="secretDivider">
              ✦
            </div>

            <p className="secretText">
              I don't know if everything about this day
              will be perfect.
              <br />
              <br />
              But I wanted you to know that I put a little
              piece of myself into planning it.
              <br />
              <br />
              So wherever the day takes us,
              I hope you remember one thing —
              <br />
              <strong>
                you deserved a beautiful day. ❤️
              </strong>
            </p>

            <button
              type="button"
              onClick={() => setSecretOpen(false)}
            >
              Keep this memory ❤️
            </button>

          </div>

        </div>

      )}


      {/* ==============================
          CELEBRATION
      =============================== */}

      {celebration && (

        <div
          className="celebrationOverlay"
          onClick={() => setCelebration(false)}
        >

          <div
            className="celebrationBox"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="celebrationEmoji">
              🎉
            </div>

            <p>
              CHENNAI DAY COMPLETE
            </p>

            <h2>
              You made
              <br />
              <span>every moment count.</span>
            </h2>

            <div className="celebrationHearts">
              ❤️ ✨ ❤️ ✨ ❤️
            </div>

            <p className="celebrationMessage">
              Sunrise, beaches, food, sunset,
              ramen… and hopefully lots of smiles.
            </p>

            <button
              type="button"
              onClick={() =>
                setCelebration(false)
              }
            >
              Continue ❤️
            </button>

          </div>

        </div>

      )}


      {/* ==============================
          RESET
      =============================== */}

      {completedCount > 0 && (

        <button
          type="button"
          className="resetButton"
          onClick={resetDay}
          title="Reset day progress"
        >
          ↻
        </button>

      )}


      {/* ==============================
          CSS
      =============================== */}

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        .site {
          background: #f5f1e9;
          color: #191817;
          min-height: 100vh;
          overflow: hidden;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }


        /* =========================
           FLOATING PROGRESS
        ========================== */

        .floatingProgress {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 5000;

          display: flex;
          align-items: center;
          gap: 12px;

          padding: 10px 14px;

          background: rgba(29,27,25,0.92);
          color: white;

          border: 1px solid rgba(255,255,255,0.12);

          backdrop-filter: blur(12px);

          box-shadow:
            0 15px 40px rgba(0,0,0,0.18);
        }

        .floatingProgress > span {
          font-family: Georgia, serif;
          font-size: 22px;
          color: #f0ae5a;
        }

        .floatingProgress small {
          display: block;
          font-size: 7px;
          letter-spacing: 2px;
          opacity: 0.6;
          margin-bottom: 5px;
        }

        .miniProgress {
          width: 85px;
          height: 3px;
          background: rgba(255,255,255,0.15);
        }

        .miniProgress div {
          height: 100%;
          background: #f0ae5a;
          transition: width 0.5s ease;
        }


        /* =========================
           HERO
        ========================== */

        .hero {
          min-height: 100vh;
          position: relative;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          color: white;

          background-image:
            linear-gradient(
              90deg,
              rgba(0,0,0,0.78),
              rgba(0,0,0,0.25)
            ),
            url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85");

          background-size: cover;
          background-position: center;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at 70% 40%,
              rgba(255,173,93,0.22),
              transparent 35%
            );

          pointer-events: none;
        }

        .nav {
          position: relative;
          z-index: 2;

          padding: 28px 5vw;

          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 20px;
        }

        .logo {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 3px;
          white-space: nowrap;
        }

        .logo span {
          color: #f6b45c;
          padding: 0 5px;
        }

        .topActions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contactButton {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          text-decoration: none;

          padding: 11px 16px;

          border-radius: 30px;

          font-size: 12px;
          font-weight: 700;

          transition: 0.3s;

          white-space: nowrap;
        }

        .callButton {
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.35);
          color: white;
        }

        .whatsappButton {
          background: #25d366;
          border: 1px solid #25d366;
          color: white;
        }

        .contactButton:hover {
          transform: translateY(-2px);
        }

        .callButton:hover {
          background: white;
          color: #191817;
        }

        .whatsappButton:hover {
          background: #20bd5a;
        }

        .navButton {
          border: 1px solid rgba(255,255,255,0.4);
          color: white;
          text-decoration: none;
          padding: 11px 18px;
          border-radius: 30px;
          font-size: 12px;
          transition: 0.3s;
          white-space: nowrap;
        }

        .navButton:hover {
          background: white;
          color: black;
        }

        .heroContent {
          position: relative;
          z-index: 2;

          padding: 8vh 9vw;

          max-width: 950px;
        }

        .eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          font-weight: 700;
          margin: 0 0 20px;
          opacity: 0.75;
        }

        .heroGreeting {
          font-family: Georgia, serif;
          font-size: 26px;
          margin: 0 0 20px;
          color: #f3d29e;
        }

        .hero h1 {
          font-size: clamp(65px, 11vw, 150px);
          line-height: 0.82;
          letter-spacing: -7px;
          margin: 0;
          font-weight: 800;
        }

        .hero h1 span {
          color: #f7b55d;
        }

        .heroLine {
          width: 90px;
          height: 2px;
          background: #f7b55d;
          margin: 35px 0 25px;
        }

        .heroText {
          max-width: 690px;
          font-family: Georgia, serif;
          font-size: 18px;
          line-height: 1.8;
          color: #eee8df;
          margin: 0 0 10px;
        }

        .startButton {
          margin-top: 25px;

          display: inline-flex;
          align-items: center;
          gap: 20px;

          background: #f7b55d;
          color: #171513;

          text-decoration: none;

          padding: 16px 22px;

          font-size: 12px;
          font-weight: 800;

          text-transform: uppercase;
          letter-spacing: 1px;

          transition: 0.3s;

          box-shadow:
            0 15px 35px rgba(0,0,0,0.2);
        }

        .startButton:hover {
          transform: translateY(-3px);
        }

        .startButton strong {
          font-size: 18px;
        }

        .heroBottom {
          position: relative;
          z-index: 2;

          padding: 25px 5vw;

          display: flex;
          justify-content: space-between;

          font-size: 9px;
          letter-spacing: 3px;

          opacity: 0.6;
        }


        /* =====================================================
           PERSONAL INTRO — NEW DESIGN
        ===================================================== */

        .intro {
          padding: 150px 10vw 140px;

          display: grid;

          grid-template-columns: 0.65fr 2fr;

          gap: 70px;

          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(213,169,112,0.12),
              transparent 30%
            ),
            #f5f1e9;

          position: relative;

          overflow: hidden;
        }

        .intro::before {
          content: "🌊";

          position: absolute;

          right: -35px;
          bottom: -80px;

          font-size: 260px;

          opacity: 0.035;

          transform: rotate(-12deg);

          pointer-events: none;
        }

        .introSmall {
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 800;
          color: #766e64;

          padding-top: 12px;

          position: relative;
          z-index: 1;
        }

        .introText {
          max-width: 900px;

          position: relative;
          z-index: 1;
        }

        .introMini {
          font-family: Georgia, serif;

          font-size: 23px !important;

          line-height: 1.5;

          color: #8b623b !important;

          margin: 0 0 55px !important;
        }

        .oceanThought {
          max-width: 850px;
        }

        .thoughtBlock {
          position: relative;
          padding-left: 65px;
        }

        .thoughtNumber {
          position: absolute;

          left: 0;
          top: 8px;

          font-size: 9px;

          letter-spacing: 2px;

          font-weight: 800;

          color: #b28a63;
        }

        .thoughtBlock h2 {
          font-family: Georgia, serif;

          font-size: clamp(48px, 6vw, 82px);

          line-height: 0.96;

          font-weight: 400;

          letter-spacing: -4px;

          margin: 0;
        }

        .thoughtBlock h2 em {
          color: #a56734;

          font-style: italic;
        }

        .thoughtDivider {
          height: 1px;

          background:
            linear-gradient(
              90deg,
              #d8cabb,
              transparent
            );

          margin: 65px 0;

          position: relative;
        }

        .thoughtDivider span {
          position: absolute;

          left: 0;

          top: 50%;

          transform: translateY(-50%);

          background: #f5f1e9;

          padding-right: 18px;

          color: #a56734;

          font-size: 18px;
        }

        .simpleThought {
          margin-bottom: 38px;
        }

        .simpleThought p {
          max-width: 690px;

          font-family: Georgia, serif;

          font-size: 19px;

          line-height: 1.85;

          color: #6e685f;

          margin: 0;
        }

        .similarityPunchline {
          margin-top: 65px;

          padding: 38px 40px;

          background:
            linear-gradient(
              135deg,
              #eee2d2,
              #f8f4ed
            );

          border: 1px solid #d7c4aa;

          position: relative;

          overflow: hidden;

          box-shadow:
            0 20px 55px rgba(75,55,35,0.08);
        }

        .similarityPunchline::after {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          right: -70px;
          bottom: -90px;

          border-radius: 50%;

          border: 1px solid rgba(165,103,52,0.14);

          box-shadow:
            0 0 0 25px rgba(165,103,52,0.025),
            0 0 0 50px rgba(165,103,52,0.02);

          pointer-events: none;
        }

        .punchlineLabel {
          font-size: 9px;

          letter-spacing: 3px;

          font-weight: 800;

          color: #a56734;

          margin-bottom: 25px;
        }

        .punchlineContent {
          display: flex;

          align-items: flex-start;

          gap: 22px;
        }

        .waveMark {
          flex-shrink: 0;

          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;
          justify-content: center;

          background: #f5f1e9;

          border: 1px solid #d8c8b5;

          border-radius: 50%;

          font-size: 22px;

          box-shadow:
            0 8px 20px rgba(80,55,30,0.08);
        }

        .punchlineContent p {
          margin: 0;

          font-family: Georgia, serif;

          font-size: 21px;

          line-height: 1.65;

          color: #62594f;
        }

        .punchlineContent strong {
          color: #a56734;

          font-weight: 400;

          font-style: italic;

          font-size: 28px;
        }


        /* =========================
           NOTE
        ========================== */

        .noteSection {
          padding: 40px 8vw 130px;
          background: #f5f1e9;
        }

        .noteCard {
          max-width: 850px;
          margin: auto;

          padding: 65px 50px;

          text-align: center;

          background:
            linear-gradient(
              135deg,
              #eee4d5,
              #f8f5ef
            );

          border: 1px solid #d8c8b5;

          position: relative;

          box-shadow:
            0 25px 70px rgba(75,55,35,0.08);
        }

        .noteIcon {
          font-size: 28px;
          color: #a56734;
        }

        .noteLabel {
          margin: 18px 0;

          font-size: 9px;
          letter-spacing: 4px;
          font-weight: 800;
          color: #8b623b;
        }

        .noteCard h2 {
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 0.95;
          letter-spacing: -3px;
          margin: 0 0 25px;
        }

        .noteCard h2 em {
          color: #a56734;
        }

        .noteCard > p:last-child {
          max-width: 550px;
          margin: auto;
          color: #716a62;
          line-height: 1.8;
          font-size: 15px;
        }


        /* =========================
           ITINERARY
        ========================== */

        .itinerary {
          background: #ebe5da;
          padding: 120px 8vw;
        }

        .sectionHeading {
          display: grid;

          grid-template-columns:
            1fr
            auto
            280px;

          align-items: end;

          gap: 40px;

          margin-bottom: 90px;
        }

        .eyebrow.dark {
          color: #8b623b;
          opacity: 1;
        }

        .sectionHeading h2 {
          font-family: Georgia, serif;

          font-size: clamp(45px, 6vw, 80px);

          line-height: 0.9;

          font-weight: 400;

          margin: 0;

          letter-spacing: -3px;
        }

        .sectionDescription {
          max-width: 280px;

          line-height: 1.6;

          color: #6d675f;

          font-size: 14px;
        }

        .progressBox {
          min-width: 190px;
          text-align: center;
        }

        .progressBox > span {
          display: block;

          font-family: Georgia, serif;

          font-size: 30px;

          color: #8b623b;
        }

        .progressBox small {
          display: block;

          font-size: 8px;

          letter-spacing: 2px;

          color: #777069;

          margin: 5px 0 12px;
        }

        .progressBar {
          width: 100%;

          height: 5px;

          background: #d4c9b9;

          overflow: hidden;
        }

        .progressFill {
          height: 100%;

          background: #a56734;

          transition: width 0.6s ease;
        }

        .timeline {
          max-width: 1000px;
          margin: auto;
          position: relative;
        }

        .timelineLine {
          position: absolute;

          left: 150px;

          top: 0;
          bottom: 0;

          width: 1px;

          background: #cfc6b8;
        }

        .timelineItem {
          position: relative;

          display: grid;

          grid-template-columns:
            120px
            60px
            1fr;

          gap: 20px;

          margin-bottom: 35px;

          align-items: start;
        }

        .timelineDot {
          position: relative;

          z-index: 2;

          grid-column: 2;

          width: 40px;
          height: 40px;

          border-radius: 50%;

          background: #f5f1e9;

          border: 1px solid #bfb4a5;

          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 11px;
          font-weight: 700;

          transition: 0.3s;
        }

        .completedItem .timelineDot {
          background: #a56734;

          color: white;

          border-color: #a56734;

          box-shadow:
            0 0 0 6px rgba(165,103,52,0.12),
            0 0 25px rgba(165,103,52,0.35);
        }

        .checkMark {
          font-size: 18px;
        }

        .time {
          grid-column: 1;
          grid-row: 1;

          text-align: right;

          font-size: 12px;
          font-weight: 800;

          padding-top: 12px;
        }

        .time small {
          display: block;

          color: #9a7045;

          font-size: 8px;

          letter-spacing: 2px;

          margin-top: 5px;
        }

        .placeCard {
          grid-column: 3;

          background: #f8f5ef;

          padding: 30px;

          cursor: pointer;

          transition:
            transform 0.35s,
            box-shadow 0.35s,
            border 0.35s;

          border: 1px solid transparent;
        }

        .placeCard:hover,
        .placeCard.activeCard {
          transform: translateY(-4px);

          box-shadow:
            0 20px 45px
            rgba(70,55,35,0.1);

          border-color: #d8c6ac;
        }

        .placeCard.completedCard {
          border-color: #a56734;

          box-shadow:
            0 10px 30px
            rgba(165,103,52,0.12);
        }

        .cardTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .placeEmoji {
          font-size: 30px;
        }

        .cardArrow {
          width: 30px;
          height: 30px;

          border: 1px solid #d5cbbb;

          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;

          color: #8b623b;

          font-size: 18px;
        }

        .placeCard h3 {
          font-family: Georgia, serif;

          font-size: 35px;

          font-weight: 400;

          margin: 20px 0 5px;

          letter-spacing: -1px;
        }

        .subtitle {
          color: #a06f3c;

          font-size: 11px;

          text-transform: uppercase;

          letter-spacing: 2px;

          font-weight: 700;

          margin: 0;
        }

        .cardDetails {
          max-height: 0;

          overflow: hidden;

          transition: max-height 0.6s ease;
        }

        .active .cardDetails {
          max-height: 1600px;
        }

        .description {
          color: #686159;

          line-height: 1.8;

          font-size: 14px;

          margin-top: 25px;
        }

        .memoryNote {
          display: flex;

          align-items: flex-start;

          gap: 10px;

          margin-top: 22px;

          padding: 16px;

          background: #eee5d8;

          color: #795738;

          font-family: Georgia, serif;

          font-style: italic;

          line-height: 1.5;

          font-size: 14px;
        }

        .memoryNote span {
          color: #a56734;
          font-size: 18px;
        }

        .address {
          display: flex;

          gap: 8px;

          font-size: 12px;

          color: #777069;

          line-height: 1.5;

          margin-top: 18px;
        }

        .mapButton {
          display: inline-block;

          margin-top: 20px;

          padding: 11px 17px;

          background: #1d1b19;

          color: white;

          text-decoration: none;

          font-size: 11px;

          text-transform: uppercase;

          letter-spacing: 1px;

          transition: 0.3s;
        }

        .mapButton:hover {
          background: #a56734;
        }

        .completeButton {
          width: 100%;

          margin-top: 25px;

          padding: 14px 18px;

          border: 1px solid #b9ad9d;

          background: transparent;

          color: #4f4942;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 1.5px;

          text-transform: uppercase;

          cursor: pointer;

          transition: 0.3s;
        }

        .completeButton:hover {
          background: #1d1b19;

          border-color: #1d1b19;

          color: white;

          transform: translateY(-2px);
        }

        .completeButtonDone {
          background: #a56734;

          color: white;

          border-color: #a56734;

          box-shadow:
            0 8px 20px
            rgba(165,103,52,0.2);
        }

        .completeButtonDone:hover {
          background: #7d4d27;
          border-color: #7d4d27;
        }

        .ticketArea {
          margin-top: 25px;

          padding-top: 20px;

          border-top: 1px solid #ddd3c5;
        }

        .ticketButton {
          border: none;

          background: #a56734;

          color: white;

          padding: 13px 18px;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 1px;

          text-transform: uppercase;

          cursor: pointer;

          transition: 0.3s;
        }

        .ticketButton:hover {
          background: #7d4d27;
          transform: translateY(-2px);
        }

        .ticketBox {
          margin-top: 20px;

          padding: 15px;

          background: #eee8dd;

          border: 1px solid #d7cbbb;
        }

        .ticketTitle {
          font-size: 10px;

          letter-spacing: 2px;

          font-weight: 800;

          color: #765132;

          margin: 0 0 15px;
        }

        .ticketImage {
          display: block;

          width: 100%;

          max-width: 600px;

          height: auto;

          margin: 0 auto;

          border-radius: 4px;

          box-shadow:
            0 10px 25px rgba(0,0,0,0.12);
        }

        .ticketOpen {
          display: inline-block;

          margin-top: 15px;

          padding: 10px 15px;

          background: #1d1b19;

          color: white;

          text-decoration: none;

          font-size: 10px;

          letter-spacing: 1px;

          text-transform: uppercase;
        }


        /* =========================
           COMPLETE DAY
        ========================== */

        .completeDayArea {
          max-width: 700px;

          margin: 100px auto 20px;

          text-align: center;

          padding: 65px 30px;

          background:
            linear-gradient(
              135deg,
              #f8f5ef,
              #e8d4b9
            );

          border: 1px solid #c59c6d;

          box-shadow:
            0 25px 60px
            rgba(80,55,30,0.12);

          animation:
            completeAppear 0.7s ease;
        }

        @keyframes completeAppear {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .completeDayArea > p:first-child {
          margin: 0 0 10px;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 4px;

          color: #986538;
        }

        .completeDayArea h3 {
          font-family: Georgia, serif;

          font-weight: 400;

          font-size: 38px;

          margin: 0 0 15px;
        }

        .completeDayText {
          color: #70675e;

          font-family: Georgia, serif;

          line-height: 1.7;
        }

        .finishButton {
          border: none;

          background: #1d1b19;

          color: white;

          padding: 18px 30px;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 2px;

          cursor: pointer;

          transition: 0.3s;

          box-shadow:
            0 10px 25px rgba(0,0,0,0.2);
        }

        .finishButton:hover {
          background: #a56734;

          transform: translateY(-4px);
        }


        /* =========================
           SUNSET
        ========================== */

        .visualSection {
          min-height: 750px;

          display: grid;

          grid-template-columns: 1fr 1fr;

          background: #1d1b19;

          color: white;
        }

        .visualImage {
          min-height: 600px;

          background-image:
            linear-gradient(
              rgba(0,0,0,0.05),
              rgba(0,0,0,0.25)
            ),
            url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=85");

          background-size: cover;

          background-position: center;
        }

        .visualContent {
          display: flex;

          flex-direction: column;

          justify-content: center;

          padding: 10vw;
        }

        .visualContent h2 {
          font-family: Georgia, serif;

          font-weight: 400;

          font-size: clamp(50px, 6vw, 90px);

          line-height: 0.9;

          letter-spacing: -4px;

          margin: 0 0 35px;
        }

        .visualContent h2 span {
          color: #f1ae59;
        }

        .visualContent > p {
          max-width: 470px;

          line-height: 1.9;

          color: #c3bdb5;

          font-size: 15px;

          font-family: Georgia, serif;
        }

        .sunsetTime {
          margin-top: 35px;

          padding-top: 25px;

          border-top: 1px solid #47433e;
        }

        .sunsetTime strong {
          display: block;

          color: #f1ae59;

          font-size: 24px;

          font-family: Georgia, serif;
        }

        .sunsetTime span {
          display: block;

          font-size: 9px;

          letter-spacing: 3px;

          margin-top: 8px;

          opacity: 0.6;
        }


        /* =========================
           FOOD
        ========================== */

        .foodSection {
          padding: 130px 8vw;

          background: #f5f1e9;
        }

        .foodIntro {
          max-width: 650px;

          margin-bottom: 70px;
        }

        .foodIntro h2 {
          font-family: Georgia, serif;

          font-size: clamp(50px, 6vw, 80px);

          font-weight: 400;

          line-height: 0.9;

          letter-spacing: -4px;

          margin: 0 0 30px;
        }

        .foodIntro h2 em {
          color: #a56734;
        }

        .foodIntro > p {
          color: #6f685f;

          line-height: 1.8;
        }

        .foodCards {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;
        }

        .foodCard {
          background: #ebe5da;

          padding: 40px;

          min-height: 280px;

          transition: 0.3s;

          border: 1px solid transparent;
        }

        .foodCard:hover {
          transform: translateY(-6px);

          border-color: #d5c1a6;
        }

        .foodCard > span {
          font-size: 40px;
        }

        .foodCard small {
          display: block;

          font-size: 8px;

          letter-spacing: 3px;

          color: #96683c;

          font-weight: 800;

          margin-top: 35px;
        }

        .foodCard h3 {
          font-family: Georgia, serif;

          font-weight: 400;

          font-size: 34px;

          margin: 8px 0;
        }

        .foodCard p {
          margin: 0;

          color: #777067;

          font-size: 13px;
        }


        /* =========================
           SUMMARY
        ========================== */

        .summary {
          background: #d7b183;

          padding: 120px 8vw;

          text-align: center;
        }

        .summaryInner {
          max-width: 900px;

          margin: auto;
        }

        .summary h2 {
          font-family: Georgia, serif;

          font-size: clamp(50px, 8vw, 110px);

          font-weight: 400;

          letter-spacing: -6px;

          margin: 0;
        }

        .summary h2 span {
          color: #704b2e;
        }

        .summaryText {
          max-width: 700px;

          margin: 30px auto;

          line-height: 1.8;

          font-size: 14px;

          color: #634b37;
        }

        .summaryButton {
          display: inline-block;

          padding: 15px 25px;

          background: #1d1b19;

          color: white;

          text-decoration: none;

          font-size: 11px;

          letter-spacing: 1px;

          text-transform: uppercase;

          transition: 0.3s;
        }

        .summaryButton:hover {
          transform: translateY(-3px);
        }


        /* =========================
           FINAL
        ========================== */

        .final {
          position: relative;

          min-height: 800px;

          padding: 130px 20px;

          background: #1b1917;

          color: white;

          text-align: center;

          display: flex;

          flex-direction: column;

          justify-content: center;

          align-items: center;

          overflow: hidden;
        }

        .finalGlow {
          position: absolute;

          width: 700px;

          height: 700px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(238,166,84,0.18),
              transparent 65%
            );
        }

        .final > *:not(.finalGlow) {
          position: relative;
          z-index: 1;
        }

        .final h2 {
          font-family: Georgia, serif;

          font-weight: 400;

          font-size: clamp(70px, 10vw, 140px);

          line-height: 0.8;

          letter-spacing: -7px;

          margin: 10px 0 35px;
        }

        .final h2 span {
          color: #f0ae5a;
        }

        .heart {
          color: #f0ae5a;

          font-size: 35px;

          margin: 10px 0 25px;

          animation:
            heartbeat 1.6s infinite;
        }

        @keyframes heartbeat {

          0%,
          100% {
            transform: scale(1);
          }

          15% {
            transform: scale(1.15);
          }

          30% {
            transform: scale(1);
          }

        }

        .finalMessage {
          font-family: Georgia, serif;

          font-size: 20px;

          line-height: 1.8;

          color: #c8c1b9;
        }

        .signature {
          margin-top: 25px;

          color: #f0ae5a;

          font-family: Georgia, serif;

          font-style: italic;
        }

        .secretButton {
          margin-top: 35px;

          padding: 14px 22px;

          background: transparent;

          color: #e4d8ca;

          border: 1px solid rgba(240,174,90,0.45);

          cursor: pointer;

          font-size: 11px;

          letter-spacing: 1px;

          transition: 0.3s;
        }

        .secretButton:hover {
          background: #f0ae5a;
          color: #1b1917;
          transform: translateY(-3px);
        }


        /* =========================
           POPUPS
        ========================== */

        .secretOverlay,
        .celebrationOverlay {
          position: fixed;

          inset: 0;

          z-index: 100000;

          background:
            rgba(20,16,12,0.84);

          backdrop-filter: blur(14px);

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 25px;

          animation:
            overlayAppear 0.4s ease;
        }

        @keyframes overlayAppear {

          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }

        }

        .secretBox {
          width: min(720px, 100%);

          padding: 70px 40px;

          text-align: center;

          color: white;

          background:
            radial-gradient(
              circle at center,
              #4e3927,
              #201b17 70%
            );

          border: 1px solid #a97848;

          box-shadow:
            0 30px 100px rgba(0,0,0,0.5);

          animation:
            celebrationBoxAppear
            0.7s
            cubic-bezier(.17,.89,.32,1.28);
        }

        .secretHeart {
          font-size: 60px;

          margin-bottom: 15px;
        }

        .secretBox > p:first-of-type {
          font-size: 9px;

          letter-spacing: 4px;

          color: #e9b86d;

          font-weight: 800;
        }

        .secretBox h2 {
          font-family: Georgia, serif;

          font-size: clamp(40px, 6vw, 65px);

          font-weight: 400;

          line-height: 0.95;

          letter-spacing: -3px;

          margin: 25px 0;
        }

        .secretBox h2 span {
          color: #f0ae5a;
        }

        .secretDivider {
          color: #f0ae5a;
          font-size: 25px;
          margin: 25px 0;
        }

        .secretText {
          font-family: Georgia, serif;

          font-size: 16px;

          line-height: 1.8;

          color: #d7cec4;
        }

        .secretText strong {
          color: #f0ae5a;
        }

        .secretBox button,
        .celebrationBox button {
          border: 1px solid #d3a46d;

          background: #d3a46d;

          color: #211c17;

          padding: 15px 30px;

          font-weight: 800;

          cursor: pointer;

          transition: 0.3s;
        }

        .secretBox button:hover,
        .celebrationBox button:hover {
          background: white;
          border-color: white;
        }


        /* =========================
           CELEBRATION
        ========================== */

        .celebrationBox {
          width: min(700px, 100%);

          padding: 70px 35px;

          text-align: center;

          color: white;

          background:
            radial-gradient(
              circle at center,
              #59402a,
              #211c17 65%
            );

          border: 1px solid #b98a58;

          box-shadow:
            0 30px 100px rgba(0,0,0,0.5);

          animation:
            celebrationBoxAppear
            0.7s
            cubic-bezier(.17,.89,.32,1.28);
        }

        @keyframes celebrationBoxAppear {

          from {
            transform: scale(0.7);
            opacity: 0;
          }

          to {
            transform: scale(1);
            opacity: 1;
          }

        }

        .celebrationEmoji {
          font-size: 70px;

          animation:
            celebrationBounce
            1s infinite;
        }

        @keyframes celebrationBounce {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }

        }

        .celebrationBox > p:first-of-type {
          font-size: 10px;

          letter-spacing: 4px;

          color: #e9b86d;

          font-weight: 800;
        }

        .celebrationBox h2 {
          font-family: Georgia, serif;

          font-weight: 400;

          font-size: clamp(45px, 7vw, 75px);

          line-height: 0.95;

          letter-spacing: -3px;

          margin: 20px 0;
        }

        .celebrationBox h2 span {
          color: #f0ae5a;
        }

        .celebrationHearts {
          font-size: 25px;

          margin: 25px 0 20px;

          letter-spacing: 8px;
        }

        .celebrationMessage {
          color: #d7cec4;

          font-family: Georgia, serif;

          line-height: 1.7;

          font-size: 15px;

          margin-bottom: 30px;
        }


        /* =========================
           PARTICLES
        ========================== */

        .celebrationParticle {
          position: fixed;

          z-index: 99999;

          width: 9px;

          height: 15px;

          background: #f1ae59;

          pointer-events: none;

          animation:
            particleFly 1.2s
            cubic-bezier(.2,.8,.3,1)
            forwards;
        }

        .celebrationParticle:nth-child(3n) {
          background: #ffffff;
        }

        .celebrationParticle:nth-child(4n) {
          background: #a56734;
        }

        .celebrationParticle:nth-child(5n) {
          background: #f3d49e;
        }

        .celebrationParticle.big {
          width: 12px;
          height: 20px;
          animation-duration: 1.8s;
        }

        @keyframes particleFly {

          0% {
            opacity: 1;

            transform:
              translate(0,0)
              rotate(0deg)
              scale(1);
          }

          100% {
            opacity: 0;

            transform:
              translate(var(--x),var(--y))
              rotate(var(--r))
              scale(0.5);
          }

        }

        .celebrationFlash::before {
          content: "";

          position: fixed;

          inset: 0;

          z-index: 99998;

          pointer-events: none;

          background: white;

          animation:
            flash 1.8s ease;
        }

        @keyframes flash {

          0% {
            opacity: 0;
          }

          8% {
            opacity: 0.8;
          }

          15% {
            opacity: 0;
          }

          25% {
            opacity: 0.5;
          }

          35% {
            opacity: 0;
          }

          100% {
            opacity: 0;
          }

        }


        /* =========================
           FOOTER
        ========================== */

        footer {
          background: #11100f;

          color: #706b65;

          padding: 25px 5vw;

          display: flex;

          justify-content: space-between;

          font-size: 8px;

          letter-spacing: 3px;
        }


        /* =========================
           RESET
        ========================== */

        .resetButton {
          position: fixed;

          left: 18px;
          bottom: 18px;

          z-index: 5000;

          width: 34px;
          height: 34px;

          border-radius: 50%;

          border: 1px solid rgba(255,255,255,0.15);

          background: rgba(29,27,25,0.85);

          color: #aaa;

          cursor: pointer;

          transition: 0.3s;
        }

        .resetButton:hover {
          color: white;
          transform: rotate(-180deg);
        }


        /* =========================
           TABLET
        ========================== */

        @media (max-width: 1000px) {

          .sectionHeading {
            grid-template-columns: 1fr 190px;
          }

          .sectionDescription {
            grid-column: 1 / -1;
          }

          .intro {
            grid-template-columns: 1fr;
          }

          .foodCards {
            grid-template-columns: 1fr;
          }

        }


        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 800px) {

          .floatingProgress {
            right: 12px;
            bottom: 12px;
          }

          .nav {
            padding: 20px 5vw;
            align-items: flex-start;
          }

          .topActions {
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .navButton {
            display: none;
          }

          .contactButton span {
            display: none;
          }

          .contactButton {
            width: 40px;
            height: 40px;

            padding: 0;

            justify-content: center;

            border-radius: 50%;

            font-size: 17px;
          }

          .heroContent {
            padding: 5vh 7vw;
          }

          .heroGreeting {
            font-size: 22px;
          }

          .hero h1 {
            font-size: 70px;
            letter-spacing: -4px;
          }

          .heroText {
            font-size: 16px;
          }

          .heroBottom {
            display: none;
          }


          /* NEW INTRO MOBILE */

          .intro {
            grid-template-columns: 1fr;

            padding: 100px 7vw 90px;

            gap: 35px;
          }

          .introMini {
            font-size: 20px !important;

            margin-bottom: 45px !important;
          }

          .thoughtBlock {
            padding-left: 45px;
          }

          .thoughtBlock h2 {
            font-size: 48px;

            letter-spacing: -3px;
          }

          .simpleThought p {
            font-size: 17px;

            line-height: 1.8;
          }

          .thoughtDivider {
            margin: 50px 0;
          }

          .similarityPunchline {
            margin-top: 55px;

            padding: 30px 22px;
          }

          .punchlineContent {
            gap: 15px;
          }

          .waveMark {
            width: 42px;
            height: 42px;

            font-size: 18px;
          }

          .punchlineContent p {
            font-size: 18px;
          }

          .punchlineContent strong {
            font-size: 24px;
          }


          .noteSection {
            padding: 20px 5vw 90px;
          }

          .noteCard {
            padding: 50px 25px;
          }

          .itinerary {
            padding: 90px 5vw;
          }

          .sectionHeading {
            display: block;
            margin-bottom: 60px;
          }

          .progressBox {
            max-width: 200px;
            margin: 30px 0;
          }

          .sectionDescription {
            margin-top: 25px;
          }

          .timelineLine {
            left: 20px;
          }

          .timelineItem {
            grid-template-columns:
              40px
              1fr;

            gap: 15px;
          }

          .timelineDot {
            grid-column: 1;
            grid-row: 1;

            width: 40px;
            height: 40px;
          }

          .time {
            grid-column: 2;
            grid-row: 1;

            text-align: left;

            padding-top: 0;

            min-height: 40px;

            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .placeCard {
            grid-column: 2;

            margin-top: -5px;

            padding: 25px;
          }

          .placeCard h3 {
            font-size: 30px;
          }

          .visualSection {
            grid-template-columns: 1fr;
          }

          .visualImage {
            min-height: 400px;
          }

          .visualContent {
            padding: 80px 8vw;
          }

          .foodSection {
            padding: 90px 7vw;
          }

          .foodCards {
            grid-template-columns: 1fr;
          }

          .foodCard {
            min-height: 220px;
          }

          .summary {
            padding: 90px 7vw;
          }

          .summary h2 {
            letter-spacing: -3px;
          }

          .final {
            min-height: 700px;
          }

          .final h2 {
            letter-spacing: -4px;
          }

          footer {
            flex-direction: column;

            gap: 12px;

            text-align: center;
          }

        }


        /* =========================
           SMALL MOBILE
        ========================== */

        @media (max-width: 450px) {

          .logo {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .nav {
            padding: 18px 4vw;
          }

          .hero h1 {
            font-size: 62px;
          }

          .heroText {
            font-size: 15px;
          }


          /* INTRO SMALL MOBILE */

          .intro {
            padding: 85px 6vw 80px;
          }

          .introMini {
            font-size: 18px !important;
          }

          .thoughtBlock {
            padding-left: 38px;
          }

          .thoughtBlock h2 {
            font-size: 40px;

            letter-spacing: -2px;
          }

          .simpleThought p {
            font-size: 16px;
          }

          .similarityPunchline {
            padding: 28px 18px;
          }

          .punchlineLabel {
            font-size: 8px;

            letter-spacing: 2px;
          }

          .punchlineContent {
            gap: 12px;
          }

          .waveMark {
            width: 38px;
            height: 38px;

            font-size: 16px;
          }

          .punchlineContent p {
            font-size: 16px;

            line-height: 1.7;
          }

          .punchlineContent strong {
            font-size: 21px;
          }


          .placeCard h3 {
            font-size: 26px;
          }

          .ticketButton {
            width: 100%;
          }

          .ticketBox {
            padding: 10px;
          }

          .ticketTitle {
            font-size: 9px;
          }

          .finalMessage {
            font-size: 16px;
          }

          .completeDayArea {
            padding: 45px 20px;
          }

          .completeDayArea h3 {
            font-size: 30px;
          }

          .finishButton {
            width: 100%;
          }

          .secretBox {
            padding: 50px 20px;
          }

          .secretBox h2 {
            font-size: 42px;
          }

          .celebrationBox {
            padding: 50px 20px;
          }

          .celebrationBox h2 {
            font-size: 45px;
          }

          .floatingProgress {
            transform: scale(0.9);
            transform-origin: bottom right;
          }

        }


        /* =========================
           REDUCED MOTION
        ========================== */

        @media (prefers-reduced-motion: reduce) {

          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

        }

      `}</style>

    </main>
  );
}
