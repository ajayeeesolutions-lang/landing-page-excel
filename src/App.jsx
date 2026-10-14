import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookShowcase from './components/BookShowcase';
import CurriculumGraphics from './components/CurriculumGraphics';
import ExerciseSection from './components/ExerciseSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import PdfPreviewModal from './components/PdfPreviewModal';
import CheckoutModal from './components/CheckoutModal';
import { EBOOKS, BUNDLE_PACKAGE } from './data/ebooksData';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewBookId, setPreviewBookId] = useState('excel-nol');
  
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCheckoutItem, setSelectedCheckoutItem] = useState(null);

  const handleOpenPreview = (bookId = 'excel-nol') => {
    setPreviewBookId(bookId);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  const handleOpenCheckout = (item = null) => {
    // If no specific item passed, default to bundle or first book
    setSelectedCheckoutItem(item || BUNDLE_PACKAGE);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenPreview={handleOpenPreview} 
        onOpenCheckout={() => handleOpenCheckout()} 
      />

      {/* Main Hero Section with 3D Book Cards */}
      <Hero 
        onOpenPreview={handleOpenPreview} 
        onOpenCheckout={handleOpenCheckout} 
      />

      {/* Curriculum Visual Infographics (from LP EXCEL assets) */}
      <CurriculumGraphics />

      {/* Detailed Book Catalog Showcase with Cover & Highlights */}
      <BookShowcase 
        onOpenPreview={handleOpenPreview} 
        onOpenCheckout={handleOpenCheckout} 
      />

      {/* Interactive Exercises: Quiz & Downloadable Spreadsheets */}
      <ExerciseSection 
        onOpenCheckout={handleOpenCheckout} 
      />

      {/* Pricing Cards (Rp 30.000 satuan & Super Bundle) */}
      <PricingSection 
        onOpenCheckout={handleOpenCheckout} 
        onOpenPreview={handleOpenPreview} 
      />

      {/* Verified Reviews */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Footer */}
      <Footer 
        onOpenPreview={handleOpenPreview} 
        onOpenCheckout={handleOpenCheckout} 
      />

      {/* Sticky Bottom Floating CTA */}
      <FloatingCta 
        onOpenPreview={handleOpenPreview} 
        onOpenCheckout={handleOpenCheckout} 
      />

      {/* Interactive PDF Preview Modal with Locked Page Paywall */}
      <PdfPreviewModal 
        isOpen={isPreviewOpen} 
        onClose={handleClosePreview} 
        initialBookId={previewBookId}
        onSelectBookToBuy={(book) => handleOpenCheckout(book)}
      />

      {/* WhatsApp Checkout & Payment Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={handleCloseCheckout} 
        selectedItem={selectedCheckoutItem}
      />
    </div>
  );
}
