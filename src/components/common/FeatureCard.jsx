import React from 'react';

const FeatureCard = ({ icon, title, description, gradient }) => {
    return (
        <div className="feature-card group relative overflow-hidden rounded-[1.5rem] border-2 border-[#f1f5f9] bg-white p-[var(--space-xl)] transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-xl)]">
            <div
                className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: 'var(--gradient-primary)' }}
            />
            <div className="feature-icon mb-[var(--space-md)] flex h-16 w-16 items-center justify-center rounded-2xl shadow-[var(--shadow-md)]" style={{ background: gradient }}>
                {icon}
            </div>
            <h3 className="feature-title mb-[var(--space-sm)] font-display text-[var(--text-xl)] font-bold text-[var(--color-black)]">{title}</h3>
            <p className="feature-description text-base leading-relaxed text-[#64748b]">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
