import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "О мероприятии",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            «Саранская красавица» — городской конкурс красоты и таланта, объединяющий жительниц Саранска и
            Республики Мордовия. Мероприятие укрепляет культурный имидж города, привлекает внимание СМИ и
            создаёт позитивный общественный резонанс.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Место: Культурный центр «Мордовия», г. Саранск
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Дата: лето 2025 года
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Ожидаемое число гостей: более 5 000 человек
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Целевая аудитория",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Аудитория мероприятия — активные горожане в возрасте 18–45 лет: семьи, молодёжь, предприниматели,
            представители городской культуры. Именно они принимают решения о покупках и формируют репутацию брендов в
            своём окружении.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              18–35 лет — 60% аудитории (активные потребители)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              35–45 лет — 30% (платёжеспособная аудитория)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Онлайн-охват: 30 000+ просмотров в социальных сетях
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Медийное продвижение",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Поддержка городских медиа и блогеров значительно усиливает видимость брендов спонсоров. Комбинация
            офлайн и онлайн охвата обеспечивает эффективную коммуникацию с широкой аудиторией на протяжении
            нескольких недель.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Публикации в топ-пабликах Саранска (совокупно 100 000+ подписчиков)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Репортажи на местном ТВ и радиостанциях
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Интеграции у городских блогеров и лидеров мнений
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">О мероприятии</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            «Саранская красавица» объединяет жителей, укрепляет культурный имидж города и привлекает внимание
            СМИ — создавая позитивный общественный резонанс для всех участников.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
