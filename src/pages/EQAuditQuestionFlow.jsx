import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EQAuditQuestionFlow() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    tensionLocation: '',
    breathCadence: '',
    cognitiveSpeed: 50,
    boundaryStatus: '',
    notes: ''
  });

  const questions = [
    {
      id: 'tensionLocation',
      title: 'Physiological Tension Mapping',
      question: 'Where in your physical body are you carrying the heaviest weight right now?',
      subtitle: 'Close your eyes for three seconds and scan your resting frame.',
      type: 'choice',
      options: [
        { label: 'Jaw & Temple Tightness', desc: 'Holding unexpressed words or mental focus' },
        { label: 'Upper Shoulders & Neck', desc: 'Carrying responsibility or defensive posture' },
        { label: 'Chest & Solar Plexus', desc: 'Constricted shallow breathing or quiet anxiety' },
        { label: 'Lower Back & Pelvis', desc: 'Physical fatigue and structural exhaustion' }
      ]
    },
    {
      id: 'breathCadence',
      title: 'Respiratory Rhythm Scan',
      question: 'How does your breath move through your lungs in this minute?',
      subtitle: 'Observe without attempting to change or optimize it.',
      type: 'choice',
      options: [
        { label: 'Shallow & Upper-Chest', desc: 'Rapid, rapid-fire, oxygenating upper chest' },
        { label: 'Guarded & Intermittent', desc: 'Catching or holding breath during transitions' },
        { label: 'Deep & Diaphragmatic', desc: 'Sinking naturally into the lower abdomen' },
        { label: 'Restricted & Tight', desc: 'Feeling air hunger or ribcage tightness' }
      ]
    },
    {
      id: 'cognitiveSpeed',
      title: 'Cognitive Pace & Overwhelm Index',
      question: 'Rate the internal velocity of your thoughts over the past 24 hours.',
      subtitle: 'Drag the slider to match your resting mental pace.',
      type: 'slider',
      minLabel: 'Quiet & Spacious (Unhurried)',
      maxLabel: 'Rapid & Hyper-vigilant (Overwhelmed)'
    },
    {
      id: 'boundaryStatus',
      title: 'Relational & Emotional Permeability',
      question: 'How absorbed do you feel by external demands or other people’s emotional noise?',
      subtitle: 'Evaluate your personal perimeter and energetic capacity.',
      type: 'choice',
      options: [
        { label: 'Grounded & Intact', desc: 'Clear boundaries; external noise remains outside' },
        { label: 'Moderately Permeable', desc: 'Absorbing stress from work or family interactions' },
        { label: 'Saturated & Overwhelmed', desc: 'Feeling emotionally raw and depleted by demands' }
      ]
    }
  ];

  const currentQ = questions[currentStep];
  const progressPercent = ((currentStep + 1) / questions.length) * 100;

  const handleSelectOption = (value) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save answers & navigate to synthesis calculation
      sessionStorage.setItem('soulfuli_audit_answers', JSON.stringify(answers));
      navigate('/eq-audit/results');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full pt-20 bg-surface min-h-screen flex flex-col justify-between">
      
      {/* Top Bar with Progress */}
      <div className="w-full border-b border-outline-variant/30 bg-surface-container-low py-space-md">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`inline-flex items-center font-body-sm text-[13px] ${
              currentStep === 0 ? 'opacity-30 cursor-not-allowed text-outline' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] mr-1">arrow_back</span>
            Back
          </button>

          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Prompt {currentStep + 1} of {questions.length}
          </span>

          <span className="font-body-sm text-[12px] text-on-surface-variant font-serif italic">
            Somatic EQ Audit
          </span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-1 bg-surface-container-highest mt-space-md relative overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-r-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card Area */}
      <main className="w-full flex-grow flex items-center py-space-3xl">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop w-full">
          <div className="bg-surface-container-low rounded-3xl p-space-xl lg:p-space-2xl border border-outline-variant/40 shadow-xs space-y-space-xl">
            
            {/* Question Header */}
            <div className="space-y-space-xs text-center">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-medium">
                {currentQ.title}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif">
                {currentQ.question}
              </h2>
              <p className="font-body-md text-body-md italic text-on-surface-variant">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Input / Choice Options */}
            {currentQ.type === 'choice' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-md">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentQ.id] === opt.label;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.label)}
                      className={`text-left p-space-lg rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-surface border-primary ring-2 ring-primary/20 shadow-xs'
                          : 'bg-surface border-outline-variant/40 hover:border-secondary hover:bg-surface-container'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-[18px] text-on-surface font-serif font-medium">
                          {opt.label}
                        </span>
                        <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant'
                        }`}>
                          {isSelected && <span className="material-symbols-outlined text-[14px]">check</span>}
                        </span>
                      </div>
                      <p className="font-body-sm text-[13px] text-on-surface-variant mt-1.5 leading-relaxed">
                        {opt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQ.type === 'slider' && (
              <div className="space-y-space-lg pt-space-lg max-w-xl mx-auto">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={answers.cognitiveSpeed}
                  onChange={(e) => setAnswers(prev => ({ ...prev, cognitiveSpeed: parseInt(e.target.value) }))}
                  className="w-full h-3 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                />

                <div className="flex justify-between font-label-sm text-[11px] text-on-surface-variant">
                  <span>{currentQ.minLabel}</span>
                  <span className="font-semibold text-primary">{answers.cognitiveSpeed}%</span>
                  <span>{currentQ.maxLabel}</span>
                </div>
              </div>
            )}

            {/* Optional Personal Note Box */}
            <div className="pt-space-md">
              <label className="block font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant mb-1">
                Optional Somatic Observation (Field Note)
              </label>
              <textarea
                rows={2}
                value={answers.notes}
                onChange={(e) => setAnswers(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Write any subtle sensation, image, or emotion arising right now..."
                className="w-full bg-surface border border-outline-variant/60 rounded-xl p-3 font-body-sm text-body-sm text-on-surface placeholder:text-outline/70 focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            {/* Next / Complete Action */}
            <div className="flex justify-center pt-space-md">
              <button
                onClick={handleNext}
                disabled={currentQ.type === 'choice' && !answers[currentQ.id]}
                className={`inline-flex items-center justify-center rounded-full px-space-2xl py-3.5 font-body-md font-medium text-on-primary transition-all ${
                  currentQ.type === 'choice' && !answers[currentQ.id]
                    ? 'bg-outline/40 cursor-not-allowed'
                    : 'bg-primary-container hover:bg-primary shadow-md transform hover:-translate-y-0.5'
                }`}
              >
                {currentStep === questions.length - 1 ? 'Calculate Archetype & Synthesis' : 'Continue to Next Prompt'}
                <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
              </button>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
