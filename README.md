# BossWright monorepo-import fixture

A pnpm workspace with two packages. It tests whether BossWright finds the
RUNNABLE app rather than the repository root:

- the root has no app and no dev server of its own;
- `apps/web` is the entry point and must be detected as such;
- `apps/web` imports `@fixture/ui` via `workspace:*`, so a preview only renders
  if the workspace link was resolved — copying `apps/web` alone would fail.

An import that reports the repository root as the app, or that drops
`packages/ui`, has not understood the layout.
