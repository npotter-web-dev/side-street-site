import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import DrewSwiper from "../components/DrewSwiper";

const DrewPage = () => {
  return (
    <div className="page-container">
      <div className="drew-page">
        <div className="drew-gallery">
          <DrewSwiper />
        </div>
        <div className="drew-content">
          <div className="drew-header">
            <h1>Andrew Canepa</h1>
            <h2>September 9, 1991 - July 28, 2025</h2>
            <h2>Forever in Our Hearts.</h2>
          </div>
          <div className="drew-tribute">
            <p>
              Andrew Canepa had a way of lighting up every room. With his humor, warmth, and
              undeniable presence, he made people feel seen, welcomed, and genuinely appreciated. He
              had this rare ability to bring joy just by being himself — a natural storyteller who
              lifted people up with the way he spoke about them, and how fully he showed up in their
              lives.
            </p>
            <p>
              He carried with him a deep sense of loyalty and love, especially when it came to
              family. Andrew held strong, steady values — the kind passed down through generations —
              and lived them out in every role he filled: as a son, a brother, a friend, and
              especially as a father. He didn’t just talk about what mattered to him — he showed it,
              day after day.
            </p>
            <p>
              As a father to his son Kayden, Andrew was thoughtful and intentional. He shared his
              own hobbies and passions — not just for fun, but to build connection, joy, and lasting
              memories. It was never only about the activity itself; it was about bonding, teaching,
              and passing on the family values he held so dearly. He wanted Kayden to know he was
              deeply loved, supported, and guided — and to grow up with the same strong foundation
              of love, respect, and heart that Andrew lived by every day. His love for Kayden was
              unwavering, and everything he did was rooted in wanting the very best for his son.
            </p>
            <p>
              He also brought that same spirit into the kitchen. A graduate of Le Cordon Bleu in
              Pasadena, Andrew had a gift for creating incredible meals — not just because he knew
              food, but because he understood the power of sharing it. Cooking was an extension of
              his love and his family & friends were lucky to be on the receiving end of that gist
              often.
            </p>
            <p>
              To know Andrew was to admire him. He had strength, depth, and a lightness that made
              people feel at ease. His loss is felt in more ways than words can express — but his
              love, his values, and his impact will live on in the people who knew him, and in the
              life he gave so fully to those he loved. He will be missed forever. And he will be
              loved always.
            </p>
          </div>
          <div className="support-links">
            <p>
              Memorial T-shirts have been created in Andrew’s honor. All proceeds will go to support
              his son, Kayden.
            </p>
            <a
              href="https://eastwind.printavo.com/merch/ssc-andrew"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrewPage;
