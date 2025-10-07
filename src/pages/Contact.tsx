import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions or feedback? Wed love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


