---
title: 'My Experience with MCP'
description: 'Recording my experience with MCP (Model Context Protocol) - this thing should be commercialized soon'
pubDate: 'Apr 24 2025'
heroImage: 'hero-h'
tags: ['AI', 'Programming']
---
记录一下自己根据这篇[博客](https://www.datacamp.com/tutorial/mcp-model-context-protocol?utm_source=chatgpt.com)试用MCP的心得吧

首先是不太懂MCP, 先是从Den的几篇[博客](https://den.dev/blog/local-mcp-server-authorization/)了解到这个概念, 后来深入了解才发现原来2024年Anthropic就发布了, 只是没有引起关注罢了......

现在爆火, 还是证明这个玩意是有很大潜力的, 所有昨天基本上花了一下午把这个搞明白, 之后可以更好的应用吧.

# 什么是MCP?

MCP(Model Context Protocol) 是一个通过专用服务器处理工具和资源调用的简单协议。

**Model Context Protocol（MCP）是由 Anthropic 推出的开放标准，旨在简化大型语言模型（LLM）与外部工具和数据源的集成方式。可以将 MCP 想象成 AI 应用的“USB-C 接口”：就像 USB-C 统一了设备之间的连接方式，MCP 也为 AI 模型提供了标准化的方式来访问各种数据和工具。**

The Model Context Protocol (MCP) is an open standard that enables large language models to interact dynamically with external tools, databases, and APIs through a standardized interface.模型上下文协议 (MCP) 是一种开放标准，它使大型语言模型能够通过标准化接口与外部工具、数据库和 API 动态交互。

The Model Context Protocol (MCP) is an open standard developed by Anthropic to enable easy and standardized integration between AI models and external tools. It acts as a universal connector, allowing large language models (LLMs) to interact dynamically with APIs, databases, and business applications.

模型上下文协议 (MCP) 是由 Anthropic 开发的一项开放标准，旨在实现 AI 模型与外部工具之间轻松且标准化的集成。它充当通用连接器，允许大型语言模型 (MCP) 与 API、数据库和业务应用动态交互。

Originally built to improve Claude’s ability to interact with external systems, Anthropic decided to [open-source MCP in early 2024](https://www.anthropic.com/news/model-context-protocol) to encourage industry-wide adoption. By making MCP publicly available,they aimed to create a standardized framework for AI-to-tool
communication, reducing reliance on proprietary integrations andenabling greater modularity and interoperability across AI applications.

Anthropic最初是为了提升 Claude 与外部系统交互的能力而构建的，后来决定在 2024 年初将 MCP 开源， 以推动整个行业的采用。通过公开 MCP，他们的目标是创建一个标准化的 AI 与工具通信框架，减少对专有集成的依赖，并提高 AI 应用之间的模块化和互操作性。

> *这里就可以把它理解为一个模块,用来给ai提供具体的上下文.*

## 我的理解

这个玩意刚开始给我的感觉有点像 手机刷机以后的那种 **"模块"** , 但是自己上手体验之后才发现, 这个更多的像一个接口, 把AI通过这个协议接入其他第三方的平台, 有点万物互联的那味了.

标题的那篇文章使用的是Notion和Github的API, 来实现写入,读取等一系列操作, 让AI总结一下它的整个操作的原理吧:

## 构建 MCP 服务器的核心原理

在教程中，作者展示了如何构建一个 MCP 服务器，该服务器能够与 Claude Desktop 集成，实现以下功能：

1. **获取 PR 详情和变更文件** ：**通过 GitHub API，服务器能够获取指定 PR 的详细信息，包括变更的文件列表。**
2. **分析代码变更** ：**利用 Claude Desktop 应用，服务器可以分析代码的变更内容，生成审查摘要和建议。**
3. **保存审查结果到 Notion** ：**将生成的审查摘要和建议保存到 Notion，以便团队成员查看和跟踪。**
4. **整个流程通过 MCP 实现标准化的通信，使得服务器与 Claude Desktop 之间的交互更加模块化和可扩展。**

总的来说就是 先搭建环境(python), 然后制作相关脚本来实现(py), 最后设置调试就可以直接使用了.

Anthropic自己也有很多第三方的平台为他提供大量的MCP服务器, 可以访问这个[链接](https://github.com/modelcontextprotocol/servers)来查看.

**值得注意的一个点是: Claude的官方这个** **[关于开发者人员使用MCP服务器的文档](https://modelcontextprotocol.io/quickstart/server#windows) 里面有关于第一次配置文件所需要的代码格式.**

最后也是成功写入, PS Notion要创建集成并且创建页面才能正确写入

# 复盘一下

MCP之后的应用肯定会越来越广泛, 可能是AGI的一个发展方向, Cool.

各家AI公司争先恐后想要进军这个领域, 说明这块应该还是比较重要的.

然后自己现在是熟悉了 Vscode和Claude这两个部分的MCP使用的方法, 有些需要结合Dock进行使用, 然后部分还是可以直接通过本地直接安装的, 现在处于预发布阶段, 很多工具在使用的过程中都有点卡, 就像现在国内推出的那个coze空间也是一样, 就像deepseek刚出那会, 服务器繁忙请稍后再试哈哈哈.

总的来说, 这玩意还是有价值的, 就先记录这些吧, 以下是一些参考文档:

[Get started with the Model Context Protocol (MCP)]()

[Model Context Protocol (MCP): A Guide With Demo Project](https://www.datacamp.com/tutorial/mcp-model-context-protocol?utm_source=chatgpt.com)

[Secure Remote MCP Servers With Entra ID And Azure API Management](https://den.dev/blog/remote-mcp-server/)

[巨头的新战场：AI 编程 IDE（暨 字节 Trae 调用 MCP 教程）](https://www.ruanyifeng.com/blog/2025/04/trae-mcp.html)

[Model Context Protocol GITHUB page](https://github.com/modelcontextprotocol/servers) (里面有一些第三方服务器)

[Use MCP servers in VS Code (Preview)](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

完

编辑于

###### Wed Apr 23 17:31:13 CST 2025
