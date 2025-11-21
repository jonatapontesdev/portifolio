import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Mail, Phone, User, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sendContact = trpc.contact.send.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setError("");
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message);
      }
    },
    onError: (error) => {
      setError(error.message || "Erro ao enviar mensagem. Tente novamente.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (formData.message.length < 10) {
      setError("A mensagem deve ter pelo menos 10 caracteres.");
      return;
    }

    sendContact.mutate(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Success Message */}
        {submitted && (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-900">Mensagem enviada com sucesso!</p>
              <p className="text-sm text-green-700">Entraremos em contato em breve.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Nome *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            disabled={sendContact.isPending}
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={handleChange}
            disabled={sendContact.isPending}
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Telefone (opcional)
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
            disabled={sendContact.isPending}
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold mb-2">
            Assunto *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Assunto da sua mensagem"
            value={formData.subject}
            onChange={handleChange}
            disabled={sendContact.isPending}
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Mensagem *
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Descreva sua solicitação em detalhes..."
            value={formData.message}
            onChange={handleChange}
            disabled={sendContact.isPending}
            rows={6}
            required
          />
          <p className="text-xs text-muted-foreground mt-1">
            {formData.message.length}/5000 caracteres
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={sendContact.isPending || submitted}
        >
          {sendContact.isPending ? "Enviando..." : "Enviar Mensagem"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          * Campos obrigatórios. Responderemos em até 24 horas.
        </p>
      </form>
    </div>
  );
}
