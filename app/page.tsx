"use client";

import { useState } from "react";

const PHONE = "+918382858019";

const places = [
  {
    time: "5:00 AM",
    period: "START",
    title: "Wake Up",
    subtitle: "The day begins",
    emoji: "☀️",
    description:
      "Wake up early and get ready for a beautiful day exploring Chennai.",
    address: "",
    map: "",
    type: "start",
  },

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

  return (
    <main className="site">

      {/* =========================
          HERO
      ========================== */}

      <section className="hero">

        <div className="heroOverlay" />

        {/* TOP NAV */}

        <nav className="nav">

          <div className="logo">
            CHENNAI<span>•</span>DAY
          </div>

          <div className="topActions">

            {/* CALL */}

            <a
              href={`tel:${PHONE}`}
              className="contactButton callButton"
            >
              📞 <span>Call Me</span>
            </a>

            {/* WHATSAPP */}

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


        {/* HERO CONTENT */}

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
            This is your day — enjoy every moment of it.
            <br />
            And just know, I’m right there with you,
            even in every little moment. ❤️✨
          </p>

          <a
            href="#itinerary"
            className="startButton"
          >
            <span>Start our journey</span>
            <strong>↓</strong>
          </a>

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


      {/* =========================
          INTRO
      ========================== */}

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

          <p>
            No rushing through a checklist.
            Just a carefully planned day filled with
            places to see, food to enjoy, sunsets to watch,
            and moments to remember.
          </p>

        </div>

      </section>


      {/* =========================
          ITINERARY
      ========================== */}

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

          <p className="sectionDescription">
            Follow the day from the first light of morning
            to dinner at night.
          </p>

        </div>


        <div className="timeline">

          <div className="timelineLine" />

          {places.map((place, index) => (

            <article
              className={`timelineItem ${
                selected === index ? "active" : ""
              }`}
              key={place.title}
            >

              {/* NUMBER */}

              <div className="timelineDot">

                <span>
                  {index + 1}
                </span>

              </div>


              {/* TIME */}

              <div className="time">

                {place.time}

                <small>
                  {place.period}
                </small>

              </div>


              {/* CARD */}

              <div
                className={`placeCard ${place.type} ${
                  selected === index ? "activeCard" : ""
                }`}
                onClick={() =>
                  setSelected(
                    selected === index
                      ? null
                      : index
                  )
                }
              >

                <div className="cardTop">

                  <div className="placeEmoji">
                    {place.emoji}
                  </div>

                  <div className="cardArrow">
                    {selected === index
                      ? "−"
                      : "+"}
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


                  {/* ADDRESS */}

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


                  {/* MAP */}

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


                  {/* =========================
                      VGP TICKET
                  ========================== */}

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
                          setShowTicket(
                            !showTicket
                          )
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

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          SUNSET
      ========================== */}

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
            After a full day of exploring, we'll slow down
            at Besant Nagar Beach and watch the sky change
            colours.
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


      {/* =========================
          FOOD
      ========================== */}

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


      {/* =========================
          SUMMARY
      ========================== */}

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


      {/* =========================
          FINAL
      ========================== */}

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
          here's to a beautiful day in Chennai,
          <br />
          lots of laughs, good food and
          <br />
          memories we'll remember.
        </p>

        <p className="signature">
          — With love
        </p>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer>

        <div>
          CHENNAI · 2026
        </div>

        <div>
          MADE FOR DISHA ♥
        </div>

      </footer>


      {/* =========================
          CSS
      ========================== */}

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


        /* =========================
           NAV
        ========================== */

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


        /* =========================
           HERO CONTENT
        ========================== */

        .heroContent {
          position: relative;
          z-index: 2;

          padding: 8vh 9vw;

          max-width: 900px;
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

          opacity: 0.8;
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


        .intro p {
          max-width: 550px;

          font-size: 16px;

          line-height: 1.8;

          color: #6e685f;
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
            box-shadow 0.3s;

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

          transition: max-height 0.4s ease;
        }


        .active .cardDetails {
          max-height: 1200px;
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
          max-width: 400px;

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

            margin-left: 0;

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

        }

      `}</style>

    </main>
  );
}