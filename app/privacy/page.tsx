import { siteConfig } from '@/lib/constants';

export const metadata = {
  title: 'سياسة الخصوصية',
  description: `سياسة الخصوصية لـ ${siteConfig.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-amiri text-4xl md:text-5xl font-bold text-bg-dark mb-6">
              سياسة الخصوصية
            </h1>
            <p className="text-text-muted text-lg mb-8">
              آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-amiri text-text-regular">
            <h2>مقدمة</h2>
            <p>
              نحن في <strong>{siteConfig.name}</strong> نلتزم بحماية خصوصيتك واحترام بياناتك الشخصية. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية المعلومات التي تقدمها لنا.
            </p>

            <h2>المعلومات التي نجمعها</h2>
            <p>
              قد نقوم بجمع المعلومات التالية عندما تتواصل معنا أو تستخدم خدماتنا:
            </p>
            <ul>
              <li>الاسم بالكامل</li>
              <li>رقم الهاتف المتاح للتواصل والتطبيق (الواتساب)</li>
              <li>البريد الإلكتروني (إن وجد)</li>
              <li>العنوان أو الموقع الفعلي للمشروع المراد تنفيذه</li>
            </ul>

            <h2>كيف نستخدم معلوماتك؟</h2>
            <p>
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul>
              <li>التواصل معك لغرض تقديم استشارة أو عرض سعر.</li>
              <li>تنسيق مواعيد الزيارات الميدانية وتنفيذ الأعمال الموكلة إلينا.</li>
              <li>الرد على استفساراتك وتقديم خدمة عملاء أفضل.</li>
              <li>تحسين خدماتنا وتجربة الزوار لموقعنا.</li>
            </ul>

            <h2>حماية البيانات الشخصية</h2>
            <p>
              نحن نتخذ كافة الإجراءات الأمنية المناسبة لضمان حماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. لا نشارك معلوماتك الشخصية مع أي أطراف ثالثة إلا إذا كان ذلك ضرورياً لتقديم الخدمة المطلوبة (مثل التنسيق مع الموردين وفقاً للمشروع).
            </p>

            <h2>التعديلات على سياسة الخصوصية</h2>
            <p>
              نحتفظ بالحق في تحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سيتم نشر أي تغييرات في هذه الصفحة، وتُعتبر التعديلات سارية فور نشرها.
            </p>

            <h2>اتصل بنا</h2>
            <p>
              إذا كان لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية، يرجى التواصل معنا عبر:
            </p>
            <ul>
              <li>رقم الهاتف: <span dir="ltr">{siteConfig.contact.phoneDisplay}</span></li>
              <li>البريد الإلكتروني: {siteConfig.contact.email}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
