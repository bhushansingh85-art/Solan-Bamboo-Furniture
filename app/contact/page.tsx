'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactContent() {
  const searchParams = useSearchParams();
  const topic = searchParams.get('topic') || '';

  return (
    <div>
      {/* अपना मौजूदा कॉन्टैक्ट फ़ॉर्म या कंटेंट यहाँ रखें, और `topic` या `searchParams` का उपयोग करें */}
      <p>Inquiry topic: {topic}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading contact form...</div>}>
      <ContactContent />
    </Suspense>
  );
}
