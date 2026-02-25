VS Code extension: Debug uv [project.scripts] without launch.json

I built a small VS Code extension that lets you debug uv entry points directly from `pyproject.toml`.

If you have:
```
[project.scripts]
mytool = "mypackage.cli:main"
```

You can:
* Pick the script
* Pass args
* Launch debugger
* No launch.json required

Works in multi-root workspaces.
Uses .venv automatically.
Remembers last run per project.
Has a small eye toggle to hide uninitialized uv projects.

Repo:
[https://github.com/kkibria/uv-debug-scripts](https://github.com/kkibria/uv-debug-scripts)

Feedback welcome.