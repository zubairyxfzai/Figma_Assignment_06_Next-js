"use client";
import React from 'react';
import Header from '@/components/Header/header';
import Hero from '@/components/Hero/hero';
import Boxes from '@/components/Explore Courses/boxes';
import Achievements from '@/components/Achievements/achievements';
import Courses from '@/components/Popular Courses/courses';
import About from '@/components/About Us/about';
import Testimonials from '@/components/Testimonials/testimonials';
import Footer from '@/components/Footer/footer';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Boxes />
      <Achievements />
      <Courses />
      <About/>
      <Testimonials/>
      <Footer/>

    </div>
  )
}

export default Home;