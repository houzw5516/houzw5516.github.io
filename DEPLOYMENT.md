# 部署与维护

## 当前状态

已克隆 `https://github.com/houzw5516/houzw5516.github.io.git`，保留原有提交历史。
原始提交：`9ee971217d8af1990b1ee2e971491b7780bfefe5`。
修改前的完整 Git 备份位于 `.local-backup/original.bundle`，原 README 与 CNAME
也备份在该文件夹。备份、工具、缓存、生成目录均不会提交。

## 1. 启用 GitHub Pages

打开 https://github.com/houzw5516/houzw5516.github.io/settings/pages

在 **Build and deployment → Source** 选择 **GitHub Actions**。
在 **Custom domain** 输入 `xduaiic.me` 并保存。
使用 Actions 部署时，仅有 CNAME 文件不会自动设置仓库域名，必须设置此项。
根目录原 CNAME 保留，`static/CNAME` 会复制到构建产物根目录。

## 2. 提交并推送

在 PowerShell 中执行：

```powershell
Set-Location 'C:\Users\hzw\OneDrive\Desktop\xduaiic.me'
git status
git add .
git commit -m "Build academic homepage with Hugo Blox and GitHub Pages"
git push origin main
```

本地已配置 origin，无需重新初始化或添加 remote。若 Git 提示缺少身份，
请用自己的真实姓名和 GitHub 已验证邮箱配置此仓库的 `user.name`、`user.email`，
再重新执行 commit。push 要求登录有仓库写权限的 GitHub 账号；不要强制推送。

推送后查看仓库 **Actions → Build and deploy academic homepage**。
`build` 成功后 `deploy` 发布到 GitHub Pages；PR 只构建、不部署。
如首次运行提示 Pages 未启用，请完成上一步后在 Actions 重跑。

## 3. 配置域名 DNS

域名当前解析到 Cloudflare。若使用 Cloudflare，在其 DNS 页面核对下表。
已有正确记录无需重复添加；如记录错误，先保存原值再修改。

| 类型 | 名称 | 值 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | houzw5516.github.io |

初次配置建议使用 **DNS only（灰云）**，便于 GitHub 检查域名和签发证书。
只调整本网站有关的记录，不修改 MX/TXT 等邮箱或验证记录。
确保没有指向其他主机的冲突 A/AAAA 记录。

等待 GitHub Pages 显示 DNS 检查成功、证书可用后，启用 **Enforce HTTPS**。
DNS 传播与证书就绪可能需要最多 24 小时。

```powershell
Resolve-DnsName xduaiic.me -Type A
Resolve-DnsName www.xduaiic.me -Type CNAME
```

最后打开 https://xduaiic.me/ 并检查导航和手机访问。

参考：[GitHub 官方域名配置](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。

## 4. 更新内容与 CV

- 首页：`content/_index.md`
- About：`content/about/index.md`
- Research：`content/research/`
- Publications：`content/publications/`
- Projects：`content/projects/`
- CV：`content/cv/index.md`
- Contact：`content/contact/index.md`
- 导航与外观：`config/_default/`
- 样式：`assets/css/custom.css`

将真实简历保存为 `static/uploads/CV_Hou_Zhiwei.pdf`，提交推送后 CV 页面自动显示
下载链接。未上传时显示待提供说明，不产生失效下载链接。
论文目前明确标为模板；确认发表信息后更新首页、论文列表和详情的对应条目。
首页和列表摘要为手工维护的 Markdown，更新详情时请同步摘要。

## 5. 本地预览

推荐 Hugo Extended 0.162.0、Go 1.26.1、Node.js 22、pnpm 10.14.0。
本次已将 Hugo 和 Go 下载到项目内 `.tools/`；不需要系统级安装。
将 Hugo、Go、Node 加入当前终端 PATH 后执行：

```powershell
pnpm install --frozen-lockfile
pnpm run dev
```

打开 http://localhost:1313/ 。构建使用 `pnpm run build`。
不要修改缓存中的主题源码，覆盖模板放在 `layouts/`。
当前锁文件固定依赖，主题来源和定制说明见 `THEME.md`。

## 6. 恢复备份

在另一个新目录克隆 bundle 即可取回修改前的仓库，不会覆盖当前项目：

```powershell
git clone .local-backup/original.bundle restored-original
```

备份不会推送到 GitHub，可另行复制保存。
