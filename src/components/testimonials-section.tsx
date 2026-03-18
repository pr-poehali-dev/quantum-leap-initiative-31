import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Кузнецов",
    role: "Директор по маркетингу, торговая сеть «Столица»",
    initials: "АК",
    content:
      "Участие в городских мероприятиях даёт нам живой контакт с аудиторией, который не заменит ни один онлайн-канал. Это реальные люди, реальные эмоции и запоминающийся бренд.",
  },
  {
    name: "Марина Ефимова",
    role: "Руководитель отдела PR, Мордовский банк",
    initials: "МЕ",
    content:
      "Спонсорство городских событий — это инвестиция в доверие. Когда бренд ассоциируется с чем-то позитивным для города, лояльность аудитории растёт органически.",
  },
  {
    name: "Дмитрий Панков",
    role: "Владелец сети салонов красоты «Стиль»",
    initials: "ДП",
    content:
      "После партнёрства с подобным конкурсом мы получили поток новых клиентов и отличный контент для социальных сетей. Это работает лучше, чем таргетированная реклама.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Говорят партнёры</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят бренды, которые делают ставку на городские события
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
