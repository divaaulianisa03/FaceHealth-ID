import { useLocation, Link } from 'react-router-dom';

const ResultPage = () => {
    const location = useLocation();
    const { recommendation } = location.state || {};

    if (!recommendation) {
        return (
            <div className="pt-32 text-center">
                <p className="text-gray-600">Data analisis tidak ditemukan.</p>
                <Link to="/analyze" className="text-emerald-600 font-bold underline">Kembali ke Form</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4">
            
                <div className="text-center mb-12">
                    <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Analysis Result</h2>
                    <h1 className="mt-2 text-4xl font-extrabold text-gray-900">Rekomendasi SkinCare Anda</h1>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                 
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Profil Kulit</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 text-sm">Tipe</span>
                                    <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg text-xs">{recommendation.Skin_Type || "-"}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 text-sm">Masalah</span>
                                    <span className="font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-lg text-xs">{recommendation.Concern || "-"}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 text-sm">Sensitivitas</span>
                                    <span className="font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-lg text-xs">{recommendation.Sensitivity || "Normal"}</span>
                                </div>
                            </div>
                        </div>

                        <Link to="/analyze" className="block text-center py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-2xl font-bold hover:bg-emerald-50 transition-all">
                            Analisis Ulang
                        </Link>
                    </div>

                    {/* Rekomendasi  */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                            
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16"></div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bahan Aktif yang Disarankan</h3>
                            
                            <div className="p-6 bg-emerald-600 rounded-2xl text-white shadow-lg shadow-emerald-200">
                                <p className="text-emerald-100 text-sm mb-2 uppercase tracking-widest font-semibold">Kandungan skincare</p>
                                <h4 className="text-3xl font-black">{recommendation.Ingredients || "Mencari data..."}</h4>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-bold text-gray-900 mb-3">Mengapa ini cocok untuk Anda?</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Berdasarkan tipe jerawat <span className="font-bold">{recommendation.Internal_Type || "anda"}</span>, 
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, porro distinctio? Alias nam quae, necessitatibus cum repudiandae aut illo sit incidunt ullam, temporibus accusamus aliquam, dolore saepe dolor ipsam quisquam.
                                </p>
                            </div>
                        </div>

                        {/* Info Tambahan */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-blue-700 font-medium">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis, dolorum esse delectus tempore praesentium ab culpa non distinctio. Odio fugit pariatur esse debitis tempora aliquid, officiis provident facere quisquam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;