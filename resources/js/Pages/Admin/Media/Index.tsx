import {
    AdminPagination,
    ConfirmDeleteModal,
    FlashMessage,
    FormField,
    PageHeader,
    SearchBar,
    inputClass,
    useDebouncedSearch,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import {
    Check,
    Copy,
    ExternalLink,
    File,
    FileArchive,
    FileCode,
    FileImage,
    FileSpreadsheet,
    FileText,
    FileVideo,
    Film,
    Filter,
    HardDrive,
    Info,
    Pencil,
    Plus,
    Trash2,
    UploadCloud,
    X,
} from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';

interface MediaItem {
    id: number;
    file_name: string;
    url: string;
    mime_type: string;
    size: number;
    alt_text: string | null;
    created_at: string;
}

interface PaginatedMedia {
    data: MediaItem[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number;
    to: number;
    total: number;
}

interface Props {
    media: PaginatedMedia;
    filters?: { search?: string; type?: string };
}

function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isImage(mime: string): boolean {
    return mime.startsWith('image/');
}

function isVideo(mime: string): boolean {
    return mime.startsWith('video/');
}

export default function MediaIndex({ media, filters }: Props) {
    const { flash } = usePage<PageProps>().props;

    const [deleteTarget, setDeleteTarget] = useState<MediaItem | null>(null);
    const [detailTarget, setDetailTarget] = useState<MediaItem | null>(null);
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [activeType, setActiveType] = useState<string>(filters?.type ?? '');

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Search bar
    const { value: searchValue, handleChange: handleSearch } = useDebouncedSearch(
        filters?.search ?? '',
        (val) => {
            router.get(
                '/admin/media',
                { search: val, type: activeType },
                { preserveState: true, replace: true },
            );
        },
    );

    // Filter type handler
    function handleTypeFilter(type: string) {
        setActiveType(type);
        router.get(
            '/admin/media',
            { search: searchValue, type },
            { preserveState: true, replace: true },
        );
    }

    // Forms
    const uploadForm = useForm<{ file: File | null; alt_text: string }>({
        file: null,
        alt_text: '',
    });

    const editForm = useForm({
        alt_text: '',
    });

    const deleteForm = useForm({});

    useEffect(() => {
        if (detailTarget) {
            editForm.setData('alt_text', detailTarget.alt_text ?? '');
            editForm.clearErrors();
        }
    }, [detailTarget]);

    function handleFileSelection(files: FileList | null) {
        if (!files || files.length === 0) return;
        const file = files[0];

        uploadForm.setData('file', file);
        const data = new FormData();
        data.append('file', file);

        uploadForm.post('/admin/media', {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                uploadForm.reset();
                if (fileInputRef.current) fileInputRef.current.value = '';
            },
        });
    }

    function handleUpdateAlt(e: FormEvent) {
        e.preventDefault();
        if (!detailTarget) return;

        editForm.put(`/admin/media/${detailTarget.id}`, {
            preserveScroll: true,
            onSuccess: () => {
                // Update local detailTarget as well
                setDetailTarget({
                    ...detailTarget,
                    alt_text: editForm.data.alt_text,
                });
            },
        });
    }

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/media/${deleteTarget.id}`, {
            preserveScroll: true,
            onSuccess: () => {
                setDeleteTarget(null);
                if (detailTarget?.id === deleteTarget.id) {
                    setDetailTarget(null);
                }
            },
        });
    }

    function copyToClipboard(url: string, id: number) {
        navigator.clipboard.writeText(url).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    }

    return (
        <>
            <Head title="Media Library — KIPAN CMS" />
            <AdminLayout title="Media Library">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader
                    title="Media Library"
                    description={`${media.total} total berkas tersimpan`}
                >
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadForm.processing}
                        className="inline-flex items-center gap-2 rounded-xl bg-kipan-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-kipan-navy disabled:opacity-60"
                    >
                        <UploadCloud className="h-4 w-4" />
                        {uploadForm.processing ? 'Mengunggah...' : 'Upload Berkas'}
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,application/pdf,video/mp4,video/quicktime"
                        onChange={(e) => handleFileSelection(e.target.files)}
                    />
                </PageHeader>

                {/* Upload Drag & Drop Zone */}
                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        handleFileSelection(e.dataTransfer.files);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`mb-6 flex flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed p-6 text-center cursor-pointer transition-all ${
                        isDragging
                            ? 'border-kipan-blue bg-blue-50/70 scale-[0.99]'
                            : 'border-slate-200 bg-white hover:border-kipan-blue/60 hover:bg-slate-50/50 shadow-2xs'
                    }`}
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-kipan-navy">
                        <UploadCloud className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-semibold text-slate-800">
                        {uploadForm.processing ? 'Sedang mengunggah berkas...' : 'Tarik & lepas berkas ke sini, atau klik untuk memilih'}
                    </p>
                    <p className="text-xs text-slate-400">
                        Mendukung Gambar (JPG, PNG, WebP, GIF, SVG), Dokumen (PDF), Video (MP4). Maksimal 10MB.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:max-w-md">
                        <SearchBar
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder="Cari nama berkas atau deskripsi..."
                        />
                    </div>

                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                        <button
                            type="button"
                            onClick={() => handleTypeFilter('')}
                            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                                activeType === ''
                                    ? 'bg-kipan-navy text-white shadow-2xs'
                                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                            Semua
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTypeFilter('image')}
                            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                                activeType === 'image'
                                    ? 'bg-kipan-navy text-white shadow-2xs'
                                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                            Gambar
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTypeFilter('video')}
                            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                                activeType === 'video'
                                    ? 'bg-kipan-navy text-white shadow-2xs'
                                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                            Video
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTypeFilter('document')}
                            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                                activeType === 'document'
                                    ? 'bg-kipan-navy text-white shadow-2xs'
                                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                            Dokumen
                        </button>
                    </div>
                </div>

                {/* Media Grid */}
                {media.data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white py-16 text-center shadow-xs">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                            <FileImage className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-semibold text-slate-700">Tidak ada berkas media</p>
                        <p className="mt-1 text-xs text-slate-400">
                            {searchValue ? 'Tidak ada berkas yang sesuai dengan kata kunci pencarian.' : 'Mulai unggah foto atau dokumen pertama Anda.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {media.data.map((item) => (
                            <div
                                key={item.id}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition hover:shadow-md"
                            >
                                {/* Media Thumbnail */}
                                <div
                                    onClick={() => setDetailTarget(item)}
                                    className="relative aspect-square cursor-pointer overflow-hidden bg-slate-100 flex items-center justify-center"
                                >
                                    {isImage(item.mime_type) ? (
                                        <img
                                            src={item.url}
                                            alt={item.alt_text ?? item.file_name}
                                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : isVideo(item.mime_type) ? (
                                        <div className="flex flex-col items-center text-slate-400">
                                            <FileVideo className="h-10 w-10 text-indigo-500" />
                                            <span className="mt-1 text-[10px] font-semibold uppercase text-indigo-600">Video</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center text-slate-400">
                                            <FileText className="h-10 w-10 text-amber-500" />
                                            <span className="mt-1 text-[10px] font-semibold uppercase text-amber-600">Dokumen</span>
                                        </div>
                                    )}

                                    {/* Overlay Actions on Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-slate-900/40 opacity-0 backdrop-blur-2xs transition-opacity group-hover:opacity-100">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setDetailTarget(item);
                                            }}
                                            className="rounded-full bg-white p-2 text-slate-700 shadow-sm transition hover:bg-blue-50 hover:text-kipan-blue"
                                            title="Edit / Info Berkas"
                                        >
                                            <Pencil className="h-3.5 w-3.5" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                copyToClipboard(item.url, item.id);
                                            }}
                                            className="rounded-full bg-white p-2 text-slate-700 shadow-sm transition hover:bg-blue-50 hover:text-kipan-blue"
                                            title="Salin Link"
                                        >
                                            {copiedId === item.id ? (
                                                <Check className="h-3.5 w-3.5 text-emerald-600" />
                                            ) : (
                                                <Copy className="h-3.5 w-3.5" />
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setDeleteTarget(item);
                                            }}
                                            className="rounded-full bg-white p-2 text-red-500 shadow-sm transition hover:bg-red-50"
                                            title="Hapus"
                                        >
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Metadata caption */}
                                <div className="p-2.5">
                                    <p className="truncate text-xs font-semibold text-slate-800" title={item.file_name}>
                                        {item.file_name}
                                    </p>
                                    <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                                        <span>{formatSize(item.size)}</span>
                                        <span>{item.created_at.split(',')[0]}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                <AdminPagination
                    links={media.links}
                    from={media.from}
                    to={media.to}
                    total={media.total}
                />

                {/* ============================================================ */}
                {/* MODAL: DETAIL & EDIT MEDIA */}
                {/* ============================================================ */}
                {detailTarget && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
                            onClick={() => !editForm.processing && setDetailTarget(null)}
                            aria-hidden="true"
                        />
                        <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl transition-all sm:p-7">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-kipan-navy">
                                        <Pencil className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900">Detail & Edit Media</h3>
                                        <p className="text-xs text-slate-500">Periksa informasi dan edit metadata berkas</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setDetailTarget(null)}
                                    disabled={editForm.processing}
                                    className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Preview Container */}
                                <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 overflow-hidden">
                                    {isImage(detailTarget.mime_type) ? (
                                        <img
                                            src={detailTarget.url}
                                            alt={detailTarget.alt_text ?? detailTarget.file_name}
                                            className="max-h-60 w-full rounded-xl object-contain shadow-2xs"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center py-12 text-slate-400">
                                            <File className="h-16 w-16 text-slate-300" />
                                            <span className="mt-2 text-xs font-semibold uppercase">{detailTarget.mime_type}</span>
                                        </div>
                                    )}

                                    <div className="mt-3 w-full flex items-center justify-center gap-2">
                                        <a
                                            href={detailTarget.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-kipan-blue"
                                        >
                                            <ExternalLink className="h-3.5 w-3.5" />
                                            Buka Berkas Penuh
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => copyToClipboard(detailTarget.url, detailTarget.id)}
                                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                                        >
                                            {copiedId === detailTarget.id ? (
                                                <>
                                                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                                                    <span className="text-emerald-600">Tersalin!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="h-3.5 w-3.5" />
                                                    <span>Salin URL</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Form & Meta */}
                                <form onSubmit={handleUpdateAlt} className="flex flex-col justify-between space-y-4">
                                    <div className="space-y-3.5">
                                        <div>
                                            <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                                Nama Berkas
                                            </span>
                                            <p className="mt-0.5 text-xs font-medium text-slate-800 break-all">
                                                {detailTarget.file_name}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                                    Ukuran
                                                </span>
                                                <p className="mt-0.5 text-slate-700">{formatSize(detailTarget.size)}</p>
                                            </div>
                                            <div>
                                                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                                    Tipe Berkas
                                                </span>
                                                <p className="mt-0.5 text-slate-700 truncate" title={detailTarget.mime_type}>
                                                    {detailTarget.mime_type}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                                Tanggal Unggah
                                            </span>
                                            <p className="mt-0.5 text-xs text-slate-700">{detailTarget.created_at}</p>
                                        </div>

                                        {/* Edit Alt Text */}
                                        <FormField
                                            label="Alt Text / Keterangan Gambar"
                                            htmlFor="media-alt"
                                            hint="Deskripsi gambar untuk aksesibilitas pembaca layar dan optimasi SEO."
                                            error={editForm.errors.alt_text}
                                        >
                                            <input
                                                id="media-alt"
                                                type="text"
                                                value={editForm.data.alt_text}
                                                onChange={(e) => editForm.setData('alt_text', e.target.value)}
                                                className={inputClass}
                                                placeholder="Contoh: Kegiatan sosialisasi anti narkoba KIPAN"
                                            />
                                        </FormField>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setDeleteTarget(detailTarget)}
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="h-3.5 w-3.5" />
                                            <span>Hapus Berkas</span>
                                        </button>

                                        <button
                                            type="submit"
                                            disabled={editForm.processing}
                                            className="inline-flex items-center gap-2 rounded-xl bg-kipan-navy px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-900 disabled:opacity-60"
                                        >
                                            {editForm.processing ? 'Menyimpan...' : 'Simpan Keterangan'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* MODAL: KONFIRMASI HAPUS */}
                {/* ============================================================ */}
                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Berkas Media"
                    message={`Apakah Anda yakin ingin menghapus berkas "${deleteTarget?.file_name}"? Berkas yang dihapus tidak dapat dipulihkan.`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
