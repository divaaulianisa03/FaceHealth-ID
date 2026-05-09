import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.png';

const LandingPage = () => {
    return (
        <div className="w-full bg-white pt-16 min-h-screen">
            {/* HERO SECTION */}
            <div className="bg-gradient-to-b from-emerald-50 to-white">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                                Solusi Cerdas untuk <br />
                                <span className="text-emerald-600">Kulit Sehatmu.</span>
                            </h1>
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Dapatkan rekomendasi skincare yang dipersonalisasi khusus untuk kondisi jerawat Anda. Menggunakan teknologi analisis cerdas untuk hasil yang akurat dan aman.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/analyze"
                                    className="flex justify-center items-center px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transform hover:-translate-y-1 transition-all shadow-xl shadow-emerald-200"
                                >
                                    Mulai Analisis Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                            <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                            <img
                                src={heroImage}
                                alt="Face Analysis Illustration"
                                className="relative w-full h-auto drop-shadow-2xl rounded-3xl"
                            />
                        </div>
                    </div>
                </section>
            </div>

           {/* Section penjelasan facehealth id */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm">Lorem</h2>
                        <p className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                            Apa itu FaceHealth ID?
                        </p>
                        <p className="mt-4 text-gray-600 text-lg">
                           FAceJealtj ID adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at aliquam iste amet a ratione ea facilis vel blanditiis! Dolores magnam exercitationem eum perferendis dolor illum odio quibusdam impedit doloremque.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Analisis Presisi</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Memanfaatkan teknologi terkini untuk menganalisis kondisi wajah Anda melalui foto atau data spesifik jenis kulit.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-200">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Rekomendasi Personal</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Rekomendasi bahan aktif (ingredients) yang disesuaikan dengan sensitivitas dan tipe kulit Anda.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/20">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Lorem</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quisquam vero doloribus sunt exercitationem corporis, cumque quod magnam aut officia culpa molestiae officiis cupiditate esse reiciendis, ipsam veniam eum id?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;