import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AnalysisForm = () => {
    const [formData, setFormData] = useState({
        skinType: "",
        age: "",
        sensitivity: "Not Sensitive",
        detectedAcneType: "",
    });
    const [setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [inputMethod, setInputMethod] = useState("manual");

    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setInputMethod("ai");

            setLoading(true);
            setTimeout(() => {
                setFormData((prev) => ({ ...prev, detectedAcneType: "Papules" }));
                setLoading(false);
            }, 1500);
        }
    };

    const toggleSensitivity = () => {
        setFormData((prev) => ({
            ...prev,
            sensitivity: prev.sensitivity === "Sensitive" ? "Not Sensitive" : "Sensitive",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.detectedAcneType) {
            setError("Silakan tentukan jenis masalah kulit melalui manual atau foto.");
            return;
        }

        setLoading(true);
        setError("");

        try {

            await new Promise(resolve => setTimeout(resolve, 1500));


            const dataResult = {
                Skin_Type: formData.skinType || "Normal",
                Concern: formData.detectedAcneType,
                Sensitivity: formData.sensitivity,
                Ingredients: getDummyIngredients(formData.detectedAcneType),
                Internal_Type: formData.detectedAcneType
            };

            navigate("/result", { state: { recommendation: dataResult } });

        } catch (err) {
            setError("Gagal mendapatkan analisis. Silakan coba lagi.", err);
        } finally {
            setLoading(false);
        }
    };

    const getDummyIngredients = (type) => {
        const ingredientsMap = {
            "Blackheads": "Salicylic Acid (BHA) & Clay Mask",
            "Whiteheads": "Benzoyl Peroxide & Glycolic Acid",
            "Papules": "Niacinamide & Tea Tree Oil",
            "Pustules": "Adapalene & Zinc PCA",
            "Cyst": "Retinoid & Azelaic Acid"
        };
        return ingredientsMap[type] || "Gentle Cleanser & Moisturizer";
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="max-w-2xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Analisis Kondisi Kulit</h2>
                    <p className="mt-2 text-gray-600">Lengkapi data di bawah untuk rekomendasi skincare yang personal.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 md:p-10 border border-slate-100">
                    <form onSubmit={handleSubmit} className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Tipe Kulit Utama</label>
                                <select
                                    name="skinType"
                                    value={formData.skinType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all bg-gray-50 text-gray-700 appearance-none cursor-pointer"
                                >
                                    <option value="">Pilih Tipe Kulit</option>
                                    <option value="Oily">Berminyak</option>
                                    <option value="Dry">Kering</option>
                                    <option value="Combination">Kombinasi</option>
                                    <option value="Normal">Normal</option>
                                </select>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Skin Subtype</label>
                                <select
                                    name="skinSubtype"
                                    value={formData.skinSubtype}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all bg-gray-50 text-gray-700 appearance-none cursor-pointer"
                                >
                                    <option value="">Pilih Subtype</option>
                                    <option value="Normal to Dry">Normal to Dry</option>
                                    <option value="Normal to Oily">Normal to Oily</option>
                                    <option value="Dry to Normal">Dry to Normal</option>
                                    <option value="Extreme Dry">Extreme Dry</option>
                                    <option value="Oily to Normal">Oily to Normal</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Rentang Usia</label>
                                <select
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all bg-gray-50 text-gray-700 appearance-none cursor-pointer"
                                >
                                    <option value="">Pilih Usia</option>
                                    <option value="14-18">14-18</option>
                                    <option value="19-24">19-24</option>
                                    <option value="25-36">25-36</option>
                                    <option value="37-45">37-45</option>
                                    <option value="45+">45+</option>
                                </select>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Kulit Sensitif?</label>
                                <div
                                    onClick={toggleSensitivity}
                                    className="relative w-full h-[50px] bg-gray-100 rounded-xl p-1 flex items-center cursor-pointer select-none"
                                >
                                    <div
                                        className={`absolute w-[48%] h-[42px] bg-white rounded-lg shadow-md transition-all duration-300 transform ${formData.sensitivity === "Sensitive" ? "translate-x-full" : "translate-x-0"}`}
                                    />
                                    <div className={`relative z-10 w-1/2 text-center text-sm font-bold transition-colors ${formData.sensitivity === "Not Sensitive" ? "text-emerald-600" : "text-gray-400"}`}>
                                        Tidak
                                    </div>
                                    <div className={`relative z-10 w-1/2 text-center text-sm font-bold transition-colors ${formData.sensitivity === "Sensitive" ? "text-emerald-600" : "text-gray-400"}`}>
                                        Ya
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Metode Penentuan Masalah Kulit</label>
                            <div className="flex bg-gray-100 p-1 rounded-2xl w-full">
                                <button
                                    type="button"
                                    onClick={() => { setInputMethod("manual"); setPreview(null); }}
                                    className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all ${inputMethod === "manual" ? "bg-white shadow-sm text-emerald-600" : "text-gray-500"}`}
                                >
                                    Input Manual
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setInputMethod("ai")}
                                    className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all ${inputMethod === "ai" ? "bg-white shadow-sm text-emerald-600" : "text-gray-500"}`}
                                >
                                    Analisis Foto AI
                                </button>
                            </div>

                            {inputMethod === "manual" ? (
                                <div className="animate-fadeIn">
                                    <select
                                        name="detectedAcneType"
                                        value={formData.detectedAcneType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all bg-gray-50 text-gray-700 cursor-pointer"
                                    >
                                        <option value="">Pilih Kondisi Masalah Kulit</option>
                                        <option value="Blackheads">Blackheads</option>
                                        <option value="Whiteheads">Whiteheads</option>
                                        <option value="Papules">Papules</option>
                                        <option value="Pustules">Pustules</option>
                                        <option value="Cyst">Cyst</option>
                                    </select>
                                </div>
                            ) : (
                                <div className="space-y-4 animate-fadeIn">
                                    <div
                                        onClick={() => fileInputRef.current.click()}
                                        className="relative border-2 border-dashed border-emerald-200 rounded-2xl p-6 bg-emerald-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition-all group"
                                    >
                                        <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />

                                        {preview ? (
                                            <div className="relative w-full h-48 overflow-hidden rounded-xl">
                                                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                                {loading && (
                                                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                                                        <div className="flex flex-col items-center">
                                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mb-2"></div>
                                                            <p className="text-xs font-bold text-emerald-700">AI Menganalisis...</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center py-4">
                                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                                </div>
                                                <p className="text-sm text-emerald-700 font-medium">Klik untuk upload foto dan deteksi otomatis</p>
                                            </div>
                                        )}
                                    </div>
                                    {formData.detectedAcneType && !loading && (
                                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex justify-center">
                                            <p className="text-sm text-emerald-700 font-medium">✨ AI Mendeteksi: <span className="font-bold underline">{formData.detectedAcneType}</span></p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-lg ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-200 active:scale-[0.98]"
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                    Menganalisis...
                                </span>
                            ) : (
                                "Mulai Analisis Sekarang"
                            )}
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-center text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae expedita assumenda commodi facere nihil adipisci, at aperiam voluptatem a dolorum neque ut, harum natus temporibus. Minus vitae dignissimos beatae.
                </p>
            </div>
        </div>
    );
};

export default AnalysisForm;