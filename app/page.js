import React from 'react';

export default function Home() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', color: '#2d3436', backgroundColor: '#fff' }}>
      
      {/* Header / Navbar */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '25px 8%', 
        alignItems: 'center', 
        background: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)' 
      }}>
        <div style={{ fontSize: '28px', fontWeight: '900', color: '#2d3436', letterSpacing: '1px' }}>
          BRIGHT <span style={{ color: '#d946ef', fontWeight: '300' }}>YARNS</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: '600' }}>
          <a href="#about" style={{ textDecoration: 'none', color: '#2d3436' }}>من نحن</a>
          <a href="#collection" style={{ textDecoration: 'none', color: '#2d3436' }}>المجموعات</a>
          <a href="#contact" style={{ 
            textDecoration: 'none', 
            backgroundColor: '#d946ef', 
            color: 'white', 
            padding: '10px 25px', 
            borderRadius: '8px' 
          }}>اطلب الآن</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ 
        height: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 8%',
        background: 'linear-gradient(135deg, #fdf4ff 0%, #ffffff 100%)',
        overflow: 'hidden'
      }}>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <h2 style={{ fontSize: '4rem', lineHeight: '1.2', color: '#1a1a1a', marginBottom: '20px' }}>
            فن الحياكة يبدأ من <br/>
            <span style={{ color: '#d946ef' }}>Bright Yarns</span>
          </h2>
          <p style={{ fontSize: '1.4rem', color: '#636e72', maxWidth: '600px', marginBottom: '40px' }}>
            نصنع السحر بكل غرزة. اكتشفي مجموعتنا الفاخرة من الخيوط المصممة خصيصاً لأصحاب الذوق الرفيع والمبدعين.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={{ padding: '18px 45px', fontSize: '1.1rem', backgroundColor: '#2d3436', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>تصفح كافة الخيوط</button>
            <button style={{ padding: '18px 45px', fontSize: '1.1rem', backgroundColor: 'transparent', color: '#d946ef', border: '2px solid #d946ef', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>قصتنا</button>
          </div>
        </div>
      </header>

      {/* Categories / Products */}
      <section id="collection" style={{ padding: '100px 8%' }}>
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <h3 style={{ fontSize: '2.8rem', color: '#1a1a1a' }}>مجموعاتنا المختارة</h3>
          <p style={{ color: '#b2bec3', fontSize: '1.2rem' }}>من الخيوط الكلاسيكية إلى المبتكرة</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {/* المنتج الأول: Bright Fluffy */}
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '25px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid #f1f2f6'
          }}>
            <div style={{ height: '300px', backgroundColor: '#fdf4ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {/* هنا يمكنك وضع صورة منتج برايت فلافى */}
               <span style={{ color: '#d946ef', fontSize: '1.2rem' }}>[صورة Bright Fluffy الحقيقية]</span>
            </div>
            <div style={{ padding: '30px' }}>
              <div style={{ color: '#d946ef', fontWeight: 'bold', marginBottom: '10px' }}>المنتج الأكثر مبيعاً</div>
              <h4 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Bright Fluffy</h4>
              <p style={{ color: '#636e72', lineHeight: '1.6' }}>
                خيوط تتميز بنعومة فائقة، مثالية لملابس الشتاء والأوشحة التي تمنحك الدفء والراحة.
              </p>
              <button style={{ marginTop: '20px', background: 'none', border: 'none', color: '#d946ef', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>عرض التفاصيل ←</button>
            </div>
          </div>

          {/* منتجات أخرى مستقبلاً */}
          <div style={{ backgroundColor: '#f1f2f6', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b2bec3', fontSize: '1.4rem', border: '2px dashed #dfe6e9' }}>
            قريباً: خيوط قطنية صيفية
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 8%', backgroundColor: '#2d3436', color: 'white', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Bright Yarns</h2>
        <p style={{ opacity: 0.7, maxWidth: '500px', margin: '0 auto 30px' }}>شريكك في كل مشروع حياكة. جودة نعتز بها تحت إدارة مصطفى محمود حنفي.</p>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
          © 2026 جميع الحقوق محفوظة لـ Bright Yarns.
        </div>
      </footer>
    </div>
  );
}