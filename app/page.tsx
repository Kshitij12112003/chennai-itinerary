"use client";

import { useEffect, useState } from "react";

const PHONE = "+918382858019";

const places = [
  {
    time: "5:30 AM",
    period: "SUNRISE",
    title: "Marina Beach",
    subtitle: "Watch the sunrise",
    emoji: "🌅",
    description:
      "Start the day by watching the sunrise at Marina Beach and enjoy the peaceful morning by the sea.",
    address:
      "Kamarajar Salai, Marina Beach, Triplicane, Chennai, Tamil Nadu 600005",
    map: "https://maps.app.goo.gl/Z9YDKLT4ZVTs8Mjq5",
    type: "beach",
  },

  {
    time: "7:30 – 8:00 AM",
    period: "BREAKFAST",
    title: "Ratna Cafe",
    subtitle: "Breakfast at Triplicane",
    emoji: "🍽️",
    description:
      "Enjoy a delicious breakfast at the famous Ratna Cafe in Triplicane.",
    address:
      "Ratna Cafe, Triplicane High Rd, Triplicane, Chennai, Tamil Nadu 600005",
    map: "https://share.google/oTCt8THkO92TRlVOg",
    type: "food",
  },

  {
    time: "9:30 – 10:00 AM",
    period: "EXPERIENCE",
    title: "VGP Marine Kingdom",
    subtitle: "Explore the underwater world",
    emoji: "🐠",
    description:
      "Explore marine life and enjoy an amazing underwater experience at VGP Marine Kingdom.",
    address:
      "SH 49, Injambakkam, Chennai, Tamil Nadu 600115",
    map: "https://maps.app.goo.gl/Jo9AprxjLDgZJWVXA",
    type: "experience",
  },

  {
    time: "1:00 PM",
    period: "LUNCH",
    title: "Zaitoon Restaurant",
    subtitle: "Lunch on ECR",
    emoji: "🍛",
    description:
      "Take a break from exploring and enjoy lunch at Zaitoon Restaurant on ECR.",
    address:
      "East Coast Road (ECR), Chennai, Tamil Nadu",
    map: "https://maps.app.goo.gl/husbvb7wJH8aiMgA8",
    type: "food",
  },

  {
    time: "AFTER LUNCH",
    period: "RELAX",
    title: "VGP Golden Beach",
    subtitle: "Beach time",
    emoji: "🏖️",
    description:
      "Relax by the sea, enjoy the beach and spend some peaceful time together after lunch.",
    address:
      "Injambakkam, Chennai, Tamil Nadu 600115",
    map: "https://maps.app.goo.gl/QXNqiX4HnXW86L648",
    type: "beach",
  },

  {
    time: "4:00 – 5:00 PM",
    period: "SUNSET",
    title: "Besant Nagar Beach",
    subtitle: "Watch the sunset",
    emoji: "🌇",
    description:
      "Slow down, enjoy the sea breeze and watch the beautiful sunset at Besant Nagar Beach.",
    address:
      "Besant Nagar, Chennai, Tamil Nadu 600090",
    map: "https://share.google/uErgC5K1nRVaIar3q",
    type: "beach",
  },

  {
    time: "EVENING",
    period: "DINNER",
    title: "TAMEN – The Local Ramen",
    subtitle: "Evening snack / dinner",
    emoji: "🍜",
    description:
      "Finish the day with delicious ramen and a relaxed dinner at TAMEN – The Local Ramen.",
    address:
      "Besant Nagar, Chennai, Tamil Nadu 600090",
    map: "https://maps.app.goo.gl/qRq7XudWZjQ5ZHh49",
    type: "food",
  },
];

export default function Page() {
  const [selected, setSelected] = useState<number | null>(null);

  const [showTicket, setShowTicket] = useState(false);

  const [completed, setCompleted] = useState<number[]>([]);

  const [celebration, setCelebration] = useState(false);

  const [surprise, setSurprise] = useState(false);

  const completedCount = completed.length;

  const allCompleted = completedCount === places.length;

  /*
   * MARK LOCATION COMPLETE
   */
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

  /*
   * SMALL CELEBRATION
   */
  const smallCelebration = () => {
    const amount = 35;

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

  /*
   * BIG FINAL CELEBRATION
   */
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

  /*
   * ESCAPE CLOSES POPUPS
   */
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCelebration(false);
        setSurprise(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <main className="site">

      {/* =====================================================
          HERO
      ====================================================== */}

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
              View itinerary ↓
            </a>

          </div>

        </nav>

        <div className="heroContent">

          <p className="eyebrow">
            A ONE-DAY JOURNEY
          </p>

          <h1>
            A Day
            <br />
            in <span>Chennai</span>
          </h1>

          <div className="heroLine" />

          <p className="dedication">
            Dear Disha <span>♥</span>
          </p>

          <p className="heroText">
            Aaj ka din tumhara hai — aur ye din kabhi wapas
            nahi aayega. Toh sab kuch bhool jao, saari
            tension chhod do, aur is din ka har ek pal
            dil khol kar enjoy karo. ❤️✨
            <br />
            <br />
            Aur haan, mujhpar gussa nahi karna…
            aaj ke din bilkul bhi nahi. 😂
          </p>

          <div className="heroButtons">

            <a
              href="#itinerary"
              className="startButton"
            >
              <span>Start our journey</span>
              <strong>↓</strong>
            </a>

            <button
              type="button"
              className="surpriseButton"
              onClick={() => setSurprise(true)}
            >
              💌 A little surprise
            </button>

          </div>

        </div>

        <div className="heroBottom">

          <span>
            CHENNAI, INDIA
          </span>

          <span>
            ONE BEAUTIFUL DAY
          </span>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="intro">

        <div className="introSmall">
          THE PLAN
        </div>

        <div className="introText">

          <h2>
            One day.
            <br />
            <em>Many memories.</em>
          </h2>

          <p className="introMessage">

            Tum aur samudra mein ek similarity hai,
            according to me… 🌊❤️

            <br />
            <br />

            Dono ko jitna dekho, utna hi mann karta hai
            aur dekhte rahoon. Dono ke saath waqt ka pata
            hi nahi chalta, aur dono apne aap mein ek
            alag hi sukoon rakhte hain. ✨

            <br />
            <br />

            Uski lehron ki awaaz se kabhi bore nahi hota,
            aur tumhari baaton se bhi nahi. ❤️

            <br />
            <br />

            Bas ek similarity aur hai…
            samudra ka paani kabhi-kabhi jalan deta hai,
            aur tumhari harkatein bhi. 😂❤️

          </p>

        </div>

      </section>


      {/* =====================================================
          ITINERARY
      ====================================================== */}

      <section
        className="itinerary"
        id="itinerary"
      >

        <div className="sectionHeading">

          <div>

            <p className="eyebrow dark">
              THE ITINERARY
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
              LOCATIONS COMPLETED
            </small>

            <div className="progressBar">

              <div
                className="progressFill"
                style={{
                  width: `${
                    (completedCount / places.length) * 100
                  }%`,
                }}
              />

            </div>

          </div>

          <p className="sectionDescription">
            Follow the day from the first light of morning
            to dinner at night.
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

                    <p>
                      {place.description}
                    </p>


                    {place.address && (

                      <div className="address">

                        <span>
                          📍
                        </span>

                        <span>
                          {place.address}
                        </span>

                      </div>

                    )}


                    {place.map && (

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

                    )}


                    {/* VGP TICKET */}

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


                    {/* COMPLETE */}

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
                          ✓ Completed
                          <span>✨</span>
                        </>
                      ) : (
                        <>
                          □ Mark Complete
                        </>
                      )}

                    </button>

                  </div>

                </div>

              </article>

            );
          })}

        </div>


        {/* =================================================
            COMPLETE DAY
        ================================================== */}

        {allCompleted && (

          <div className="completeDayArea">

            <div className="completeDayLine" />

            <p>
              YOU DID IT
            </p>

            <h3>
              7 places. 1 day.
              <br />
              Countless memories.
            </h3>

            <p className="completeDayText">
              You reached the end of the itinerary…
              <br />
              but hopefully not the end of the memories. ❤️
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


      {/* =====================================================
          SUNSET
      ====================================================== */}

      <section className="visualSection">

        <div className="visualImage" />

        <div className="visualContent">

          <p className="eyebrow">
            THE BEST PART
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


      {/* =====================================================
          FOOD
      ====================================================== */}

      <section className="foodSection">

        <div className="foodIntro">

          <p className="eyebrow dark">
            AND OF COURSE...
          </p>

          <h2>
            Good food
            <br />
            makes a good day.
          </h2>

          <p>
            From breakfast at Ratna Cafe to lunch on ECR,
            ending with ramen at TAMEN.
          </p>

        </div>


        <div className="foodCards">

          <div className="foodCard">

            <span>
              🍽️
            </span>

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

            <span>
              🍛
            </span>

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

            <span>
              🍜
            </span>

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


      {/* =====================================================
          SUMMARY
      ====================================================== */}

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

          <p className="memoryCounter">
            7 places · 1 beautiful day ·
            countless memories ❤️
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


      {/* =====================================================
          FINAL
      ====================================================== */}

      <section className="final">

        <div className="finalGlow" />

        <p className="eyebrow">
          UNTIL THE DAY ENDS
        </p>

        <h2>
          Make it
          <br />
          <span>memorable.</span>
        </h2>

        <div className="heart">
          ♥
        </div>

        <p className="finalMessage">

          Dear Disha,
          <br />
          <br />

          I just wanted to make your day
          a little more beautiful.
          <br />

          Maybe I succeeded, maybe I didn’t —
          but every little detail was planned
          with a smile, just hoping I could give
          you a day worth remembering. ❤️
          <br />
          <br />

          So today, forget everything else.
          No worries, no tension —
          just enjoy the sea, the food,
          the sunsets, the laughter,
          and every little moment. ✨
          <br />
          <br />

          And yes… please don't be angry with me today.
          <br />
          At least give me one day off. 😂❤️

        </p>

        <p className="signature">
          — With love, always
        </p>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer>

        <div>
          CHENNAI · 2026
        </div>

        <div>
          MADE FOR DISHA ♥
        </div>

      </footer>


      {/* =====================================================
          LITTLE SURPRISE POPUP
      ====================================================== */}

      {surprise && (

        <div
          className="surpriseOverlay"
          onClick={() => setSurprise(false)}
        >

          <div
            className="surpriseBox"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="surpriseHeart">
              💌
            </div>

            <p className="surpriseEyebrow">
              A LITTLE NOTE FOR YOU
            </p>

            <h2>
              Just one
              <br />
              <span>little thing...</span>
            </h2>

            <div className="surpriseDivider" />

            <p className="surpriseMessage">

              Aaj ka din sirf places explore karne ke
              liye nahi hai.

              <br />
              <br />

              Thoda hasna hai, thoda pagal hona hai,
              thoda mujhe irritate karna hai… 😂

              <br />
              <br />

              Aur sabse important —
              itni saari memories create karni hain
              ki baad mein jab Chennai yaad aaye,
              toh ye din bhi yaad aaye. ❤️

              <br />
              <br />

              Bas tum enjoy karna.
              Baaki sab main sambhal lunga. ✨

            </p>

            <button
              type="button"
              onClick={() => setSurprise(false)}
            >
              Okay… let's go ❤️
            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          BIG CELEBRATION POPUP
      ====================================================== */}

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

            <p className="celebrationSubtext">
              7 places. One beautiful day.
              <br />
              And hopefully a lot of memories. ❤️
            </p>

            <div className="celebrationHearts">
              ❤️ ✨ ❤️ ✨ ❤️
            </div>

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


      {/* =====================================================
          CSS
      ====================================================== */}

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
              rgba(0, 0, 0, 0.72),
              rgba(0, 0, 0, 0.2)
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
              rgba(255, 173, 93, 0.2),
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

          margin: 35px 0 18px;
        }


        .dedication {
          font-family: Georgia, serif;

          font-size: 30px;

          margin: 0 0 10px;
        }


        .dedication span {
          color: #f7b55d;
        }


        .heroText {
          font-size: 15px;

          line-height: 1.7;

          opacity: 0.9;

          max-width: 720px;
        }


        .heroButtons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }


        .startButton {
          margin-top: 25px;

          display: inline-flex;

          align-items: center;

          gap: 20px;

          background: #f7b55d;

          color: #171513;

          text-decoration: none;

          padding: 15px 20px;

          font-size: 12px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 1px;

          transition: 0.3s;
        }


        .startButton:hover {
          transform: translateY(-3px);
        }


        .startButton strong {
          font-size: 18px;
        }


        .surpriseButton {
          margin-top: 25px;

          padding: 14px 19px;

          border: 1px solid rgba(255,255,255,0.4);

          background: rgba(255,255,255,0.08);

          color: white;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 1px;

          cursor: pointer;

          transition: 0.3s;

          backdrop-filter: blur(5px);
        }


        .surpriseButton:hover {
          background: white;
          color: #191817;
          transform: translateY(-3px);
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


        /* =========================
           INTRO
        ========================== */

        .intro {
          padding: 130px 10vw;

          display: grid;

          grid-template-columns: 1fr 2fr;

          gap: 50px;

          background: #f5f1e9;
        }


        .introSmall {
          font-size: 10px;

          letter-spacing: 4px;

          font-weight: 800;
        }


        .introText {
          max-width: 800px;
        }


        .intro h2 {
          font-family: Georgia, serif;

          font-size: clamp(45px, 6vw, 85px);

          line-height: 0.95;

          font-weight: 400;

          letter-spacing: -4px;

          margin: 0 0 30px;
        }


        .intro h2 em {
          color: #a56734;
        }


        .introMessage {
          max-width: 650px;

          font-size: 17px;

          line-height: 1.85;

          color: #5f5952;
        }


        /* =========================
           ITINERARY
        ========================== */

        .itinerary {
          background: #ebe5da;

          padding: 120px 8vw;
        }


        .sectionHeading {
          display: flex;

          justify-content: space-between;

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


        /* =========================
           PROGRESS
        ========================== */

        .progressBox {
          min-width: 170px;

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

          transition: width 0.5s ease;
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
            transform 0.3s,
            box-shadow 0.3s,
            border 0.3s;

          border: 1px solid transparent;
        }


        .placeCard:hover,
        .placeCard.activeCard {
          transform: translateY(-4px);

          box-shadow:
            0 20px 45px
            rgba(70, 55, 35, 0.1);

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

          transition: max-height 0.5s ease;
        }


        .active .cardDetails {
          max-height: 1500px;
        }


        .cardDetails > p {
          color: #686159;

          line-height: 1.7;

          font-size: 14px;

          margin-top: 25px;
        }


        .address {
          display: flex;

          gap: 8px;

          font-size: 12px;

          color: #777069;

          line-height: 1.5;

          margin-top: 15px;
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


        /* =========================
           COMPLETE BUTTON
        ========================== */

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


        /* =========================
           VGP TICKET
        ========================== */

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
            0 10px 25px
            rgba(0,0,0,0.12);
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

          padding: 60px 30px;

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

          animation: completeAppear 0.7s ease;
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

          margin: 0 0 20px;
        }


        .completeDayText {
          color: #6f5b49;

          line-height: 1.7;

          font-family: Georgia, serif;

          font-size: 16px;

          margin-bottom: 30px;
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
            0 10px 25px
            rgba(0,0,0,0.2);
        }


        .finishButton:hover {
          background: #a56734;

          transform: translateY(-4px);

          box-shadow:
            0 15px 35px
            rgba(165,103,52,0.3);
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
              translate(0, 0)
              rotate(0deg)
              scale(1);
          }

          100% {
            opacity: 0;

            transform:
              translate(var(--x), var(--y))
              rotate(var(--r))
              scale(0.5);
          }

        }


        /* =========================
           FLASH
        ========================== */

        .celebrationFlash::before {
          content: "";

          position: fixed;

          inset: 0;

          z-index: 99998;

          pointer-events: none;

          background: white;

          animation: flash 1.8s ease;
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
           SURPRISE POPUP
        ========================== */

        .surpriseOverlay {
          position: fixed;

          inset: 0;

          z-index: 100000;

          background:
            rgba(20,16,12,0.78);

          backdrop-filter: blur(12px);

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 25px;

          animation: overlayAppear 0.4s ease;
        }


        .surpriseBox {
          width: min(650px, 100%);

          max-height: 90vh;

          overflow-y: auto;

          padding: 60px 40px;

          text-align: center;

          color: white;

          background:
            radial-gradient(
              circle at top,
              #59402a,
              #211c17 70%
            );

          border: 1px solid #b98a58;

          box-shadow:
            0 30px 100px
            rgba(0,0,0,0.5);

          animation:
            celebrationBoxAppear
            0.7s
            cubic-bezier(.17,.89,.32,1.28);
        }


        .surpriseHeart {
          font-size: 60px;

          margin-bottom: 15px;

          animation: celebrationBounce 1.5s infinite;
        }


        .surpriseEyebrow {
          font-size: 10px;

          letter-spacing: 4px;

          color: #e9b86d;

          font-weight: 800;
        }


        .surpriseBox h2 {
          font-family: Georgia, serif;

          font-size: clamp(45px, 7vw, 70px);

          line-height: 0.9;

          font-weight: 400;

          letter-spacing: -3px;

          margin: 20px 0;
        }


        .surpriseBox h2 span {
          color: #f0ae5a;
        }


        .surpriseDivider {
          width: 60px;

          height: 2px;

          background: #d3a46d;

          margin: 30px auto;
        }


        .surpriseMessage {
          max-width: 480px;

          margin: auto;

          font-family: Georgia, serif;

          font-size: 17px;

          line-height: 1.8;

          color: #ddd2c5;
        }


        .surpriseBox button {
          margin-top: 35px;

          border: 1px solid #d3a46d;

          background: #d3a46d;

          color: #211c17;

          padding: 15px 30px;

          font-weight: 800;

          cursor: pointer;

          transition: 0.3s;
        }


        .surpriseBox button:hover {
          background: white;

          border-color: white;
        }


        /* =========================
           CELEBRATION POPUP
        ========================== */

        .celebrationOverlay {
          position: fixed;

          inset: 0;

          z-index: 100000;

          background:
            rgba(20,16,12,0.82);

          backdrop-filter: blur(12px);

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 25px;

          animation: overlayAppear 0.4s ease;
        }


        @keyframes overlayAppear {

          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }

        }


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
            0 30px 100px
            rgba(0,0,0,0.5);

          animation:
            celebrationBoxAppear
            0.7s
            cubic-bezier(.17,.89,.32,1.28);
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


        .celebrationSubtext {
          color: #d8cabe;

          line-height: 1.7;

          font-family: Georgia, serif;

          font-size: 16px;
        }


        .celebrationHearts {
          font-size: 25px;

          margin: 25px 0 35px;

          letter-spacing: 8px;
        }


        .celebrationBox button {
          border: 1px solid #d3a46d;

          background: #d3a46d;

          color: #211c17;

          padding: 15px 30px;

          font-weight: 800;

          cursor: pointer;

          transition: 0.3s;
        }


        .celebrationBox button:hover {
          background: white;

          border-color: white;
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
          max-width: 450px;

          line-height: 1.8;

          color: #c3bdb5;

          font-size: 14px;
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
        }


        .foodCard:hover {
          transform: translateY(-6px);
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

          margin: 30px auto 15px;

          line-height: 1.8;

          font-size: 14px;

          color: #634b37;
        }


        .memoryCounter {
          font-family: Georgia, serif;

          font-size: 18px;

          color: #704b2e;

          margin: 25px 0 30px;
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

          min-height: 750px;

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

          width: 600px;

          height: 600px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(238, 166, 84, 0.18),
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

          animation: heartbeat 1.6s infinite;
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
          max-width: 700px;

          font-family: Georgia, serif;

          font-size: 18px;

          line-height: 1.8;

          color: #c8c1b9;
        }


        .signature {
          margin-top: 25px;

          color: #f0ae5a;

          font-family: Georgia, serif;

          font-style: italic;

          font-size: 18px;
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
           TABLET
        ========================== */

        @media (max-width: 900px) {

          .topActions {
            gap: 6px;
          }

          .contactButton {
            padding: 10px 12px;
          }

          .navButton {
            padding: 10px 13px;
          }

          .intro {
            grid-template-columns: 1fr;
          }

          .foodCards {
            grid-template-columns: 1fr;
          }

          .sectionHeading {
            flex-wrap: wrap;
          }

        }


        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 800px) {

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


          .hero h1 {
            font-size: 70px;

            letter-spacing: -4px;
          }


          .heroBottom {
            display: none;
          }


          .heroButtons {
            flex-direction: column;
            align-items: stretch;
          }


          .startButton,
          .surpriseButton {
            justify-content: center;
            width: 100%;
          }


          .intro {
            grid-template-columns: 1fr;

            padding: 90px 7vw;
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
            min-height: 650px;
          }


          .final h2 {
            letter-spacing: -4px;
          }


          .finalMessage {
            font-size: 16px;
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


          .dedication {
            font-size: 25px;
          }


          .heroText {
            font-size: 14px;
          }


          .introMessage {
            font-size: 15px;
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


          .celebrationBox {
            padding: 50px 20px;
          }


          .celebrationBox h2 {
            font-size: 45px;
          }


          .surpriseBox {
            padding: 45px 20px;
          }


          .surpriseBox h2 {
            font-size: 45px;
          }


          .surpriseMessage {
            font-size: 15px;
          }

        }

      `}</style>

    </main>
  );
}
