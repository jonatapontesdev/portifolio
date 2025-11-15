@extends('layouts.app')

@section('title', 'Perfil - JP Digital Solutions')

@section('content')

<div class="container-fluid" style="background: linear-gradient(180deg, #2D1B69 0%, #1A3A52 100%); min-height: calc(100vh - 200px); padding: 2rem 0;">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <!-- Header -->
                <h1 class="text-white mb-4">Meu Perfil</h1>
                
                <!-- Card de Perfil -->
                <div class="card mb-4" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(124, 58, 237, 0.2);">
                    <div class="card-body p-4">
                        <div class="row mb-4">
                            <div class="col-md-3 text-center">
                                <div class="mb-3">
                                    <i class="bi bi-person-circle" style="font-size: 5rem; color: #7C3AED;"></i>
                                </div>
                                <button class="btn btn-primary btn-sm">Alterar Avatar</button>
                            </div>
                            
                            <div class="col-md-9">
                                <h3 class="text-white mb-1">{{ Auth::user()->name }}</h3>
                                <p class="text-muted mb-3">{{ Auth::user()->email }}</p>
                                <p class="text-muted small">Membro desde {{ Auth::user()->created_at->format('d \\d\\e M \\d\\e Y') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Formulário de Edição -->
                <div class="card" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(124, 58, 237, 0.2);">
                    <div class="card-header" style="background: rgba(124, 58, 237, 0.1); border-bottom: 1px solid rgba(124, 58, 237, 0.2);">
                        <h5 class="text-white mb-0">Editar Informações</h5>
                    </div>
                    
                    <div class="card-body p-4">
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Nome Completo</label>
                                <input type="text" class="form-control" id="name" value="{{ Auth::user()->name }}" disabled>
                            </div>
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" value="{{ Auth::user()->email }}" disabled>
                            </div>
                            
                            <div class="mb-3">
                                <label for="bio" class="form-label">Bio</label>
                                <textarea class="form-control" id="bio" rows="3" placeholder="Conte um pouco sobre você..."></textarea>
                            </div>
                            
                            <div class="mb-3">
                                <label for="website" class="form-label">Website</label>
                                <input type="url" class="form-control" id="website" placeholder="https://seu-website.com">
                            </div>
                            
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Salvar Alterações</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <!-- Segurança -->
                <div class="card mt-4" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(124, 58, 237, 0.2);">
                    <div class="card-header" style="background: rgba(124, 58, 237, 0.1); border-bottom: 1px solid rgba(124, 58, 237, 0.2);">
                        <h5 class="text-white mb-0">Segurança</h5>
                    </div>
                    
                    <div class="card-body p-4">
                        <div class="mb-3">
                            <h6 class="text-white">Alterar Senha</h6>
                            <p class="text-muted small mb-3">Mantenha sua conta segura com uma senha forte</p>
                            <button class="btn btn-secondary">Alterar Senha</button>
                        </div>
                        
                        <hr class="border-secondary">
                        
                        <div class="mb-3">
                            <h6 class="text-white">Autenticação em Dois Fatores</h6>
                            <p class="text-muted small mb-3">Adicione uma camada extra de segurança à sua conta</p>
                            <button class="btn btn-secondary">Ativar 2FA</button>
                        </div>
                        
                        <hr class="border-secondary">
                        
                        <div>
                            <h6 class="text-white">Sessões Ativas</h6>
                            <p class="text-muted small mb-3">Gerencie suas sessões em diferentes dispositivos</p>
                            <button class="btn btn-danger btn-sm">Desconectar de Todos os Dispositivos</button>
                        </div>
                    </div>
                </div>
                
                <!-- Zona de Perigo -->
                <div class="card mt-4" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(239, 68, 68, 0.2);">
                    <div class="card-header" style="background: rgba(239, 68, 68, 0.1); border-bottom: 1px solid rgba(239, 68, 68, 0.2);">
                        <h5 class="text-danger mb-0">Zona de Perigo</h5>
                    </div>
                    
                    <div class="card-body p-4">
                        <h6 class="text-white">Deletar Conta</h6>
                        <p class="text-muted small mb-3">Esta ação é irreversível. Todos os seus dados serão deletados permanentemente.</p>
                        <button class="btn btn-danger">Deletar Minha Conta</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
