function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">👨🏽‍💻 Banele Xhamlashe</h1>
        <p className="text-lg">Software Developer | Full-Stack Enthusiast</p>
      </header>

      <section className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>I’m a software developer who loves building smart, elegant, and helpful digital solutions. I'm passionate about full-stack development and always looking to learn more.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-disc list-inside">
            <li><strong>Debonairs Pricing System</strong> - VB.NET project to manage and analyze pizza prices.</li>
            <li><strong>Heart Disease Prediction</strong> - Machine learning model to predict heart attacks.</li>
            <li><strong>KOTAS Ordering System</strong> - Java GUI food app for traditional South African dishes.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>GitHub: <a href="https://github.com/YOUR-USERNAME" className="text-blue-600 underline">github.com/YOUR-USERNAME</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;
