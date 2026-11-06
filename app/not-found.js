import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 text-center">
      <div className="max-w-md">
        <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
          404 Error
        </p>
        <h1 className="text-4xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/20 transition-all"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
