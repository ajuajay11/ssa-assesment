import React from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import Button from '../components/common/Button';

export default function NotFound() {
    const { t: $t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-8 relative">
                <h1 className="text-9xl font-black text-slate-100 select-none">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-blue-500 opacity-20"
                    >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-slate-800">
                {$t("error404.title") || "Page Not Found"}
            </h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
                {$t("error404.description") || "The page you are looking for doesn't exist or has been moved."}
            </p>

            <Button onClick={() => navigate("/")}>
                {$t("error404.goHome") || "Go Back Home"}
            </Button>
        </div>
    );
}
