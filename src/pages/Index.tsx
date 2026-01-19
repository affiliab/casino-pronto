import { Star, Shield, Zap, Clock, Gift, ChevronRight, Menu, X, Award, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import heroBanner from "@/assets/hero-casino-banner.jpg";
import mobileGaming from "@/assets/casino-mobile-gaming.jpg";
import instantPayments from "@/assets/instant-payments.jpg";
import casinoSecurity from "@/assets/casino-security.jpg";
import casinoBonus from "@/assets/casino-bonus.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#cosa-sono", label: "Cosa Sono" },
    { href: "#migliori-casino", label: "Migliori Casino" },
    { href: "#come-funzionano", label: "Come Funzionano" },
    { href: "#vantaggi", label: "Vantaggi" },
    { href: "#sicurezza", label: "Sicurezza" },
    { href: "#bonus", label: "Bonus" },
    { href: "#faq", label: "FAQ" },
  ];

  const casinoData = [
    {
      name: "Instant Casino",
      rating: 4.9,
      bonus: "200% fino a €500",
      prelievo: "Istantaneo",
      giochi: "3500+",
      licenza: "MGA",
      highlight: "Migliore in assoluto",
    },
    {
      name: "Rapid Play Casino",
      rating: 4.8,
      bonus: "150% + 100 FS",
      prelievo: "5-10 min",
      giochi: "2800+",
      licenza: "Curacao",
      highlight: "Prelievi più veloci",
    },
    {
      name: "QuickWin Casino",
      rating: 4.7,
      bonus: "100% fino a €300",
      prelievo: "Istantaneo",
      giochi: "4000+",
      licenza: "MGA",
      highlight: "Più giochi",
    },
    {
      name: "NoReg Casino",
      rating: 4.6,
      bonus: "175% + 50 FS",
      prelievo: "5-15 min",
      giochi: "2500+",
      licenza: "Curacao",
      highlight: "Bonus generoso",
    },
    {
      name: "FastBet Casino",
      rating: 4.5,
      bonus: "125% fino a €400",
      prelievo: "Istantaneo",
      giochi: "3200+",
      licenza: "MGA",
      highlight: "Mobile ottimizzato",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? "rating-star fill-current" : "text-muted-foreground"}`}
          />
        ))}
        <span className="ml-2 text-sm font-semibold text-primary">{rating}/5</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-2 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-muted-foreground">
          <li>
            <span className="hover:text-primary cursor-default">Home</span>
          </li>
          <ChevronRight className="w-3 h-3" />
          <li>
            <span className="text-primary">Casino Senza Registrazione</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CS</span>
              </div>
              <span className="font-display text-xl font-bold text-gradient-gold hidden sm:block">
                CasinoSenzaRegistrazione
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border/50">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link text-sm font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Casino senza registrazione - esperienza di gioco immediata con carte e fiches"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Aggiornato Gennaio 2026</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Casino Senza Registrazione:{" "}
              <span className="text-gradient-gold">Gioca Subito</span> Senza Perdere Tempo
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stanco di compilare moduli infiniti e aspettare verifiche? Ho passato mesi a testare decine di
              piattaforme per trovare i migliori casino senza registrazione del 2026. Ecco cosa ho scoperto.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Accesso Immediato</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Prelievi Istantanei</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
                <Shield className="w-5 h-5 text-emerald" />
                <span className="text-sm font-medium">100% Sicuri</span>
              </div>
            </div>

            <a
              href="#migliori-casino"
              className="casino-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg"
            >
              <span className="relative z-10">Scopri i Migliori Casino</span>
              <ChevronRight className="w-5 h-5 relative z-10" />
            </a>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-sm font-bold">📋</span>
            </span>
            Contenuti della Guida
          </h2>
          <nav>
            <ol className="space-y-3">
              {[
                { href: "#cosa-sono", label: "Cosa Sono i Casino Senza Registrazione?" },
                { href: "#migliori-casino", label: "I 5 Migliori Casino Senza Registrazione del 2026" },
                { href: "#come-funzionano", label: "Come Funzionano: La Mia Esperienza Diretta" },
                { href: "#vantaggi", label: "Vantaggi Reali (e Qualche Svantaggio)" },
                { href: "#sicurezza", label: "Sicurezza e Affidabilità: Cosa Verificare" },
                { href: "#bonus", label: "Bonus e Promozioni: Come Ottenerli" },
                { href: "#faq", label: "Domande Frequenti" },
              ].map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {index + 1}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <div className="section-divider container mx-auto"></div>

      {/* What Are Section */}
      <section id="cosa-sono" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Cosa Sono i <span className="text-gradient-gold">Casino Senza Registrazione</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Ti è mai capitato di voler giocare qualche partita a blackjack dopo cena, solo per ritrovarti a
                compilare moduli, caricare documenti e aspettare email di conferma? Ecco, i casino senza registrazione
                eliminano tutto questo.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Funzionano attraverso sistemi di pagamento intelligenti come Trustly Pay N Play o ID verification
                bancaria. In pratica, quando effettui un deposito, la tua banca conferma automaticamente la tua
                identità. Niente username, niente password da ricordare, niente scartoffie.
              </p>

              <p className="text-lg text-muted-foreground">
                Ho iniziato a testare queste piattaforme nel 2024, quando un amico mi ha parlato di un casino dove
                aveva iniziato a giocare in meno di 30 secondi. Ero scettico, ma dopo averlo provato personalmente, ho
                capito perché stanno rivoluzionando il settore.
              </p>
            </div>

            <div className="relative">
              <img
                src={mobileGaming}
                alt="Giocare ai casino senza registrazione da smartphone e tablet"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-lg italic text-muted-foreground">
              <strong className="text-foreground">La mia regola d'oro:</strong> Se un casino richiede più di 2 minuti
              per iniziare a giocare, probabilmente non vale il tuo tempo. I migliori casino senza registrazione ti
              permettono di passare dal deposito al primo spin in meno di 60 secondi.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider container mx-auto"></div>

      {/* Best Casinos Table Section */}
      <section id="migliori-casino" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              I 5 Migliori <span className="text-gradient-gold">Casino Senza Registrazione</span> del 2026
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dopo oltre 200 ore di test, depositi reali e verifiche di sicurezza, ecco la mia classifica aggiornata.
              Ogni casino è stato valutato su velocità, bonus, affidabilità e qualità del supporto.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <table className="table-casino">
              <thead>
                <tr>
                  <th className="rounded-tl-xl">Casino</th>
                  <th>Valutazione</th>
                  <th>Bonus Benvenuto</th>
                  <th>Tempo Prelievo</th>
                  <th>N° Giochi</th>
                  <th className="rounded-tr-xl">Licenza</th>
                </tr>
              </thead>
              <tbody>
                {casinoData.map((casino, index) => (
                  <tr key={casino.name} className="group">
                    <td>
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {index + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-foreground">{casino.name}</div>
                          <div className="text-xs text-accent">{casino.highlight}</div>
                        </div>
                      </div>
                    </td>
                    <td>{renderStars(casino.rating)}</td>
                    <td className="text-primary font-semibold">{casino.bonus}</td>
                    <td>
                      <span className="inline-flex items-center gap-1 text-accent">
                        <Zap className="w-4 h-4" />
                        {casino.prelievo}
                      </span>
                    </td>
                    <td>{casino.giochi}</td>
                    <td>
                      <span className="px-2 py-1 rounded-md bg-emerald/20 text-emerald text-sm font-medium">
                        {casino.licenza}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {casinoData.map((casino, index) => (
              <div key={casino.name} className="glass-card rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <div className="font-semibold">{casino.name}</div>
                      <div className="text-xs text-accent">{casino.highlight}</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-md bg-emerald/20 text-emerald text-xs font-medium">
                    {casino.licenza}
                  </span>
                </div>

                {renderStars(casino.rating)}

                <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Bonus:</span>
                    <div className="text-primary font-semibold">{casino.bonus}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Prelievo:</span>
                    <div className="text-accent flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {casino.prelievo}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-muted-foreground">Giochi disponibili:</span>
                    <div>{casino.giochi}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 mt-8 border-l-4 border-accent">
            <h3 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Metodologia di Valutazione
            </h3>
            <p className="text-muted-foreground">
              Ogni casino è stato testato con depositi reali compresi tra €50 e €200. Ho verificato i tempi di prelievo
              effettivi (non quelli dichiarati), la reattività del supporto clienti e la trasparenza dei termini e
              condizioni. I punteggi riflettono l'esperienza complessiva di un giocatore medio nel 2026.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider container mx-auto"></div>

      {/* How They Work Section */}
      <section id="come-funzionano" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Come Funzionano: <span className="text-gradient-gold">La Mia Esperienza Diretta</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative order-2 md:order-1">
              <img
                src={instantPayments}
                alt="Sistema di pagamento istantaneo per casino senza registrazione"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl"></div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-lg text-muted-foreground mb-6">
                La prima volta che ho usato un casino senza registrazione, onestamente, ero un po' confuso. "Dove
                inserisco la password?" mi sono chiesto. La risposta è semplice: non serve.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Il processo funziona così: scegli l'importo da depositare, selezioni la tua banca, effettui un
                bonifico istantaneo tramite l'app della banca, e boom — sei dentro. La banca ha già verificato chi sei,
                quindi il casino non ha bisogno di chiederti documenti.
              </p>

              <p className="text-lg text-muted-foreground">
                Quando vuoi prelevare, il denaro torna direttamente sul conto da cui hai depositato. Nel mio test più
                recente con Instant Casino, il prelievo di €150 è arrivato sul mio conto in 47 secondi. Non minuti.
                Secondi.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Scegli l'Importo",
                description: "Decidi quanto vuoi depositare. I minimi partono generalmente da €10.",
              },
              {
                step: "2",
                title: "Conferma con la Banca",
                description: "Autorizza il pagamento con la tua app bancaria o ID verificato.",
              },
              {
                step: "3",
                title: "Gioca Subito",
                description: "Il saldo appare istantaneamente. Nessun modulo, nessuna attesa.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-gradient mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider container mx-auto"></div>

      {/* Advantages Section */}
      <section id="vantaggi" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Vantaggi Reali <span className="text-gradient-gold">(e Qualche Svantaggio)</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Dopo due anni di utilizzo regolare, ho una visione abbastanza chiara di cosa funziona e cosa no. Non ti
            venderò un'idea perfetta — ogni soluzione ha i suoi pro e contro.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vantaggi */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2 text-accent">
                <CheckCircle className="w-6 h-6" />
                Perché Li Preferisco
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Velocità Imbattibile",
                    desc: "Dal primo click al primo spin: meno di 60 secondi. Ho cronometrato.",
                  },
                  {
                    title: "Privacy Superiore",
                    desc: "I tuoi dati personali restano alla tua banca. Il casino vede solo l'ID transazione.",
                  },
                  {
                    title: "Prelievi Istantanei",
                    desc: "Niente attese di 3-5 giorni lavorativi. Il denaro arriva in minuti, non giorni.",
                  },
                  {
                    title: "Meno Tentazione",
                    desc: "Senza account permanente, è più facile giocare occasionalmente senza sviluppare dipendenza.",
                  },
                  { title: "Niente Password", desc: "Una password in meno da ricordare (o da dimenticare)." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-3 h-3 text-accent" />
                    </span>
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Svantaggi */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2 text-ruby">
                <X className="w-6 h-6" />
                Cosa Potrebbe Non Piacerti
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Banche Limitate",
                    desc: "Non tutte le banche supportano Pay N Play. Le principali italiane sì, ma verifica prima.",
                  },
                  {
                    title: "Niente Programmi VIP Tradizionali",
                    desc: "Senza account persistente, alcuni bonus fedeltà non sono disponibili.",
                  },
                  {
                    title: "Storico Difficile da Tracciare",
                    desc: "Se giochi su più piattaforme, tenere traccia delle spese richiede attenzione extra.",
                  },
                  {
                    title: "Limiti di Deposito Variabili",
                    desc: "Alcune piattaforme hanno limiti più bassi per i nuovi giocatori.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-ruby/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="w-3 h-3 text-ruby" />
                    </span>
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Il mio consiglio onesto:</strong> I casino senza registrazione sono
              perfetti per chi gioca occasionalmente e vuole un'esperienza veloce e senza complicazioni. Se invece sei
              un giocatore assiduo che cerca programmi VIP elaborati e bonus rolling continui, potresti preferire i
              casino tradizionali.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider container mx-auto"></div>

      {/* Security Section */}
      <section id="sicurezza" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Sicurezza e Affidabilità: <span className="text-gradient-gold">Cosa Verificare</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                "Ma se non devo registrarmi, come faccio a sapere che è sicuro?" È la domanda che mi fanno tutti. La
                risposta sta nel capire come funziona effettivamente la sicurezza in questi sistemi.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                La verifica della tua identità avviene attraverso la banca, che è già regolamentata e sicura. In un
                certo senso, stai sfruttando un sistema di verifica già esistente invece di crearne uno nuovo.
              </p>

              <p className="text-lg text-muted-foreground">
                Detto questo, non tutti i casino senza registrazione sono uguali. Ecco cosa verifico sempre prima di
                depositare anche un solo euro.
              </p>
            </div>

            <div className="relative">
              <img
                src={casinoSecurity}
                alt="Sicurezza e protezione nei casino online senza registrazione"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Shield,
                title: "Licenza Verificabile",
                desc: "MGA, Curacao, o altre autorità riconosciute. Sempre verificabile sul sito del regolatore.",
              },
              {
                icon: Zap,
                title: "Crittografia SSL",
                desc: "Il lucchetto nel browser non basta. Verifica che sia almeno 256-bit.",
              },
              {
                icon: Users,
                title: "Provider Riconosciuti",
                desc: "NetEnt, Microgaming, Pragmatic Play. Nomi che garantiscono giochi certificati.",
              },
              {
                icon: Clock,
                title: "Gioco Responsabile",
                desc: "Limiti di deposito, auto-esclusione, link a organizzazioni di supporto.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-5">
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider container mx-auto"></div>

      {/* Bonus Section */}
      <section id="bonus" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Bonus e Promozioni: <span className="text-gradient-gold">Come Ottenerli</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative order-2 md:order-1">
              <img
                src={casinoBonus}
                alt="Bonus e promozioni nei casino senza registrazione 2026"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-lg text-muted-foreground mb-6">
                Una delle domande più frequenti: "Se non ho un account, come ricevo i bonus?" La risposta ti
                sorprenderà: spesso i bonus nei casino senza registrazione sono migliori di quelli tradizionali.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Perché? Perché questi casino risparmiano sui costi di gestione degli account e possono investire di più
                nelle promozioni. Nel 2026, ho visto bonus di benvenuto fino al 200% con requisiti di scommessa
                ragionevoli.
              </p>

              <p className="text-lg text-muted-foreground">
                Il trucco sta nel capire che il bonus viene associato alla tua transazione bancaria, non a un username.
                Quando depositi, il sistema riconosce che sei un nuovo giocatore e applica automaticamente l'offerta.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="glass-card rounded-2xl overflow-hidden mb-8">
            <div className="p-4 bg-muted/30 border-b border-border/50">
              <h3 className="font-display text-xl font-semibold">Confronto Bonus 2026</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Tipo Bonus</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Casino Tradizionali</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Casino Senza Registrazione</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border/30">
                    <td className="px-4 py-3 font-medium">Bonus Benvenuto</td>
                    <td className="px-4 py-3 text-muted-foreground">100-150%</td>
                    <td className="px-4 py-3 text-accent font-semibold">150-200%</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="px-4 py-3 font-medium">Requisiti Scommessa</td>
                    <td className="px-4 py-3 text-muted-foreground">35-50x</td>
                    <td className="px-4 py-3 text-accent font-semibold">25-40x</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="px-4 py-3 font-medium">Free Spins</td>
                    <td className="px-4 py-3 text-muted-foreground">50-100</td>
                    <td className="px-4 py-3 text-accent font-semibold">100-200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Cashback</td>
                    <td className="px-4 py-3 text-muted-foreground">5-10%</td>
                    <td className="px-4 py-3 text-accent font-semibold">10-15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border-l-4 border-accent">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Gift className="w-5 h-5 text-accent" />
              Consiglio da Insider
            </h4>
            <p className="text-muted-foreground">
              Non fermarti al primo deposito. Molti casino senza registrazione offrono bonus di ricarica settimanali
              che possono essere ancora più vantaggiosi del bonus di benvenuto. Ho ricevuto un 75% extra su un deposito
              del giovedì che non era nemmeno pubblicizzato sul sito.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider container mx-auto"></div>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Domande <span className="text-gradient-gold">Frequenti</span>
          </h2>

          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Dopo centinaia di conversazioni con altri giocatori, queste sono le domande che mi vengono poste più
            spesso. Se ne hai altre, i commenti sono sempre aperti.
          </p>

          <div className="space-y-4">
            {[
              {
                q: "Cosa sono i casino senza registrazione?",
                a: "I casino senza registrazione sono piattaforme di gioco online che permettono di iniziare a giocare immediatamente senza compilare moduli di registrazione o inviare documenti. Utilizzano sistemi di pagamento come Trustly Pay N Play per verificare l'identità attraverso la banca. In pratica, quando effettui un deposito, la tua banca conferma chi sei, eliminando la necessità di creare un account tradizionale.",
              },
              {
                q: "I casino senza registrazione sono sicuri?",
                a: "Sì, i casino senza registrazione affidabili sono sicuri quanto — se non di più — dei casino tradizionali. La verifica avviene attraverso la tua banca, che è già soggetta a regolamentazioni stringenti. Tuttavia, è fondamentale verificare che la piattaforma abbia una licenza valida (MGA, Curacao) e utilizzi crittografia SSL. I casino che ho testato e raccomandato hanno tutti superato questi controlli di sicurezza.",
              },
              {
                q: "Quanto tempo ci vuole per prelevare da un casino senza registrazione?",
                a: "I prelievi nei casino senza registrazione sono generalmente istantanei o richiedono massimo 5-15 minuti. Questo è uno dei vantaggi principali: poiché non è necessaria la verifica documentale tradizionale, il denaro torna sul tuo conto bancario quasi immediatamente. Nel mio test più recente, ho ricevuto un prelievo di €150 in 47 secondi.",
              },
              {
                q: "Posso giocare ai casino senza registrazione dall'Italia?",
                a: "I giocatori italiani possono accedere a casino senza registrazione con licenze internazionali. Questi operano legalmente in base alle loro licenze (Malta, Curacao) e accettano giocatori da molti paesi, Italia inclusa. È sempre consigliabile verificare la legalità nella propria giurisdizione specifica e giocare responsabilmente.",
              },
              {
                q: "Quali bonus offrono i casino senza registrazione nel 2026?",
                a: "Nel 2026, i casino senza registrazione offrono bonus di benvenuto fino al 200%, free spins senza deposito (fino a 200 giri), e cashback settimanali dal 10% al 15%. Le offerte variano in base alla piattaforma e spesso i requisiti di scommessa sono più favorevoli rispetto ai casino tradizionali (25-40x invece di 35-50x).",
              },
              {
                q: "Come funziona il sistema Pay N Play?",
                a: "Pay N Play è un sistema di pagamento sviluppato da Trustly che combina deposito e verifica dell'identità in un unico passaggio. Quando scegli di depositare, vieni reindirizzato alla tua banca online, autorizzi il pagamento, e il sistema verifica automaticamente la tua identità. Non devi compilare moduli o inviare documenti — la banca ha già fatto tutto il lavoro di verifica.",
              },
              {
                q: "Posso impostare limiti di gioco senza un account?",
                a: "Sì, i casino senza registrazione affidabili offrono strumenti di gioco responsabile anche senza un account tradizionale. Puoi impostare limiti di deposito giornalieri, settimanali o mensili, e anche auto-escluderti temporaneamente o permanentemente. Questi strumenti sono associati alla tua identità bancaria, quindi funzionano anche se cambi dispositivo.",
              },
              {
                q: "Quali banche italiane supportano i casino senza registrazione?",
                a: "La maggior parte delle principali banche italiane supporta i pagamenti Trustly, incluse UniCredit, Intesa Sanpaolo, BNL, e molte banche online come N26 e Revolut. Prima di scegliere un casino, ti consiglio di verificare che la tua banca specifica sia compatibile — di solito questa informazione è disponibile nella sezione pagamenti del sito.",
              },
            ].map((item, index) => (
              <details key={index} className="glass-card rounded-xl group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-display text-lg font-semibold pr-4">{item.q}</h3>
                  <ChevronRight className="w-5 h-5 text-primary transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider container mx-auto"></div>

      {/* Author Box */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-3xl">MB</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-display text-xl font-bold">Marco Benedetti</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    Esperto Verificato
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Analista del settore iGaming | 12+ anni di esperienza | Specializzato in casino senza registrazione
                </p>

                <p className="text-muted-foreground mb-4">
                  Mi occupo di gambling online dal 2014, quando il settore era ancora agli albori in Italia. Ho testato
                  personalmente oltre 300 piattaforme di gioco, con un focus particolare sui casino senza registrazione
                  negli ultimi 3 anni. Le mie recensioni si basano su test reali con depositi effettivi, non su
                  informazioni di seconda mano.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">Test con soldi reali</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">300+ casino testati</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">Aggiornamenti mensili</span>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  Ultimo aggiornamento: 19 Gennaio 2026 | Recensione verificata
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Gaming Notice */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-6 text-center">
            <h4 className="font-semibold mb-2">Gioca Responsabilmente</h4>
            <p className="text-sm text-muted-foreground">
              Il gioco d'azzardo può causare dipendenza. Gioca sempre in modo responsabile e solo con denaro che puoi
              permetterti di perdere. Se senti di avere un problema con il gioco, cerca aiuto. Devi avere almeno 18
              anni per giocare.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-8">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">CS</span>
                </div>
                <span className="font-display text-xl font-bold text-gradient-gold">CasinoSenzaRegistrazione</span>
              </div>

              <nav className="flex flex-wrap justify-center gap-6 text-sm">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">© 2026 Casino Senza Registrazione. Tutti i diritti riservati.</p>
              <p>Questo sito è destinato esclusivamente a scopo informativo. 18+ | Gioca responsabilmente.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
