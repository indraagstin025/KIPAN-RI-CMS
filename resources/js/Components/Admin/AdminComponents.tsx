/**
 * Shared Admin Components
 * Reusable building blocks for all CMS admin pages.
 */
import { Link, router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

// ============================================================
// STATUS BADGE
// ============================================================
const STATUS_STYLES: Record<string, string> = {
    published: 'bg-emerald-100 text-emerald-700',
    draft: 'bg-slate-100 text-slate-600',
    review: 'bg-amber-100 text-amber-700',
    archived: 'bg-red-100 text-red-600',
    scheduled: 'bg-blue-100 text-blue-700',
    active: 'bg-emerald-100 text-emerald-700',
    inactive: 'bg-slate-100 text-slate-500',
};

const STATUS_LABELS: Record<string, string> = {
    published: 'Publik',
    draft: 'Draf',
    review: 'Review',
    archived: 'Arsip',
    scheduled: 'Terjadwal',
    active: 'Aktif',
    inactive: 'Nonaktif',
};

export function StatusBadge({ status }: { status: string }) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[status] ?? 'bg-slate-100 text-slate-600'}`}
        >
            {STATUS_LABELS[status] ?? status}
        </span>
    );
}

// ============================================================
// FLASH MESSAGE
// ============================================================
export function FlashMessage({ success, error }: { success?: string | null; error?: string | null }) {
    if (!success && !error) return null;

    return (
        <>
            {success && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <p className="text-sm font-medium text-emerald-800">{success}</p>
                </div>
            )}
            {error && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-3.5">
                    <div className="h-2 w-2 rounded-full bg-red-500 shrink-0" />
                    <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
            )}
        </>
    );
}

// ============================================================
// CONFIRM DELETE MODAL
// ============================================================
interface ConfirmDeleteProps {
    isOpen: boolean;
    title?: string;
    message?: string;
    onConfirm: () => void;
    onCancel: () => void;
    processing?: boolean;
}

export function ConfirmDeleteModal({
    isOpen,
    title = 'Hapus Data',
    message = 'Tindakan ini tidak dapat dibatalkan. Yakin ingin menghapus?',
    onConfirm,
    onCancel,
    processing = false,
}: ConfirmDeleteProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onCancel}
                aria-hidden="true"
            />
            <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
                <div className="mb-1 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                        <Trash2 className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{title}</h3>
                </div>
                <p className="mb-6 pl-13 text-sm text-slate-500 pl-[52px]">{message}</p>
                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={processing}
                        className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={processing}
                        className="rounded-xl bg-red-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-600 disabled:opacity-60"
                    >
                        {processing ? 'Menghapus...' : 'Hapus'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// SEARCH BAR
// ============================================================
interface SearchBarProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Cari...' }: SearchBarProps) {
    return (
        <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
                type="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="block w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20"
            />
        </div>
    );
}

// ============================================================
// PAGE HEADER
// ============================================================
interface PageHeaderProps {
    title: string;
    description?: string;
    createHref?: string;
    createLabel?: string;
    children?: ReactNode;
}

export function PageHeader({
    title,
    description,
    createHref,
    createLabel = 'Tambah Baru',
    children,
}: PageHeaderProps) {
    return (
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-xl font-bold text-slate-900">{title}</h1>
                {description && (
                    <p className="mt-0.5 text-sm text-slate-500">{description}</p>
                )}
            </div>
            <div className="flex items-center gap-3">
                {children}
                {createHref && (
                    <Link
                        href={createHref}
                        className="inline-flex items-center gap-2 rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-navy"
                    >
                        <Plus className="h-4 w-4" />
                        {createLabel}
                    </Link>
                )}
            </div>
        </div>
    );
}

// ============================================================
// ADMIN TABLE WRAPPER
// ============================================================
export function AdminTable({ children }: { children: ReactNode }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-100 text-sm">
                    {children}
                </table>
            </div>
        </div>
    );
}

export function AdminTh({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <th
            scope="col"
            className={`whitespace-nowrap bg-slate-50/80 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ${className}`}
        >
            {children}
        </th>
    );
}

export function AdminTd({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <td className={`px-4 py-3.5 align-middle ${className}`}>
            {children}
        </td>
    );
}

// ============================================================
// ACTION BUTTONS
// ============================================================
export function EditButton({ href }: { href: string }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 hover:text-kipan-blue"
        >
            <Pencil className="h-3.5 w-3.5" />
            Edit
        </Link>
    );
}

export function DeleteButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50"
        >
            <Trash2 className="h-3.5 w-3.5" />
            Hapus
        </button>
    );
}

// ============================================================
// PAGINATION
// ============================================================
interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationProps {
    links: PaginationLink[];
    from: number;
    to: number;
    total: number;
}

export function AdminPagination({ links, from, to, total }: PaginationProps) {
    if (total <= 0) return null;

    return (
        <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-slate-500">
                Menampilkan <span className="font-semibold text-slate-700">{from}</span>–
                <span className="font-semibold text-slate-700">{to}</span> dari{' '}
                <span className="font-semibold text-slate-700">{total}</span> data
            </p>

            <div className="flex items-center gap-1">
                {links.map((link, i) => {
                    if (link.label.includes('Previous') || link.label === '&laquo; Previous') {
                        return (
                            <button
                                key={i}
                                type="button"
                                disabled={!link.url}
                                onClick={() => link.url && router.visit(link.url, { preserveScroll: true })}
                                className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 disabled:opacity-40"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                        );
                    }
                    if (link.label.includes('Next') || link.label === 'Next &raquo;') {
                        return (
                            <button
                                key={i}
                                type="button"
                                disabled={!link.url}
                                onClick={() => link.url && router.visit(link.url, { preserveScroll: true })}
                                className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 disabled:opacity-40"
                                aria-label="Next"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        );
                    }
                    if (link.label === '...') {
                        return (
                            <span key={i} className="px-2 text-slate-400">
                                …
                            </span>
                        );
                    }
                    return (
                        <button
                            key={i}
                            type="button"
                            onClick={() => link.url && router.visit(link.url, { preserveScroll: true })}
                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                link.active
                                    ? 'border-kipan-navy bg-kipan-navy text-white'
                                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            {link.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

// ============================================================
// FORM FIELD WRAPPERS
// ============================================================
interface FormFieldProps {
    label: string;
    htmlFor: string;
    error?: string;
    required?: boolean;
    hint?: string;
    children: ReactNode;
}

export function FormField({ label, htmlFor, error, required, hint, children }: FormFieldProps) {
    return (
        <div>
            <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </label>
            {children}
            {hint && !error && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}

export const inputClass =
    'block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20';

export const selectClass =
    'block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20';

export const textareaClass =
    'block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:border-kipan-blue focus:outline-none focus:ring-2 focus:ring-kipan-blue/20 resize-none';

// ============================================================
// IMAGE UPLOADER
// ============================================================
interface ImageUploaderProps {
    currentUrl?: string | null;
    onChange: (file: File | null) => void;
    error?: string;
    label?: string;
    hint?: string;
}

export function ImageUploader({
    currentUrl,
    onChange,
    error,
    label = 'Gambar',
    hint = 'JPG, PNG, WebP. Maks 2MB.',
}: ImageUploaderProps) {
    const [preview, setPreview] = useState<string | null>(currentUrl ?? null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback(
        (file: File | null) => {
            if (!file) return;
            const url = URL.createObjectURL(file);
            setPreview(url);
            onChange(file);
        },
        [onChange],
    );

    return (
        <div>
            <p className="mb-1.5 text-sm font-medium text-slate-700">{label}</p>
            <div
                className={`relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-6 transition ${
                    error ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50 hover:border-kipan-blue/50 hover:bg-blue-50/30'
                } cursor-pointer`}
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    handleFile(e.dataTransfer.files[0] ?? null);
                }}
            >
                {preview ? (
                    <img
                        src={preview}
                        alt="Preview"
                        className="max-h-48 w-full rounded-xl object-cover"
                    />
                ) : (
                    <div className="text-center">
                        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                            <Plus className="h-6 w-6 text-slate-400" />
                        </div>
                        <p className="text-sm font-medium text-slate-600">
                            Klik atau drag gambar ke sini
                        </p>
                        <p className="mt-1 text-xs text-slate-400">{hint}</p>
                    </div>
                )}
                {preview && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setPreview(null);
                            onChange(null);
                            if (inputRef.current) inputRef.current.value = '';
                        }}
                        className="absolute right-3 top-3 rounded-full bg-white/90 p-1 shadow transition hover:bg-red-50 hover:text-red-500"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                )}
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                />
            </div>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}

// ============================================================
// FORM CARD WRAPPER
// ============================================================
export function FormCard({ title, children }: { title?: string; children: ReactNode }) {
    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            {title && (
                <div className="border-b border-slate-100 px-6 py-4">
                    <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
                </div>
            )}
            <div className="space-y-5 p-6">{children}</div>
        </div>
    );
}

// ============================================================
// USEDEBANOUNCED SEARCH HOOK
// ============================================================
export function useDebouncedSearch(
    initialValue: string,
    onSearch: (val: string) => void,
    delay = 400,
) {
    const [value, setValue] = useState(initialValue);
    const timer = useRef<ReturnType<typeof setTimeout>>(null!);

    const handleChange = useCallback(
        (val: string) => {
            setValue(val);
            clearTimeout(timer.current);
            timer.current = setTimeout(() => onSearch(val), delay);
        },
        [onSearch, delay],
    );

    useEffect(() => () => clearTimeout(timer.current), []);

    return { value, handleChange };
}
