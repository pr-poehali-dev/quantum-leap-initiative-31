import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Когда и где пройдёт мероприятие?",
      answer:
        "«Саранская красавица» состоится летом 2025 года в культурном центре «Мордовия» в городе Саранск. Торжественная гала-церемония с праздничной программой рассчитана на вечерний формат.",
    },
    {
      question: "Какой охват ожидается у мероприятия?",
      answer:
        "На площадке ожидается более 5 000 гостей. Онлайн-охват через городские паблики, трансляцию и публикации блогеров составит 30 000+ просмотров. Анонс и пресс-релизы выйдут на местном ТВ и в СМИ.",
    },
    {
      question: "Что входит в каждый спонсорский пакет?",
      answer:
        "Все пакеты включают брендирование на площадке и упоминание в медиа. Золотой пакет — полноценное VIP-присутствие, сцена и максимальный медийный охват. Серебряный — стенд и публикации. Бронзовый — базовое упоминание и логотип на афишах. Подробности — в разделе «Спонсорские пакеты».",
    },
    {
      question: "Можно ли создать индивидуальный пакет?",
      answer:
        "Да, мы готовы разработать предложение под конкретные задачи вашего бренда. Свяжитесь с нами — обсудим формат присутствия, бюджет и ожидаемый результат.",
    },
    {
      question: "Как будет использоваться логотип спонсора?",
      answer:
        "Логотип размещается на афишах, баннерах, сайте мероприятия, в социальных сетях и во всех пресс-материалах. Точный формат зависит от выбранного пакета. Золотой партнёр также получает упоминание со сцены и в видео.",
    },
    {
      question: "Как стать спонсором?",
      answer:
        "Заполните форму обратной связи или свяжитесь с нами напрямую по контактам в разделе «Стать партнёром». Мы ответим в течение 24 часов и согласуем все детали.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на вопросы потенциальных партнёров и спонсоров мероприятия.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
