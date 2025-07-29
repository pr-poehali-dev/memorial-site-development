const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⛪</span>
              <h1 className="text-xl font-bold text-gray-900">Мемориал Монументы</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-gray-600 hover:text-gray-900">Каталог</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900">Услуги</a>
              <a href="#contacts" className="text-gray-600 hover:text-gray-900">Контакты</a>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              📞 Заказать звонок
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Достойная память вашим близким
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Создаем памятники, ограды и обеспечиваем полное благоустройство могил 
            с заботой о каждой детали. Более 15 лет опыта в ритуальных услугах.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              💬 Оставить заявку
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
              📋 Посмотреть каталог
            </button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Каталог продукции</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Широкий выбор памятников и оград из качественных материалов
            </p>
          </div>

          {/* Памятники */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Памятники</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🗿</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-lg font-semibold">Памятник классический</h5>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">от 25 000 ₽</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Элегантный классический памятник из серого гранита с возможностью гравировки
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Материал: Гранит</span>
                    <span>Размер: 100x50x8 см</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    🛒 Заказать
                  </button>
                </div>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">✝️</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-lg font-semibold">Памятник с крестом</h5>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">от 35 000 ₽</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Торжественный памятник с резным крестом из белого мрамора
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Материал: Мрамор</span>
                    <span>Размер: 120x60x10 см</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    🛒 Заказать
                  </button>
                </div>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🏛️</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-lg font-semibold">Памятник фигурный</h5>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">от 45 000 ₽</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Изысканный фигурный памятник из черного габбро с художественной обработкой
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Материал: Габбро</span>
                    <span>Размер: 110x55x12 см</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    🛒 Заказать
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Ограды */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Ограды</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🔗</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-lg font-semibold">Ограда кованая</h5>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">от 8 000 ₽/м</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Элегантная кованая ограда с классическим орнаментом
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Материал: Металл</span>
                    <span>Высота: 80 см</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    🛒 Заказать
                  </button>
                </div>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">⛓️</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-lg font-semibold">Ограда литая</h5>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">от 12 000 ₽/м</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Прочная литая ограда с декоративными элементами
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Материал: Чугун</span>
                    <span>Высота: 90 см</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    🛒 Заказать
                  </button>
                </div>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🏗️</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-lg font-semibold">Ограда гранитная</h5>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">от 15 000 ₽/м</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Комбинированная ограда с гранитными столбами и металлическими секциями
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Материал: Гранит + металл</span>
                    <span>Высота: 100 см</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    🛒 Заказать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный комплекс ритуальных услуг от изготовления до установки и обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                🔧
              </div>
              <h4 className="text-lg font-semibold mb-2">Установка памятников</h4>
              <p className="text-gray-600 text-sm">
                Профессиональная установка с гарантией качества
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                🌿
              </div>
              <h4 className="text-lg font-semibold mb-2">Благоустройство могил</h4>
              <p className="text-gray-600 text-sm">
                Полное благоустройство участков с озеленением
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                🎨
              </div>
              <h4 className="text-lg font-semibold mb-2">Гравировка портретов</h4>
              <p className="text-gray-600 text-sm">
                Художественная гравировка и портреты на памятниках
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                🚚
              </div>
              <h4 className="text-lg font-semibold mb-2">Доставка</h4>
              <p className="text-gray-600 text-sm">
                Бесплатная доставка по городу при заказе от 30 000 ₽
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-gray-600">
              Свяжитесь с нами для консультации и оформления заказа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-gray-600 text-sm">
                    г. Москва, ул. Ритуальная, д. 15<br />
                    ежедневно с 9:00 до 18:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-gray-600 text-sm">
                    +7 (495) 123-45-67<br />
                    +7 (495) 123-45-68
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">
                    info@memorial-monuments.ru
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Быстрая заявка</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Введите имя" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="+7 (___) ___-__-__" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  📨 Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">⛪</span>
                <span className="font-bold">Мемориал Монументы</span>
              </div>
              <p className="text-sm text-gray-300">
                Достойная память вашим близким. Качество, проверенное временем.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Памятники из гранита и мрамора</li>
                <li>Ограды и заборы</li>
                <li>Благоустройство участков</li>
                <li>Гравировка портретов</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@memorial-monuments.ru</p>
                <p>г. Москва, ул. Ритуальная, д. 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
            © 2024 Мемориал Монументы. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;