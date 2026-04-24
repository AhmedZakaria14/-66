import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative w-32 h-32 mb-8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-full h-full text-accent animate-[spin_6s_linear_infinite]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-amiri text-4xl font-bold">
          404
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl mb-4 font-amiri font-bold text-bg-dark">
        الصفحة غير موجودة
      </h1>
      <p className="text-text-muted mb-8 max-w-md mx-auto text-lg">
        يبدو أن هذه الصفحة لا وجود لها، لكن لا تقلق — نجارنا يبنون كل شيء من الصفر!
      </p>
      <Link
        href="/"
        className="bg-primary text-white hover:bg-primary-dark transition-colors px-8 py-4 rounded-xl font-medium inline-flex items-center gap-2 shadow-lg shadow-primary/20"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
