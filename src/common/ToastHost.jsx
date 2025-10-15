import React from 'react';

export default function ToastHost() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [type, setType] = React.useState('success');
  React.useEffect(() => {
    const onToast = (e) => {
      const { message, type = 'success', duration = 3000 } = e.detail || {};
      setMessage(message || 'Success');
      setType(type);
      setOpen(true);
      window.clearTimeout((ToastHost)._t);
      (ToastHost)._t = window.setTimeout(() => setOpen(false), duration);
    };
    window.addEventListener('app:toast', onToast);
    return () => window.removeEventListener('app:toast', onToast);
  }, []);

  if (!open) return null;

  const bg = type === 'success' ? 'bg-green-100 text-white' : type === 'error' ? 'bg-red-600 text-white' : 'bg-gray-800 text-white';

  return (
    <div className="fixed right-4 top-4 z-[10000]">
      <div className={`flex items-center gap-2 rounded-md ${bg} px-4 py-2 shadow-lg`}>
        {type === 'success' ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14-4-4 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 7z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5h-2v6h2V7zm0 8h-2v2h2v-2z"/>
          </svg>
        )}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
