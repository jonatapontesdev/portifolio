@extends('layouts.app')

@section('title', 'Portfólio - JP Digital Solutions')

@section('content')

<!-- Hero Section -->
<section class="hero" style="min-height: 300px;">
    <div class="hero-content container text-center">
        <h1 class="mb-3">Portfólio</h1>
        <p class="lead">Conheça os projetos e sistemas que desenvolvi</p>
    </div>
</section>

<!-- Portfólio -->
<section class="portfolio-section py-5">
    <div class="container">
        <!-- Filtros -->
        <div class="mb-5 text-center">
            <button class="btn btn-outline-light me-2 mb-2" data-filter="all">Todos</button>
            <button class="btn btn-outline-light me-2 mb-2" data-filter="ai">IA & Vídeos</button>
            <button class="btn btn-outline-light me-2 mb-2" data-filter="automation">Automação</button>
            <button class="btn btn-outline-light me-2 mb-2" data-filter="web">Web</button>
            <button class="btn btn-outline-light mb-2" data-filter="data">Dados</button>
        </div>
        
        <!-- Grid de Projetos -->
        <div class="portfolio-grid">
            <!-- Projeto 1 -->
            <div class="project-card" data-category="ai">
                <div class="project-image">
                    <i class="bi bi-film"></i>
                </div>
                <div class="project-info">
                    <h3>Gerador de Vídeos com IA</h3>
                    <p>Plataforma completa para geração automática de vídeos com roteiros inteligentes, integração com TikTok e YouTube, e processamento em fila para múltiplos usuários.</p>
                    <small class="text-muted">Python, FastAPI, React, IA</small>
                </div>
            </div>
            
            <!-- Projeto 2 -->
            <div class="project-card" data-category="automation">
                <div class="project-image">
                    <i class="bi bi-gear"></i>
                </div>
                <div class="project-info">
                    <h3>Bot de Automação Selenium</h3>
                    <p>Sistema robusto de automação com Selenium para scraping, preenchimento de formulários e integração com APIs externas. Suporta múltiplos usuários com fila de processamento.</p>
                    <small class="text-muted">Python, Selenium, RPA</small>
                </div>
            </div>
            
            <!-- Projeto 3 -->
            <div class="project-card" data-category="web">
                <div class="project-image">
                    <i class="bi bi-code-slash"></i>
                </div>
                <div class="project-info">
                    <h3>Dashboard Analytics</h3>
                    <p>Sistema completo de análise de dados em tempo real com visualizações interativas, relatórios customizáveis e integração com múltiplas fontes de dados.</p>
                    <small class="text-muted">React, Node.js, MongoDB</small>
                </div>
            </div>
            
            <!-- Projeto 4 -->
            <div class="project-card" data-category="web">
                <div class="project-image">
                    <i class="bi bi-shop"></i>
                </div>
                <div class="project-info">
                    <h3>E-commerce Completo</h3>
                    <p>Plataforma de e-commerce com carrinho, pagamentos integrados, gestão de produtos, relatórios de vendas e painel administrativo completo.</p>
                    <small class="text-muted">Laravel, Bootstrap, MySQL</small>
                </div>
            </div>
            
            <!-- Projeto 5 -->
            <div class="project-card" data-category="data">
                <div class="project-image">
                    <i class="bi bi-graph-up"></i>
                </div>
                <div class="project-info">
                    <h3>Sistema de Análise de Dados</h3>
                    <p>Processamento avançado de dados com aprendizagem por reforço, previsões, clustering e visualizações complexas para insights estratégicos.</p>
                    <small class="text-muted">Python, Pandas, Scikit-learn</small>
                </div>
            </div>
            
            <!-- Projeto 6 -->
            <div class="project-card" data-category="ai">
                <div class="project-image">
                    <i class="bi bi-play-circle"></i>
                </div>
                <div class="project-info">
                    <h3>Editor de Vídeos IA</h3>
                    <p>Ferramenta de edição de vídeos com efeitos automáticos, transições inteligentes, processamento em lote e otimização para diferentes plataformas.</p>
                    <small class="text-muted">Python, FFmpeg, IA</small>
                </div>
            </div>
            
            <!-- Projeto 7 -->
            <div class="project-card" data-category="web">
                <div class="project-image">
                    <i class="bi bi-credit-card"></i>
                </div>
                <div class="project-info">
                    <h3>Sistema de Pagamentos</h3>
                    <p>Integração completa com servidor de jogos, processamento de transações seguras, relatórios financeiros e gestão de usuários.</p>
                    <small class="text-muted">Node.js, Stripe, PostgreSQL</small>
                </div>
            </div>
            
            <!-- Projeto 8 -->
            <div class="project-card" data-category="automation">
                <div class="project-image">
                    <i class="bi bi-puzzle"></i>
                </div>
                <div class="project-info">
                    <h3>Integração de APIs</h3>
                    <p>Plataforma de integração com múltiplas APIs (TikTok, YouTube, Stripe, etc), com webhooks, sincronização de dados e monitoramento em tempo real.</p>
                    <small class="text-muted">Node.js, FastAPI, Redis</small>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Upload de Preview -->
<section class="py-5" style="background: linear-gradient(180deg, #1A3A52 0%, #2D1B69 100%);">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <h2 class="text-center mb-4">Compartilhe Seu Projeto</h2>
                <p class="text-center text-muted mb-4">Envie uma prévia em imagem, vídeo ou screenshot do seu projeto</p>
                
                <form action="{{ route('portfolio.upload') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    
                    <div class="mb-3">
                        <label for="projectName" class="form-label">Nome do Projeto</label>
                        <input type="text" class="form-control" id="projectName" name="project_name" required>
                    </div>
                    
                    <div class="mb-3">
                        <label for="description" class="form-label">Descrição</label>
                        <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
                    </div>
                    
                    <div class="mb-3">
                        <label for="preview" class="form-label">Arquivo (Imagem, Vídeo ou Screenshot)</label>
                        <input type="file" class="form-control" id="preview" name="preview" accept="image/*,video/*" required>
                        <small class="form-text text-muted">Máximo 50MB. Formatos: JPG, PNG, MP4, WebM</small>
                    </div>
                    
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary btn-lg">Enviar Preview</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

@endsection

@section('extra-js')
<script>
    document.querySelectorAll('[data-filter]').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Atualizar botão ativo
            document.querySelectorAll('[data-filter]').forEach(btn => btn.classList.remove('btn-primary'));
            this.classList.add('btn-primary');
            
            // Filtrar projetos
            document.querySelectorAll('[data-category]').forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.add('fade-in-up'), 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Ativar primeiro botão
    document.querySelector('[data-filter="all"]').click();
</script>
@endsection
