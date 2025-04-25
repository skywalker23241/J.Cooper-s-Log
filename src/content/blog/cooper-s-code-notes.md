---
title: 'Cooper的编程笔记'
description: '写代码记的一些笔记,放这吧.'
pubDate: 'Apr 18 2025'
heroImage: 'hero-a'
---
Project_code-notes

***2025.03.24 这是我的第一条笔记，github存储，come on!***

---

## 关于VScode 拉取Github仓库

### 方法：

* **打开 VS Code**
* **打开命令面板** （`Ctrl + Shift + P` 或 `Cmd + Shift + P` 在 macOS 上）
* **输入 `Git: Clone` 并选择该选项**
* **输入 GitHub 仓库的 URL** （可以在 GitHub 仓库页面点击 "Code" 按钮获取）
* **选择本地存储路径**
* **等待克隆完成后，选择“打开克隆的仓库”**
* **确保 Git 已安装** ：可以使用 `git --version` 检查 Git 是否已安装。
* 如果未安装，请前往 [Git 官方网站](https://git-scm.com/) 下载并安装。
* **配置 Git 账号** （首次使用时）：
  * git config --global user.name "Your Name"
    git config --global user.email "your-email@example.com"

### 参考文档：

* [Using Git source control in VS Code在 VS Code 中使用 Git 源代码管理](https://code.visualstudio.com/docs/sourcecontrol/overview)
* [Git学习
  ](https://git-scm.com/doc#top)

---

## 关于本地文件连接到服务器

### **关于FileZilla**

FileZilla 是一款**免费、开源**的  **FTP（File Transfer Protocol）客户端和服务器软件** ，用于在计算机和服务器之间传输文件。它支持多种协议，包括  **FTP、FTPS（FTP Secure）和 SFTP（SSH File Transfer Protocol）** ，适用于 Windows、macOS 和 Linux 等操作系统。

### **FileZilla 的主要功能**

1. **支持多种协议** ：FTP、FTPS、SFTP，确保数据传输的安全性。
2. **友好的用户界面** ：采用类似 Windows 资源管理器的双窗口模式（本地文件和远程服务器文件）。
3. **断点续传** ：支持大文件的续传功能，不用担心传输中断。
4. **多线程传输** ：可以同时上传/下载多个文件，提高效率。
5. **站点管理器** ：可以保存多个 FTP 服务器的登录信息，方便快速连接。
6. **拖拽支持** ：可以直接从本地文件夹拖拽文件到服务器窗口，实现快速上传/下载。
7. **代理支持** ：支持 HTTP/FTP/SOCKS 代理，适用于特殊网络环境。

### **FileZilla 的用途**

* **网站管理** ：开发者和站长可以用它上传/下载网站文件，管理服务器内容。
* **远程备份** ：通过 SFTP 安全地将重要文件备份到远程服务器。
* **文件共享** ：与团队成员共享大文件，尤其是在远程工作环境中。

### **FileZilla 下载**

* **官网** ：[FileZilla官网](https://filezilla-project.org)
* 可以选择 **FileZilla Client（客户端）** 或  **FileZilla Server（服务器）** ：
  * **客户端** ：用于连接 FTP 服务器进行文件传输。
  * **服务器** ：用于搭建自己的 FTP 服务器，让别人连接和传输文件。

## 关于Wiz-Progressbar代码

Html：

```html
<div class="fixed inset-x-0 top-0 z-50 h-0.5 transition-opacity duration-500 opacity-100">
    <span id="progress-bar" style="transform: translateX(-100%);" class="absolute top-0 h-0.5 w-full bg-primary-blue shadow-md shadow-primary-blue/30 transition-transform duration-150"></span>
  </div>
```

```css
html:not([data-lt-script-installed]):not(.__lt-dummy-1):not(.__lt-dummy-2):not(.__lt-dummy-3):not(.__lt-dummy-4):not(.__lt-dummy-5):not(.__lt-dummy-6):not(.__lt-dummy-wxyz1234) lt-message .lt-message-container__progressbar {
  width: 100% !important;
  height: 4px !important;
  background: #239aff !important;
  position: absolute !important;
  top: 0 !important;
  animation: lt-message-progress 20s linear forwards !important;
  transform-origin: 0% 50% !important;
}
```

---

## 关于选择网站域名挺有意思的一篇reddit帖子

* [原帖](https://www.reddit.com/r/SEO/comments/1jirc25/did_i_choose_a_bad_domain_name/)

---

## 关于网站切换为暗色主题

TRAE：

```css
:root {
          --bg-color: #ffffff;
          --text-color: #333333;
          --primary-color: #2196f3;
        }

        [data-theme="dark"] {
          --bg-color: #1a1a1a;
          --text-color: #e0e0e0;
          --primary-color: #1976d2;
        }
        .theme-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          padding: 10px 15px;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          z-index: 10000;
        }

        .theme-toggle:hover {
          opacity: 0.9;
        }
```

```javascript
const themeToggle = document.getElementById('themeToggle');
        const savedTheme = localStorage.getItem('theme') || 'light';

        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'dark' ? '切换亮色主题' : '切换暗色主题';

        themeToggle.addEventListener('click', () => {
          const currentTheme = document.documentElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
          themeToggle.textContent = newTheme === 'dark' ? '切换亮色主题' : '切换暗色主题';
        });
```

```html
 <button class="theme-toggle" id="themeToggle">切换暗色主题</button>
```

感觉做这个还要考虑移动设备的兼容。

在页面顶端时，按钮显示在作者栏的最右边，当文章慢慢往下划，出现回到顶部的图标后，按钮渐现出现在回到顶部图标的上方。

（未完待續......）

---

## 关于键盘上的Grave键

在键盘上，****grave** 键指的是位于数字键 1 左侧的键，通常标有 `或“~”符号。 在英文中，这个符号被称为“重音符号”（grave accent），常用于表示某些字母的重音，例如法语单词中的“è”。** **在编程中，这个键用于输入反引号`，在某些编程语言中具有特殊意义。**

---

## 关于EMMET快速编码

### **Emmet 速查表（Cheat Sheet）** 🚀

#### **📌 1. HTML 快速编码**

| 语法                              | 结果                                                |
| --------------------------------- | --------------------------------------------------- |
| `div`                           | `<div></div>`                                     |
| `p`                             | `<p></p>`                                         |
| `ul>li*3`                       | `<ul><li></li><li></li><li></li></ul>`            |
| `nav>ul>li*3`                   | `<nav><ul><li></li><li></li><li></li></ul></nav>` |
| `section#main`                  | `<section id="main"></section>`                   |
| `div.container`                 | `<div class="container"></div>`                   |
| `span.red.bold`                 | `<span class="red bold"></span>`                  |
| `a[href="https://example.com"]` | `<a href="https://example.com"></a>`              |
| `img[src="image.jpg"]`          | `<img src="image.jpg" alt="">`                    |

---

#### **📌 2. 关系符**

| 语法      | 结果                                               |
| --------- | -------------------------------------------------- |
| `div>p` | 子元素（`<div><p></p></div>`）                   |
| `div+p` | 兄弟元素（`<div></div><p></p>`）                 |
| `div^p` | 返回上一层，创建兄弟元素（`<div></div><p></p>`） |

---

#### **📌 3. 组合使用**

| 语法                                 | 结果                                      |
| ------------------------------------ | ----------------------------------------- |
| `header+main+footer`               | 三个兄弟元素                              |
| `div#container>header+main+footer` | 包裹在 `<div id="container">`内         |
| `ul>li.item*5`                     | `<ul><li class="item"></li>...5个</ul>` |
| `table>tr*3>td*2`                  | 生成 3 行 2 列的表格                      |

---

#### **📌 4. CSS 快速编码**

| 语法        | 结果                        |
| ----------- | --------------------------- |
| `m10`     | `margin: 10px;`           |
| `p10-20`  | `padding: 10px 20px;`     |
| `w100`    | `width: 100px;`           |
| `h50`     | `height: 50px;`           |
| `bg#f00`  | `background: #f00;`       |
| `bd1-s-d` | `border: 1px solid #000;` |

---

#### **📌 5. 其他快捷技巧**

| 语法                   | 作用                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `!`                  | 生成 HTML5 结构                                            |
| `{内容}`             | 直接填充文本，如 `p{Hello}`→`<p>Hello</p>`            |
| `ul>.item$*3`        | `class`后面自动编号，如 `.item1` `.item2` `.item3` |
| `[data-type="info"]` | 生成带属性的标签                                           |

---

💡 **Emmet 让 HTML/CSS 编写更高效，熟练掌握可以大幅提高开发速度！** 🎯

---

## 关于rust-stakeholder摸鱼代码

Basic usage (for entry-level imposters):基本用法（适用于入门级冒充者）：

```
rust-stakeholder
```

Advanced usage (for senior imposters):高级用法（适用于资深冒充者）：

```shell
# Impress the blockchain VC investors
rust-stakeholder --dev-type blockchain --jargon extreme --alerts

# Look busy during performance review season
rust-stakeholder --complexity extreme --team --duration 1800

# Convince everyone you're a 10x game developer
rust-stakeholder --dev-type game-development --framework "Custom Engine" --jargon high

# For the data science frauds
rust-stakeholder --dev-type data-science --jargon extreme --project "Neural-Quantum-Blockchain-AI"

# Emergency mode: Your project is due tomorrow and you haven't started
rust-stakeholder --dev-type fullstack --complexity extreme --alerts --team
```

---

## 关于Dunning-Kruger Effect

邓宁-克鲁格效应（Dunning-Kruger Effect）是一种 **认知偏差** ，指的是 **能力低下的人往往高估自己的能力，而能力较强的人反而容易低估自己** 。这一效应由心理学家大卫·邓宁（David Dunning）和贾斯廷·克鲁格（Justin Kruger）于1999年提出。

---

### **主要内容**

1. **无知者无畏**
   * 能力较低的人由于缺乏知识或技能，无法正确评估自己的水平，因此容易高估自己的能力。
   * 他们对自己的错误或不足认识不足，甚至可能觉得自己表现很好。
2. **真正的高手容易自我怀疑**
   * 有能力的人更了解复杂性，能够看到自己的局限，因此反而可能低估自己。
   * 他们可能认为，既然自己能做到，别人应该也可以，于是误以为自己的能力很普通。

---

### **邓宁-克鲁格曲线**

该效应通常以一条曲线表示：

* **初学者阶段（信心高）** ：刚接触一个领域时，人们可能会因为浅显的理解而产生过度自信（“愚昧之巅”）。
* **深入学习阶段（信心下降）** ：随着知识增加，人们开始意识到自己的不足，信心下降（“绝望之谷”）。
* **专家阶段（信心回升）** ：随着经验积累，信心逐渐稳步上升，但不会达到最初的盲目自信（“开悟坡”）。

---

### **日常例子**

* **新手程序员** ：刚学编程的人可能觉得自己已经掌握了一切，但实际工作时才发现问题很多。
* **新手司机** ：刚拿到驾照时可能觉得自己很会开车，直到真正上路遇到复杂情况才意识到不足。
* **职场新人** ：刚入职时信心满满，后来发现自己有很多需要学习的地方。

---

### **如何避免邓宁-克鲁格效应？**

1. **保持谦逊，持续学习** ：意识到知识的边界，承认自己的不足。
2. **接受反馈** ：主动听取他人意见，不要盲目自信。
3. **多与高手交流** ：向更有经验的人请教，了解自己的真实水平。
4. **练习批判性思维** ：不断反思，避免认知偏差。

---

邓宁-克鲁格效应提醒我们：**真正的智慧在于知道自己不知道什么。**

不要陷入自信之巅抑或是绝望之谷,可以动态调整自己的认知.

---

## 关于obsidian笔记软件

Obsidian 是一款基于 Markdown 的笔记和知识管理软件，其主要目标是帮助用户构建自己的“第二大脑”。它通过本地存储文本文件和强大的双向链接功能，让零散的笔记能够以网络化、非线性方式互相连接，从而构建出一个灵活且可持续扩展的知识体系。

---

### 一、软件简介

* **基于 Markdown** ：Obsidian 以纯文本的 Markdown 文件作为存储格式，这不仅保证了数据的可移植性，也使得笔记内容不受平台限制，可以随时用其他编辑器查看或编辑。
* **本地存储** ：所有笔记都存储在用户本地的“vault”（仓库）中，确保了数据隐私与安全，同时也支持离线工作。
* **双向链接和图谱视图** ：用户可以通过双向链接将笔记互相连接，并利用内置的图谱视图直观地展示知识间的关联。
* **丰富的插件生态** ：通过内置的插件市场，Obsidian 可以根据不同需求扩展出各种功能，如任务管理、日历视图、Kanban 看板等。
* **跨平台支持** ：该软件支持 Windows、macOS、Linux 以及移动端系统（Android 和 iOS），满足多设备办公需求。
* **免费模式** ：个人用户可以免费使用所有核心功能，额外的同步和发布服务为付费选项。

---

### 二、主要优点

1. **本地离线与数据安全**

   * 笔记以标准化的 Markdown 文件存储在本地，数据完全掌握在用户自己手中，且支持离线使用，不依赖网络环境。
2. **强大的双向链接与图谱功能**

   * 通过双向链接，用户可以轻松将相关笔记连接在一起，利用图谱视图直观了解知识网络的结构，这对于构建长期、复杂的知识库尤为重要。
3. **丰富的插件与高度可定制性**

   * Obsidian 拥有超过 500 个插件供用户自由挑选，能够根据个人习惯和需求进行界面、功能、快捷键等多方面定制，使得软件功能非常灵活。
4. **Markdown 编辑体验**

   * 支持原生 Markdown 语法，使得书写和编辑过程简洁高效，同时也方便与其他工具之间的内容交换。
5. **免费与付费模式分明**

   * 个人使用完全免费，适合那些不希望将笔记托管在云端的用户；而需要高级同步、发布等服务的用户可以选择付费服务，灵活满足不同需求。

---

### 三、主要缺点

1. **插件繁多导致上手难度增加**

   * 对于不愿意花时间“折腾”的用户来说，众多插件可能让人无从下手。初学者在配置和选择合适的插件时可能会遇到困扰。
2. **块引用功能不够完善**

   * 相较于 Roam Research 等大纲笔记工具，Obsidian 在块引用（对笔记中部分内容进行引用）方面存在一些不足，可能会影响对某些细粒度笔记需求的实现。
3. **协作和多设备同步的局限性**

   * 虽然 Obsidian 提供了同步服务，但其主要设计思路是以个人知识库为主，团队协作和细粒度权限控制方面不如一些专为协作设计的软件（例如 Notion 或 OneNote）。
4. **依赖 Markdown 语法**

   * 对于习惯所见即所得编辑器的用户，纯 Markdown 的编辑体验可能需要一定的适应期，且部分排版和格式化效果不如传统富文本编辑器直观。

---

### 四、总结与适用场景

Obsidian 非常适合那些追求深度知识管理和个人成长的用户，尤其是以下几类人群：

* **学术研究者与写作者** ：通过双向链接和图谱视图，可以将零散的思考、文献笔记和创意进行有效整合，形成系统性的知识体系。
* **技术人员与开发者** ：原生 Markdown 编辑体验和高度可定制的插件生态使其成为记录代码、文档和项目思路的得力工具。
* **个人知识管理爱好者** ：追求构建“第二大脑”、不断迭代个人知识库的用户可以利用其丰富的扩展功能，持续优化自己的思维流程。

不过，对于那些需要实时协作、直观富文本编辑或对界面要求极高的用户，可能需要评估其他工具，或者将 Obsidian 与其他软件联合使用，以弥补其不足。

---

### 五、发展与生态

自 2020 年发布以来，Obsidian 的用户社区迅速壮大，插件生态日益丰富。开发者和用户不断为其贡献新插件，增强了软件的多样性和功能性。此外，开发团队还不断更新软件版本，推出如 Canvas 插件等新功能，为用户带来更好的使用体验。

---

总体来说，Obsidian 以其本地存储、双向链接、丰富插件和高度定制性在笔记软件中独树一帜，是构建个人知识管理系统的理想选择，但其学习曲线和协作局限也需要用户根据自身需求权衡取舍。(gpt-o3-mini)

---

## 关于Github上传文件的大小数量限制

GitHub 对上传文件的大小和数量有明确的限制，以下是详细信息：

**文件大小限制：**

* **通过浏览器上传：** 单个文件不得超过 **25 MB**。
* **通过 Git 推送：** 单个文件不得超过 **100 MB**。 如果尝试推送超过此大小的文件，GitHub 会阻止该操作。
* **使用 Git Large File Storage (Git LFS)：** 对于超过 100 MB 的大文件，建议使用 **Git LFS**。 Git LFS 允许将大文件存储在 Git 仓库之外，并在仓库中保留文件的引用。

**提交差异限制：**

* **单次提交的文件数量：** 单次提交中可包含的最大文件数量为 5,000 个。
* **差异显示限制：** 在拉取请求中，总差异不得超过 20,000 行或 1 MB 的原始差异数据。 任何单个文件的差异不得超过 20,000 行或 500 KB 的原始差异数据。

**仓库存储建议：**

* **仓库总大小：** 建议仓库保持较小，理想情况下小于 1 GB，强烈建议小于 5 GB。 较小的仓库克隆速度更快，使用和维护更容易。

请注意，超过上述限制可能会影响仓库的性能和可用性。

---

## 关于使用Git LFS的一些小技巧代码

Git LFS（Large File Storage）是一个 Git 扩展，用于管理和存储大型文件，尤其是在 Git 仓库中。当你使用 Git 管理大型文件（如视频、音频文件、大型数据集等）时，Git 会变得非常缓慢且占用大量磁盘空间，Git LFS 通过将这些文件替换为指向外部存储的指针来解决这个问题。下面是一些常见的 Git LFS 使用步骤和代码总结。

### 1. 安装 Git LFS

首先，你需要安装 Git LFS。可以使用以下命令：

```bash
# 在 Mac 上
brew install git-lfs

# 在 Linux 上
sudo apt-get install git-lfs

# 在 Windows 上
choco install git-lfs
```

安装完成后，初始化 Git LFS：

```bash
git lfs install
```

### 2. 跟踪大文件

通过 `git lfs track` 命令来指定哪些类型的文件需要使用 Git LFS 来管理。你可以通过文件扩展名来指定，或者直接指定特定的文件路径。

例如，跟踪所有 `.psd` 文件：

```bash
git lfs track "*.psd"
```

跟踪指定文件：

```bash
git lfs track "assets/images/large_image.png"
```

这会在你的 Git 仓库根目录中创建一个 `.gitattributes` 文件，记录文件类型的跟踪信息。

### 3. 提交和推送文件

Git LFS 会把这些文件替换为指向文件存储的指针，而实际的文件会存储在外部 LFS 存储库中。你可以像平常一样使用 Git 提交和推送文件。

```bash
git add .gitattributes
git add <large_files>
git commit -m "Add large files tracked by Git LFS"
git push origin main
```

### 4. 拉取 LFS 文件

当你从 Git 仓库克隆或者拉取最新的代码时，Git LFS 会自动拉取实际的文件。你只需要使用标准的 Git 命令：

```bash
git pull
```

Git LFS 会自动处理 LFS 文件的下载。

### 5. 查看 LFS 文件状态

你可以使用 `git lfs ls-files` 来查看已经被 Git LFS 跟踪的文件。

```bash
git lfs ls-files
```

### 6. 删除 LFS 文件

如果你需要从 Git LFS 中删除文件，可以使用以下命令：

```bash
git lfs untrack "*.psd"
```

这会从 `.gitattributes` 文件中删除相关的 LFS 跟踪规则。

### 7. 删除 LFS 文件并清理存储

如果你想彻底删除 LFS 文件（例如，清理未使用的 LFS 文件），可以使用：

```bash
git lfs prune
```

### 小贴士

* Git LFS 文件的推送和拉取与普通 Git 操作一样，但文件会存储在 Git LFS 的专用服务器上，可能需要额外的存储费用。
* 注意 Git LFS 存储的文件大小限制，很多 Git 托管平台（如 GitHub、GitLab）都有每月的存储配额和带宽限制。

这些是使用 Git LFS 的一些基本步骤和常见命令。通过合理使用 Git LFS，可以有效地管理大型文件并保持 Git 仓库的性能。

---

## 关于一些网站隐藏自己的html文件名后缀

一些网站文章的 URL 会隐藏 `.html` 标签，主要是出于以下几个原因：

### 1. **美观与可读性**

* 一个 URL 结构清晰、简洁，能提升用户体验。例如：

  ```
  example.com/article/how-to-code
  ```

  比起：

  ```
  example.com/article/how-to-code.html
  ```

  更加直观、简洁。

### 2. **SEO 友好**

* 现代搜索引擎并不需要 `.html` 这种扩展名来理解网页内容，简洁的 URL 更易于索引和排名。
* URL 末尾的 `.html` 可能让用户误以为该网站是静态的，而搜索引擎通常更青睐结构清晰、可扩展的 URL 设计。

### 3. **技术实现上的灵活性**

* 通过隐藏 `.html`，网站可以在不改变 URL 的情况下切换技术，比如从静态 HTML 迁移到 PHP、Node.js、React 等。
* 例如：

  ```
  example.com/article/how-to-code
  ```

  可能最初是 `how-to-code.html`，但以后可以改为 `how-to-code.php` 或 `how-to-code/index.html`，不会影响外部链接。

### 4. **更容易进行 URL 重写和重定向**

* 服务器可以通过 **URL Rewrite（URL 重写）** 规则，将 `/article/how-to-code` 解析到 `how-to-code.html`，对用户透明。
* 这在 Apache（.htaccess）、Nginx、IIS 等服务器配置中很常见，例如：
  ```apache
  RewriteEngine On
  RewriteRule ^article/([a-zA-Z0-9-]+)$ article/$1.html [L]
  ```

### 5. **安全性考虑**

* 虽然隐藏 `.html` 本身不会直接提高安全性，但它可以减少暴露底层技术的机会，防止黑客利用已知漏洞攻击特定的文件类型（如 `.php` 或 `.aspx`）。

### 6. **移动端与 API 兼容**

* 如果 URL 没有 `.html`，同一个路径可以根据不同的请求类型（HTML 页面、JSON API 等）返回不同的内容。例如：

  ```
  example.com/article/how-to-code
  ```

  * Web 端请求 → 返回 HTML 页面
  * API 请求 → 返回 JSON 数据

### **总结**

隐藏 `.html` 主要是为了 **提升用户体验、SEO 友好性、灵活性和安全性** 。很多现代网站通过 **URL 重写技术** 来实现这一点，同时确保用户和搜索引擎可以正常访问内容。

---

## 关于奥弗顿之窗

奥弗顿之窗（Overton Window）是一个社会政治学的概念，它描述了公众能够接受的政治观点范围。简而言之，奥弗顿之窗就像是一个“视窗”，它展示了一个社会普遍能接受的思想、政策和观点的范围。

### 如何理解？

想象一下，这个“窗户”就像是一个框架，里面有一些思想和观念。如果某个观点在“窗户”内，那它就被视为社会可以接受的观点，通常是大多数人能理解和支持的。如果某个观点超出了“窗户”，它就被认为是过于极端或不合适的，社会对它的接受度很低。

### 这个概念如何运作？

奥弗顿之窗的范围并不是固定的，它会随着时间和社会的变化而发生改变。换句话说，某些曾经被认为极端或不可接受的观点，随着舆论的改变，可能会进入到“窗户”内，成为广泛接受的观点。

例如，几十年前，关于同性婚姻的观点在很多国家是被认为非常激进的，甚至是不可能的。然而，随着社会对性别平等和人权的关注增加，这个观点逐渐进入了公众的接受范围，很多国家也开始合法化同性婚姻。

### 如何影响政治和社会？

政治家、媒体和社会运动通常会通过推动某些思想或议题，试图扩大“窗户”的范围或将某些观点从“窗外”推到“窗内”。如果他们成功了，那些之前被视为极端或不可接受的观点就有可能成为主流观点，影响社会政策和法律。

### 总结

奥弗顿之窗是一个有趣的框架，它帮助我们理解为什么一些政治观点和社会议题在不同的时间段会变得流行或被接受，而有些则会被排除在外。它说明了思想和观念的变化不是一蹴而就的，而是通过公众讨论、媒体传播和政治行动逐渐推动的。

---

## 关于修正主义

就和这个名字一样,是基于某种主义的部分修正,有褒义也有贬义.

修正主义，简单来说，是指对某种原本的理论、政策或思想进行修改或调整的观点或行为。这些修改通常是为了适应新的情况或反映新的理解。它的核心是在坚持某种基本思想或理念的基础上，对其进行一定程度的调整或改进。

具体来说，修正主义有以下几个层面：

1. **理论上的修正** ：有时候，一些经典理论或思想在面对新的历史背景或实践经验时，会显得不再完全适用。这时，修正主义者可能会提出修改原有理论的主张，以使其更加符合现实。例如，马克思主义的某些学者就曾提出过对马克思主义理论的修正，以应对不同的社会环境和经济发展。
2. **政策上的修正** ：在政治领域，修正主义常常是指对原先的政治路线、政策或战略的改变。比如，在某些国家或政党内部，如果领导人认为过去的政策不再有效或已经失败，就可能会提出修正这些政策的主张，采取不同的方法和措施来解决问题。
3. **历史上的修正主义** ：有时，修正主义还指在历史研究中对过去历史事件的重新解释或修改。历史学者可能会通过新的考古发现、新的文献或新的理论框架来重新解读历史事件，提出不同的看法。这种重新解释有时会引发争议，因为它挑战了传统的历史观。

在政治上，修正主义有时也带有贬义，尤其是指那些原本主张激进变革的人，后来选择了更加温和、渐进的方式去实现目标。例如，在社会主义国家，曾经主张激烈革命的理论家，后来可能会提出通过渐进的改革来实现社会目标，这就被一些人批评为“修正主义”。

总的来说，修正主义并不一定是坏事，它有时意味着进步和对现实的适应，但也可能被用来掩盖那些改变原本理想或原则的动机。

---

## 关于为什么中国不是资本主义国家的解释(摘自reddit)

Cold War was a struggle between global capitalism/colonial states, and global communism/colonized states. Communism lost. China, whether it ideologically wanted to or not, did not have a feasible path forward into economic, technological, political development while maintaining a communist economy when the capitalist world just won the cold war so emphatically and made it politically impossible. I.e., they would do to China what they did to Cuba and North Korea, strangle them with never ending sanctions and political siege. China saw no choice but to say fine, you win this round, we'll transition to a market economy as a concession to the winning team because we don't really have a choice here. I can't stress that enough, whether they wanted to or not, THEY HAD TO. The USSR hadn't been dissolved by the time Deng started doing this, but the writing was on the wall at this point.

冷战是一场全球资本主义/殖民国家与全球共产主义/殖民地国家之间的斗争。共产主义失败了。无论中国是否在意识形态上愿意，当资本主义世界在冷战中获得如此明确的胜利，并使保持共产主义经济变得政治上不可能时，中国在经济、技术、政治发展方面没有可行的道路。也就是说，他们会像对待古巴和朝鲜一样对待中国，用永无止境的制裁和政治围攻来扼杀他们。中国别无选择，只能表示好吧，你们这一轮赢了，我们将过渡到市场经济，作为对胜利者的让步，因为我们真的没有选择。我必须强调这一点，无论他们是否愿意，他们不得不这样做。当邓小平开始这样做的时候，苏联还没有解体，但此时已经写在了墙上。

The reason they were uniquely able to go down this road is the 'chinese characteristics' part of their state project. China is an absolute sleeping giant with astronomical amounts of economic potential just waiting to be developed, which is something that podunk little countries like Cuba and North Korea do not have. Rather than slowly be strangled into submission by the global capitalist economy until they were couped in a sad color revolution, they said we will use the global economy, enmesh ourselves in it, build our productive capacity by working with it, and make a shitload of money turning ourselves into the world's factory until we're so rich and so powerful that WE get to call the shots. Which is the stage that we're arriving at now thanks to the accelerationist policies of Comrade Trump doing the hard work of destroying the US empire for them. THEN, once we've reached that stage, we'll start converting out of capitalism into socialism.

他们之所以能够走上这条路，是他们国家项目中的“中国特色”部分。中国绝对是一个沉睡的巨人，拥有天文数字般的经济潜力等待开发，这是古巴和朝鲜等小国所没有的。他们说，我们不会慢慢地被全球资本主义经济扼杀屈服，直到他们在一场悲惨的颜色革命中被推翻，而是说我们将利用全球经济，将自己融入其中，通过与它合作来建立我们的生产能力，并赚一大笔钱，把自己变成世界工厂，直到我们变得如此富有和强大，以至于我们可以发号施令。多亏了特朗普同志的加速主义政策，他们为他们做了摧毁美利坚帝国的艰苦工作，我们现在才走到这个阶段。然后，一旦我们到达那个阶段，我们就会开始从资本主义转变为社会主义。

The thing is, this is not revisionism. This is not a betrayal of Marxism. THIS IS ORTHODOX MARXISM. History unfolding in dialectical stages and all that. The USSR is a brutal historical lesson of why you can't just leapfrog one mode of production to the next, other people will try to stop you and you will be too weak to fight them off because they're one step on the dialectical ladder ahead of you. I.e. the West were wealthy capitalists and the Soviets were poor agrarian peasants building a modern economy out of Tsarist pre-capitalist conditions. On top of that, ***communists are supposed to be the ones SAVING people from the inevitable traumas of industrialization, not the ones doing the traumatizing because they have to catch up so fast.*** You PASS THROUGH capitalism to get to socialism, letting capitalism do the dirty work of industrialization, then use the productive capacity created by capitalism to transition to socialism by transferring control from the bourgeoisie to the proletariat. Via one means or another, and that's where all the different sects come in, demsoc, vanguard party ML, syndicalist, Anarchist, they all have different ideas of what 'socialization' means in practice. China is just going through this dialectical process fully self-consciously, with an ideologically communist political class overseeing a capitalist economy with the stated goal of managing it until the time comes to transition. This is the first stage of the communist project, the dictatorship of the proletariat.

这件事不是修正主义，这不是对马克思主义的背叛。这是正统马克思主义。历史在辩证阶段展开，诸如此类。苏联是一个残酷的历史教训，说明了为什么你不能直接跳过一种生产方式进入另一种，其他人会试图阻止你，而你因为比他们低一个辩证阶梯，所以太弱无法抵挡他们。也就是说，西方是富有的资本家，而苏联人是贫穷的农业劳动者，在沙皇前资本主义条件下建设现代经济。更重要的是，共产主义者应该是那些从工业化的必然创伤中拯救人们的人，而不是那些因为必须快速追赶而造成创伤的人。你通过资本主义过渡到社会主义，让资本主义完成工业化的脏活，然后利用资本主义创造的生产力，通过从资产阶级转移到无产阶级来过渡到社会主义。 通过一种方式或另一种方式，这就是所有不同派别出现的地方，民主社会主义、先锋队 ML、工团主义者、无政府主义者，他们对“社会化”在实践中的含义有不同的看法。中国正完全自觉地经历着这一辩证过程，一个意识形态上的共产主义政治阶级在监督资本主义经济，并明确目标是要管理它，直到过渡的时候。这是共产主义项目的第一阶段，即无产阶级专政。

---

## 关于颜色革命

“颜色革命”是指一类在后苏联地区及其他国家发生的，通过非暴力抗议和大规模示威推动政治变革的运动。这些革命通常伴随着某种特定的颜色作为象征，因而被称为“颜色革命”。它们的核心特点是通过民间力量对现有政权进行挑战，推动政治体制改革，甚至更换政府。颜色革命的典型特点包括和平抗议、大规模示威、社交媒体的广泛使用以及民主诉求。

### 主要特点：

1. **非暴力抗议** ：颜色革命通常是通过和平示威来推动政治变革，而不是暴力冲突。这些抗议活动往往强调通过民众行动表达对不公正政权或腐败政府的不满。
2. **颜色或符号象征** ：每一场颜色革命通常都有一个特定的颜色作为象征，这个颜色代表了运动的精神和目标。例如，乌克兰的“橙色革命”就以橙色为标志，格鲁吉亚的“玫瑰革命”则使用了玫瑰作为象征。
3. **民众广泛参与** ：这些革命通常依赖广泛的社会参与，尤其是年轻人和中产阶级。他们通过集会、示威、罢工等方式表达政治诉求。
4. **社交媒体的作用** ：随着互联网的普及，社交媒体成为组织和传播抗议活动的关键工具。信息的迅速传播使得革命能在短时间内获得广泛关注和支持。

### 著名的颜色革命：

1. **1990年代初期的东欧革命** ：在东欧一些国家，社会主义政权的崩溃促成了多次颜色革命。例如，捷克斯洛伐克的“天鹅绒革命”和波兰的“团结运动”，虽然这些革命的具体形式有所不同，但它们都通过非暴力方式推动了政权的更替。
2. **“玫瑰革命”（格鲁吉亚，2003年）** ：格鲁吉亚的总统选举被认为是存在严重舞弊，导致大规模的抗议活动爆发。抗议者的象征是玫瑰，最终成功迫使当时的总统谢瓦尔德纳泽辞职。
3. **“橙色革命”（乌克兰，2004年）** ：乌克兰的总统选举因选举舞弊而引发广泛抗议，抗议者的象征是橙色。经过数月的抗议，最终乌克兰最高法院宣布重新选举，推翻了腐败的政府。
4. **“茉莉花革命”（突尼斯，2010-2011年）** ：突尼斯爆发大规模抗议活动，最终迫使总统本·阿里下台。这场革命是阿拉伯之春的起点，推动了中东和北非地区一系列政权更替。

### 颜色革命的争议：

颜色革命的背后往往有外部势力的支持，尤其是西方国家或国际组织的支持。有人认为，这些运动背后是外国势力试图推动民主改革，甚至影响或改变目标国家的政治格局。这种外部支持使得颜色革命在一些国家和地区被看作是外部干预或“颜色革命”的阴谋，尤其是那些不愿接受西方民主价值观的政权。

### 总结：

颜色革命代表了一种政治运动，通过非暴力抗议和民众集会推动政治体制改革。它们通常以某种颜色作为象征，强调民主、自由和政府的问责。然而，由于它们的背后往往有外部支持，这些运动在一些国家被视为外部干预或政治斗争的一部分。

---

## 关于弗莱施-金凯德等级（Flesch-Kincaid Grade Level）

“ **弗莱施-金凯德等级（Flesch-Kincaid Grade Level）** ” 是一种用来衡量英文文本**阅读难度**的指标，常用于教育、内容审核、SEO等领域。它会给出一个数字，表示该文本适合哪个年级的学生阅读。

---

### ✅ 它是怎么工作的？

它主要依据两点来计算：

1. **句子平均长度** （越长越难）
2. **单词平均音节数** （越多音节，越难）

---

### ✅ 公式如下（Grade Level）：

```
0.39 ×（总词数 ÷ 总句子数）+ 11.8 ×（总音节数 ÷ 总词数）– 15.59
```

这个公式的结果是一个数字，比如：

* **5.0** = 适合小学五年级学生阅读（简单易懂）
* **8.0** = 初中二年级水平
* **12.0** = 高中毕业水平
* **16.0 以上** = 大学或研究生水平（较难）

---

### ✅ 举个例子：

#### 简单句子：

> The dog ran fast. It barked at the cat.

👉 等级可能是  **2.0** （小学二年级）

#### 难一些的句子：

> The effectiveness of this method lies in its ability to streamline redundant processes through automation.

👉 等级可能是  **12.0+** （高中/大学）

---

### ✅ 用途场景：

* **SEO / 内容审核** ：建议页面文字适配更广泛用户，通常建议  **Grade Level 在 8 以下** 。
* **教育内容** ：匹配特定年级。
* **政府/医疗/公共信息** ：希望让普通人也容易理解。

---

## 关于Wall Garden和信息茧房

是从[这篇文章](https://den.dev/blog/be-a-property-owner-not-a-renter-on-the-internet/#recommended-reading)得到的wall garden的这个概念, 然后就自己联想到信息茧房, 感觉两者都是把用户困在自己创造的怪圈里面了.

然后查了一下这两个专业术语, 发现还是有一些细微的差异的.

Wall Garden 更像是一座围墙, 由平台创造并且试图"垄断".

信息茧房更像是 用户 + 算法 创造出来的.

根据chat的解释就是:

* **Walled garden** 通常指一个 **由平台主动建立的封闭生态系统** ，比如 Facebook、微信、抖音，你只能在里面看到平台允许的内容，不容易跳出去。
* **信息茧房** （Information cocoon）更多是 **用户行为和算法结果造成的封闭现象** 。比如你只看和自己观点一致的新闻、推荐系统只给你喜欢的东西。

两者有点包含关系, 感觉Wall Garden 是一个更大的"信息茧房".

---

## 关于Looker Studio

这个也是成功分享给我的, 粗看好像是把数据做成分析报告的一个工具;

后续问了Chat了解相关内容之后, 发现和Echats有点像, 都是做可视化数据的, 但是我还是觉得eChats做的更好点吧;

数据种类更丰富, 就是门槛比较高.

先把它放到我的google收藏夹吧.

---

编辑于

###### Thu Apr 17 23:30:21 CST 2025
