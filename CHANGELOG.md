# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-11-25

### Added
- **Infinite Canvas**: Multi-canvas workspace with node-based AI image creation, edge connections, grouping, undo/redo history, viewport culling for 500+ nodes, and adaptive dark/light themes.
- **Image Tools & Inpainting**: 15 built-in local Canvas image tools, brush/eraser mask inpainting, prompt reverse-engineering via multimodal models, and batch image groups.
- **Multi-Protocol Relay**: OpenAI-compatible and Gemini upstream relay via DSH Host (`/relay`), online model discovery, and multi-channel configuration.
- **Studio Bidirectional Workflow**: Dedicated image generation Studio with one-click send-to-canvas and canvas-to-studio editing.
- **Prompt Sources & Local Assets**: 7 built-in community prompt sources (`yukkcat/image-prompts`) with 60s timeout, GitHub Raw + jsDelivr mirror hedging, cover/reference image proxy, and local JSON asset import.
- **Storage & Backup**: IndexedDB persistence for canvases and media blobs, local config mirror (`~/.dsh/dsh-chunfeng-image/config.json`, `0600`), and ZIP backup/restore excluding plaintext API keys.
- **Security Hardening**: DSH auth protection on all Host routes and SSRF blocking for cloud metadata & link-local addresses on `/fetch` and `/fetch-media`.
