import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PillTag from '../components/PillTag';
import Button from '../components/Button';

export default function LivingOfferings() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const offerings = [
    {
      id: 'eq-audit',
      title: 'Somatic EQ Diagnostic Audit',
      category: 'EQ_AUDIT',
      categoryLabel: 'Diagnostic Assessment',
      duration: '3-5 Minutes',
      description: 'A gentle multi-step diagnostic questionnaire mapping internal physiological tension markers, emotional capacity, and resting cadence.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8dLAuiIf12eJuSHZxxN1nQhmidXO9hRREdIsaAOcff7SftRuNUtpAmCnUdykt-FTsIIf2wHueQAepBhAXCAGZ74PnG8KDPjc9geLVdaBhxAnOSVEhowEWErg3f-HHcBrL-Qz9lKOkArTqSz0JYdcMDAzBqN0CNBo0lR9Gl-lKgfIDHOBTcuxAjDH2RIop88pCV1zHxhNXZ1bfJybuaoTl_aJZOBJQ2lz_hTmPyXLZRIk5iK3gioitPg',
      link: '/living-offerings/eq-audit',
      badge: 'Featured Practice'
    },
    {
      id: 'copenhagen-tide',
      title: 'Copenhagen Evening Tide',
      category: 'SOUNDSCAPES',
      categoryLabel: 'Acoustic Soundscape',
      duration: '18 Minutes • 432Hz',
      description: 'Uncompressed acoustic ambient recording captured in a coastal stone sanctuary, designed to settle nervous system alarm.',
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1Xx91KKMTv9DE_FgFuITt9IX1nqq40gqhLEPvOrlqWQAW_jjzl9QG-wSE7CdWG85byQ65U2rHpgC8C3VGgBCGRdhaCVxw8wWpaJhEviDeYXGvWfHf2UpE0-0ZJbdiwczZIgvSAtscGDjaFn5iK8s0KceyUeW_Xd7-7LSkrG_o_tK49RZcJWjYH--brHZs49p4oOiSF1-Nez6vYuoab6qidlAVyCGUNzMuehPDJiL-zW8uxOj33eU75stPIE',
      link: '/living-offerings/eq-audit',
      badge: 'Audio Preview Available'
    },
    {
      id: 'unhurried-journaling',
      title: 'Unhurried Reflective Journaling',
      category: 'PROSE',
      categoryLabel: 'Reflective Prose',
      duration: 'Self-Paced',
      description: 'Stream-of-consciousness writing prompts borrowing the tactile rhythm of unlined linen monographs.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8dLAuiIf12eJuSHZxxN1nQhmidXO9hRREdIsaAOcff7SftRuNUtpAmCnUdykt-FTsIIf2wHueQAepBhAXCAGZ74PnG8KDPjc9geLVdaBhxAnOSVEhowEWErg3f-HHcBrL-Qz9lKOkArTqSz0JYdcMDAzBqN0CNBo0lR9Gl-lKgfIDHOBTcuxAjDH2RIop88pCV1zHxhNXZ1bfJybuaoTl_aJZOBJQ2lz_hTmPyXLZRIk5iK3gioitPg',
      link: '/our-story',
      badge: 'Monograph Series'
    },
    {
      id: 'vagus-breathwork',
      title: 'Vagus Nerve Somatic De-escalation',
      category: 'GUIDED',
      categoryLabel: 'Guided Stillness',
      duration: '12 Minutes',
      description: 'Paced breathwork exploration targeted at releasing diaphragmatic constriction and resting heart rate variability.',
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1Xx91KKMTv9DE_FgFuITt9IX1nqq40gqhLEPvOrlqWQAW_jjzl9QG-wSE7CdWG85byQ65U2rHpgC8C3VGgBCGRdhaCVxw8wWpaJhEviDeYXGvWfHf2UpE0-0ZJbdiwczZIgvSAtscGDjaFn5iK8s0KceyUeW_Xd7-7LSkrG_o_tK49RZcJWjYH--brHZs49p4oOiSF1-Nez6vYuoab6qidlAVyCGUNzMuehPDJiL-zW8uxOj33eU75stPIE',
      link: '/eq-audit/assessment',
      badge: 'Somatic Focus'
    },
    {
      id: 'coastal-retreat',
      title: 'Copenhagen Coastal Retreat Circle',
      category: 'RETREATS',
      categoryLabel: 'Physical Gathering',
      duration: '3 Days • Autumn 2026',
      description: 'An intimate 12-person silent gathering in northern Denmark focused on somatic restoration and reflective dialogue.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8dLAuiIf12eJuSHZxxN1nQhmidXO9hRREdIsaAOcff7SftRuNUtpAmCnUdykt-FTsIIf2wHueQAepBhAXCAGZ74PnG8KDPjc9geLVdaBhxAnOSVEhowEWErg3f-HHcBrL-Qz9lKOkArTqSz0JYdcMDAzBqN0CNBo0lR9Gl-lKgfIDHOBTcuxAjDH2RIop88pCV1zHxhNXZ1bfJybuaoTl_aJZOBJQ2lz_hTmPyXLZRIk5iK3gioitPg',
      link: '/join-community',
      badge: 'Limited Circle'
    }
  ];

  const filteredOfferings = activeFilter === 'ALL'
    ? offerings
    : offerings.filter(o => o.category === activeFilter);

  return (
    <div className="w-full pt-20 bg-surface min-h-screen">
      
      {/* Banner */}
      <section className="w-full py-space-3xl bg-surface-container-low border-b border-outline-variant/30 text-center">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <PillTag icon="self_improvement" variant="default" className="mb-space-xs">
            Directory of Practices
          </PillTag>
          
          <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-[56px] text-on-surface font-serif mt-2">
            Living Offerings
          </h1>
          <p className="font-body-xl text-body-xl italic text-on-surface-variant max-w-2xl mx-auto mt-space-sm font-serif">
            Diagnostic EQ audits, acoustic soundscapes, somatic breathwork, and quiet monograph reflections.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full py-space-lg bg-surface border-b border-outline-variant/20 sticky top-20 z-40 backdrop-blur-md">
        <div className="max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-center gap-space-xs overflow-x-auto no-scrollbar py-1">
          {[
            { id: 'ALL', label: 'All Practices' },
            { id: 'EQ_AUDIT', label: 'EQ Audits' },
            { id: 'SOUNDSCAPES', label: 'Acoustic Soundscapes' },
            { id: 'GUIDED', label: 'Guided Stillness' },
            { id: 'PROSE', label: 'Reflective Prose' },
            { id: 'RETREATS', label: 'Retreat Circles' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-space-md py-2 rounded-full font-label-md text-[12px] uppercase tracking-wider transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-primary-container text-on-primary shadow-xs'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="w-full py-space-3xl">
        <div className="max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
            
            {filteredOfferings.map(item => (
              <div
                key={item.id}
                className="bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/40 shadow-xs flex flex-col justify-between hover:bg-surface-container transition-colors group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md text-primary font-label-sm text-[10px] uppercase tracking-widest border border-outline-variant/40">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-space-xl space-y-space-sm">
                    <div className="flex items-center justify-between font-label-sm text-[11px] text-secondary">
                      <span>{item.categoryLabel}</span>
                      <span>{item.duration}</span>
                    </div>

                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                      {item.title}
                    </h3>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-space-xl pt-0">
                  <Link to={item.link} className="w-full block">
                    <Button variant="primary" className="w-full" icon="arrow_forward">
                      Explore Offering
                    </Button>
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
