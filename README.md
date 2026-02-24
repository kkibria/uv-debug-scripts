# UV Debug Scripts

Zero-friction debugging for `uv` entry points in VS Code.

If your `pyproject.toml` contains:

```toml
[project.scripts]
mytool = "my_pkg.cli:main"
```

This extension lets you:

* Click → pick script → debug
* One-click re-run last script
* No `launch.json`
* No “active file?” prompts
* No manual debug configuration

---

## Why This Exists

When working with `uv` projects, debugging a script usually requires:

* Creating a debug configuration
* Selecting the interpreter
* Manually mapping entry points
* Repeating the ritual every time

This extension removes that ceremony.

It reads `pyproject.toml`, resolves your entry point, and launches a debug session automatically using your project’s `.venv`.

---

## Features

### 🔹 Pick and Debug

Command: **UV: Debug Script**

* Parses `[project.scripts]` and `[project.gui-scripts]`
* Lets you choose one
* Prompts for optional arguments
* Starts a Python debug session

---

### 🔹 One-Click Debug Last Script

Status bar button:

```
uv: <last-script>
```

Click to immediately re-run your last debug session.

If previous args were empty → runs instantly.
If args were provided → lets you edit them.

---

### 🔹 Smart Interpreter Detection

Automatically prefers:

```
.venv/bin/python      (macOS/Linux)
.venv/Scripts/python.exe  (Windows)
```

Falls back to VS Code Python extension if needed.

---

### 🔹 Auto Refresh

Changes to `pyproject.toml` are detected automatically.
New or removed scripts appear without restarting VS Code.

---

## Requirements

* A workspace containing `pyproject.toml`
* Python extension (`ms-python.python`)
* A `.venv` created by `uv`

---

## Installation (VSIX)

```bash
code --install-extension uv-debug-scripts-<version>.vsix
```

---

## Philosophy

This extension is intentionally minimal.

It exists to eliminate debugging friction — not to introduce new configuration surfaces.

If something feels repetitive, it should be automated.
If something feels noisy, it should be removed.

---

## Roadmap

* Optional CodeLens support
* Multi-root workspace support
* Improved argument parsing
* Environment parity with `uv run`

---

## License

MIT

