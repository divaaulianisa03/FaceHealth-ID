import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // 
        console.log("Login attempt:", { email, password });
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 md:p-10 border border-slate-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Selamat Datang</h2>
                    <p className="mt-2 text-gray-600 font-medium">Masuk untuk menyimpan riwayat analisis kulitmu</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                        <input 
                            type="email" 
                            required
                            className="input-modern" 
                            placeholder="nama@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <a href="#" className="text-xs text-emerald-600 hover:underline font-medium">Lupa Password?</a>
                        </div>
                        <input 
                            type="password" 
                            required
                            className="input-modern" 
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-[0.98]"
                    >
                        Masuk
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-600">
                    Belum punya akun?{' '}
                    <Link to="/register" className="text-emerald-600 font-bold hover:underline">
                        Daftar Sekarang
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;