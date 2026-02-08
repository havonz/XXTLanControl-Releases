# XXTLanControl-Releases

`XXTLanControl-Releases` 是 **XXTLanControl** 的公开发布仓库。  
本仓库用于发布各版本安装包、Docker 镜像归档与部署说明，不包含完整源码。

## 发布地址

- 各平台发布版本列表：[https://github.com/havonz/XXTLanControl-Releases/releases](https://github.com/havonz/XXTLanControl-Releases/releases)

## 版本与文件命名

- 版本号格式：`vYYYYMMDDHHMM`（例如：`v202602080606`）
- 常见发布文件：
`XXTLanControl-macos-v*.zip`
`XXTLanControl-windows-v*.zip`
`XXTLanControl-Example-Win-v*.zip`
`XXTLanControl-linux-v*.zip`
`XXTLanControl-docker-*-linux-amd64.tar`
`XXTLanControl-docker-*-linux-arm64.tar`

## 安装与部署（桌面/服务器）

## macOS

1. 下载 `XXTLanControl-macos-v*.zip` 并解压。  
2. 打开 `XXTLanControl.app`。  
3. 首次运行后访问 `http://127.0.0.1:46990`。

## Windows

1. 下载 `XXTLanControl-windows-v*.zip` 并解压。  
2. 运行 `XXTLanControl-tray-windows-amd64.exe` 或 `start-backend.cmd`。  
3. 访问 `http://127.0.0.1:46990`。  
4. 示例脚本请下载 `XXTLanControl-Example-Win-v*.zip`。

## Linux

1. 下载 `XXTLanControl-linux-v*.zip` 并解压。  
2. 运行：
   `chmod +x start-backend.sh`
   `./start-backend.sh`
3. 访问 `http://<服务器IP>:46990`。

## Docker 部署

## 1) 直接拉取镜像（推荐）

当前同时发布到 Docker Hub 与 GHCR，均提供多架构清单（`amd64` / `arm64`）。

- Docker Hub：`havonz/xxtlancontrol`
- GHCR：`ghcr.io/havonz/xxtlancontrol`

可用标签：

- `latest`
- `vYYYYMMDDHHMM`（例如 `v202602080606`）

命令示例（Docker Hub）：

```bash
docker pull havonz/xxtlancontrol:latest
docker run -d \
  --name xxtlancontrol \
  -p 46990:46990 \
  -p 31500:31500/udp \
  -v xxtlancontrol-data:/app/data \
  --restart unless-stopped \
  havonz/xxtlancontrol:latest
```

命令示例（GHCR）：

```bash
docker pull ghcr.io/havonz/xxtlancontrol:latest
docker run -d \
  --name xxtlancontrol \
  -p 46990:46990 \
  -p 31500:31500/udp \
  -v xxtlancontrol-data:/app/data \
  --restart unless-stopped \
  ghcr.io/havonz/xxtlancontrol:latest
```

## 2) 使用 docker-compose

本仓库根目录提供 [docker-compose.yml](docker-compose.yml)，可直接使用：

```bash
docker compose up -d
```

默认镜像：`ghcr.io/havonz/xxtlancontrol:latest`。  
如需切换镜像与标签：

```bash
IMAGE=havonz/xxtlancontrol TAG=v202602080606 docker compose up -d
```

## 3) 离线部署（tar 包）

1. 下载与机器架构匹配的 tar 包（`amd64` 或 `arm64`）。  
2. 导入镜像：
   `docker load -i XXTLanControl-docker-<buildtime>-linux-<arch>.tar`
3. 运行容器（按 `docker load` 输出的镜像标签运行即可）。

## 升级说明

1. 先备份数据目录（容器默认挂载到 `/app/data`）。  
2. 停止旧版本服务或容器。  
3. 拉取新镜像或下载新安装包。  
4. 重新启动并确认 `http://<host>:46990` 可访问。

## 默认端口

- HTTP：`46990/tcp`
- 设备发现 UDP 监听：`31500/udp`

## 反馈与问题

- Issue：[https://github.com/havonz/XXTLanControl-Releases/issues](https://github.com/havonz/XXTLanControl-Releases/issues)