
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

# CI/CD Digital Ocean with SSH
[https://github.com/appleboy/scp-action](https://github.com/appleboy/scp-action)

[https://github.com/appleboy/ssh-action](https://github.com/appleboy/ssh-action)

# Javascript geral

### Função para fazer embed de script asyncronos
``` javascript
    //Cria o elemento script
    let scriptTeste = document.createElement('script');
    //Adicionar o endereço do script externo
    scriptTeste.setAttribute('src','https://code.jquery.com/jquery-3.5.1.min.js')
    //Adiciona o script no body, pode ser no head também, uando document.head...
    document.body.appendChild(scriptTeste);
    //Função que roda após o script ser adicionado na página
    rdScript.onload=()=>{
        console.log($.fn.jquery); //output 3.5.1
    }
```

# PWA
[https://itnext.io/pwa-splash-screen-and-icon-generator-a74ebb8a130](https://itnext.io/pwa-splash-screen-and-icon-generator-a74ebb8a130)
[https://web.dev/maskable-icon/](https://web.dev/maskable-icon/)
[https://maskable.app/editor](https://maskable.app/editor)