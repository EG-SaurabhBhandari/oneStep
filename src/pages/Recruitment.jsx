import React, { useState } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/Footer";
import data from "../data/data.json";

const Recruitment = () => {
    const { name, contact } = data;
    const [formData, setFormData] = useState({
        fullName: "",
        gender: "",
        dateOfBirth: "",
        nationality: "",
        visaType: "",
        japaneseLevel: "",
        conversationLevel: "",
        desiredJob: "",
        education: "",
        workExperience: "",
        phone: "",
        email: "",
        selfPR: "",
        resume: null,
        privacy: false,
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox" ? checked : type === "file" ? files[0] : value,
        }));
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFormData((prev) => ({
                ...prev,
                resume: e.dataTransfer.files[0],
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        const requiredFields = [
            "fullName",
            "gender",
            "dateOfBirth",
            "nationality",
            "visaType",
            "japaneseLevel",
            "phone",
            "email",
        ];
        const emptyFields = requiredFields.filter(
            (field) => !formData[field].trim()
        );

        if (emptyFields.length > 0) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!formData.privacy) {
            alert("Please agree to the privacy policy.");
            return;
        }

        // Show success message
        setShowSuccess(true);

        // Reset form
        setFormData({
            fullName: "",
            gender: "",
            dateOfBirth: "",
            nationality: "",
            visaType: "",
            japaneseLevel: "",
            conversationLevel: "",
            desiredJob: "",
            education: "",
            workExperience: "",
            phone: "",
            email: "",
            selfPR: "",
            resume: null,
            privacy: false,
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-indigo-50">
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-5">
                        {/* Information Section */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-blue-600 text-white p-8 lg:p-12 flex flex-col justify-center">
                            <div className="space-y-8">
                                <div className="animate-fade-in-left">
                                    <h2 className="text-3xl font-bold mb-4">🚀 Join Our Team</h2>
                                    <p className="text-white/90 text-lg leading-relaxed mb-6">
                                        Apply for Japanese job opportunities now! Complete
                                        registration in just 3 minutes.
                                    </p>
                                    <p className="text-white/80 text-sm mb-8">
                                        You can fill out the form in Japanese or English. Personal
                                        information is strictly managed.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4 animate-fade-in-left animation-delay-200">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                                            ⚡
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">
                                                Quick Process
                                            </h3>
                                            <p className="text-white/90 text-sm">
                                                3-minute registration
                                                <br />
                                                Fast response within 3 business days
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 animate-fade-in-left animation-delay-400">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                                            🌏
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">
                                                Global Opportunities
                                            </h3>
                                            <p className="text-white/90 text-sm">
                                                International work environment
                                                <br />
                                                Multilingual support available
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 animate-fade-in-left animation-delay-600">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                                            🛡️
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">
                                                Secure & Private
                                            </h3>
                                            <p className="text-white/90 text-sm">
                                                Strict information management
                                                <br />
                                                Professional consultation
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 space-y-4 animate-fade-in-left animation-delay-800">
                                    <button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                                        <span>💬</span>
                                        <span>LINE で相談する</span>
                                    </button>

                                    <div className="text-sm text-white/80 text-center">
                                        <p>📞 {contact.phone}</p>
                                        <p>✉️ {contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Application Form Section */}
                        <div className="lg:col-span-3 p-8 lg:p-12">
                            <div className="animate-fade-in-right">
                                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    📝 求人応募フォーム
                                </h1>
                                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                                    Job Application Form
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    💡
                                    今すぐ日本の求人に応募しましょう。記入は日本語または英語でOKです。
                                </p>
                            </div>

                            {showSuccess && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl mb-6 animate-fade-in">
                                    ✅ Application submitted successfully! Our team will contact you
                                    within 3 business days.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Information */}
                                <div className="bg-gray-50 rounded-2xl p-6 animate-fade-in-right animation-delay-100">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="mr-2">👤</span>
                                        Personal Information / 個人情報
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 氏名 / Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 性別 / Gender *
                                            </label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            >
                                                <option value="">Select / 選択してください</option>
                                                <option value="male">Male / 男性</option>
                                                <option value="female">Female / 女性</option>
                                                <option value="other">Other / その他</option>
                                                <option value="prefer-not-to-say">
                                                    Prefer not to say / 回答しない
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 生年月日 / Date of Birth *
                                            </label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 国籍 / Nationality *
                                            </label>
                                            <input
                                                type="text"
                                                name="nationality"
                                                value={formData.nationality}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="e.g., Japanese, American, Chinese"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Visa and Language */}
                                <div className="bg-gray-50 rounded-2xl p-6 animate-fade-in-right animation-delay-200">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="mr-2">📋</span>
                                        Visa & Language / ビザ・言語能力
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 現在の在留資格 / Visa Type *
                                            </label>
                                            <select
                                                name="visaType"
                                                value={formData.visaType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            >
                                                <option value="">Select / 選択してください</option>
                                                <option value="engineer">
                                                    Engineer / 技術・人文知識・国際業務
                                                </option>
                                                <option value="skilled-worker">
                                                    Skilled Worker / 技能
                                                </option>
                                                <option value="student">Student / 留学</option>
                                                <option value="working-holiday">
                                                    Working Holiday / ワーキングホリデー
                                                </option>
                                                <option value="spouse">Spouse / 配偶者</option>
                                                <option value="permanent-resident">
                                                    Permanent Resident / 永住者
                                                </option>
                                                <option value="other">Other / その他</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 日本語能力 / Japanese Level *
                                            </label>
                                            <select
                                                name="japaneseLevel"
                                                value={formData.japaneseLevel}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            >
                                                <option value="">Select / 選択してください</option>
                                                <option value="N1">N1 (Advanced)</option>
                                                <option value="N2">N2 (Upper Intermediate)</option>
                                                <option value="N3">N3 (Intermediate)</option>
                                                <option value="N4">N4 (Elementary)</option>
                                                <option value="N5">N5 (Beginner)</option>
                                                <option value="none">No certification / 資格なし</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 会話レベル / Conversation Level
                                            </label>
                                            <select
                                                name="conversationLevel"
                                                value={formData.conversationLevel}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            >
                                                <option value="">Select / 選択してください</option>
                                                <option value="native">Native / ネイティブレベル</option>
                                                <option value="fluent">Fluent / 流暢</option>
                                                <option value="conversational">
                                                    Conversational / 日常会話レベル
                                                </option>
                                                <option value="basic">Basic / 基本レベル</option>
                                                <option value="beginner">Beginner / 初心者</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Information */}
                                <div className="bg-gray-50 rounded-2xl p-6 animate-fade-in-right animation-delay-300">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="mr-2">💼</span>
                                        Job Information / 求人情報
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 希望職種 / Desired Job
                                            </label>
                                            <input
                                                type="text"
                                                name="desiredJob"
                                                value={formData.desiredJob}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Software Engineer, Sales, Marketing"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 学歴 / Education
                                            </label>
                                            <textarea
                                                name="education"
                                                value={formData.education}
                                                onChange={handleInputChange}
                                                rows={3}
                                                placeholder="University, degree, graduation year, etc."
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1 resize-vertical"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 職歴 / Work Experience
                                            </label>
                                            <textarea
                                                name="workExperience"
                                                value={formData.workExperience}
                                                onChange={handleInputChange}
                                                rows={3}
                                                placeholder="Previous jobs, responsibilities, achievements, etc."
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1 resize-vertical"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div className="bg-gray-50 rounded-2xl p-6 animate-fade-in-right animation-delay-400">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="mr-2">📞</span>
                                        Contact Information / 連絡先
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 電話番号 / Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                🔹 メールアドレス / Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:-translate-y-1"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Self PR */}
                                <div className="animate-fade-in-right animation-delay-500">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        🔹 自己PR / Self PR
                                    </label>
                                    <textarea
                                        name="selfPR"
                                        value={formData.selfPR}
                                        onChange={handleInputChange}
                                        rows={5}
                                        placeholder="Tell us about your strengths, skills, and why you're interested in working in Japan..."
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:-translate-y-1 resize-vertical"
                                    />
                                </div>

                                {/* Resume Upload */}
                                <div className="animate-fade-in-right animation-delay-600">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        🔹 履歴書アップロード / Resume Upload (PDF推奨)
                                    </label>
                                    <div
                                        className={`w-full px-4 py-8 border-2 border-dashed rounded-xl transition-all duration-300 text-center cursor-pointer hover:-translate-y-1 ${dragActive
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-300 bg-gray-50"
                                            }`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                        onClick={() => document.getElementById("resume").click()}
                                    >
                                        <input
                                            type="file"
                                            id="resume"
                                            name="resume"
                                            onChange={handleInputChange}
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                        />
                                        <div className="space-y-2">
                                            <div className="text-4xl">📄</div>
                                            <p className="text-gray-600">
                                                {formData.resume
                                                    ? formData.resume.name
                                                    : "Click to upload or drag and drop your resume"}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                PDF, DOC, DOCX (Max 5MB)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Privacy Policy */}
                                <div className="flex items-start space-x-3 animate-fade-in-right animation-delay-700">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        checked={formData.privacy}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="privacy"
                                        className="text-sm text-gray-600 leading-relaxed"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Privacy Policy
                                        </a>{" "}
                                        and consent to the handling of my personal information for
                                        recruitment purposes. 個人情報の取扱いに同意します。
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-blue-100 relative overflow-hidden group animate-fade-in-right animation-delay-800"
                                >
                                    <span className="relative z-10">
                                        📤 応募する / Submit Application
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    ✅ 送信すると、担当者より3営業日以内にご連絡いたします。
                                    <br />
                                    After submission, our team will contact you within 3 business
                                    days.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          @keyframes fade-in-left {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in-right {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in-left {
            animation: fade-in-left 0.6s ease forwards;
          }

          .animate-fade-in-right {
            animation: fade-in-right 0.6s ease forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease forwards;
          }

          .animation-delay-100 {
            animation-delay: 0.1s;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-300 {
            animation-delay: 0.3s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
          }

          .animation-delay-700 {
            animation-delay: 0.7s;
          }

          .animation-delay-800 {
            animation-delay: 0.8s;
          }
        `}</style>
            </div>
            <Footer />
        </div>
    );
};

export default Recruitment;

