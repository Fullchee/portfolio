### One liner to remove lines that match a pattern from a file

This example removes `[localhost]:56789` from `~/.ssh/known_hosts`

```
sed -i '' '/^\[localhost\]:56789/d' ~/.ssh/known_hosts
```

#### As an alias

```
alias rm-known-localhost="sed -i '' '/^\[localhost\]:56789/d' ~/.ssh/known_hosts"
```

A line in `~/.ssh/known_hosts` looks like

```
[localhost]:56789 name key
```