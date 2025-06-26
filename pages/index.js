import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>OnDev Systems</title>
        <meta name="description" content="Soluciones de tecnología innovadoras" />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        padding: '0 1rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>OnDev Systems</h1>
        <p style={{ fontSize: '1.25rem' }}>Soluciones de tecnología innovadoras</p>
      </main>
    </>
  );
}
