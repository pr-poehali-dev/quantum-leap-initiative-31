import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Широкий охват аудитории",
    description: "Более 5 000 жителей Саранска на площадке плюс десятки тысяч в онлайн-трансляции и городских СМИ.",
    icon: "Users",
    badge: "Охват",
  },
  {
    title: "Медийное продвижение",
    description: "Публикации в городских пабликах, репортажи на местном ТВ и радио, интеграции у городских блогеров.",
    icon: "Tv",
    badge: "PR",
  },
  {
    title: "Брендирование на площадке",
    description: "Баннеры, стенды, брендированные зоны и упоминание логотипа на сцене на протяжении всего события.",
    icon: "Flag",
    badge: "Бренд",
  },
  {
    title: "Прямой контакт с аудиторией",
    description: "Собственный стенд или интерактивная зона для живого взаимодействия с потенциальными клиентами.",
    icon: "Handshake",
    badge: "Контакт",
  },
  {
    title: "Культурный имидж города",
    description: "Ассоциация бренда с позитивным событием, которое формирует культурный образ Саранска.",
    icon: "Star",
    badge: "Имидж",
  },
  {
    title: "Фото и видеоконтент",
    description: "Профессиональная фото- и видеосъёмка с упоминанием спонсоров, готовый контент для SMM.",
    icon: "Camera",
    badge: "Контент",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности для спонсоров</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Станьте частью главного культурного события Саранска и получите максимальную видимость бренда
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} fallback="Star" size={28} className="text-red-500" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
