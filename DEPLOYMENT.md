# Guia de Deployment - JP Digital Solutions

## Hospedagem em Produção

### Pré-requisitos

- Node.js 18+
- MySQL 5.7+
- Servidor com suporte a Node.js (Vercel, Heroku, DigitalOcean, AWS, etc.)
- Domínio configurado

### Variáveis de Ambiente para Produção

```env
# Database
DATABASE_URL=mysql://usuario:senha@host:3306/jp_digital

# Application
NODE_ENV=production
VITE_APP_TITLE=JP Digital Solutions
VITE_APP_LOGO=https://seu-dominio.com/logo.svg

# OAuth
VITE_APP_ID=seu_app_id
VITE_OAUTH_PORTAL_URL=https://auth.manus.im
OAUTH_SERVER_URL=https://api.manus.im

# JWT
JWT_SECRET=seu_jwt_secret_aleatorio_e_seguro

# Owner Info
OWNER_NAME=Jonata Pontes
OWNER_OPEN_ID=seu_open_id
```

### Passos para Deploy

#### 1. **Preparar o Repositório**

```bash
# Clonar o repositório
git clone https://github.com/jonatapontesdev/portifolio.git
cd jp-digital-portfolio

# Instalar dependências
pnpm install

# Build dos assets
pnpm build
```

#### 2. **Configurar Banco de Dados**

```bash
# Executar migrations
pnpm db:push

# Verificar se as tabelas foram criadas
mysql -u usuario -p jp_digital -e "SHOW TABLES;"
```

#### 3. **Iniciar o Servidor**

```bash
# Modo produção
pnpm start

# Ou com PM2 para manter rodando
pm2 start "pnpm start" --name "jp-digital"
```

#### 4. **Configurar Reverse Proxy (Nginx)**

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 5. **Configurar SSL com Let's Encrypt**

```bash
# Instalar Certbot
sudo apt-get install certbot python3-certbot-nginx

# Gerar certificado
sudo certbot certonly --nginx -d seu-dominio.com

# Renovação automática
sudo systemctl enable certbot.timer
```

### Deploy em Plataformas Específicas

#### **Vercel**

1. Conectar repositório GitHub
2. Configurar variáveis de ambiente
3. Deploy automático ao fazer push

#### **Heroku**

```bash
# Instalar Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Login
heroku login

# Criar app
heroku create seu-app-name

# Configurar variáveis de ambiente
heroku config:set DATABASE_URL=mysql://...
heroku config:set VITE_APP_ID=...

# Deploy
git push heroku main
```

#### **DigitalOcean App Platform**

1. Conectar repositório GitHub
2. Configurar variáveis de ambiente
3. Configurar banco de dados MySQL
4. Deploy automático

### Monitoramento

#### **Logs**

```bash
# Ver logs em tempo real
pnpm logs

# Ou com PM2
pm2 logs jp-digital
```

#### **Uptime Monitoring**

Use serviços como:
- UptimeRobot
- Pingdom
- New Relic

#### **Performance Monitoring**

- Google Analytics
- Sentry (error tracking)
- New Relic (APM)

### Troubleshooting

**Erro: "Cannot find module"**
- Execute `pnpm install` novamente
- Limpe cache: `pnpm store prune`

**Erro: "Database connection failed"**
- Verifique `DATABASE_URL`
- Verifique se MySQL está rodando
- Verifique firewall/security groups

**Erro: "OAuth callback failed"**
- Verifique `VITE_APP_ID` e `OAUTH_SERVER_URL`
- Verifique se o domínio está registrado no OAuth provider

**Erro: "Port already in use"**
- Mude a porta: `PORT=3001 pnpm start`
- Ou mate o processo: `lsof -i :3000 | kill -9`

### Backup e Recuperação

#### **Backup do Banco de Dados**

```bash
# Backup completo
mysqldump -u usuario -p jp_digital > backup.sql

# Restaurar
mysql -u usuario -p jp_digital < backup.sql
```

#### **Backup de Arquivos**

```bash
# Backup com tar
tar -czf backup-$(date +%Y%m%d).tar.gz /home/app/jp-digital

# Restaurar
tar -xzf backup-20250101.tar.gz
```

### Segurança

- ✅ Usar HTTPS em produção
- ✅ Configurar CORS corretamente
- ✅ Usar variáveis de ambiente para secrets
- ✅ Manter dependências atualizadas
- ✅ Implementar rate limiting
- ✅ Usar firewalls e security groups
- ✅ Fazer backups regulares
- ✅ Monitorar logs de erro

### Performance

- ✅ Usar CDN para assets estáticos
- ✅ Implementar cache HTTP
- ✅ Minificar CSS/JS
- ✅ Otimizar imagens
- ✅ Usar gzip compression
- ✅ Implementar lazy loading
- ✅ Usar database indexes

---

**Versão:** 1.0  
**Data:** Novembro 2025
