import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <div className="flex justify-center mb-6">
            <Icon name="Sparkles" fallback="Star" size={48} className="text-red-500" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Станьте партнёром «Саранской красавицы»
          </h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Присоединяйтесь к главному культурному событию города. Ваш бренд — в центре внимания тысяч жителей
            Саранска и широкой онлайн-аудитории.
          </p>
          <p className="text-lg text-red-400 font-semibold mb-10">
            Количество спонсорских мест ограничено
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Обсудить партнёрство
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Скачать презентацию
            </Button>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Phone" fallback="Phone" size={18} className="text-red-500" />
              <span>+7 (8342) 000-000</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" fallback="Mail" size={18} className="text-red-500" />
              <span>sponsor@saransk-beauty.ru</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" fallback="MapPin" size={18} className="text-red-500" />
              <span>г. Саранск, Республика Мордовия</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
