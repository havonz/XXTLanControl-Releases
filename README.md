# XXTLanControl-Releases

`XXTLanControl-Releases` 是 **XXTLanControl** 的公开发布仓库。  
本仓库仅用于发布各版本安装包、Docker 镜像归档与更新说明，不包含完整源码开发历史。

## 下载地址

- Release 列表：`https://github.com/havonz/XXTLanControl-Releases/releases`
- 每个版本都包含多平台产物，请按系统和架构选择下载。

## 版本命名规则

- 版本号格式：`vYYYYMMDDHHMM`（例如：`v202602080606`）
- 常见发布文件：
`XXTLanControl-macos-v*.zip`
`XXTLanControl-windows-v*.zip`
`XXTLanControl-Example-Win-v*.zip`
`XXTLanControl-linux-v*.zip`
`XXTLanControl-docker-*-linux-amd64.tar`
`XXTLanControl-docker-*-linux-arm64.tar`

## 安装与部署（按平台）

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

## Docker（离线 tar 包）

1. 下载与机器架构匹配的 tar 包（`amd64` 或 `arm64`）。  
2. 导入镜像：
   `docker load -i XXTLanControl-docker-<buildtime>-linux-<arch>.tar`
3. 运行容器：
   `docker run -d --name xxtlancontrol -p 46990:46990 -p 31500:31500/udp -v xxtlancontrol-data:/app/data --restart unless-stopped xxtlancontrol:v<version>-<arch>`

## 升级说明

1. 先备份数据目录。  
2. 停止旧版本服务或容器。  
3. 下载并替换为新版本。  
4. 启动后确认 `http://<host>:46990` 可访问。

## 默认端口

- HTTP：`46990`
- 设备发现 UDP 监听：`31500/udp`

## 反馈与问题

- Issue：`https://github.com/havonz/XXTLanControl/issues`
