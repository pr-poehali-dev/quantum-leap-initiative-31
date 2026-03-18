import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const packages = [
  {
    tier: "Золотой",
    badge: "Топ-партнёр",
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-500/40",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    iconColor: "text-yellow-400",
    price: "от 150 000 ₽",
    perks: [
      "Логотип на главном баннере сцены",
      "Брендированная VIP-зона на площадке",
      "Упоминание в каждом пресс-релизе",
      "5 минут рекламного времени на сцене",
      "Пост-обзор в городских пабликах",
      "Брендинг на афишах и соцсетях",
      "Профессиональное фото и видео с логотипом",
    ],
  },
  {
    tier: "Серебряный",
    badge: "Партнёр",
    color: "from-gray-400/20 to-gray-500/5",
    borderColor: "border-gray-400/40",
    badgeColor: "bg-gray-400/20 text-gray-300",
    iconColor: "text-gray-300",
    price: "от 75 000 ₽",
    perks: [
      "Логотип на боковых баннерах",
      "Стенд / зона взаимодействия с гостями",
      "Упоминание в пресс-релизах",
      "2 минуты рекламного времени на сцене",
      "Публикации в городских пабликах",
      "Брендинг на афишах мероприятия",
    ],
  },
  {
    tier: "Бронзовый",
    badge: "Информационный партнёр",
    color: "from-orange-700/20 to-orange-800/5",
    borderColor: "border-orange-700/40",
    badgeColor: "bg-orange-700/20 text-orange-400",
    iconColor: "text-orange-400",
    price: "от 30 000 ₽",
    perks: [
      "Логотип в программке мероприятия",
      "Упоминание со сцены",
      "Публикация в одном городском паблике",
      "Логотип на сайте мероприятия",
    ],
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Спонсорские пакеты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Выберите уровень участия, который соответствует целям вашего бренда
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border ${pkg.borderColor} bg-gradient-to-b ${pkg.color} slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Icon name="Award" fallback="Star" size={32} className={pkg.iconColor} />
                  <Badge className={`${pkg.badgeColor} border-0 text-xs`}>{pkg.badge}</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-white">{pkg.tier}</CardTitle>
                <p className="text-3xl font-extrabold text-white mt-2">{pkg.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <Icon name="Check" fallback="Check" size={16} className={`${pkg.iconColor} mt-0.5 flex-shrink-0`} />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-red-500 hover:bg-red-600 text-white border-0"
                >
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 border border-red-500/20 rounded-xl bg-red-500/5 text-center">
          <p className="text-gray-300 text-lg">
            Нужен индивидуальный пакет? Мы готовы разработать предложение под задачи именно вашего бренда.
          </p>
          <p className="text-red-400 font-semibold mt-2">Свяжитесь с нами — обсудим детали.</p>
        </div>
      </div>
    </section>
  )
}
