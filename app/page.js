export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ color: '#d946ef', fontSize: '3rem' }}>Bright Fluffy</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>أجود أنواع الخيوط لكل مبدعة</p>
      </header>

      <main style={{ display: 'grid', gap: '20px', justifyContent: 'center' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2>تشكيلة الخيوط الجديدة</h2>
          <p>اكتشفي نعومة Bright Fluffy الفريدة في الحياكة</p>
          <button style={{ backgroundColor: '#d946ef', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
            تصفح المنتجات
          </button>
        </div>
      </main>
    </div>
  );
}