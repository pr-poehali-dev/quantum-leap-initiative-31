import { Instagram, Youtube, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Саранская <span className="text-red-500">Красавица</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Главное культурное мероприятие Саранска. Коммерческое предложение для партнёров и спонсоров — 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О мероприятии
                </a>
              </li>
              <li>
                <a href="#safety" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Пакеты спонсора
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="font-space-mono text-gray-400 text-sm">г. Саранск, Республика Мордовия</li>
              <li>
                <a href="tel:+78342000000" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  +7 (8342) 000-000
                </a>
              </li>
              <li>
                <a href="mailto:sponsor@saransk-beauty.ru" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  sponsor@saransk-beauty.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 «Саранская красавица». Все права защищены.</p>
            <p className="font-space-mono text-gray-500 text-sm mt-2 md:mt-0">Коммерческое предложение для спонсоров</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
