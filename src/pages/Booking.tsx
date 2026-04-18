import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Calendar, User, Phone, MapPin, ClipboardList } from "lucide-react";
import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "966537519929";

const Booking = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabel = form.service || t("booking.form.servicePlaceholder");
    const timeLabel = form.time || "-";

    const message = isRTL
      ? `مرحباً، أود حجز خدمة تنظيف 🧹\n\n` +
        `الاسم: ${form.name}\n` +
        `رقم الجوال: ${form.phone}\n` +
        `نوع الخدمة: ${serviceLabel}\n` +
        `التاريخ المفضل: ${form.date}\n` +
        `الوقت المفضل: ${timeLabel}\n` +
        `العنوان: ${form.address}\n` +
        (form.notes ? `ملاحظات: ${form.notes}` : "")
      : `Hello! I'd like to book a cleaning service 🧹\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Service: ${serviceLabel}\n` +
        `Preferred Date: ${form.date}\n` +
        `Preferred Time: ${timeLabel}\n` +
        `Address: ${form.address}\n` +
        (form.notes ? `Notes: ${form.notes}` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const services = t("booking.services", { returnObjects: true }) as string[];

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <SEO
        title={t("booking.pageTitle")}
        description={t("booking.pageDescription")}
        keywords="حجز تنظيف, booking cleaning, kleenology"
        url="https://kleenology.com/booking"
      />

      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-brand-blue/5 py-14 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("booking.title")}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("booking.subtitle")}
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="max-w-2xl mx-auto px-4 mt-12">
          <div className="bg-white rounded-2xl shadow-clean border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 font-semibold">
                  <User className="h-4 w-4 text-primary" />
                  {t("booking.form.name")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder={t("booking.form.namePlaceholder")}
                  value={form.name}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 font-semibold">
                  <Phone className="h-4 w-4 text-primary" />
                  {t("booking.form.phone")}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder={t("booking.form.phonePlaceholder")}
                  value={form.phone}
                  onChange={handleChange}
                  className="h-12"
                  dir="ltr"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <Label htmlFor="service" className="flex items-center gap-2 font-semibold">
                  <ClipboardList className="h-4 w-4 text-primary" />
                  {t("booking.form.service")}
                </Label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">{t("booking.form.servicePlaceholder")}</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2 font-semibold">
                    <Calendar className="h-4 w-4 text-primary" />
                    {t("booking.form.date")}
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="h-12"
                    min={new Date().toISOString().split("T")[0]}
                    dir="ltr"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="font-semibold">
                    {t("booking.form.time")}
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                    className="h-12"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2 font-semibold">
                  <MapPin className="h-4 w-4 text-primary" />
                  {t("booking.form.address")}
                </Label>
                <Input
                  id="address"
                  name="address"
                  required
                  placeholder={t("booking.form.addressPlaceholder")}
                  value={form.address}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="font-semibold">
                  {t("booking.form.notes")}
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder={t("booking.form.notesPlaceholder")}
                  value={form.notes}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl"
              >
                <MessageCircle className="h-5 w-5 me-2" />
                {t("booking.form.submit")}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                {t("booking.form.note")}
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
