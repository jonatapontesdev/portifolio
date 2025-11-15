# Guia de Deployment - JP Digital Solutions

## Hospedagem em public_html (cPanel)

### Estrutura de Diretórios

O Laravel precisa ser configurado para funcionar com a restrição de `public_html`. A estrutura esperada é:

```
public_html/
├── public/              ← Apontado pelo servidor web
│   ├── index.php
│   ├── .htaccess
│   ├── css/
│   ├── js/
│   └── images/
├── app/
├── bootstrap/
├── config/
├── database/
├── resources/
├── routes/
├── storage/
├── vendor/
├── .env
├── artisan
└── composer.json
```

### Passos para Deploy

1. **Clonar o repositório em public_html**
   ```bash
   cd ~/public_html
   git clone https://github.com/jonatapontesdev/portifolio.git .
   ```

2. **Instalar dependências**
   ```bash
   composer install --no-dev --optimize-autoloader
   npm install
   npm run build
   ```

3. **Configurar permissões**
   ```bash
   chmod -R 755 storage bootstrap/cache
   chmod -R 777 storage bootstrap/cache
   ```

4. **Gerar chave de aplicação**
   ```bash
   php artisan key:generate
   ```

5. **Executar migrations (se necessário)**
   ```bash
   php artisan migrate --force
   ```

6. **Limpar cache**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

### Configuração do .env para Produção

```env
APP_NAME="JP Digital Solutions"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://seu-dominio.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=seu_banco_de_dados
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha

MAIL_MAILER=smtp
MAIL_HOST=seu_smtp_host
MAIL_PORT=587
MAIL_USERNAME=seu_email
MAIL_PASSWORD=sua_senha
MAIL_ENCRYPTION=tls
```

### Arquivo .htaccess (public_html)

Crie um arquivo `.htaccess` na raiz de `public_html`:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
```

### Arquivo .htaccess (public/)

Certifique-se de que existe um `.htaccess` em `public/`:

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

### Verificação Final

1. Acesse `https://seu-dominio.com` e verifique se a página inicial carrega
2. Teste as rotas: `/portfolio`, `/login`, `/register`
3. Verifique os logs em `storage/logs/laravel.log`
4. Teste o upload de arquivos

### Troubleshooting

**Erro 500 - Internal Server Error**
- Verifique permissões de `storage/` e `bootstrap/cache/`
- Verifique se o `.env` está configurado corretamente
- Verifique os logs em `storage/logs/laravel.log`

**Erro 404 - Not Found**
- Verifique se o `.htaccess` está no lugar correto
- Verifique se `mod_rewrite` está ativado no Apache
- Verifique se o `index.php` está em `public/`

**Erro de Banco de Dados**
- Verifique as credenciais do banco de dados no `.env`
- Verifique se o banco de dados foi criado
- Execute `php artisan migrate --force`

### Monitoramento

- Verifique logs regularmente: `tail -f storage/logs/laravel.log`
- Configure alertas para erros críticos
- Monitore o uso de disco e memória

---

**Versão:** 1.0  
**Data:** Novembro 2025
