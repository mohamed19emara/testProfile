import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <h1>مرحبًا، أنا محمد</h1>
      <p>مطور واجهات أمامية متخصص في React</p>
      <img src="https://via.placeholder.com/150" alt="صورة شخصية" />
      <a href="/contact" className="btn">تواصل معي</a>
    </section>
  );
};

export default Home;
