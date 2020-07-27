
# Anotações

  

### Angular

_Como criar um novo app dentro de um diretório existente:_

```

ng new appName --directory ./

```

### Editor de markdown

[https://stackedit.io/app#](https://stackedit.io/app#)

  

# Migrar repositórios com commits

#### Clone the repo from GitLab using the `--mirror` option. This is like
#### `--bare` but also copies all refs as-is. Useful for a full backup/move.
```git clone --mirror git@your-gitlab-site.com:username/repo.git```
#### Change into newly created repo directory
```cd repo```
#### Push to GitHub using the `--mirror` option. The `--no-verify` option skips any hooks.
```git push --no-verify --mirror git@github.com:username/repo.git```
#### Set push URL to the mirror location
```git remote set-url --push origin git@github.com:username/repo.git```
#### To periodically update the repo on GitHub with what you have in GitLab
``` git fetch -p origin ```
```git push --no-verify --mirror```