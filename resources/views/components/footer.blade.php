<footer class="py-5 mt-5">
    <div class="container">
        <div class="row mb-4">
            <!-- Sobre -->
            <div class="col-md-3 mb-4">
                <h5>JP Digital Solutions</h5>
                <p class="small">Automação, IA e desenvolvimento web de alta qualidade desde 2023.</p>
            </div>
            
            <!-- Links Úteis -->
            <div class="col-md-3 mb-4">
                <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><a href="{{ route('home') }}">Home</a></li>
                    <li><a href="{{ route('portfolio') }}">Portfólio</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
            
            <!-- Serviços -->
            <div class="col-md-3 mb-4">
                <h5>Serviços</h5>
                <ul class="list-unstyled">
                    <li><a href="#">Automação</a></li>
                    <li><a href="#">IA & Vídeos</a></li>
                    <li><a href="#">Desenvolvimento Web</a></li>
                    <li><a href="#">Integrações</a></li>
                </ul>
            </div>
            
            <!-- Redes Sociais -->
            <div class="col-md-3 mb-4">
                <h5>Conecte-se</h5>
                <div class="social-links">
                    <a href="https://github.com/jonatapontesdev" target="_blank" title="GitHub">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" title="LinkedIn">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" title="Twitter">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" title="Instagram">
                        <i class="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <hr class="border-secondary">
        
        <!-- Copyright -->
        <div class="row">
            <div class="col-md-6">
                <p class="small mb-0">&copy; 2023-{{ date('Y') }} JP Digital Solutions. Todos os direitos reservados.</p>
            </div>
            <div class="col-md-6 text-md-end">
                <p class="small mb-0">
                    <a href="#" class="text-decoration-none">Política de Privacidade</a> | 
                    <a href="#" class="text-decoration-none">Termos de Serviço</a>
                </p>
            </div>
        </div>
    </div>
</footer>
