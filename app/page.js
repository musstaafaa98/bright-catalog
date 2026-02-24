import React from 'react';

export default function Home() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', color: '#333', backgroundColor: '#fff' }}>
      {/* Navbar - شريط التنقل */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 5%', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#d946ef' }}>BRIGHT</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#about" style={{ textDecoration: 'none', color: '#666' }}>من نحن</a>
          <a href="#products" style={{ textDecoration: 'none', color: '#666' }}>منتجاتنا</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#666', fontWeight: 'bold' }}>اطلب الآن</a>
        </div>
      </nav>

      {/* Hero Section - الواجهة الرئيسية */}
      <header style={{ 
        height: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        background: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=1000") center/cover',
        padding: '0 20px'
      }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '10px', color: '#1a1a1a' }}>عالم من النعومة مع <span style={{ color: '#d946ef' }}>Bright Fluffy</span></h2>
        <p style={{ fontSize: '1.5rem', color: '#555', maxWidth: '700px' }}>نقدم لكِ أجود أنواع الخيوط التي تجعل من أعمالك اليدوية قطعاً فنية فريدة.</p>
        <button style={{ 
          marginTop: '30px', 
          padding: '15px 40px', 
          fontSize: '1.2rem', 
          backgroundColor: '#d946ef', 
          color: 'white', 
          border: 'none', 
          borderRadius: '50px', 
          cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(217, 70, 239, 0.3)'
        }}>تصفحي الكتالوج</button>
      </header>

      {/* Featured Products - منتجات مختارة */}
      <section id="products" style={{ padding: '80px 5%', backgroundColor: '#fdf4ff' }}>
        <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>تشكيلتنا المميزة</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', textAlign: 'center', transition: 'transform 0.3s' }}>
              <div style={{ width: '100%', height: '250px', backgroundColor: '#eee', borderRadius: '15px', marginBottom: '20px' }}></div>
              <h4>Bright Fluffy - صوف ناعم</h4>
              <p style={{ color: '#888' }}>متوفر بجميع الألوان الزاهية</p>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#d946ef' }}>99.99 ج.م</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - التذييل */}
      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <p>© 2026 Bright Yarns - جميع الحقوق محفوظة لـ مصطفى محمود حنفي</p>
      </footer>
    </div>
  );
}