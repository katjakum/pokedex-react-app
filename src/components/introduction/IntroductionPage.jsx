import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function IntroductionPage() {
  return (
    <div className="bg-[#aac1b5] min-h-screen flex flex-col items-center justify-center text-center p-6 text-lg">
      <h1 className="text-4xl font-bold mb-6" >Welcome to Pokédex!</h1>
      <p className="mb-4">
        With this Pokédex, you can...
      </p>
      <ul className="mb-6">
        <li> <FontAwesomeIcon icon={faHeart} /> Search Pokémon by their name </li>
        <li> <FontAwesomeIcon icon={faHeart} /> Filter them based on their generation, type or ability </li>
        <li> <FontAwesomeIcon icon={faHeart} /> Read their unique Pokédex entries</li>
        <li> <FontAwesomeIcon icon={faHeart} /> Learn about their height, weight, stats and other information</li>
      </ul>
      <Link to="/pokedex">
        <button className="bg-[#90a399] px-6 py-2 rounded hover:bg-[#809188] transition duration-300 text-lg font-semibold flex items-center">
          Start <FontAwesomeIcon icon={faArrowRight} className="text-2xl transition-transform duration-200 transform hover:scale-110 ml-2"  />
        </button>
      </Link>
    </div>
  );
}

export default IntroductionPage;
