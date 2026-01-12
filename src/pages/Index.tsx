import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderForm, setOrderForm] = useState({ name: '', email: '', description: '', size: '40x50', material: 'холст' });
  const [price, setPrice] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sizePrice = orderForm.size === '40x50' ? 30000 : orderForm.size === '60x80' ? 50000 : 80000;
    const materialPrice = orderForm.material === 'холст' ? 0 : orderForm.material === 'дерево' ? 10000 : 5000;
    setPrice(sizePrice + materialPrice);
  }, [orderForm.size, orderForm.material]);

  const artworks = [
    { id: 1, title: 'Абстрактная симфония', category: 'абстракция', year: 2024, size: '80x120', technique: 'Акрил на холсте', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/f9ec3454-fbfa-4f95-ae33-e6fec4488433.jpg' },
    { id: 2, title: 'Футуристический пейзаж', category: 'пейзаж', year: 2024, size: '60x90', technique: 'Масло на холсте', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/cefd7d50-eaa9-4df2-81c4-8cbd224d1467.jpg' },
    { id: 3, title: 'Неоновый портрет', category: 'портрет', year: 2023, size: '50x70', technique: 'Смешанная техника', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/83a5c96f-3a5e-4ef1-bac1-a99713e698bd.jpg' },
    { id: 4, title: 'Цифровая эра', category: 'абстракция', year: 2024, size: '100x150', technique: 'Акрил на холсте', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/f9ec3454-fbfa-4f95-ae33-e6fec4488433.jpg' },
    { id: 5, title: 'Космическая одиссея', category: 'пейзаж', year: 2023, size: '70x100', technique: 'Масло на холсте', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/cefd7d50-eaa9-4df2-81c4-8cbd224d1467.jpg' },
    { id: 6, title: 'Экспрессия', category: 'портрет', year: 2024, size: '60x80', technique: 'Акрил на холсте', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/83a5c96f-3a5e-4ef1-bac1-a99713e698bd.jpg' },
  ];

  const courses = [
    { id: 1, title: 'Основы композиции', duration: '4 недели', price: '15 000 ₽', level: 'Начальный', topics: ['Правило третей', 'Цветовая гармония', 'Перспектива', 'Баланс форм'] },
    { id: 2, title: 'Техника мазка', duration: '6 недель', price: '25 000 ₽', level: 'Продвинутый', topics: ['Текстура холста', 'Слои краски', 'Импасто', 'Глазурь'] },
    { id: 3, title: 'Авангард и эксперимент', duration: '8 недель', price: '35 000 ₽', level: 'Профессионал', topics: ['Смешанные техники', 'Абстракция', 'Экспрессионизм', 'Концептуализм'] },
  ];

  const blogPosts = [
    { id: 1, title: 'Как выбрать холст для живописи', excerpt: 'Разбираем типы холстов и их влияние на конечный результат', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/f9ec3454-fbfa-4f95-ae33-e6fec4488433.jpg' },
    { id: 2, title: 'Техника наложения мазков: секреты мастеров', excerpt: 'Изучаем различные способы нанесения краски на холст', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/cefd7d50-eaa9-4df2-81c4-8cbd224d1467.jpg' },
    { id: 3, title: 'История моей последней работы', excerpt: 'От идеи до выставки: путь картины "Абстрактная симфония"', image: 'https://cdn.poehali.dev/projects/73c11e4d-482e-4b7a-af6f-0e187a3b023b/files/83a5c96f-3a5e-4ef1-bac1-a99713e698bd.jpg' },
  ];

  const achievements = [
    { year: 2019, title: 'Первая персональная выставка', venue: 'Галерея "Арт-Пространство", Москва' },
    { year: 2020, title: 'Номинация на премию "Инновация"', venue: 'Фонд современного искусства' },
    { year: 2022, title: 'Международная биеннале', venue: 'Венеция, Италия' },
    { year: 2023, title: 'Резиденция художника', venue: 'Центр Помпиду, Париж' },
    { year: 2024, title: 'Выставка "Будущее сейчас"', venue: 'ГМИИ им. Пушкина, Москва' },
  ];

  const filteredArtworks = selectedCategory === 'all' ? artworks : artworks.filter(a => a.category === selectedCategory);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = ['Портфолио', 'О художнике', 'Заказать', 'Мастер-классы', 'Блог', 'Контакты'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5C4033] via-[#7D5A4F] to-[#8B5A3C] relative frame-border canvas-texture">
      {/* Верхняя граница */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20 transition-all duration-500" style={{ transform: `translateY(${scrollY > 100 ? '0' : '-100%'})` }}>
        <div className="container mx-auto px-6 py-4 flex justify-center items-center gap-8">
          {menuItems.slice(0, 3).map((item, idx) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-sm md:text-base text-foreground/80 hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-110"
              style={{ 
                animation: scrollY > 100 ? `slideDown 0.5s ease-out ${idx * 0.1}s both` : 'none'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Левая граница */}
      <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 bg-background/80 backdrop-blur-md border-r border-primary/20 py-8 px-4 transition-all duration-700" style={{ transform: `translateX(${scrollY > 200 ? '0' : '-100%'}) translateY(-50%)` }}>
        <div className="text-xl font-bold bg-gradient-to-b from-primary via-secondary to-accent bg-clip-text text-transparent [writing-mode:vertical-lr] rotate-180 hover:scale-105 transition-transform duration-300">
          KONSTANTIN Z
        </div>
      </div>

      {/* Правая граница */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 bg-background/80 backdrop-blur-md border-l border-primary/20 py-6 px-4 transition-all duration-700" style={{ transform: `translateX(${scrollY > 200 ? '0' : '100%'}) translateY(-50%)` }}>
        {['Instagram', 'Facebook', 'Telegram'].map((social, idx) => (
          <a 
            key={social}
            href="#контакты"
            onClick={(e) => scrollToSection(e, 'контакты')}
            className="text-foreground/60 hover:text-primary transition-all duration-300 [writing-mode:vertical-lr] rotate-180 text-sm hover:scale-110"
            style={{ 
              animation: scrollY > 200 ? `fadeIn 0.5s ease-out ${idx * 0.15}s both` : 'none'
            }}
          >
            {social}
          </a>
        ))}
      </div>

      {/* Нижняя граница */}
      <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-primary/20 transition-all duration-500" style={{ transform: `translateY(${scrollY > 300 ? '0' : '100%'})` }}>
        <div className="container mx-auto px-6 py-4 flex justify-center items-center gap-8">
          {menuItems.slice(3, 6).map((item, idx) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-sm md:text-base text-foreground/80 hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-110"
              style={{ 
                animation: scrollY > 300 ? `slideUp 0.5s ease-out ${idx * 0.1}s both` : 'none'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Мобильное меню */}
      <Button 
        variant="outline" 
        className="lg:hidden fixed top-4 right-4 z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
      </Button>
      
      <div 
        className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-30 animate-gradient"
          style={{
            backgroundImage: 'linear-gradient(45deg, #9b87f5, #D946EF, #F97316, #9b87f5)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8 animate-float">
            <div className="text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block transform -rotate-3">
              Z
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            Искусство, <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              которое живёт
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Картины, рассказывающие истории будущего
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Картины будущего
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="Palette" className="mr-2" size={20} />
              Заказать визуализацию
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="GraduationCap" className="mr-2" size={20} />
              Art-start
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              <Icon name="TrendingUp" className="mr-2" size={20} />
              Инвест-искусство
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Купить картину
            </Button>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Портфолио
            </span>
          </h2>
          <p className="text-center text-foreground/60 mb-12 text-lg">Креативная галерея работ</p>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'абстракция', 'пейзаж', 'портрет'].map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                {cat === 'all' ? 'Все работы' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((art, index) => (
              <Card
                key={art.id}
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className="mb-2 w-fit bg-primary/80">{art.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{art.title}</h3>
                    <p className="text-sm text-foreground/70 mb-1">{art.technique}</p>
                    <p className="text-sm text-foreground/60">{art.size} см • {art.year}</p>
                    <Button className="mt-4 bg-gradient-to-r from-secondary to-accent" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о художнике" className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  О художнике
                </span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Я создаю искусство, которое трогает сердца и открывает новые горизонты восприятия. 
                Моя живопись — это диалог между традицией и будущим, где каждый мазок несёт энергию 
                эксперимента и поиска новых форм выражения.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                В моих работах сплетаются авангардные техники, неоновые градиенты и нестандартная композиция, 
                создавая уникальный визуальный язык современного искусства.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 italic text-2xl font-accent text-foreground/70">
                "Искусство — это не то, что вы видите, а то, что вы чувствуете"
              </blockquote>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-8">Ключевые достижения</h3>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                    {achievement.year}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-foreground/60">{achievement.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="заказать" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Заказать работу
            </span>
          </h2>
          <p className="text-center text-foreground/60 mb-12 text-lg">Создайте свою уникальную визуализацию</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Портрет', icon: 'User', color: 'from-primary to-secondary' },
              { title: 'Пейзаж', icon: 'Mountain', color: 'from-secondary to-accent' },
              { title: 'Абстракция', icon: 'Sparkles', color: 'from-accent to-primary' },
            ].map((cat) => (
              <Card key={cat.title} className="group p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover-scale cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                  <Icon name={cat.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-foreground/60">Уникальные работы в стиле авангарда</p>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Калькулятор стоимости</h3>
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="bg-background/50"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={orderForm.email}
                  onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                  placeholder="your@email.com"
                  className="bg-background/50"
                />
              </div>
              <div>
                <Label htmlFor="size">Размер (см)</Label>
                <Tabs value={orderForm.size} onValueChange={(v) => setOrderForm({ ...orderForm, size: v })}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="40x50">40×50</TabsTrigger>
                    <TabsTrigger value="60x80">60×80</TabsTrigger>
                    <TabsTrigger value="100x150">100×150</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div>
                <Label htmlFor="material">Материал</Label>
                <Tabs value={orderForm.material} onValueChange={(v) => setOrderForm({ ...orderForm, material: v })}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="холст">Холст</TabsTrigger>
                    <TabsTrigger value="дерево">Дерево</TabsTrigger>
                    <TabsTrigger value="бумага">Бумага</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div>
                <Label htmlFor="description">Описание идеи</Label>
                <Textarea
                  id="description"
                  value={orderForm.description}
                  onChange={(e) => setOrderForm({ ...orderForm, description: e.target.value })}
                  placeholder="Расскажите о своей идее..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              <div className="p-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
                <p className="text-sm text-foreground/60 mb-2">Ориентировочная стоимость:</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {price.toLocaleString()} ₽
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold" size="lg">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="мастер-классы" className="py-24 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Мастер-классы
            </span>
          </h2>
          <p className="text-center text-foreground/60 mb-12 text-lg">Образовательные программы для художников</p>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover-scale">
                <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">{course.level}</Badge>
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="DollarSign" size={18} />
                    <span className="text-sm font-semibold">{course.price}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/70">
                      <Icon name="CheckCircle" size={16} className="mt-1 text-primary flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90" size="lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться
                </Button>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-r from-accent/20 to-primary/20 border-accent/40 max-w-2xl mx-auto text-center">
            <Icon name="Gift" size={48} className="mx-auto mb-4 text-accent" />
            <h3 className="text-3xl font-bold mb-4">Бесплатный вебинар</h3>
            <p className="text-xl mb-6 text-foreground/80">5 секретов композиции в современной живописи</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input placeholder="Ваш email" className="bg-background/50" />
              <Button className="bg-gradient-to-r from-accent to-secondary hover:opacity-90 whitespace-nowrap">
                Записаться
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="блог" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Искусство в деталях
            </span>
          </h2>
          <p className="text-center text-foreground/60 mb-12 text-lg">Статьи о технике и вдохновении</p>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover-scale group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Читать статью
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Контакты
            </span>
          </h2>
          <p className="text-center text-foreground/60 mb-12 text-lg">Свяжитесь со мной</p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" className="bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea id="contact-message" placeholder="Ваше сообщение..." className="bg-background/50 min-h-[120px]" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Студия</h4>
                    <p className="text-foreground/70">Москва, ул. Арт-Пространство, 12</p>
                    <Button variant="link" className="px-0 text-primary">
                      Проложить маршрут →
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h4 className="font-semibold mb-4">Социальные сети</h4>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
                    <Button key={social} variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary">
                      <Icon name={social as any} size={20} />
                    </Button>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/40">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-xs font-mono">QR-код</div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Быстрая связь</h4>
                    <p className="text-sm text-foreground/70">Отсканируйте для перехода в Telegram</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KONSTANTIN Z
              </h3>
              <p className="text-foreground/60">Искусство, которое живёт</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                {['Главная', 'Портфолио', 'О художнике', 'Заказать', 'Мастер-классы', 'Блог'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-foreground/60 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Способы оплаты</h4>
              <div className="flex gap-3">
                {['CreditCard', 'Wallet', 'Smartphone'].map((icon) => (
                  <div key={icon} className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                    <Icon name={icon as any} size={20} className="text-foreground/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© 2024 KONSTANTIN Z. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}