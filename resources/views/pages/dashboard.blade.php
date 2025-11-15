@extends('layouts.app')

@section('title', 'Dashboard - JP Digital Solutions')

@section('content')

<div class="container-fluid" style="background: linear-gradient(180deg, #2D1B69 0%, #1A3A52 100%); min-height: calc(100vh - 200px); padding: 2rem 0;">
    <div class="container">
        <!-- Header -->
        <div class="row mb-4">
            <div class="col-md-8">
                <h1 class="text-white mb-2">Bem-vindo, {{ Auth::user()->name }}!</h1>
                <p class="text-muted">Gerencie seus projetos e configurações</p>
            </div>
            <div class="col-md-4 text-md-end">
                <a href="{{ route('portfolio') }}" class="btn btn-primary">+ Novo Projeto</a>
            </div>
        </div>
        
        <!-- Estatísticas -->
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="card" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(124, 58, 237, 0.2);">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="text-muted mb-1">Projetos</p>
                                <h3 class="text-white mb-0">{{ Auth::user()->projects_count ?? 0 }}</h3>
                            </div>
                            <i class="bi bi-folder-fill" style="font-size: 2.5rem; color: #7C3AED;"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="card" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(124, 58, 237, 0.2);">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="text-muted mb-1">Visualizações</p>
                                <h3 class="text-white mb-0">{{ Auth::user()->views_count ?? 0 }}</h3>
                            </div>
                            <i class="bi bi-eye-fill" style="font-size: 2.5rem; color: #3B82F6;"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="card" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(124, 58, 237, 0.2);">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="text-muted mb-1">Curtidas</p>
                                <h3 class="text-white mb-0">{{ Auth::user()->likes_count ?? 0 }}</h3>
                            </div>
                            <i class="bi bi-heart-fill" style="font-size: 2.5rem; color: #EF4444;"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="card" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(124, 58, 237, 0.2);">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="text-muted mb-1">Membro desde</p>
                                <h5 class="text-white mb-0">{{ Auth::user()->created_at->format('M Y') }}</h5>
                            </div>
                            <i class="bi bi-calendar-fill" style="font-size: 2.5rem; color: #10B981;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Meus Projetos -->
        <div class="row">
            <div class="col-12">
                <h2 class="text-white mb-3">Meus Projetos</h2>
                
                @if(isset($projects) && count($projects) > 0)
                    <div class="table-responsive">
                        <table class="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Nome do Projeto</th>
                                    <th>Descrição</th>
                                    <th>Data de Criação</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($projects as $project)
                                    <tr>
                                        <td class="text-white">{{ $project->name }}</td>
                                        <td class="text-muted">{{ Str::limit($project->description, 50) }}</td>
                                        <td class="text-muted">{{ $project->created_at->format('d/m/Y') }}</td>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-primary">Ver</a>
                                            <a href="#" class="btn btn-sm btn-secondary">Editar</a>
                                            <a href="#" class="btn btn-sm btn-danger">Deletar</a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                @else
                    <div class="alert alert-info" role="alert">
                        <i class="bi bi-info-circle"></i> Você ainda não tem projetos. 
                        <a href="{{ route('portfolio') }}" class="alert-link">Adicione um novo projeto</a>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>

@endsection
