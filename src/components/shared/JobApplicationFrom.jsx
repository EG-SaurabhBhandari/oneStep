import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function JobApplicationForm() {
  const { t, ready } = useTranslation();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    birthDate: "",
    nationality: "",
    visaType: "",
    japaneseLevel: "",
    desiredJob: "",
    educationExperience: "",
    contact: "",
    selfIntro: "",
    majorField: "",
    consultation: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const successMessage = ready ? t('jobApplicationForm.successMessage') : "応募が送信されました。3営業日以内にご連絡いたします。";
    alert(successMessage);
    // add submission logic here
  };

  // Fallback data in case translation fails
  const fallbackData = {
    title: "🌸 就職相談申し込みフォーム / 求人応募フォーム",
    subtitle: "💡 今すぐ日本の求人に応募しましょう。記入は日本語または英語でOKです。個人情報は厳重に管理します。",
    fields: {
      fullName: "氏名 / Full Name *",
      email: "メールアドレス / Email *",
      gender: "性別 / Gender *",
      birthDate: "生年月日 / Date of Birth *",
      nationality: "国籍 / Nationality *",
      visaType: "在留資格 / Visa Type *",
      japaneseLevel: "日本語能力（N1〜N5など）*",
      desiredJob: "希望職種 / Desired Job *",
      contact: "電話番号 *",
      majorField: "専攻分野 / Major Field",
      educationExperience: "学歴・職歴 / Education & Experience *",
      selfIntro: "自己PR / Self Introduction *",
      consultation: "ご相談内容 / Consultation Content",
      resume: "履歴書アップロード（PDF推奨）*"
    },
    placeholders: {
      fullName: "田中太郎",
      email: "example@email.com",
      nationality: "例: ネパール / Japan / Vietnam",
      desiredJob: "エンジニア, 介護, 販売など",
      contact: "080-1234-5678",
      majorField: "コンピューターサイエンス",
      educationExperience: "学歴・職歴を詳しく記入してください",
      selfIntro: "自己PRを記入してください",
      consultation: "就職についてのご質問やご相談をお聞かせください"
    },
    options: {
      gender: [
        { value: "", label: "選択してください / Please select", disabled: true },
        { value: "male", label: "男性 / Male" },
        { value: "female", label: "女性 / Female" },
        { value: "other", label: "その他 / Other" },
      ],
      visaType: [
        { value: "", label: "選択してください / Please select" },
        { value: "留学生", label: "留学生 / Student Visa" },
        { value: "技能実習", label: "技能実習 / Skilled Labor" },
        { value: "企業内転勤", label: "企業内転勤 / Intra-company Transferee" },
        { value: "専門職", label: "専門職 / Specialist Visa" },
      ],
      japaneseLevel: [
        { value: "", label: "選択してください / Please select" },
        { value: "N1", label: "N1" },
        { value: "N2", label: "N2" },
        { value: "N3", label: "N3" },
        { value: "N4", label: "N4" },
        { value: "N5", label: "N5" },
      ]
    },
    submitButton: "📨 相談を申し込む / 送信する"
  };

  // Get translations with fallback
  const getTranslation = (key, fallback) => {
    if (!ready) return fallback;
    try {
      const translation = t(key);
      return translation !== key ? translation : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const getOptions = (optionType) => {
    if (!ready) return fallbackData.options[optionType];
    try {
      const options = t(`jobApplicationForm.options.${optionType}`, { returnObjects: true });
      return Array.isArray(options) ? options : fallbackData.options[optionType];
    } catch (error) {
      return fallbackData.options[optionType];
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="origami-fold bg-white rounded-2xl p-8 japanese-shadow max-w-4xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 brush-stroke">
        {getTranslation('jobApplicationForm.title', fallbackData.title)}
      </h2>
      <p className="text-gray-600 text-center mb-6">
        {getTranslation('jobApplicationForm.subtitle', fallbackData.subtitle)}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <InputField
          label={getTranslation('jobApplicationForm.fields.fullName', fallbackData.fields.fullName)}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder={getTranslation('jobApplicationForm.placeholders.fullName', fallbackData.placeholders.fullName)}
          required
        />

        {/* Email */}
        <InputField
          label={getTranslation('jobApplicationForm.fields.email', fallbackData.fields.email)}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={getTranslation('jobApplicationForm.placeholders.email', fallbackData.placeholders.email)}
          required
        />

        {/* Gender */}
        <SelectField
          label={getTranslation('jobApplicationForm.fields.gender', fallbackData.fields.gender)}
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          options={getOptions('gender')}
        />

        {/* Birth Date */}
        <InputField
          label={getTranslation('jobApplicationForm.fields.birthDate', fallbackData.fields.birthDate)}
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />

        {/* Nationality */}
        <InputField
          label={getTranslation('jobApplicationForm.fields.nationality', fallbackData.fields.nationality)}
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          placeholder={getTranslation('jobApplicationForm.placeholders.nationality', fallbackData.placeholders.nationality)}
          required
        />

        {/* Visa Type */}
        <SelectField
          label={getTranslation('jobApplicationForm.fields.visaType', fallbackData.fields.visaType)}
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          required
          options={getOptions('visaType')}
        />

        {/* Japanese Level */}
        <SelectField
          label={getTranslation('jobApplicationForm.fields.japaneseLevel', fallbackData.fields.japaneseLevel)}
          name="japaneseLevel"
          value={formData.japaneseLevel}
          onChange={handleChange}
          required
          options={getOptions('japaneseLevel')}
        />

        {/* Desired Job */}
        <InputField
          label={getTranslation('jobApplicationForm.fields.desiredJob', fallbackData.fields.desiredJob)}
          name="desiredJob"
          value={formData.desiredJob}
          onChange={handleChange}
          placeholder={getTranslation('jobApplicationForm.placeholders.desiredJob', fallbackData.placeholders.desiredJob)}
          required
        />

        {/* Contact */}
        <InputField
          label={getTranslation('jobApplicationForm.fields.contact', fallbackData.fields.contact)}
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder={getTranslation('jobApplicationForm.placeholders.contact', fallbackData.placeholders.contact)}
          required
        />

        {/* Major Field */}
        <InputField
          label={getTranslation('jobApplicationForm.fields.majorField', fallbackData.fields.majorField)}
          name="majorField"
          value={formData.majorField}
          onChange={handleChange}
          placeholder={getTranslation('jobApplicationForm.placeholders.majorField', fallbackData.placeholders.majorField)}
        />
      </div>

      {/* Education & Experience */}
      <TextAreaField
        label={getTranslation('jobApplicationForm.fields.educationExperience', fallbackData.fields.educationExperience)}
        name="educationExperience"
        value={formData.educationExperience}
        onChange={handleChange}
        required
        placeholder={getTranslation('jobApplicationForm.placeholders.educationExperience', fallbackData.placeholders.educationExperience)}
      />

      {/* Self Introduction */}
      <TextAreaField
        label={getTranslation('jobApplicationForm.fields.selfIntro', fallbackData.fields.selfIntro)}
        name="selfIntro"
        value={formData.selfIntro}
        onChange={handleChange}
        required
        placeholder={getTranslation('jobApplicationForm.placeholders.selfIntro', fallbackData.placeholders.selfIntro)}
      />

      {/* Consultation */}
      <TextAreaField
        label={getTranslation('jobApplicationForm.fields.consultation', fallbackData.fields.consultation)}
        name="consultation"
        value={formData.consultation}
        onChange={handleChange}
        placeholder={getTranslation('jobApplicationForm.placeholders.consultation', fallbackData.placeholders.consultation)}
      />

      {/* Resume Upload */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          {getTranslation('jobApplicationForm.fields.resume', fallbackData.fields.resume)}
        </label>
        <input
          type="file"
          name="resume"
          accept="application/pdf"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center mt-6">
        <button
          type="submit"
          className="zen-border bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-indigo-700 hover:to-purple-800 transition-all transform hover:scale-105 japanese-shadow"
        >
          {getTranslation('jobApplicationForm.submitButton', fallbackData.submitButton)}
        </button>
      </div>
    </form>
  );
}

// Reusable Input Component
function InputField({ label, name, type = "text", value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
      />
    </div>
  );
}

// Reusable Select Component
function SelectField({ label, name, value, onChange, options = [], required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
      >
        {options.map(({ value, label, disabled = false }) => (
          <option key={value} value={value} disabled={disabled}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Reusable TextArea Component
function TextAreaField({ label, name, value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
      />
    </div>
  );
}
