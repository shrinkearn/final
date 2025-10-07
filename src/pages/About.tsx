import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Learn more about OilMart, our mission, and our commitment to quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


