@extends('layouts.app')

@section('title', 'JP Digital Solutions - Automação, IA e Desenvolvimento Web')

@section('content')

<!-- Hero Section -->
<section class="hero">
    <div class="hero-content container text-center">
        <h1 class="mb-3">Automação, IA e Desenvolvimento Web</h1>
        <p class="lead mb-4">Transforme suas ideias em soluções digitais poderosas e escaláveis</p>
        <div class="d-flex gap-3 justify-content-center flex-wrap">
            <a href="#services" class="btn btn-primary btn-lg">Explorar Serviços</a>
            <a href="{{ route('portfolio') }}" class="btn btn-outline-light btn-lg">Ver Portfólio</a>
        </div>
    </div>
</section>

<!-- Serviços em Destaque -->
<section id="services" class="services-section">
    <div class="container">
        <h2 class="section-title">Serviços <span>Principais</span></h2>
        
        <div class="row g-4">
            <!-- IA e Vídeos -->
            <div class="col-md-4">
                <div class="service-card">
                    <i class="bi bi-film"></i>
                    <h3>IA & Vídeos</h3>
                    <p>Geração automática de vídeos com IA, edição profissional, roteiros inteligentes e integração com TikTok e YouTube.</p>
                </div>
            </div>
            
            <!-- Automação -->
            <div class="col-md-4">
                <div class="service-card">
                    <i class="bi bi-gear"></i>
                    <h3>Automação</h3>
                    <p>Automação com Selenium, RPA, bots inteligentes, integração com APIs externas e processamento em fila para múltiplos usuários.</p>
                </div>
            </div>
            
            <!-- Desenvolvimento Web -->
            <div class="col-md-4">
                <div class="service-card">
                    <i class="bi bi-code-slash"></i>
                    <h3>Desenvolvimento Web</h3>
                    <p>Sistemas robustos com Django, Laravel, Flask, Node.js, React, Bootstrap e FastAPI. Escaláveis e de alta performance.</p>
                </div>
            </div>
        </div>
        
        <!-- Serviços Secundários -->
        <div class="row g-4 mt-3">
            <div class="col-md-3">
                <div class="service-card">
                    <i class="bi bi-graph-up"></i>
                    <h3>Análise de Dados</h3>
                    <p>Processamento, visualização e insights de dados com aprendizagem por reforço.</p>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="service-card">
                    <i class="bi bi-puzzle"></i>
                    <h3>Integrações</h3>
                    <p>Conecte seus sistemas com APIs externas, TikTok, YouTube e plataformas de pagamento.</p>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="service-card">
                    <i class="bi bi-play-circle"></i>
                    <h3>Processamento de Vídeos</h3>
                    <p>Processamento em lote, efeitos, transições e otimização para diferentes plataformas.</p>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="service-card">
                    <i class="bi bi-credit-card"></i>
                    <h3>Sistemas de Pagamento</h3>
                    <p>Integração com servidores de jogos, processamento de transações seguras e relatórios.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Seção About -->
<section id="about" class="about-section">
    <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h2>Sobre <span class="text-gradient">Jonata Pontes</span></h2>
                <p>Sou desenvolvedor full-stack especializado em automação, inteligência artificial e desenvolvimento web. Desde 2023, trabalho criando soluções digitais inovadoras que transformam negócios.</p>
                <p>Com experiência em Python, JavaScript, Laravel, Django e tecnologias modernas, entrego projetos de alta qualidade, escaláveis e focados em resultados reais.</p>
                <p>Meu diferencial é combinar automação inteligente com interfaces web profissionais, criando ecossistemas digitais completos que geram valor para seus usuários.</p>
                <div class="mt-4">
                    <a href="{{ route('portfolio') }}" class="btn btn-primary">Ver Meus Projetos</a>
                </div>
            </div>
            <div class="about-image">
                <img src="https://via.placeholder.com/400x400?text=Jonata+Pontes" alt="Jonata Pontes" class="img-fluid">
            </div>
        </div>
    </div>
</section>

<!-- Portfólio Destaque -->
<section class="portfolio-section">
    <div class="container">
        <h2 class="section-title">Projetos <span>Recentes</span></h2>
        
        <div class="portfolio-grid">
            <!-- Projeto 1 -->
            <div class="project-card">
                <div class="project-image">
                    <i class="bi bi-film"></i>
                </div>
                <div class="project-info">
                    <h3>Gerador de Vídeos IA</h3>
                    <p>Plataforma de geração automática de vídeos com integração TikTok/YouTube</p>
                </div>
            </div>
            
            <!-- Projeto 2 -->
            <div class="project-card">
                <div class="project-image">
                    <i class="bi bi-gear"></i>
                </div>
                <div class="project-info">
                    <h3>Sistema de Automação</h3>
                    <p>Bot inteligente com Selenium para automação de tarefas repetitivas</p>
                </div>
            </div>
            
            <!-- Projeto 3 -->
            <div class="project-card">
                <div class="project-image">
                    <i class="bi bi-code-slash"></i>
                </div>
                <div class="project-info">
                    <h3>Dashboard Analytics</h3>
                    <p>Sistema de análise de dados em tempo real com React e Node.js</p>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <a href="{{ route('portfolio') }}" class="btn btn-primary btn-lg">Ver Todos os Projetos</a>
        </div>
    </div>
</section>

<!-- CTA Final -->
<section class="py-5" style="background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%);">
    <div class="container text-center">
        <h2 class="mb-3">Pronto para Transformar Sua Ideia?</h2>
        <p class="lead mb-4">Entre em contato e vamos criar algo extraordinário juntos</p>
        <a href="#contact" class="btn btn-light btn-lg">Iniciar Conversa</a>
    </div>
</section>

@endsection
