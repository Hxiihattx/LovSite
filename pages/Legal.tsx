
import React from 'react';
import { SectionBadge } from '../components/UI';

const Legal: React.FC<{ type: 'impressum' | 'datenschutz' | 'agb' }> = ({ type }) => {
  const content = {
    impressum: {
      title: 'Impressum',
      subtitle: 'Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.',
      sections: [
        {
          h2: 'Medieninhaber & Herausgeber',
          body: (
            <div className="space-y-4">
              <p><strong>Firmenname / Name:</strong> Lovable Website</p>
              <p><strong>Adresse:</strong> Tokiostrasse 12/2, 1220 Wien, Österreich</p>
              <p><strong>Telefon:</strong> 0660 4567098</p>
              <p><strong>E-Mail:</strong> hi@lovablewebsite.com</p>
              <p><strong>Web:</strong> www.lovablewebsite.com</p>
            </div>
          )
        },
        {
          h2: 'Unternehmensdaten',
          body: (
            <div className="space-y-4">
              <p><strong>UID-Nummer:</strong> ATU00000000 (Placeholder)</p>
              <p><strong>Firmenbuchnummer:</strong> FN 123456 x</p>
              <p><strong>Firmenbuchgericht:</strong> Handelsgericht Wien</p>
              <p><strong>Behörde gem. ECG:</strong> Magistrat der Stadt Wien</p>
              <p><strong>Kammerzugehörigkeit:</strong> Wirtschaftskammer Österreich (WKO), Fachgruppe Werbung & Marktkommunikation</p>
            </div>
          )
        },
        {
          h2: 'Haftungsausschluss',
          body: <p className="text-gray-600 leading-relaxed">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
        }
      ]
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      subtitle: 'The protection of your personal data is of particular concern to us.',
      sections: [
        {
          h2: 'General Information',
          body: <p className="text-gray-600 leading-relaxed">We process your data exclusively on the basis of the legal regulations (DSGVO, TKG 2003).</p>
        },
        {
          h2: 'Data Collection',
          body: (
            <div className="space-y-4">
              <h3 className="font-bold">Contact Form</h3>
              <p className="text-gray-600 leading-relaxed">If you contact us using the form on the website, your data will be stored for six months for the purpose of processing the request.</p>
              <h3 className="font-bold">Cookies</h3>
              <p className="text-gray-600 leading-relaxed">Our website uses cookies to improve user experience. You can disable these in your browser settings.</p>
            </div>
          )
        }
      ]
    },
    agb: {
      title: 'AGB',
      subtitle: 'General Terms and Conditions for Lovable Website services.',
      sections: [
        {
          h2: '§1 Geltungsbereich',
          body: <p className="text-gray-600 leading-relaxed">These General Terms and Conditions apply to all business relationships between Lovable Website and the Customer.</p>
        },
        {
          h2: '§2 Payment',
          body: <p className="text-gray-600 leading-relaxed">Unless otherwise agreed, 50% of the project fee is due at the start, and 50% upon completion.</p>
        }
      ]
    }
  };

  const current = content[type];

  return (
    <article className="pt-48 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-16">
          <SectionBadge>Legal Information</SectionBadge>
          <h1 className="tracking-tightest mb-6">{current.title}</h1>
          <p className="text-lg text-gray-500 leading-relaxed">{current.subtitle}</p>
        </header>

        <div className="space-y-12">
          {current.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="mb-6 pb-2 border-b border-gray-100">{section.h2}</h2>
              <div className="text-gray-600">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
            header, footer, nav { display: none !important; }
            article { padding-top: 0 !important; }
            body { color: black !important; background: white !important; }
        }
      `}} />
    </article>
  );
};

export default Legal;
