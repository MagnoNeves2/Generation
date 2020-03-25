# Manual de sobrevivência GIT

## Criar um repositório local

Para criar um repositório local do GIT você deverá acessar a pasta desejada a ser transoformada em repositório utilizando o GIT Bash e digitar a linha de comando:

```
git init
```

Por padrão automaticamente será criada o **branch** denominado de **master**.

Observação: ao realizar esse comando o será criado uma pasta oculta com o nome ".git", essa pasta indica a existência de um repositório git.

Importante: O fato der criar repositório não indica que os dados serão enviado para núvem no GitHub ou BitBucker.


## Associar (sincronizar) o repositório local a um repositório remoto

Para associar um repositorio local do GIT com um repositório remoto você deverá digitar a linha de comando abaixo:

```
git remote  add origin https://github.com/formigp/participantes.git
```

Importante: Você precisar do endereço do repositório remoto.

## Como saber o endereço do repositório remoto ao qual está associado meu repositório local

Para saber o endereço do repositório remoto ao qual seu repositório local está associado, você deverá digitar a linha de comando abaixo:

```
git remote -v
```

## Como adicionar um arquivo em específico ao repositório

Primeiro você deverá adicionar o arquivo em específico ao repositório local, você deve digitar a linha de comando abaixo:

```
git add <nome do arquivo incluindo sua extensão>
```

Importante: o comando acima apenas irá sinalizar que o arquivo foi marcado para ser enviado ao repositório.

Para confirmar o envio (comitar) do arquivo(s) marcados para o repositório você deverá digitar a linha de comando abaixo:

```
git commit <nome do arquivo incluindo sua extensão> -m "mensagem de referência/comentário/descritivo/etc."
```

Para atualizar o repositório remoto você deverá digitar o comando abaixo:

```
git push -u origin <nome do branch>
``` 

## Como atualizar os arquivos modificados no repositório gerando uma nova versão do arquivo no repositório remoto

Para confirmar o envio (comitar) do arquivo(s) modificados para o repositório você deverá digitar a linha de comando abaixo:

```
git commit -a -m "mensagem de referência/comentário/descritivo/etc."
```

E para atualizar o repositório remoto você deverá digitar o comando abaixo:

```
git push origin <nome da branch>
``` 

## Como abortar/desfazer um commit ou inclusão de arquivo antes de realizar seu envio para o repositório remoto (antes do commando push)

Em alguns casos faze-se necessário abortar o commit ou marcação de arquivos para inclusão no repositório, caso ainda não tenha realizado o seu envio para o repositório remoto, então você poderá utilizar o commando abaixo:

```
git commit --amend
```

## Como exibir as diferenças de "comite" entre meu repositório local e o repositório remoto

Para exibir as diferenças no conteúdo dos arquivos modificados no repositório local e o repositório remoto vocÊ deverá digitar o comando abaixo:

```
git diff
```

Importante: para retornar ao prompt de comando, pressione a tecla **q**.

## Como saber quais são os novos arquivos e arquivos modificados no repositório local que não foram atualizados/enviados para o repositório remoto

Para saber quais os arquivos que precisam ser adicionados ao repositório remoto, assim como os arquivos que foram modificados mas ainda não foram submetidos ao repositório remoto, digite o comando abaixo:

```
git status
```

## Como criar um nova **branch** (ramificação)

Para criar uma nova branch digite o comando abaixo:

```
git branch <nome da branch>
```

Importante: a branch será criada apenas localmente.

Se quiser enviá-la para o repositório remoto você deverá utilizar o comando:

```
git push origin <nome da branch>
```

## Como trocar de  **branch** (ramificação)

Para trocar de branch digite o comando abaixo:

```
git checkout <nome da branch> 
```

## Como apagar um **branch**

Para apagar um branch local,  utilize o comando abaixo:

```
git  branch -D <nome da branch>
```

Para  apagar o branch no repositório remoto, utilize:

```
git push origin  <nome da branch> --delete
```


## Visualizar o historico do repositório

Para visualziar o histórico do repositório digite o comando abaixo:

```
git log --oneline
```

## Realizar o merge (fusão) de **branchs** (ramificações)

Importante: antes de realizar o merge, certifique-se que os branchs estão atualizados em nosso repositório local, para isso utilize o comando abaixo:

```
git pull origin <nome da branch>
```

Para realizar o merge, selecione o branch que deverá ser atualizado com o branch desejado, utilizando o comando abaixo:

```
git checkout <nome da branch>
```

Informe o nome da branch que contém a versão a ser incorporada (mergeada) com o brach desejado, utilizando o comando abaixo:

```
git merge <nome da branch>
```

Para confirmar que o merge seja aplicado (reflita) no repositório remoto, você deverá digitar o comando abaixo:

```
git push origin <nome da branch>
```

## Realizar o clone de um repositório

Ao realizar o clone ele irá apenas criar uma cópia do repositório, ele não ficará vinculado ao repositório remoto.

```
git clone <endereço do  repositório>
```

Para vincular o clone ao repositório remoto você deverá utilizar o comando abaixo:

```
git fetch <endereço do repositório>
```