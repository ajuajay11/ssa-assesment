import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SkipLink() {
    const { t: $t } = useTranslation();

    return (
        <a href="#main-content" className="skip-link">
            {$t("nav.skipToContent") || "Skip to content"}
        </a>
    );
}
