import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const monuments = [
    {
      id: 1,
      name: "Памятник классический",
      price: "от 25 000 ₽",
      material: "Гранит",
      size: "100x50x8 см",
      image: "/img/c8542b86-82b1-467a-a613-6c851aa7cc53.jpg",
      description: "Элегантный классический памятник из серого гранита с возможностью гравировки"
    },
    {
      id: 2,
      name: "Памятник с крестом",
      price: "от 35 000 ₽", 
      material: "Мрамор",
      size: "120x60x10 см",
      image: "/img/c8542b86-82b1-467a-a613-6c851aa7cc53.jpg",
      description: "Торжественный памятник с резным крестом из белого мрамора"
    },
    {
      id: 3,
      name: "Памятник фигурный",
      price: "от 45 000 ₽",
      material: "Габбро",
      size: "110x55x12 см", 
      image: "/img/c8542b86-82b1-467a-a613-6c851aa7cc53.jpg",
      description: "Изысканный фигурный памятник из черного габбро с художественной обработкой"
    }
  ];

  const fences = [
    {
      id: 1,
      name: "Ограда кованая",
      price: "от 8 000 ₽/м",
      material: "Металл",
      height: "80 см",
      image: "/img/a9ee64ab-0fd2-43ac-979a-c392c274a167.jpg",
      description: "Элегантная кованая ограда с классическим орнаментом"
    },
    {
      id: 2,
      name: "Ограда литая",
      price: "от 12 000 ₽/м",
      material: "Чугун",
      height: "90 см",
      image: "/img/a9ee64ab-0fd2-43ac-979a-c392c274a167.jpg",
      description: "Прочная литая ограда с декоративными элементами"
    },
    {
      id: 3,
      name: "Ограда гранитная",
      price: "от 15 000 ₽/м",
      material: "Гранит + металл",
      height: "100 см",
      image: "/img/a9ee64ab-0fd2-43ac-979a-c392c274a167.jpg",
      description: "Комбинированная ограда с гранитными столбами и металлическими секциями"
    }
  ];

  const services = [
    {
      icon: "🔧",
      title: "Установка памятников",
      description: "Профессиональная установка с гарантией качества"
    },
    {
      icon: "🌿", 
      title: "Благоустройство могил",
      description: "Полное благоустройство участков с озеленением"
    },
    {
      icon: "🎨",
      title: "Гравировка портретов",
      description: "Художественная гравировка и портреты на памятниках"
    },
    {
      icon: "🚚",
      title: "Доставка",
      description: "Бесплатная доставка по городу при заказе от 30 000 ₽"
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена');
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⛪</span>
              <h1 className="text-xl font-roboto font-bold text-primary">Мемориал Монументы</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button className="font-medium">
                  📞 Заказать звонок
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-roboto font-bold text-foreground mb-6">
              Достойная память вашим близким
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Создаем памятники, ограды и обеспечиваем полное благоустройство могил 
              с заботой о каждой детали. Более 15 лет опыта в ритуальных услугах.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-base font-medium">
                    💬 Оставить заявку
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button variant="outline" size="lg" className="text-base font-medium">
                📋 Посмотреть каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-roboto font-bold text-foreground mb-4">Каталог продукции</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор памятников и оград из качественных материалов с возможностью индивидуального изготовления
            </p>
          </div>

          <Tabs defaultValue="monuments" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="monuments" className="font-medium">Памятники</TabsTrigger>
              <TabsTrigger value="fences" className="font-medium">Ограды</TabsTrigger>
            </TabsList>

            <TabsContent value="monuments" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monuments.map((monument) => (
                  <Card key={monument.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={monument.image} 
                        alt={monument.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg font-roboto">{monument.name}</CardTitle>
                        <Badge variant="secondary" className="font-medium">{monument.price}</Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {monument.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>Материал: {monument.material}</span>
                        <span>Размер: {monument.size}</span>
                      </div>
                      <Button className="w-full font-medium">
                        🛒 Заказать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fences" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fences.map((fence) => (
                  <Card key={fence.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={fence.image} 
                        alt={fence.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg font-roboto">{fence.name}</CardTitle>
                        <Badge variant="secondary" className="font-medium">{fence.price}</Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {fence.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>Материал: {fence.material}</span>
                        <span>Высота: {fence.height}</span>
                      </div>
                      <Button className="w-full font-medium">
                        🛒 Заказать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-roboto font-bold text-foreground mb-4">Наши услуги</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс ритуальных услуг от изготовления до установки и обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-roboto">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-roboto font-bold text-foreground mb-4">Контакты</h3>
              <p className="text-muted-foreground">
                Свяжитесь с нами для консультации и оформления заказа
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="font-roboto font-medium mb-1">Адрес</h4>
                    <p className="text-muted-foreground text-sm">
                      г. Москва, ул. Ритуальная, д. 15<br />
                      ежедневно с 9:00 до 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                    📞
                  </div>
                  <div>
                    <h4 className="font-roboto font-medium mb-1">Телефон</h4>
                    <p className="text-muted-foreground text-sm">
                      +7 (495) 123-45-67<br />
                      +7 (495) 123-45-68
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-roboto font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      info@memorial-monuments.ru
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-roboto font-medium mb-4">Быстрая заявка</h4>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="quick-name" className="text-sm">Ваше имя</Label>
                    <Input id="quick-name" placeholder="Введите имя" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="quick-phone" className="text-sm">Телефон</Label>
                    <Input id="quick-phone" placeholder="+7 (___) ___-__-__" className="mt-1" />
                  </div>
                  <Button className="w-full font-medium">
                    📨 Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-roboto">Заявка на услуги</DialogTitle>
          <DialogDescription>
            Заполните форму и мы свяжемся с вами в течение часа
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Имя *</Label>
              <Input id="firstName" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="lastName">Фамилия *</Label>
              <Input id="lastName" required className="mt-1" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input id="phone" type="tel" required className="mt-1" />
          </div>
          
          <div>
            <Label htmlFor="service">Интересующая услуга</Label>
            <select id="service" className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md">
              <option value="">Выберите услугу</option>
              <option value="monument">Изготовление памятника</option>
              <option value="fence">Установка ограды</option>
              <option value="landscaping">Благоустройство могилы</option>
              <option value="maintenance">Уход за могилой</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="message">Дополнительная информация</Label>
            <Textarea id="message" placeholder="Опишите ваши пожелания..." className="mt-1" rows={3} />
          </div>
          
          <div>
            <Label htmlFor="photo" className="block mb-2">Фото участка</Label>
            <div className="border-2 border-dashed border-input rounded-lg p-4 text-center">
              <input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Label htmlFor="photo" className="cursor-pointer">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl">📁</span>
                  <span className="text-sm text-muted-foreground">
                    {selectedFile ? selectedFile.name : 'Нажмите для выбора файла'}
                  </span>
                </div>
              </Label>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 font-medium">
              📨 Отправить заявку
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">⛪</span>
                <span className="font-roboto font-bold">Мемориал Монументы</span>
              </div>
              <p className="text-sm opacity-90">
                Достойная память вашим близким. Качество, проверенное временем.
              </p>
            </div>
            
            <div>
              <h4 className="font-roboto font-medium mb-3">Услуги</h4>
              <ul className="space-y-1 text-sm opacity-90">
                <li>Памятники из гранита и мрамора</li>
                <li>Ограды и заборы</li>
                <li>Благоустройство участков</li>
                <li>Гравировка портретов</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-roboto font-medium mb-3">Контакты</h4>
              <div className="space-y-1 text-sm opacity-90">
                <p>+7 (495) 123-45-67</p>
                <p>info@memorial-monuments.ru</p>
                <p>г. Москва, ул. Ритуальная, д. 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-4 text-center text-sm opacity-75">
            © 2024 Мемориал Монументы. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;