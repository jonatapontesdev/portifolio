@extends('layouts.app')

@section('title', 'Login - JP Digital Solutions')

@section('content')

<div class="min-vh-100 d-flex align-items-center" style="background: linear-gradient(135deg, #2D1B69 0%, #1A3A52 100%);">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(124, 58, 237, 0.2);">
                    <div class="card-body p-5">
                        <h2 class="text-center mb-4 text-white">Login</h2>
                        
                        @if ($errors->any())
                            <div class="alert alert-danger" role="alert">
                                <strong>Erro!</strong>
                                @foreach ($errors->all() as $error)
                                    <div>{{ $error }}</div>
                                @endforeach
                            </div>
                        @endif
                        
                        <form action="{{ route('login') }}" method="POST">
                            @csrf
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control @error('email') is-invalid @enderror" 
                                       id="email" name="email" value="{{ old('email') }}" required autofocus>
                                @error('email')
                                    <span class="invalid-feedback">{{ $message }}</span>
                                @enderror
                            </div>
                            
                            <div class="mb-3">
                                <label for="password" class="form-label">Senha</label>
                                <input type="password" class="form-control @error('password') is-invalid @enderror" 
                                       id="password" name="password" required>
                                @error('password')
                                    <span class="invalid-feedback">{{ $message }}</span>
                                @enderror
                            </div>
                            
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="remember" name="remember">
                                <label class="form-check-label" for="remember">
                                    Lembrar-me
                                </label>
                            </div>
                            
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary btn-lg">Entrar</button>
                            </div>
                        </form>
                        
                        <hr class="border-secondary my-4">
                        
                        <div class="text-center">
                            <p class="mb-2">Não tem uma conta? <a href="{{ route('register') }}" class="text-decoration-none" style="color: #7C3AED;">Cadastre-se</a></p>
                            <p><a href="{{ route('password.request') }}" class="text-decoration-none" style="color: #3B82F6;">Esqueceu sua senha?</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
