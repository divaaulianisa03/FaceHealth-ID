import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register attempt:", formData);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 md:p-10 border border-slate-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Buat Akun</h2>
                    <p className="mt-2 text-gray-600 font-medium">Mulai perjalanan kulit sehatmu hari ini</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Nama Lengkap</label>
                        <input 
                            type="text" 
                            required
                            className="input-modern" 
                            placeholder="John Doe"
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                        <input 
                            type="email" 
                            required
                            className="input-modern" 
                            placeholder="nama@email.com"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                        <input 
                            type="password" 
                            required
                            className="input-modern" 
                            placeholder="Minimal 8 karakter"
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-[0.98] mt-2"
                    >
                        Daftar Akun
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-600">
                    Sudah punya akun?{' '}
                    <Link to="/login" className="text-emerald-600 font-bold hover:underline">
                        Masuk di sini
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;