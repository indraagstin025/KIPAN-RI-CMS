import {
    ConfirmDeleteModal,
    FlashMessage,
    PageHeader,
} from '@/Components/Admin/AdminComponents';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Copy, FileImage, Trash2, Upload } from 'lucide-react';
import { useRef, useState } from 'react';

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
}

function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isImage(mimeType: string): boolean {
    return mimeType.startsWith('image/');
}

export default function MediaIndex({ media }: Props) {
    const { flash } = usePage<PageProps>().props;
    const [deleteTarget, setDeleteTarget] = useState<MediaItem | null>(null);
    const [copied, setCopied] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const uploadForm = useForm<{ file: File | null; alt_text: string }>({ file: null, alt_text: '' });
    const deleteForm = useForm({});

    function handleFiles(files: FileList | null) {
        if (!files || files.length === 0) return;
        const file = files[0];
        uploadForm.setData('file', file);
        // auto-submit
        const formData = new FormData();
        formData.append('file', file);
        uploadForm.post('/admin/media', {
            forceFormData: true,
            onSuccess: () => {
                uploadForm.reset();
                if (fileInputRef.current) fileInputRef.current.value = '';
            },
        });
    }

    function handleDelete() {
        if (!deleteTarget) return;
        deleteForm.delete(`/admin/media/${deleteTarget.id}`, {
            onSuccess: () => setDeleteTarget(null),
        });
    }

    function copyUrl(item: MediaItem) {
        navigator.clipboard.writeText(item.url).then(() => {
            setCopied(item.id);
            setTimeout(() => setCopied(null), 2000);
        });
    }

    return (
        <>
            <Head title="Media Library — KIPAN CMS" />
            <AdminLayout title="Media Library">
                <FlashMessage success={flash?.success} error={flash?.error} />

                <PageHeader title="Media Library" description={`${media.total} file tersimpan`} />

                {/* Upload Zone */}
                <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        handleFiles(e.dataTransfer.files);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`mb-6 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed py-10 transition ${
                        isDragging
                            ? 'border-kipan-blue bg-blue-50/80'
                            : 'border-slate-200 bg-slate-50/50 hover:border-kipan-blue/50 hover:bg-blue-50/20'
                    }`}
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                        <Upload className={`h-6 w-6 ${isDragging ? 'text-kipan-blue' : 'text-slate-400'}`} />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-slate-700">
                            {uploadForm.processing ? 'Mengunggah...' : 'Klik atau drag file ke sini'}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-400">JPG, PNG, WebP, GIF, PDF, MP4. Maks 10MB.</p>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,application/pdf,video/mp4,video/quicktime"
                        onChange={(e) => handleFiles(e.target.files)}
                    />
                </div>

                {/* Grid */}
                {media.data.length === 0 ? (
                    <div className="py-16 text-center text-sm text-slate-400">
                        Belum ada media. Upload file pertama Anda di atas.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {media.data.map((item) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                            >
                                {/* Preview */}
                                <div className="relative aspect-square overflow-hidden bg-slate-100">
                                    {isImage(item.mime_type) ? (
                                        <img
                                            src={item.url}
                                            alt={item.alt_text ?? item.file_name}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full flex-col items-center justify-center gap-1">
                                            <FileImage className="h-8 w-8 text-slate-300" />
                                            <p className="text-[10px] text-slate-400">{item.mime_type.split('/')[1]?.toUpperCase()}</p>
                                        </div>
                                    )}

                                    {/* Hover actions */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                                        <button
                                            type="button"
                                            onClick={() => copyUrl(item)}
                                            title="Salin URL"
                                            className="rounded-full bg-white p-2 shadow transition hover:bg-blue-50 hover:text-kipan-blue"
                                        >
                                            <Copy className="h-4 w-4" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setDeleteTarget(item)}
                                            title="Hapus"
                                            className="rounded-full bg-white p-2 shadow transition hover:bg-red-50 hover:text-red-500"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>

                                    {copied === item.id && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                                            <p className="text-xs font-semibold text-white">URL Disalin!</p>
                                        </div>
                                    )}
                                </div>

                                {/* Meta */}
                                <div className="p-2">
                                    <p className="truncate text-[11px] font-medium text-slate-700">{item.file_name}</p>
                                    <p className="text-[10px] text-slate-400">{formatSize(item.size)} · {item.created_at}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <ConfirmDeleteModal
                    isOpen={deleteTarget !== null}
                    title="Hapus Media"
                    message={`Yakin hapus file "${deleteTarget?.file_name}"? File yang terhubung ke konten lain juga akan rusak.`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    processing={deleteForm.processing}
                />
            </AdminLayout>
        </>
    );
}
