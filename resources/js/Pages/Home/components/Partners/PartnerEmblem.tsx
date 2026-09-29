import { PartnerInstitution } from '../../constants/supportingInstitutions';

interface PartnerEmblemProps {
    type: PartnerInstitution['emblemType'];
}

export default function PartnerEmblem({ type }: PartnerEmblemProps) {
    switch (type) {
        case 'kemenpora':
            return (
                <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 transition-transform group-hover:scale-105">
                    {/* Official Kemenpora Torch Silhouette */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current text-red-600"
                        aria-hidden="true"
                    >
                        <path d="M12 2C10.5 4.5 9 6 9 8.5C9 10.5 10.5 12 12 12C13.5 12 15 10.5 15 8.5C15 6 13.5 4.5 12 2ZM8 14H16V16C16 17.5 14.5 19 12 19C9.5 19 8 17.5 8 16V14ZM10 20H14V22H10V20Z" />
                    </svg>
                </div>
            );
        case 'bnn':
            return (
                <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-blue-50 p-1 transition-transform group-hover:scale-105">
                    <img
                        src="/logo-bnn.jpg"
                        alt="BNN RI"
                        className="h-full w-full object-contain"
                        onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display =
                                'none';
                        }}
                    />
                </div>
            );
        case 'pmk':
            return (
                <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 transition-transform group-hover:scale-105">
                    {/* Garuda Shield Silhouette */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current text-amber-600"
                        aria-hidden="true"
                    >
                        <path d="M12 2L15 5H19V9L22 12L19 15V19H15L12 22L9 19H5V15L2 12L5 9V5H9L12 2ZM12 6L10.5 9H13.5L12 6ZM8 11H16V14C16 16.2 14.2 18 12 18C9.8 18 8 16.2 8 14V11Z" />
                    </svg>
                </div>
            );
        case 'dispora':
            return (
                <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 transition-transform group-hover:scale-105">
                    {/* Youth & Sports Emblem */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current text-sky-600"
                        aria-hidden="true"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.76 4 17.15 5.56 18.32 7.85L12 11.5L5.68 7.85C6.85 5.56 9.24 4 12 4ZM4.26 9.77L11 13.66V20C6.96 19.5 3.8 15.65 4.26 9.77ZM13 20V13.66L19.74 9.77C20.2 15.65 17.04 19.5 13 20Z" />
                    </svg>
                </div>
            );
        case 'bnnp':
            return (
                <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 transition-transform group-hover:scale-105">
                    {/* Regional Security / Shield */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current text-kipan-navy"
                        aria-hidden="true"
                    >
                        <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2ZM12 6.5C13.93 6.5 15.5 8.07 15.5 10C15.5 11.93 13.93 13.5 12 13.5C10.07 13.5 8.5 11.93 8.5 10C8.5 8.07 10.07 6.5 12 6.5ZM12 15C14.67 15 17 16.34 17 18.5V19.34C15.56 20.45 13.84 21.14 12 21.14C10.16 21.14 8.44 20.45 7 19.34V18.5C7 16.34 9.33 15 12 15Z" />
                    </svg>
                </div>
            );
        case 'bakesbangpol':
            return (
                <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 transition-transform group-hover:scale-105">
                    {/* Unity Emblem */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current text-emerald-600"
                        aria-hidden="true"
                    >
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                    </svg>
                </div>
            );
        case 'pemda':
            return (
                <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 transition-transform group-hover:scale-105">
                    {/* Government Pillar */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current text-indigo-600"
                        aria-hidden="true"
                    >
                        <path d="M12 2L2 7V9H22V7L12 2ZM4 11H7V18H4V11ZM10 11H13V18H10V11ZM16 11H19V18H16V11ZM2 20H22V22H2V20Z" />
                    </svg>
                </div>
            );
    }
}
