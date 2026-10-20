# One-time deploy setup

Same scheme as Knoll: GitHub Actions → Docker Hub → watchtower on the server.

## 1. GitHub secrets

Repository → Settings → Secrets and variables → Actions → New repository secret:

| Name | Value |
|---|---|
| `DOCKER_HUB_USERNAME` | `gregzhadko` |
| `DOCKER_HUB_ACCESS_TOKEN` | Docker Hub access token (Docker Hub → Account settings → Personal access tokens, Read & Write) — the same kind as in `pigowl-clue` |

Then re-run the last workflow (Actions → main → Re-run) or push any commit.
After it is green, the image `gregzhadko/zhadko-site:latest` exists on Docker Hub.

## 2. Server: start the container

```bash
sudo mkdir -p /var/lib/docker/compose/zhadko-site
cd /var/lib/docker/compose/zhadko-site
sudo curl -fsSLO https://raw.githubusercontent.com/gregzhadko/zhadko.com/main/deploy/docker-compose.yml
sudo docker compose up -d
curl -sI http://127.0.0.1:8090/ | head -1      # expect: HTTP/1.1 200 OK
```

## 3. Server: host nginx

Find the server block that serves zhadko.com (the one with `/starcraft/`):

```bash
grep -rl "zhadko.com" /etc/nginx/sites-enabled/ /etc/nginx/conf.d/
```

Add the `location /` block from [`deploy/nginx-host.conf`](deploy/nginx-host.conf) into the
`listen 443 ssl` server block. If there is already a `location /` there (for example a default
`return 404;` or `try_files`), replace it. `/starcraft/` and other locations stay as they are.

```bash
sudo nginx -t && sudo systemctl reload nginx
curl -sI https://zhadko.com/ | head -1          # 200
curl -sI https://zhadko.com/es/ | head -1       # 200
curl -s  https://zhadko.com/starcraft/api/statistics | head -c 100   # still works
```

## Troubleshooting

- **watchtower logs `client version 1.25 is too old`** (new Docker Engine with the old
  containrrr image): add to the `watchtower` service

  ```yaml
      environment:
        DOCKER_API_VERSION: "1.44"
  ```

  and run `docker compose up -d` again.
- **Changes are not visible**: `docker logs watchtower-site --tail 20`; manual update:
  `docker compose pull && docker compose up -d`.
