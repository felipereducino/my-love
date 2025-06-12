"use client";

import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Placeholder images for carousel - replace with your photos later
  const carouselImages = [
    "/assets/foto.jpg",
    "/assets/foto2.JPG",
    "/assets/foto5.JPG",
    "/assets/foto6.JPG",
    "/assets/foto7.JPG",
  ];

  // Calculate time difference from April 15, 2023
  useEffect(() => {
    const calculateTimeDifference = () => {
      const startDate = Number(new Date("2023-04-15T00:00:00"));
      const now = Number(new Date());

      const diffTime = Math.abs(now - startDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const diffMinutes = Math.floor(
        (diffTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      const years = Math.floor(diffDays / 365);
      const months = Math.floor((diffDays % 365) / 30);
      const days = diffDays % 30;

      setTimeData({
        years,
        months,
        days,
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffSeconds,
      });
    };

    calculateTimeDifference();
    const interval = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Floating Hearts Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-300 opacity-20 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            size={16 + Math.random() * 16}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-purple-400/20 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-pink-600 font-medium mb-6 shadow-lg">
              <Heart className="w-5 h-5" />
              <span>Te amo muito!</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              Minha eterna
              <br />
              <span className="text-6xl lg:text-8xl">Namorada</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              Eu amo ser o seu par.
              <br />A sensação de ter ganhado na loteria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5 group-hover:animate-pulse" />I Love
                  You
                </span>
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-pink-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-pink-200">
                Nossa História
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative">
                <img
                  src="/assets/foto6.JPG"
                  alt="Our Photo"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Declaration Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-6 py-3 rounded-full text-pink-700 font-medium mb-8">
            <Heart className="w-5 h-5" />
            <span>Do fundo do meu coração</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Por que eu te amo cada dia mais
            <span className="text-pink-500"> Todos os dias</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Seu Sorriso
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seu sorriso ilumina meu mundo como nada mais. É a primeira coisa
                que quero ver de manhã e a última que quero ver à noite.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Sua Beleza
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sem palavras para a grande gostosa e maravilhosa que você é!
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Sua Alma
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A maneira como você me entende sem palavras, como você faz cada
                momento comum parecer mágico — você me completa em todos os
                sentidos.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-3xl text-white shadow-2xl">
            <p className="text-xl lg:text-2xl font-medium leading-relaxed italic">
              &quot;In a world full of temporary things, you are a perpetual
              feeling. You are my today, my tomorrow, and all my tomorrows after
              that. I choose you, I choose us, every single day.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-pink-700 font-medium mb-6">
              <Heart className="w-5 h-5" />
              <span>Nossas lembranças</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Momentos que
              <span className="text-pink-500"> Compartilhamos</span>
            </h2>
            <p className="text-xl text-gray-600">
              Cada imagem conta uma história do nosso amor
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src={carouselImages[currentImageIndex]}
                  alt={`Memory ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-pink-500 w-8"
                      : "bg-pink-200 hover:bg-pink-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Relationship Counter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium mb-8">
            <Calendar className="w-5 h-5" />
            <span>Desde 15 de Abril, 2023</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nossa História de Amor
            <span className="block text-3xl lg:text-4xl opacity-90">
              Continua...
            </span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6 mt-12">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {timeData.years}
              </div>
              <div className="text-sm lg:text-base opacity-90">Anos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {timeData.months}
              </div>
              <div className="text-sm lg:text-base opacity-90">Meses</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {timeData.days}
              </div>
              <div className="text-sm lg:text-base opacity-90">Dias</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {timeData.hours}
              </div>
              <div className="text-sm lg:text-base opacity-90">Horas</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {timeData.minutes}
              </div>
              <div className="text-sm lg:text-base opacity-90">Minutos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {timeData.seconds}
              </div>
              <div className="text-sm lg:text-base opacity-90">Segundos</div>
            </div>
          </div>

          <div className="mt-12 bg-white/20 backdrop-blur-sm p-8 rounded-3xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6" />
              <span className="text-xl font-semibold">E contando...</span>
            </div>
            <p className="text-lg opacity-90">
              Cada segundo com você é um presente, cada minuto uma bênção, cada
              hora uma celebração do nosso amor.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white/50 backdrop-blur-sm text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Para sempre & Sempre
            </span>
            <Heart className="w-6 h-6 text-pink-500" />
          </div>
          <p className="text-gray-600">Te amo muito!</p>
        </div>
      </footer>
    </div>
  );
}
